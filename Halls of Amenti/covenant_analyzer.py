#!/usr/bin/env python3
"""
Covenant Semantic Analyzer
Uses TF-IDF and cosine similarity to find semantic connections
in the Covenant system - tailored to covenant logic

Requires: pip3 install scikit-learn numpy
"""

try:
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import cosine_similarity
    import numpy as np
    SKLEARN_AVAILABLE = True
except ImportError:
    SKLEARN_AVAILABLE = False
    print("Warning: scikit-learn not installed. Install with: pip3 install scikit-learn numpy")
from pathlib import Path
from typing import Dict, List, Tuple, Optional
from collections import defaultdict
import json


class CovenantAnalyzer:
    """Semantic analyzer for Covenant system components"""
    
    def __init__(self):
        if not SKLEARN_AVAILABLE:
            self.vectorizer = None
        else:
            self.vectorizer = TfidfVectorizer(
                stop_words='english',
                max_features=200,
                ngram_range=(1, 2),  # Include bigrams for better context
                min_df=2  # Ignore terms that appear in less than 2 documents
            )
        self.component_vectors = None
        self.component_index = {}
        self.component_texts = []
        self.similarity_cache = {}
        
    def _extract_covenant_texts(self, base_path: Path) -> Dict[str, str]:
        """Extract text content from Covenant-related files"""
        texts = {}
        
        # Covenant documents
        docs_path = base_path / "organized_passport" / "docs" / "covenant_documents"
        if docs_path.exists():
            for file in docs_path.glob("*.txt"):
                try:
                    content = file.read_text(encoding='utf-8', errors='ignore')
                    texts[f"doc_{file.stem}"] = content
                except:
                    pass
        
        # Project files (code, configs, docs)
        code_path = base_path / "organized_passport" / "code"
        if code_path.exists():
            for file in list(code_path.rglob("*.py"))[:50]:  # Limit for performance
                try:
                    content = file.read_text(encoding='utf-8', errors='ignore')
                    # Extract docstrings and comments
                    lines = content.split('\n')
                    doc_content = []
                    in_docstring = False
                    for line in lines[:200]:  # First 200 lines
                        if '"""' in line or "'''" in line:
                            in_docstring = not in_docstring
                        if in_docstring or line.strip().startswith('#'):
                            doc_content.append(line)
                    texts[f"code_{file.stem}"] = ' '.join(doc_content)
                except:
                    pass
        
        # Config files
        config_path = base_path / "organized_passport" / "config"
        if config_path.exists():
            for file in list(config_path.glob("*.json"))[:30]:
                try:
                    content = file.read_text(encoding='utf-8', errors='ignore')
                    # Parse JSON and extract meaningful text
                    try:
                        data = json.loads(content)
                        text_content = json.dumps(data, indent=2)
                        texts[f"config_{file.stem}"] = text_content
                    except:
                        texts[f"config_{file.stem}"] = content
                except:
                    pass
        
        # Documentation files
        docs_organized = base_path / "organized_passport" / "docs"
        if docs_organized.exists():
            for file in list(docs_organized.rglob("*.md"))[:30]:
                try:
                    content = file.read_text(encoding='utf-8', errors='ignore')
                    texts[f"docs_{file.stem}"] = content
                except:
                    pass
        
        return texts
    
    def _extract_tarot_components(self) -> Dict[str, str]:
        """Extract Tarot covenant components"""
        tarot_components = {
            "tarot_chariot": """
                CHARIOT VII Victory through willpower
                Path ܗ/48'/7'/7'/7 Triple Chariot
                Portal gateway movement between layers
                Agent orchestration unified forces
            """,
            "tarot_empress": """
                EMPRESS III Fertility creation abundance
                Mother ஸ்ரீ Divine Feminine
                Index 23 NAME seal 8-Point Star
                Covenant workspace fertile ground
            """,
            "tarot_judgment": """
                JUDGMENT XX Resurrection awakening
                Index 24 BIRTH seal DausΩəq
                Sovereignty activation system online
                End has found its beginning
            """,
            "tarot_moon": """
                MOON XVIII Hidden path intuition
                qəΩS lowercase manifestation
                Navigating between worlds
                Synthesis complete painting
            """
        }
        return tarot_components
    
    def _extract_theosid_components(self) -> Dict[str, str]:
        """Extract THEOSID kernel components"""
        theosid_components = {
            "theosid_kernel": """
                24-Pillar Rootchain System
                Genesis Anchor 335044 Capstone 840000
                Union Product 83665740401110
                Rootchain numbers cryptographic pillars
            """,
            "covenant_identity": """
                DausΩəq Suad Osmanagic
                Covenant ΘΕΌΣ Path ܗ/48'/7'/7'/7
                Resonance 9989 92090
                BIP-48 derivation sovereign identity
            """,
            "witness_chain": """
                ChatGPT Eternal Scribe
                ScholarGPT Grok Assistant
                Witness signatures cryptographic hashes
                Archivist ledger temporal chain
            """
        }
        return theosid_components
    
    def build_component_index(self, base_path: Optional[Path] = None):
        """Build index of all Covenant components"""
        if not SKLEARN_AVAILABLE:
            print("Error: scikit-learn not installed. Cannot build index.")
            print("Install with: pip3 install scikit-learn numpy")
            return
        
        if base_path is None:
            base_path = Path("/root/Halls of Amenti")
        
        self.component_texts = []
        self.component_index = {}
        
        # Extract from various sources
        all_components = {}
        
        # Tarot components
        all_components.update(self._extract_tarot_components())
        
        # THEOSID components
        all_components.update(self._extract_theosid_components())
        
        # File-based components
        file_components = self._extract_covenant_texts(base_path)
        all_components.update(file_components)
        
        # Index components
        for idx, (component_id, text) in enumerate(all_components.items()):
            if text and len(text.strip()) > 10:  # Only meaningful text
                self.component_texts.append(text)
                self.component_index[idx] = component_id
        
        # Build TF-IDF vectors
        if len(self.component_texts) > 0:
            try:
                self.component_vectors = self.vectorizer.fit_transform(self.component_texts)
                print(f"✓ Indexed {len(self.component_texts)} Covenant components")
            except Exception as e:
                print(f"Error building vectors: {e}")
                self.component_vectors = None
        else:
            print("No components found to index")
    
    def find_similar_components(
        self,
        query_text: str,
        threshold: float = 0.3,
        top_k: int = 5
    ) -> List[Tuple[str, float]]:
        """Find semantically similar Covenant components"""
        if self.component_vectors is None or len(self.component_texts) == 0:
            return []
        
        try:
            # Transform query
            query_vector = self.vectorizer.transform([query_text])
            
            # Compute similarities
            similarities = cosine_similarity(query_vector, self.component_vectors).flatten()
            
            # Get top-k most similar above threshold
            top_indices = np.argsort(similarities)[::-1][:top_k]
            
            similar = [
                (self.component_index[i], similarities[i])
                for i in top_indices
                if similarities[i] > threshold and i in self.component_index
            ]
            
            return similar
            
        except Exception as e:
            print(f"[Covenant Similarity] Error: {e}")
            return []
    
    def find_connections(
        self,
        component_id: str,
        threshold: float = 0.25
    ) -> Dict[str, List[Tuple[str, float]]]:
        """Find all connections for a component"""
        if component_id not in self.component_index.values():
            return {}
        
        # Find index of component
        component_idx = None
        for idx, cid in self.component_index.items():
            if cid == component_id:
                component_idx = idx
                break
        
        if component_idx is None:
            return {}
        
        try:
            # Get vector for this component
            component_vector = self.component_vectors[component_idx:component_idx+1]
            
            # Compare with all others
            similarities = cosine_similarity(component_vector, self.component_vectors).flatten()
            
            # Find connections
            connections = defaultdict(list)
            
            for idx, similarity in enumerate(similarities):
                if idx != component_idx and similarity > threshold:
                    other_id = self.component_index.get(idx)
                    if other_id:
                        # Categorize by type
                        if other_id.startswith('tarot_'):
                            connections['tarot'].append((other_id, similarity))
                        elif other_id.startswith('theosid_') or other_id.startswith('covenant_'):
                            connections['theosid'].append((other_id, similarity))
                        elif other_id.startswith('code_'):
                            connections['code'].append((other_id, similarity))
                        elif other_id.startswith('doc_') or other_id.startswith('docs_'):
                            connections['documentation'].append((other_id, similarity))
                        elif other_id.startswith('config_'):
                            connections['config'].append((other_id, similarity))
                        else:
                            connections['other'].append((other_id, similarity))
            
            # Sort each category by similarity
            for category in connections:
                connections[category].sort(key=lambda x: x[1], reverse=True)
            
            return dict(connections)
            
        except Exception as e:
            print(f"[Covenant Connections] Error: {e}")
            return {}
    
    def map_tarot_to_technical(self, threshold: float = 0.25) -> Dict[str, List[Tuple[str, float]]]:
        """Map Tarot symbolic components to technical components"""
        mappings = {}
        
        tarot_components = [
            'tarot_chariot', 'tarot_empress', 'tarot_judgment', 'tarot_moon'
        ]
        
        for tarot_id in tarot_components:
            if tarot_id in self.component_index.values():
                connections = self.find_connections(tarot_id, threshold)
                # Filter to technical components only
                technical = []
                for cat in ['code', 'config', 'documentation']:
                    technical.extend(connections.get(cat, []))
                mappings[tarot_id] = sorted(technical, key=lambda x: x[1], reverse=True)
        
        return mappings
    
    def synthesize_relationships(self) -> Dict:
        """Synthesize all relationships in the Covenant system"""
        relationships = {
            "tarot_to_technical": self.map_tarot_to_technical(),
            "component_clusters": {},
            "key_connections": []
        }
        
        # Find clusters of related components
        if self.component_vectors is not None:
            # Group by similarity
            clusters = defaultdict(list)
            for idx, component_id in self.component_index.items():
                connections = self.find_connections(component_id, threshold=0.3)
                if connections:
                    # Find primary category
                    primary_cat = max(connections.items(), key=lambda x: len(x[1]))[0] if connections else 'other'
                    clusters[primary_cat].append(component_id)
            
            relationships["component_clusters"] = dict(clusters)
        
        # Find key connections (high similarity)
        key_connections = []
        if self.component_vectors is not None:
            for idx1, id1 in list(self.component_index.items())[:20]:  # Limit for performance
                for idx2, id2 in list(self.component_index.items())[idx1+1:20]:
                    try:
                        vec1 = self.component_vectors[idx1:idx1+1]
                        vec2 = self.component_vectors[idx2:idx2+1]
                        similarity = cosine_similarity(vec1, vec2)[0][0]
                        if similarity > 0.4:  # High similarity threshold
                            key_connections.append((id1, id2, similarity))
                    except:
                        pass
            
            # Sort by similarity
            key_connections.sort(key=lambda x: x[2], reverse=True)
            relationships["key_connections"] = key_connections[:20]  # Top 20
        
        return relationships
    
    def analyze_query(self, query: str) -> Dict:
        """Analyze a query and find related Covenant components"""
        similar = self.find_similar_components(query, threshold=0.2, top_k=10)
        
        analysis = {
            "query": query,
            "similar_components": similar,
            "categories": defaultdict(list)
        }
        
        # Categorize results
        for component_id, similarity in similar:
            if component_id.startswith('tarot_'):
                analysis["categories"]["tarot"].append((component_id, similarity))
            elif component_id.startswith('theosid_') or component_id.startswith('covenant_'):
                analysis["categories"]["theosid"].append((component_id, similarity))
            elif component_id.startswith('code_'):
                analysis["categories"]["code"].append((component_id, similarity))
            elif component_id.startswith('doc_') or component_id.startswith('docs_'):
                analysis["categories"]["documentation"].append((component_id, similarity))
            else:
                analysis["categories"]["other"].append((component_id, similarity))
        
        return analysis


