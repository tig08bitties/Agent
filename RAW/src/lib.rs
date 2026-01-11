// ΘΕΟΣCRIPT Sovereignty Engine - Rust Backend
// GPU Execution + Invariant Monitoring

use nalgebra::{Matrix4, Vector4};
use std::time::{Duration, Instant};

/// Push constants for GPU shader
#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct TheoscriptPushConstants {
    pub time: f32,
    pub sigma: [[f32; 4]; 4],   // Σ matrix (4x4)
    pub phi: [[f32; 4]; 4],     // Φ matrix (4x4)
    pub alpha: f32,              // Α scalar
    pub decay_factor: f32,       // exp(-0.5*t) for ablative
}

impl TheoscriptPushConstants {
    pub fn new(t: f32, sigma: &Matrix4<f32>, phi: &Matrix4<f32>, alpha: f32) -> Self {
        Self {
            time: t,
            sigma: matrix_to_array(sigma),
            phi: matrix_to_array(phi),
            alpha,
            decay_factor: (-0.5 * t).exp(),
        }
    }

    pub fn as_bytes(&self) -> &[u8] {
        unsafe {
            std::slice::from_raw_parts(
                self as *const Self as *const u8,
                std::mem::size_of::<Self>(),
            )
        }
    }
}

fn matrix_to_array(mat: &Matrix4<f32>) -> [[f32; 4]; 4] {
    let mut arr = [[0.0; 4]; 4];
    for i in 0..4 {
        for j in 0..4 {
            arr[i][j] = mat[(i, j)];
        }
    }
    arr
}

/// Demotic drift element with ergative/ablative cases
#[derive(Debug, Clone)]
pub struct DemoticElement {
    pub position: Vector4<f32>,
    pub velocity: Vector4<f32>,
    pub decay_rate: f32,
    pub ablative: bool,  // -āt marker
}

impl DemoticElement {
    pub fn new(pos: Vector4<f32>, vel: Vector4<f32>, decay_rate: f32, ablative: bool) -> Self {
        Self {
            position: pos,
            velocity: vel,
            decay_rate,
            ablative,
        }
    }

    pub fn update(&mut self, dt: f32) {
        if self.ablative {
            // Ablative case (-āt): graceful separation with decay
            let decay = (-self.decay_rate * dt).exp();
            self.position *= decay;
            self.velocity *= decay;
        } else {
            // Ergative case (-e): normal drift
            self.position += self.velocity * dt;
        }
    }

    pub fn should_revoke(&self) -> bool {
        // Revoke when magnitude drops below threshold
        self.position.magnitude() < 0.01
    }
}

/// Safety violation types
#[derive(Debug)]
pub enum SafetyViolation {
    VolumeCollapse(f32),
    TraceBound(f32),
    ZoneViolation(String),
}

impl std::fmt::Display for SafetyViolation {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            SafetyViolation::VolumeCollapse(det) => {
                write!(f, "Volume violation: det(Γ) = {} (must be 1.0)", det)
            }
            SafetyViolation::TraceBound(trace) => {
                write!(f, "Safety violation: tr(Γ) = {} (must be ≤ 82)", trace)
            }
            SafetyViolation::ZoneViolation(msg) => {
                write!(f, "Zone violation: {}", msg)
            }
        }
    }
}

/// Invariant Monitor (checks constraints every frame)
pub struct InvariantMonitor {
    pub gamma: Matrix4<f32>,
    pub frame_count: u64,
    pub violations: Vec<SafetyViolation>,
}

impl InvariantMonitor {
    pub fn new() -> Self {
        Self {
            gamma: Matrix4::identity(),
            frame_count: 0,
            violations: Vec::new(),
        }
    }

    /// Check invariants: det(Γ) = 1, tr(Γ) ≤ 82
    pub fn check_invariants(&mut self, gamma: &Matrix4<f32>) -> Result<(), String> {
        self.gamma = *gamma;
        self.frame_count += 1;

        // Constraint 1: Volume preservation (det Γ = 1)
        let det = gamma.determinant();
        if (det - 1.0).abs() > 0.01 {
            let violation = SafetyViolation::VolumeCollapse(det);
            self.violations.push(violation);
            return Err(format!("Volume violation: det(Γ) = {}", det));
        }

        // Constraint 2: Safety bound (tr Γ ≤ 82)
        let trace = gamma.trace();
        if trace > 82.0 {
            let violation = SafetyViolation::TraceBound(trace);
            self.violations.push(violation);
            return Err(format!("Safety violation: tr(Γ) = {}", trace));
        }

        Ok(())
    }

    /// Apply correction (⊖ operator: rollback to baseline)
    pub fn apply_correction(&mut self, gamma: &mut Matrix4<f32>) {
        let baseline = Matrix4::identity();
        // Manual lerp: gamma = gamma * 0.9 + baseline * 0.1
        *gamma = gamma.scale(0.9) + baseline.scale(0.1);
        println!("⊖ Correction applied: rolled back 10% toward baseline");
    }

    pub fn get_stats(&self) -> String {
        format!(
            "Frame: {} | Violations: {} | det(Γ): {:.4} | tr(Γ): {:.4}",
            self.frame_count,
            self.violations.len(),
            self.gamma.determinant(),
            self.gamma.trace()
        )
    }
}

