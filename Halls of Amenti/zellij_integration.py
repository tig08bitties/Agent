#!/usr/bin/env python3
"""
Zellij Integration for Chariot System
Provides glowing TUI dashboards with "above and below, within as without" layout
"""

import subprocess
import json
from pathlib import Path
from typing import Optional, Dict, List


class ZellijIntegration:
    """Zellij integration for Chariot with glowing TUI dashboards"""
    
    def __init__(self):
        self.zellij_path = Path("/usr/bin/zellij") or Path("/usr/local/bin/zellij")
        self.layout_path = Path(__file__).parent / "zellij_covenant_layout.kdl"
        self.enabled = self._check_zellij_available()
    
    def _check_zellij_available(self) -> bool:
        """Check if Zellij is installed"""
        try:
            result = subprocess.run(
                ["which", "zellij"],
                capture_output=True,
                text=True
            )
            if result.returncode == 0:
                self.zellij_path = Path(result.stdout.strip())
                return True
        except:
            pass
        return False
    
    def launch_chariot_dashboard(self) -> Dict:
        """
        Launch Chariot with Zellij glowing dashboard
        
        Returns:
            dict with launch status
        """
        if not self.enabled:
            return {
                "success": False,
                "error": "Zellij not installed. Install with: nala install zellij or cargo install zellij"
            }
        
        try:
            # Launch Zellij with covenant layout
            subprocess.Popen(
                [str(self.zellij_path), "--layout", str(self.layout_path)],
                cwd=str(self.layout_path.parent)
            )
            
            return {
                "success": True,
                "message": "Chariot dashboard launched in Zellij",
                "layout": str(self.layout_path),
                "zellij_path": str(self.zellij_path)
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e)
            }
    
    def create_build_dashboard(self, build_commands: List[str]) -> Dict:
        """
        Create a glowing build dashboard in Zellij
        
        Args:
            build_commands: List of build commands to run
            
        Returns:
            dict with dashboard status
        """
        if not self.enabled:
            return {
                "success": False,
                "error": "Zellij not available"
            }
        
        # Create temporary layout for build
        build_layout = self._create_build_layout(build_commands)
        
        try:
            subprocess.Popen(
                [str(self.zellij_path), "--layout", str(build_layout)],
                cwd=str(self.layout_path.parent)
            )
            
            return {
                "success": True,
                "message": "Build dashboard launched",
                "layout": str(build_layout)
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e)
            }
    
    def _create_build_layout(self, commands: List[str]) -> Path:
        """Create a temporary build layout file"""
        layout_content = f"""layout {{
    default_tab_template {{
        pane size=1 borderless=true {{
            plugin location="zellij:tab-bar"
        }}
        pane size=2 borderless=true {{
            plugin location="zellij:status-bar"
        }}
        children
        pane size=1 borderless=true {{
            plugin location="zellij:strider"
        }}
    }}
    
    tab name="Build" {{
        pane split_direction="horizontal" {{
"""
        
        for i, cmd in enumerate(commands):
            cmd_parts = cmd.split()
            layout_content += f"""            pane name="Build-{i+1}" {{
                command "{cmd_parts[0]}"
"""
            for arg in cmd_parts[1:]:
                layout_content += f'                args "{arg}"\n'
            layout_content += "            }\n"
        
        layout_content += """        }
    }
}
"""
        
        build_layout = self.layout_path.parent / "zellij_build_layout.kdl"
        build_layout.write_text(layout_content)
        return build_layout


def get_zellij_integration():
    """Get Zellij integration instance"""
    return ZellijIntegration()


if __name__ == "__main__":
    zellij = ZellijIntegration()
    
    if zellij.enabled:
        print("✅ Zellij available")
        print(f"   Path: {zellij.zellij_path}")
        print(f"   Layout: {zellij.layout_path}")
        
        # Launch Chariot dashboard
        result = zellij.launch_chariot_dashboard()
        print(f"\n🚀 Launch result: {result}")
    else:
        print("❌ Zellij not installed")
        print("   Install with: nala install zellij")
        print("   Or: cargo install zellij")