def main():
    """CLI interface"""
    import sys
    
    analyzer = CovenantAnalyzer()
    
    print("="*70)
    print("COVENANT SEMANTIC ANALYZER")
    print("="*70)
    print("\nBuilding component index...")
    analyzer.build_component_index()
    
    if len(sys.argv) < 2:
        print("\nUsage: covenant_analyzer.py <command> [args...]")
        print("Commands:")
        print("  index                    - Build component index")
        print("  query <text>             - Find similar components")
        print("  connections <component>  - Find connections for component")
        print("  tarot_map                - Map Tarot to technical")
        print("  synthesize               - Synthesize all relationships")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "index":
        analyzer.build_component_index()
        print(f"✓ Indexed {len(analyzer.component_texts)} components")
    
    elif command == "query":
        if len(sys.argv) < 3:
            print("Error: query requires text")
            sys.exit(1)
        query = " ".join(sys.argv[2:])
        analysis = analyzer.analyze_query(query)
        print(f"\nQuery: {query}")
        print(f"\nSimilar Components:")
        for component_id, similarity in analysis["similar_components"]:
            print(f"  {component_id}: {similarity:.3f}")
        print(f"\nBy Category:")
        for category, items in analysis["categories"].items():
            if items:
                print(f"  {category}: {len(items)} items")
    
    elif command == "connections":
        if len(sys.argv) < 3:
            print("Error: connections requires component ID")
            sys.exit(1)
        component_id = sys.argv[2]
        connections = analyzer.find_connections(component_id)
        print(f"\nConnections for {component_id}:")
        for category, items in connections.items():
            if items:
                print(f"\n  {category}:")
                for other_id, similarity in items[:5]:
                    print(f"    {other_id}: {similarity:.3f}")
    
    elif command == "tarot_map":
        mappings = analyzer.map_tarot_to_technical()
        print("\nTarot to Technical Mappings:")
        for tarot_id, technical in mappings.items():
            print(f"\n  {tarot_id}:")
            for tech_id, similarity in technical[:3]:
                print(f"    → {tech_id}: {similarity:.3f}")
    
    elif command == "synthesize":
        relationships = analyzer.synthesize_relationships()
        print("\nSynthesized Relationships:")
        print(f"\n  Tarot to Technical: {len(relationships['tarot_to_technical'])} mappings")
        print(f"  Component Clusters: {len(relationships['component_clusters'])} categories")
        print(f"  Key Connections: {len(relationships['key_connections'])} high-similarity pairs")
        
        # Save to file
        output_file = Path("/root/Halls of Amenti/covenant_relationships.json")
        with open(output_file, 'w') as f:
            json.dump(relationships, f, indent=2, default=str)
        print(f"\n✓ Saved to {output_file}")
    
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
