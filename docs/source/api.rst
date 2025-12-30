API Reference
=============

This section contains the complete API reference for the Agent System.

Sphinx Cow Powers CLI
--------------------

CLI interface for Sphinx documentation generation with cow super powers.

**Commands**:
- ``cbrew sphinx <path> <name> [options]`` - Generate Sphinx documentation
- ``cbrew moo [--level 1-3]`` - Activate cow powers

**Example**:
.. code-block:: bash

   cbrew sphinx /root/Agent "Agent System" -t "architecture" "API" "integration"
   cbrew moo --level 3

**Cow Levels**:
- **Level 1**: Regular cow - Basic documentation
- **Level 2**: Enhanced cow - Enhanced documentation  
- **Level 3**: Super cow (m00h) - Comprehensive documentation

Cursor Agent Core
-----------------

Main orchestration system integrating all components.

.. code-block:: python

   from cursor_agent_core import get_core
   
   core = get_core()

Core Methods
~~~~~~~~~~~~

speak_and_execute(*commands)
   Chain multiple commands into single sudo-rs execution.
   
   **Parameters**:
   - ``*commands``: Variable number of command strings
   
   **Returns**: dict with execution results
   
   **Example**:
   .. code-block:: python
      
      result = core.speak_and_execute(
          "aptitude update",
          "aptitude install -y git"
      )

search_package(query, overlay=None)
   Search for packages in Gentoo portage tree.
   
   **Parameters**:
   - ``query``: Package name to search
   - ``overlay``: Optional overlay name (portage, guru, kde)
   
   **Returns**: dict with search results

get_package_info(package_spec, overlay=None)
   Get detailed package information.
   
   **Parameters**:
   - ``package_spec``: Package specification (category/package)
   - ``overlay``: Optional overlay name
   
   **Returns**: dict with package information

ensure_environment()
   Ensure development environment is ready.
   
   **Returns**: dict with setup results

cow_prompt_research(project_name, topics=None)
   Research using cow easter egg prompts.
   
   **Parameters**:
   - ``project_name``: Name of project
   - ``topics``: List of research topics
   
   **Returns**: dict with research data

generate_sphinx_docs(project_path, project_name, topics=None)
   Generate Sphinx documentation.
   
   **Parameters**:
   - ``project_path``: Path to project
   - ``project_name``: Name of project
   - ``topics``: List of documentation topics
   
   **Returns**: dict with documentation results

get_cursor_agent()
   Get cursor-agent integration instance.
   
   **Returns**: CursorAgentIntegration instance

Architecture
------------

Complete system architecture integrating:

- Covenant Agent System
- Cursor Agent Core
- Cow Super Powers
- Cursor-Agent Integration
- Spoken Commands
- Sphinx API
- Hyper Extensions

Covenant Agent System
---------------------

Sovereign AI agent with covenant principles:

- **Sovereign Agent**: Autonomous operation
- **Bypass Relays**: Rosetta Stone transformation
- **Portal Activation**: Covenant portal system
- **Refinement**: Covenant refinement system

Cursor Agent Integration
------------------------

Package management integration:

- **5 Engines**: aptitude, rustup, cargo, go, ebuild
- **3 Gentoo Overlays**: Portage, GURU, KDE
- **20,000+ Packages**: Accessible for discovery
- **Mount Management**: Shadow /usr/local tree

Cow Super Powers
----------------

Documentation and research system:

- **3 Levels**: Regular, Enhanced, Super Cow
- **Cow Level Portal**: Mystical gateway
- **Sphinx Generation**: Automatic documentation
- **Research Integration**: Multi-source knowledge

Hyper Extensions
----------------

Terminal integration extensions:

- **Sphinx Extension**: Documentation generation
- **GitHub Extension**: Replit bots & Cloudagents
- **Rosetta Stone Extension**: Bypass relay system
- **Hyperbrowser Extension**: Headless browser sessions
- **WaveTerm Features**: CLI integration

Repository Statistics
---------------------

- **44 Python files**: Core agent functionality
- **302 JavaScript files**: Hyper terminal extensions
- **120 Markdown files**: Comprehensive documentation
- **39 core modules**: In Halls of Amenti
