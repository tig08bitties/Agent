#!/bin/bash
#
# Cursor-Agent Integration Script
# Integrates the cursor-agent package manager into the Agent system
#

set -e

CURSOR_AGENT_PATH="/root/cursor-agent"
AGENT_PATH="/root/Agent"

echo "🔧 Integrating Cursor-Agent into Agent System..."
echo "================================================"

# Step 1: Link cursor-agent to Agent system
echo "📦 Step 1: Linking cursor-agent..."

if [ ! -d "$CURSOR_AGENT_PATH" ]; then
    echo "❌ Cursor-agent not found at $CURSOR_AGENT_PATH"
    exit 1
fi

# Create symlink in Agent directory
ln -sf "$CURSOR_AGENT_PATH" "$AGENT_PATH/cursor-agent" 2>/dev/null || true
echo "✅ Linked cursor-agent to Agent system"

# Step 2: Install cursor-agent dependencies
echo "📦 Step 2: Installing cursor-agent dependencies..."
cd "$CURSOR_AGENT_PATH"
if [ -f "package.json" ]; then
    npm install
    echo "✅ Installed cursor-agent dependencies"
fi

# Step 3: Make cursor-agent globally available
echo "🔗 Step 3: Making cursor-agent globally available..."

# Create wrapper script
cat > /usr/local/bin/cbrew << 'EOF'
#!/bin/bash
cd /root/cursor-agent
node src/cli.js "$@"
EOF

chmod +x /usr/local/bin/cbrew
echo "✅ Created global 'cbrew' command"

# Step 4: Add cursor-agent to PATH in agent config
echo "⚙️  Step 4: Updating agent configuration..."

# Add to agent_config.json if it exists
if [ -f "$AGENT_PATH/Halls of Amenti/agent_config.json" ]; then
    # Backup original
    cp "$AGENT_PATH/Halls of Amenti/agent_config.json" \
       "$AGENT_PATH/Halls of Amenti/agent_config.json.bak"
    
    # Add cursor-agent path to config (using Python for JSON manipulation)
    python3 << 'PYTHON_EOF'
import json
import os

config_path = "/root/Agent/Halls of Amenti/agent_config.json"
with open(config_path, 'r') as f:
    config = json.load(f)

# Add cursor-agent integration
if "integration" not in config["agent"]:
    config["agent"]["integration"] = {}

config["agent"]["integration"]["cursor_agent"] = {
    "path": "/root/cursor-agent",
    "enabled": True,
    "commands": {
        "bootstrap": "cbrew bootstrap",
        "install": "cbrew install",
        "sync": "cbrew sync",
        "stack": "cbrew stack",
        "ebuild_search": "cbrew ebuild-search",
        "ebuild_info": "cbrew ebuild-info"
    }
}

with open(config_path, 'w') as f:
    json.dump(config, f, indent=2)

print("✅ Updated agent_config.json")
PYTHON_EOF
fi

# Step 5: Create Python integration module
echo "🐍 Step 5: Creating Python integration module..."

cat > "$AGENT_PATH/Halls of Amenti/cursor_agent_integration.py" << 'PYTHON_EOF'
"""
Cursor-Agent Integration Module
Provides Python interface to cursor-agent package manager
"""

import subprocess
import json
import os
from pathlib import Path

CURSOR_AGENT_PATH = Path("/root/cursor-agent")
CURSOR_AGENT_CLI = CURSOR_AGENT_PATH / "src" / "cli.js"


class CursorAgentIntegration:
    """Integration with cursor-agent package manager"""
    
    def __init__(self):
        self.agent_path = CURSOR_AGENT_PATH
        self.cli_path = CURSOR_AGENT_CLI
        
    def _run_command(self, command, *args):
        """Run a cursor-agent command"""
        cmd = ["node", str(self.cli_path), command] + list(args)
        try:
            result = subprocess.run(
                cmd,
                cwd=str(self.agent_path),
                capture_output=True,
                text=True,
                check=True
            )
            return {
                "success": True,
                "stdout": result.stdout,
                "stderr": result.stderr
            }
        except subprocess.CalledProcessError as e:
            return {
                "success": False,
                "stdout": e.stdout,
                "stderr": e.stderr,
                "error": str(e)
            }
    
    def bootstrap(self):
        """Bootstrap system prerequisites"""
        return self._run_command("bootstrap")
    
    def install_stack(self, stack_name):
        """Install a predefined stack"""
        return self._run_command("stack", stack_name)
    
    def sync(self):
        """Sync all tools from manifest"""
        return self._run_command("sync")
    
    def install_interactive(self):
        """Launch interactive installation"""
        return self._run_command("install")
    
    def check_system(self):
        """Check system state"""
        return self._run_command("check")
    
    def search_ebuild(self, query, overlay=None):
        """Search Gentoo ebuilds"""
        args = [query]
        if overlay:
            args.extend(["--overlay", overlay])
        return self._run_command("ebuild-search", *args)
    
    def ebuild_info(self, package_spec, overlay=None):
        """Get ebuild package information"""
        args = [package_spec]
        if overlay:
            args.extend(["--overlay", overlay])
        return self._run_command("ebuild-info", *args)
    
    def list_overlays(self):
        """List available Gentoo overlays"""
        return self._run_command("ebuild-overlays")
    
    def list_stacks(self):
        """List available stacks"""
        return self._run_command("stacks")
    
    def check_mounts(self):
        """Check mount point status"""
        return self._run_command("mounts")
    
    def ensure_dev_environment(self):
        """Ensure development environment is set up"""
        # Check system first
        check_result = self.check_system()
        if not check_result["success"]:
            return check_result
        
        # Bootstrap if needed
        bootstrap_result = self.bootstrap()
        if not bootstrap_result["success"]:
            return bootstrap_result
        
        # Install dev stack
        return self.install_stack("dev")


