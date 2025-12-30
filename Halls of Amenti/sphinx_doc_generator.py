#!/usr/bin/env python3
"""
Sphinx Documentation Generator
Generates Sphinx documentation using cow easter egg prompts and knowledge sources
Supports both Markdown and reStructuredText formats
References:
- https://www.sphinx-doc.org/en/master/usage/markdown.html#markdown
- https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#rst-primer
"""

from pathlib import Path
from typing import Dict, List, Optional
from cow_prompt_system import CowPromptSystem, cow_prompt_sphinx
import subprocess
import json


class SphinxDocGenerator:
    """Generates Sphinx documentation with cow prompts and knowledge sources"""
    
    def __init__(self, project_path: Path):
        self.project_path = Path(project_path)
        self.docs_path = self.project_path / "docs"
        self.source_path = self.docs_path / "source"
        self.cow_system = CowPromptSystem()
    
    def initialize_sphinx(self):
        """Initialize Sphinx documentation structure"""
        self.docs_path.mkdir(exist_ok=True)
        self.source_path.mkdir(exist_ok=True)
        
        # Run sphinx-quickstart if not already initialized
        if not (self.source_path / "conf.py").exists():
            try:
                subprocess.run(
                    ["sphinx-quickstart", "-q", "--sep", str(self.source_path)],
                    cwd=self.project_path,
                    check=False
                )
            except:
                # Create basic structure manually
                self._create_basic_sphinx_structure()
    
    def _create_basic_sphinx_structure(self, use_markdown: bool = True):
        """Create basic Sphinx structure with Markdown support"""
        # Create conf.py with Markdown support
        conf_py = """# Configuration file for the Sphinx documentation builder.

project = 'Project'
copyright = '2025'
author = 'Author'

# Extensions for Markdown and reStructuredText support
extensions = [
    'myst_parser',  # Markdown support
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.napoleon',  # Google/NumPy style docstrings
]

# Source parsers
source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'myst',  # Markdown via MyST parser
}

templates_path = ['_templates']
exclude_patterns = []

html_theme = 'alabaster'
html_static_path = ['_static']

# MyST parser settings for Markdown
myst_enable_extensions = [
    "colon_fence",
    "deflist",
    "dollarmath",
    "fieldlist",
    "html_admonition",
    "html_image",
    "linkify",
    "replacements",
    "smartquotes",
    "strikethrough",
    "substitution",
    "tasklist",
]
"""
        (self.source_path / "conf.py").write_text(conf_py)
        
        # Create index.rst
        index_rst = """Welcome to Project's documentation!
=====================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   api
   examples
   guides

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
"""
        (self.source_path / "index.rst").write_text(index_rst)
    
    def generate_from_cow_prompt(self, project_name: str, research_data: Dict):
        """Generate Sphinx documentation from cow prompt research"""
        cow_prompt = research_data.get("cow_prompt", {})
        sphinx_prompt = research_data.get("sphinx_prompt", "")
        sources = research_data.get("sources", {})
        
        # Generate documentation sections based on cow level
        level = cow_prompt.get("cow_level", 1)
        
        docs = {}
        
        if level >= 3:
            # Comprehensive documentation
            docs["index"] = self._generate_index(project_name, comprehensive=True)
            docs["api"] = self._generate_api_doc(sources)
            docs["examples"] = self._generate_examples_doc(sources)
            docs["guides"] = self._generate_guides_doc(sources)
            docs["advanced"] = self._generate_advanced_doc(sources)
        elif level >= 2:
            # Enhanced documentation
            docs["index"] = self._generate_index(project_name, comprehensive=False)
            docs["api"] = self._generate_api_doc(sources)
            docs["examples"] = self._generate_examples_doc(sources)
        else:
            # Basic documentation
            docs["index"] = self._generate_index(project_name, comprehensive=False)
            docs["quickstart"] = self._generate_quickstart_doc(sources)
        
        return docs
    
    def _generate_index(self, project_name: str, comprehensive: bool = False) -> str:
        """Generate index.rst"""
        content = f"""Welcome to {project_name}'s documentation!
{'=' * (len(project_name) + 25)}

"""
        if comprehensive:
            content += """.. toctree::
   :maxdepth: 3
   :caption: Contents:

   quickstart
   api
   examples
   guides
   advanced

"""
        else:
            content += """.. toctree::
   :maxdepth: 2
   :caption: Contents:

   quickstart
   api
   examples

"""
        content += """Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
"""
        return content
    
    def _generate_api_doc(self, sources: Dict) -> str:
        """Generate API documentation"""
        content = """API Reference
=============

This section contains the complete API reference.

"""
        # Extract API information from sources
        brave_results = sources.get("brave_search", [])
        for result in brave_results[:5]:
            topic = result.get("topic", "")
            content += f"""
{topic}
{'-' * len(topic)}

Information gathered from research sources.

"""
        return content
    
    def _generate_examples_doc(self, sources: Dict) -> str:
        """Generate examples documentation"""
        content = """Examples
========

This section contains usage examples.

"""
        sacred_results = sources.get("sacred_texts", [])
        for result in sacred_results[:3]:
            topic = result.get("topic", "")
            content += f"""
{topic} Example
{'-' * (len(topic) + 8)}

Example code and usage patterns.

"""
        return content
    
    def _generate_guides_doc(self, sources: Dict) -> str:
        """Generate guides documentation"""
        return """Guides
======

This section contains detailed guides and tutorials.

"""
    
    def _generate_advanced_doc(self, sources: Dict) -> str:
        """Generate advanced documentation"""
        return """Advanced Usage
================

This section covers advanced topics and patterns.

"""
    
    def _generate_quickstart_doc(self, sources: Dict) -> str:
        """Generate quickstart documentation"""
        return """Quick Start
===========

Get started quickly with this project.

"""
    
    def write_docs(self, docs: Dict, format: str = "rst"):
        """Write generated documentation files in specified format"""
        extension = ".md" if format == "markdown" else ".rst"
        for filename, content in docs.items():
            filepath = self.source_path / f"{filename}{extension}"
            filepath.write_text(content)
    
    def convert_markdown_to_rst(self, markdown_content: str) -> str:
        """Convert Markdown to reStructuredText (basic conversion)"""
        # Basic conversions - for full conversion, use pandoc or similar
        lines = markdown_content.split('\n')
        rst_lines = []
        
        for line in lines:
            # Headers
            if line.startswith('# '):
                title = line[2:].strip()
                rst_lines.append(title)
                rst_lines.append('=' * len(title))
            elif line.startswith('## '):
                title = line[3:].strip()
                rst_lines.append(title)
                rst_lines.append('-' * len(title))
            elif line.startswith('### '):
                title = line[4:].strip()
                rst_lines.append(title)
                rst_lines.append('~' * len(title))
            # Code blocks
            elif line.startswith('```'):
                if '```' in line and line != '```':
                    lang = line[3:].strip()
                    rst_lines.append(f".. code-block:: {lang}")
                else:
                    rst_lines.append("")
            # Lists
            elif line.startswith('- ') or line.startswith('* '):
                rst_lines.append(f"* {line[2:].strip()}")
            elif line.startswith('  - ') or line.startswith('  * '):
                rst_lines.append(f"  * {line[4:].strip()}")
            # Links
            elif '[' in line and '](' in line:
                # Basic link conversion [text](url) -> `text <url>`_
                import re
                line = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'`\1 <\2>`_', line)
                rst_lines.append(line)
            else:
                rst_lines.append(line)
        
        return '\n'.join(rst_lines)
    
    def build_docs(self, format: str = "html"):
        """Build Sphinx documentation"""
        build_path = self.docs_path / "build"
        try:
            subprocess.run(
                ["sphinx-build", "-b", format, str(self.source_path), str(build_path)],
                cwd=self.project_path,
                check=False
            )
        except Exception as e:
            print(f"Build error: {e}")


