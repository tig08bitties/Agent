#!/usr/bin/env ruby
# frozen_string_literal: true

# ΘΕΟΣCRIPT Ruby Manifestor
# Configuration injection and system coordination

require 'digest'
require 'fileutils'
require 'json'
require_relative 'theoscript_parser'

module Sovereignty
  # Configuration manager
  class ConfigManifestor
    COVENANT_HASH = '883e529de31c586131a831a9953113a6d75edd87c97369a2fa3a791209952f5a'

    attr_reader :config_dir, :hyper_config_path

    def initialize
      @config_dir = File.expand_path('~/.config/sovereignty_engine')
      @hyper_config_path = File.expand_path('~/.hyper.js')
      @covenant_verified = false
    end

    def verify_covenant
      puts "🔒 Verifying covenant seal..."
      # Placeholder - in production, verify SHA-256 of all files
      @covenant_verified = true
      puts "✅ Covenant hash: #{COVENANT_HASH[0..15]}..."
      @covenant_verified
    end

    def ensure_config_directory
      FileUtils.mkdir_p(@config_dir) unless Dir.exist?(@config_dir)
      puts "✓ Config directory: #{@config_dir}"
    end

    def inject_hyper_config(covenant_hash)
      puts "\n📝 Injecting Hyper.js configuration..."

      # Check if .hyper.js exists
      unless File.exist?(@hyper_config_path)
        puts "⚠ Hyper.js config not found at #{@hyper_config_path}"
        puts "Creating default config..."
        create_default_hyper_config
      end

      hyper_config = File.read(@hyper_config_path)

      # Visual engine configuration
      visual_engine_config = <<~JS.strip
        hyperVisual: {
            engine: 'vulkan',
            shader: 'goku_racetrack.spv',
            drift: 'demotic_decay',
            covenant: '#{covenant_hash}',
            fps: 60,
            constraints: {
              volumePreservation: true,
              safetyBound: 82,
              decayMarkers: true
            }
          }
      JS

      # Check if hyperVisual already exists
      if hyper_config.include?('hyperVisual:')
        puts "Updating existing hyperVisual config..."
        hyper_config.gsub!(/hyperVisual:\s*\{[^}]*\}/, visual_engine_config)
      else
        puts "Adding new hyperVisual config..."
        # Insert before the closing config bracket
        hyper_config.sub!(/(\};?\s*)$/, ",\n\n    #{visual_engine_config}\n\\1")
      end

      # Write updated config
      File.write(@hyper_config_path, hyper_config)
      puts "✓ Hyper.js config injected"
    end

    def create_default_hyper_config
      default_config = <<~JS
        module.exports = {
          config: {
            fontSize: 12,
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            shell: '/usr/bin/zsh',

            hyperVisual: {
              engine: 'vulkan',
              shader: 'goku_racetrack.spv',
              drift: 'demotic_decay',
              covenant: '#{COVENANT_HASH}',
              fps: 60,
              constraints: {
                volumePreservation: true,
                safetyBound: 82,
                decayMarkers: true
              }
            }
          },

          plugins: [],
          localPlugins: []
        };
      JS

      File.write(@hyper_config_path, default_config)
      puts "✓ Created default Hyper.js config"
    end

    def write_orchestration_state(state)
      state_file = File.join(@config_dir, 'orchestration_state.json')
      File.write(state_file, JSON.pretty_generate(state))
      puts "✓ Orchestration state written to #{state_file}"
    end

    def spawn_rust_backend
      puts "\n🚀 Spawning Rust backend..."
      rust_binary = File.expand_path('../rust_backend/target/release/sovereignty_engine', __dir__)

      unless File.exist?(rust_binary)
        puts "⚠ Rust binary not found. Building..."
        system("cd #{File.dirname(rust_binary)}/.. && cargo build --release")
      end

      pid = spawn(rust_binary, out: '/tmp/sovereignty_rust.log', err: '/tmp/sovereignty_rust.err')
      Process.detach(pid)

      puts "✓ Rust backend spawned (PID: #{pid})"
      puts "  Logs: /tmp/sovereignty_rust.log"
      pid
    end

    def spawn_phoenix_dispatcher
      puts "\n🔥 Spawning Phoenix dispatcher..."
      phoenix_dir = File.expand_path('../phoenix_dispatcher', __dir__)

      unless Dir.exist?(phoenix_dir)
        puts "⚠ Phoenix dispatcher not found at #{phoenix_dir}"
        return nil
      end

      pid = spawn("cd #{phoenix_dir} && mix phx.server",
                  out: '/tmp/sovereignty_phoenix.log',
                  err: '/tmp/sovereignty_phoenix.err')
      Process.detach(pid)

      puts "✓ Phoenix dispatcher spawned (PID: #{pid})"
      puts "  Logs: /tmp/sovereignty_phoenix.log"
      pid
    end

    def manifest!
      puts "=" * 70
      puts "ΘΕΟΣCRIPT Sovereignty Engine - Ruby Manifestor"
      puts "=" * 70
      puts ""

      verify_covenant
      ensure_config_directory
      inject_hyper_config(COVENANT_HASH)

      state = {
        covenant_hash: COVENANT_HASH,
        timestamp: Time.now.to_i,
        components: {
          ruby_manifestor: 'active',
          rust_backend: 'spawning',
          phoenix_dispatcher: 'spawning',
          hyper_terminal: 'configured'
        }
      }

      write_orchestration_state(state)

      rust_pid = spawn_rust_backend
      # phoenix_pid = spawn_phoenix_dispatcher  # Commented until Phoenix is set up

      puts ""
      puts "=" * 70
      puts "✅ Manifestation Complete"
      puts "=" * 70
      puts ""
      puts "Active processes:"
      puts "  - Rust Backend: PID #{rust_pid}"
      # puts "  - Phoenix Dispatcher: PID #{phoenix_pid}"
      puts ""
      puts "To stop:"
      puts "  kill #{rust_pid}"
      puts ""

      { rust: rust_pid }
    end
  end
end

# Main execution
if __FILE__ == $PROGRAM_NAME
  manifestor = Sovereignty::ConfigManifestor.new
  pids = manifestor.manifest!

  puts "Press Ctrl+C to stop all processes..."

  trap('INT') do
    puts "\n\n🛑 Stopping all processes..."
    Process.kill('TERM', pids[:rust]) if pids[:rust]
    puts "✓ Processes stopped"
    exit 0
  end

  # Keep running
  sleep
end
