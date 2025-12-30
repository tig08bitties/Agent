Spoken Command System
=====================

The Spoken Command System allows chaining multiple commands into a single execution via sudo-rs.

Core Concept
------------

Commands are "spoken into creation" and executed in order:

.. code-block:: python

   from cursor_agent_core import get_core
   
   core = get_core()
   
   # Speak commands into creation
   result = core.speak_and_execute(
       "aptitude update",
       "aptitude install -y git make",
       "git --version"
   )

Execution Flow
--------------

1. **Commands Chained**: All commands collected in order
2. **Privilege Detection**: System detects which commands need sudo-rs
3. **Execution**: Each command executed via sudo-rs (or sudo fallback)
4. **Results**: Execution results returned in order

Privilege Escalation
--------------------

**Primary**: ``sudo-rs <command>`` (memory-safe Rust implementation)
**Fallback**: ``sudo <command>`` (if sudo-rs unavailable)

Commands that need privilege:
- ``aptitude update``
- ``aptitude install <package>``
- ``mount --bind <src> <target>``

Commands that don't need privilege:
- ``cargo install <package>``
- ``go install <package>``
- ``git clone <repo>``
- ``make <target>``

Usage Examples
--------------

Complete Environment Setup
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   core = get_core()
   
   result = core.speak_and_execute(
       "aptitude update",
       "aptitude install -y git make build-essential curl",
       "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y",
       "source $HOME/.cargo/env && rustup default stable",
       "git --version",
       "make --version",
       "rustc --version"
   )

Project Setup
~~~~~~~~~~~~~

.. code-block:: python

   result = core.speak_and_execute(
       "aptitude update",
       "aptitude install -y git make build-essential",
       "git clone https://github.com/user/repo.git",
       "cd repo && make install",
       "cargo install --path ."
   )

Integration with Cursor-Agent
------------------------------

The spoken command system is fully integrated:

.. code-block:: python

   # Via Cursor Agent Core
   core.speak_and_execute("cmd1", "cmd2", "cmd3")
   
   # Via Cursor-Agent Integration
   agent = core.get_cursor_agent()
   agent.speak_and_execute("cmd1", "cmd2", "cmd3")

Status
------

✅ **Operational**: Commands execute in order
✅ **Privilege Escalation**: sudo-rs/sudo working
✅ **Error Handling**: Comprehensive error reporting
✅ **Integration**: Complete with Cursor Agent Core
