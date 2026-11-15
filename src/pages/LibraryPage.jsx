import React, { useMemo, useState } from 'react';
import {
  componentCatalog,
  componentTechnologies,
} from '../data/componentCatalog';
import ComponentLibrary from '../components/library/ComponentLibrary';

export default function LibraryPage() {
  const [activeTechnology, setActiveTechnology] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const visibleComponents = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return componentCatalog.filter((component) => {
      const matchesTechnology =
        activeTechnology === 'All' || component.technology === activeTechnology;
      const searchableText = [
        component.name,
        component.category,
        component.technology,
      ].join(' ').toLowerCase();

      return (
        matchesTechnology &&
        searchableText.includes(normalizedQuery)
      );
    });
  }, [activeTechnology, searchQuery]);

  return (
    <div className="wrap page-shell">
      <header className="page-header">
        <div className="eyebrow">COMPONENT LIBRARY / {componentCatalog.length} ITEMS</div>
        <h1>Every component.<br /><em>One clean library.</em></h1>
        <p>Filter by technology, or use the Categories menu to browse focused collections.</p>
      </header>

      <ComponentLibrary
        technologies={componentTechnologies}
        components={visibleComponents}
        activeTechnology={activeTechnology}
        searchQuery={searchQuery}
        onTechnologyChange={setActiveTechnology}
        onSearchChange={setSearchQuery}
      />
    </div>
  );
}
