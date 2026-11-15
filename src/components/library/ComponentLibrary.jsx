import React from 'react';
import ComponentGrid from './ComponentGrid';

export default function ComponentLibrary({
  technologies,
  components,
  activeTechnology,
  searchQuery,
  onTechnologyChange,
  onSearchChange,
}) {
  return (
    <section className="library">
      <div className="section-heading">
        <div>
          <div className="eyebrow">THE FULL COLLECTION · {components.length} ITEMS</div>
          <h2>Find your next building block.</h2>
        </div>

        <input
          className="search"
          type="search"
          placeholder="Search components…"
          aria-label="Search components"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="filter-panel">
        <div className="filter-group">
          <span className="filter-label">Technology</span>
          <div className="filters technology-filters" aria-label="Component technologies">
            {technologies.map((technology) => (
              <button
                key={technology}
                className={activeTechnology === technology ? 'active' : ''}
                type="button"
                onClick={() => onTechnologyChange(technology)}
              >
                {technology === 'All' ? 'All technologies' : technology}
              </button>
            ))}
          </div>
        </div>

      </div>

      <ComponentGrid components={components} />
    </section>
  );
}
