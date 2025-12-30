# Configuration file for the Sphinx documentation builder.

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
