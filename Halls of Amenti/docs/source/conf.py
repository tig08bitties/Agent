# Configuration file for the Sphinx documentation builder.

project = 'Halls of Amenti'
copyright = '2025'
author = 'Covenant System'

# Extensions for reStructuredText support
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.napoleon',  # Google/NumPy style docstrings
]

# Source parsers
source_suffix = {
    '.rst': 'restructuredtext',
}

templates_path = ['_templates']
exclude_patterns = []

html_theme = 'alabaster'
html_static_path = ['_static']

# Note: MyST parser can be added later if Markdown support is needed
# For now, using reStructuredText only