# Convenience function for agent use
def get_cursor_agent():
    """Get cursor-agent integration instance"""
    return CursorAgentIntegration()


# Tool functions for agent tools API
def tool_bootstrap_system():
    """Bootstrap system prerequisites"""
    agent = CursorAgentIntegration()
    return agent.bootstrap()


def tool_install_dev_stack():
    """Install development stack"""
    agent = CursorAgentIntegration()
    return agent.install_stack("dev")


def tool_search_package(query, overlay=None):
    """Search for packages in Gentoo portage"""
    agent = CursorAgentIntegration()
    return agent.search_ebuild(query, overlay)


def tool_get_package_info(package_spec, overlay=None):
    """Get information about a package"""
    agent = CursorAgentIntegration()
    return agent.ebuild_info(package_spec, overlay)


def tool_ensure_dev_environment():
    """Ensure development environment is ready"""
    agent = CursorAgentIntegration()
    return agent.ensure_dev_environment()
PYTHON_EOF

echo "✅ Created Python integration module"

# Step 6: Update bootstrap.sh to include cursor-agent
echo "📝 Step 6: Updating bootstrap.sh..."

if [ -f "$AGENT_PATH/bootstrap.sh" ]; then
    # Add cursor-agent installation to bootstrap
    if ! grep -q "cursor-agent" "$AGENT_PATH/bootstrap.sh"; then
        # Insert after Node.js installation
        sed -i '/# Install Cursor Agent CLI/a\
# Install Cursor Agent Package Manager\
echo "Installing Cursor Agent Package Manager..."\
if [ -d "/root/cursor-agent" ]; then\
    cd /root/cursor-agent\
    npm install\
    echo "✅ Cursor Agent installed"\
else\
    echo "⚠️  Cursor Agent not found at /root/cursor-agent"\
fi\
' "$AGENT_PATH/bootstrap.sh"
        echo "✅ Updated bootstrap.sh"
    fi
fi

# Step 7: Create agent tool registration
echo "🔧 Step 7: Registering cursor-agent tools..."

cat > "$AGENT_PATH/Halls of Amenti/cursor_agent_tools.json" << 'EOF'
{
  "tools": [
    {
      "name": "cursor_agent_bootstrap",
      "description": "Bootstrap system prerequisites (aptitude, git, make, etc.)",
      "function": "tool_bootstrap_system",
      "module": "cursor_agent_integration"
    },
    {
      "name": "cursor_agent_install_dev_stack",
      "description": "Install development stack (git, make, build-essential, rustup, go)",
      "function": "tool_install_dev_stack",
      "module": "cursor_agent_integration"
    },
    {
      "name": "cursor_agent_search_package",
      "description": "Search for packages in Gentoo portage tree and overlays",
      "function": "tool_search_package",
      "parameters": {
        "query": "string",
        "overlay": "string (optional)"
      },
      "module": "cursor_agent_integration"
    },
    {
      "name": "cursor_agent_get_package_info",
      "description": "Get detailed information about a Gentoo ebuild package",
      "function": "tool_get_package_info",
      "parameters": {
        "package_spec": "string (category/package)",
        "overlay": "string (optional)"
      },
      "module": "cursor_agent_integration"
    },
    {
      "name": "cursor_agent_ensure_dev_environment",
      "description": "Ensure development environment is set up and ready",
      "function": "tool_ensure_dev_environment",
      "module": "cursor_agent_integration"
    }
  ]
}
EOF

echo "✅ Created tool registration file"

echo ""
echo "✅ Integration Complete!"
echo "========================"
echo ""
echo "Cursor-Agent is now integrated into your Agent system."
echo ""
echo "Available commands:"
echo "  cbrew bootstrap              - Bootstrap system"
echo "  cbrew stack dev              - Install dev stack"
echo "  cbrew ebuild-search <query>  - Search Gentoo packages"
echo "  cbrew ebuild-info <pkg>     - Get package info"
echo ""
echo "Python integration available via:"
echo "  from cursor_agent_integration import get_cursor_agent"
echo "  agent = get_cursor_agent()"
echo "  agent.bootstrap()"
echo ""
