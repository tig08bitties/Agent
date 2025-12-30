Cursor Agent Core - Complete Integration
=========================================

The Cursor Agent Core is the central orchestration system that integrates all components.

Core Capabilities
-----------------

Spoken Command System
~~~~~~~~~~~~~~~~~~~~~~

Chain multiple commands into single sudo-rs execution:

.. code-block:: python

   from cursor_agent_core import get_core
   
   core = get_core()
   
   # Execute commands in order
   result = core.speak_and_execute(
       "aptitude update",
       "aptitude install -y git make build-essential",
       "git --version",
       "make --version"
   )

**Features**:
- Commands execute in order as spoken
- Automatic privilege escalation (sudo-rs primary, sudo fallback)
- Error handling and reporting
- Returns execution results

Package Discovery
~~~~~~~~~~~~~~~~~

Search 20,000+ Gentoo packages across 3 overlays:

.. code-block:: python

   # Search all overlays
   results = core.search_package("rust")
   
   # Search specific overlay
   results = core.search_package("python", overlay="guru")
   
   # Get package information
   info = core.get_package_info("dev-vcs/git")

**Overlays Available**:
- **Portage** (Priority 0): 20,000+ official packages
- **GURU** (Priority 1): Community-contributed packages
- **KDE** (Priority 2): KDE-specific packages

Environment Management
~~~~~~~~~~~~~~~~~~~~~~~

Automatic development environment setup:

.. code-block:: python

   # Ensure environment is ready
   result = core.ensure_environment()
   
   # This automatically:
   # 1. Checks system state
   # 2. Bootstraps prerequisites
   # 3. Installs development stack

Documentation Generation
~~~~~~~~~~~~~~~~~~~~~~~~~

Generate Sphinx documentation with cow prompts:

.. code-block:: python

   # Research with cow prompts
   research = core.cow_prompt_research("Project", [
       "documentation",
       "API reference",
       "examples"
   ])
   
   # Generate Sphinx docs
   docs = core.generate_sphinx_docs(
       "/path/to/project",
       "Project Name",
       ["API", "examples", "guides"]
   )

**Cow Prompt Levels**:
- **Level 1**: Basic documentation
- **Level 2**: Enhanced documentation
- **Level 3**: Comprehensive documentation (Super Cow)

Tool Registry
-------------

5 Cursor-Agent Tools Registered:

1. ``cursor_agent_bootstrap``
2. ``cursor_agent_install_dev_stack``
3. ``cursor_agent_search_package``
4. ``cursor_agent_get_package_info``
5. ``cursor_agent_ensure_dev_environment``

All tools are available for automatic AI agent use.

Integration Status
------------------

✅ **Spoken Commands**: Operational
✅ **Cursor-Agent Tools**: 5 registered
✅ **Package Discovery**: 20,000+ packages
✅ **Sphinx API**: Documentation generation
✅ **Cow Super Powers**: Level 3 (Super Cow)
✅ **Repository Analysis**: Complete

All systems integrated within Cursor Agent Core.