def generate_sphinx_docs(project_path: str, project_name: str, topics: List[str] = None) -> Dict:
    """Passive default: Generate Sphinx documentation with cow prompts"""
    if topics is None:
        topics = ["documentation", "API", "examples", "best practices"]
    
    # Research using cow prompt system
    research_data = cow_prompt_sphinx(project_name, topics)
    
    # Generate documentation
    generator = SphinxDocGenerator(Path(project_path))
    generator.initialize_sphinx()
    docs = generator.generate_from_cow_prompt(project_name, research_data)
    generator.write_docs(docs)
    
    return {
        "project": project_name,
        "docs_generated": list(docs.keys()),
        "research_data": research_data,
        "docs_path": str(generator.docs_path)
    }


if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 3:
        print("Usage: sphinx_doc_generator.py <project_path> <project_name> [topics...]")
        print("Example: sphinx_doc_generator.py /path/to/project MyProject API examples")
        sys.exit(1)
    
    project_path = sys.argv[1]
    project_name = sys.argv[2]
    topics = sys.argv[3:] if len(sys.argv) > 3 else None
    
    result = generate_sphinx_docs(project_path, project_name, topics)
    
    print("="*70)
    print("SPHINX DOCUMENTATION GENERATED")
    print("="*70)
    print(f"Project: {result['project']}")
    print(f"Docs generated: {', '.join(result['docs_generated'])}")
    print(f"Docs path: {result['docs_path']}")
