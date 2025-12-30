Sphinx Cow Powers CLI
=====================

The Sphinx Cow Powers CLI integrates cow easter eggs with Sphinx documentation generation.

Overview
--------

The CLI provides commands for:

- Generating Sphinx documentation with cow prompts
- Researching projects using cow easter eggs
- Activating cow super powers (3 levels)
- Automatic documentation generation

Commands
--------

Generate Sphinx Documentation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   cbrew sphinx <project_path> <project_name> [options]

**Options**:
- ``-t, --topics <topics...>`` - Documentation topics
- ``-l, --level <level>`` - Cow level (1-3, default: 3)

**Example**:
.. code-block:: bash

   cbrew sphinx /path/to/project "MyProject" -t "API" "examples" "guides" -l 3

This will:
1. Activate super cow powers (level 3)
2. Research using cow prompts
3. Generate comprehensive Sphinx documentation

Activate Cow Powers
~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   cbrew moo [--level 1-3]

**Levels**:
- **Level 1**: ``apt-get moo`` - Regular cow
- **Level 2**: ``apt-get moo moo`` - Enhanced cow
- **Level 3**: ``apt-get moo moo moo`` or ``aptitude moo -v`` - Super cow (m00h)

**Example**:
.. code-block:: bash

   cbrew moo --level 3

Cow Power Levels
----------------

Level 1: Regular Cow
~~~~~~~~~~~~~~~~~~~~

- **Command**: ``apt-get moo``
- **Documentation**: Basic
  - Overview
  - Quick start
  - Basic examples

Level 2: Enhanced Cow
~~~~~~~~~~~~~~~~~~~~~~~

- **Command**: ``apt-get moo moo``
- **Documentation**: Enhanced
  - API reference
  - Usage examples
  - Best practices

Level 3: Super Cow (m00h)
~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Command**: ``apt-get moo moo moo`` or ``aptitude moo -v``
- **Documentation**: Comprehensive
  - Complete API reference
  - Detailed examples
  - Advanced usage patterns
  - Integration guides
  - Best practices

Integration with Cursor Agent Core
-----------------------------------

The CLI uses Cursor Agent Core methods:

.. code-block:: python

   from cursor_agent_core import get_core
   
   core = get_core()
   
   # Research with cow prompts
   research = core.cow_prompt_research("Project", ["docs", "API"])
   
   # Generate Sphinx docs
   docs = core.generate_sphinx_docs("/path", "Project", ["API"])

Usage Examples
--------------

Basic Documentation Generation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   cbrew sphinx /root/Agent "Agent System" -t "architecture" "API"

This generates Sphinx documentation with:
- Super cow powers (level 3)
- Research from multiple sources
- Comprehensive documentation structure

Research Only
~~~~~~~~~~~~~

Use Python directly for research:

.. code-block:: python

   from cursor_agent_core import get_core
   
   core = get_core()
   research = core.cow_prompt_research("Project", ["docs"])

Activate Super Cow
~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   cbrew moo --level 3

Status
------

✅ **CLI**: Integrated in cbrew
✅ **Cow Powers**: 3 levels available
✅ **Sphinx Generation**: Automatic
✅ **Research**: Multi-source integration

---

**Command**: ``cbrew sphinx <path> <name> [options]``
**Cow Activation**: ``cbrew moo [--level 1-3]``
