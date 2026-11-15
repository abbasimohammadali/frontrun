import React from 'react';
import { componentCatalog } from '../data/componentCatalog';
import ComponentGrid from '../components/library/ComponentGrid';

export default function CategoryPage({ category }) {
  const components = componentCatalog.filter(
    (component) => component.category === category,
  );

  const technologyCounts = components.reduce((counts, component) => ({
    ...counts,
    [component.technology]: (counts[component.technology] ?? 0) + 1,
  }), {});

  return (
    <div className="wrap page-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <a href="#/">Home</a><span>›</span>
        <a href="#/components">Components</a><span>›</span>
        <b>{category}</b>
      </nav>

      <header className="category-header">
        <div>
          <div className="eyebrow">CATEGORY / {components.length} COMPONENTS</div>
          <h1>{category}</h1>
          <p>Browse every {category.toLowerCase()} component and open its dedicated code page.</p>
        </div>

        <div className="category-tech-counts">
          {Object.entries(technologyCounts).map(([technology, count]) => (
            <span key={technology}><b>{count}</b>{technology}</span>
          ))}
        </div>
      </header>

      <ComponentGrid components={components} />
    </div>
  );
}