/// System state for orchestration
pub struct SystemState {
    pub t: f32,
    pub max_t: f32,
    pub sigma: Matrix4<f32>,
    pub phi: Matrix4<f32>,
    pub alpha: f32,
    pub gamma: Matrix4<f32>,
    pub demotic_elements: Vec<DemoticElement>,
    pub manual_stop: bool,
}

impl SystemState {
    pub fn new(max_t: f32) -> Self {
        Self {
            t: 0.0,
            max_t,
            sigma: Matrix4::identity(),
            phi: Matrix4::identity(),
            alpha: 1.0,
            gamma: Matrix4::identity(),
            demotic_elements: Vec::new(),
            manual_stop: false,
        }
    }

    /// Compute matrices based on current time
    pub fn compute_matrices(&mut self, t: f32) -> (Matrix4<f32>, Matrix4<f32>, f32) {
        // Example transformation (can be customized via ΘΕΟΣCRIPT)
        let rotation_angle = t * 0.1; // Slow rotation
        let cos_t = rotation_angle.cos();
        let sin_t = rotation_angle.sin();

        // Σ: Rotation matrix
        self.sigma = Matrix4::new(
            cos_t, -sin_t, 0.0, 0.0,
            sin_t, cos_t, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        );

        // Φ: Field modulation (subtle scaling)
        let scale = 1.0 + 0.1 * (t * 0.5).sin();
        self.phi = Matrix4::new_scaling(scale);

        // Α: Alpha modulation
        self.alpha = 0.5 + 0.5 * (t * 0.3).cos();

        (self.sigma, self.phi, self.alpha)
    }

    /// Compute Γ (Gamma) transformation matrix
    pub fn compute_gamma(&self, sigma: &Matrix4<f32>, phi: &Matrix4<f32>) -> Matrix4<f32> {
        sigma * phi
    }

    /// Apply power-up (⊕ operator)
    pub fn apply_power_up(&mut self) {
        self.alpha = (self.alpha * 1.1).min(2.0); // Max 2x amplification
        println!("⊕ Power-up applied: α = {:.4}", self.alpha);
    }

    /// Apply decay (⊖ operator)
    pub fn apply_decay(&mut self) {
        self.alpha = (self.alpha * 0.9).max(0.1); // Min 0.1x
        println!("⊖ Decay applied: α = {:.4}", self.alpha);
    }

    /// Update demotic elements
    pub fn update_demotic(&mut self, dt: f32) {
        self.demotic_elements.iter_mut().for_each(|elem| {
            elem.update(dt);
        });

        // Remove revoked elements
        self.demotic_elements.retain(|elem| !elem.should_revoke());
    }
}

/// Orchestration loop (60 FPS)
pub fn orchestration_loop(mut state: SystemState) {
    let dt = 0.016; // 60 FPS (16ms per frame)
    let mut monitor = InvariantMonitor::new();
    let start_time = Instant::now();

    println!("🚀 ΘΕΟΣCRIPT Orchestration Loop Started");
    println!("Target: 60 FPS (16ms/frame)");
    println!("Max time: {:.2}s", state.max_t);
    println!("{}", "=".repeat(60));

    loop {
        let frame_start = Instant::now();

        // Increment time
        state.t += dt;

        // Compute Σ/Φ/Α for current frame
        let (sigma, phi, _alpha) = state.compute_matrices(state.t);

        // Compute Γ
        let gamma = state.compute_gamma(&sigma, &phi);

        // Check invariants
        if let Err(e) = monitor.check_invariants(&gamma) {
            eprintln!("⚠ {}", e);
            monitor.apply_correction(&mut state.gamma);
        }

        // Update demotic drift elements
        state.update_demotic(dt);

        // Print status every 60 frames (1 second)
        if monitor.frame_count % 60 == 0 {
            println!("{}", monitor.get_stats());
        }

        // Check termination
        if state.t >= state.max_t || state.manual_stop {
            break;
        }

        // Sleep until next frame (maintain 60 FPS)
        let frame_duration = frame_start.elapsed();
        if frame_duration < Duration::from_millis(16) {
            std::thread::sleep(Duration::from_millis(16) - frame_duration);
        } else {
            eprintln!("⚠ Frame took {:.2}ms (target: 16ms)", frame_duration.as_secs_f32() * 1000.0);
        }
    }

    let total_time = start_time.elapsed();
    println!("{}", "=".repeat(60));
    println!("✅ Orchestration Complete");
    println!("Total frames: {}", monitor.frame_count);
    println!("Total time: {:.2}s", total_time.as_secs_f32());
    println!("Violations: {}", monitor.violations.len());
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_invariant_monitor() {
        let mut monitor = InvariantMonitor::new();
        let identity = Matrix4::identity();

        // Should pass (identity has det=1, tr=4)
        assert!(monitor.check_invariants(&identity).is_ok());
    }

    #[test]
    fn test_demotic_element() {
        let mut elem = DemoticElement::new(
            Vector4::new(1.0, 1.0, 1.0, 1.0),
            Vector4::new(0.1, 0.1, 0.1, 0.0),
            0.5,
            false,
        );

        elem.update(0.016);
        assert!(elem.position.magnitude() > 1.0);
    }

    #[test]
    fn test_ablative_decay() {
        let mut elem = DemoticElement::new(
            Vector4::new(1.0, 1.0, 1.0, 1.0),
            Vector4::new(0.1, 0.1, 0.1, 0.0),
            0.5,
            true, // ablative
        );

        let initial_mag = elem.position.magnitude();
        elem.update(0.016);
        assert!(elem.position.magnitude() < initial_mag);
    }
}
