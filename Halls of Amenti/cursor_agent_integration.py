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

    def speak_and_execute(self, *commands):
        """
        Speak commands into creation and execute in order via sudo-rs
        
        This is the core capability: chain multiple commands into single execution
        """
        cmd_list = []
        for cmd in commands:
            if isinstance(cmd, str):
                cmd_list.append(cmd)
            elif isinstance(cmd, dict) and 'command' in cmd:
                cmd_list.append(cmd['command'])
        
        return self._run_command("spoken", *cmd_list)


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
