import React, { useMemo } from 'react';
import { componentCatalog } from '../data/componentCatalog';
import { createPreviewDocument } from '../utils/createPreviewDocument';
import { formatComponentCode } from '../utils/formatComponentCode';
import { getTechnologyClass } from '../utils/getTechnologyClass';
import { slugify } from '../utils/slugify';
import useClipboard from '../hooks/useClipboard';
import ComponentGrid from '../components/library/ComponentGrid';

export default function ComponentPage({ component }) {
  const { copy, status } = useClipboard();
  const code = useMemo(() => formatComponentCode(component), [component]);
  const relatedComponents = componentCatalog
    .filter((item) => item.category === component.category && item.id !== component.id)
    .slice(0, 3);

  return (
    <div className="wrap page-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <a href="#/">Home</a><span>›</span>
        <a href={`#/category/${slugify(component.category)}`}>{component.category}</a>
        <span>›</span><b>{component.name}</b>
      </nav>

      <header className="component-detail-header">
        <div>
          <span className={`technology-badge ${getTechnologyClass(component.technology)}`}>
            {component.technology}
          </span>
          <h1>{component.name}</h1>
          <p>A focused, copy-ready component with an isolated live preview.</p>
        </div>
        <button className="cta" type="button" onClick={() => copy(code)}>
          Copy component
        </button>
      </header>

      <section className="detail-workspace">
        <div className="detail-panel">
          <header><span>Live preview</span><small>Interactive sandbox</small></header>
          <iframe
            title={`${component.name} live preview`}
            sandbox={component.javascript ? 'allow-scripts' : ''}
            srcDoc={createPreviewDocument(component)}
          />
        </div>

        <div className="detail-panel code-panel">
          <header>
            <span>{component.technology === 'Tailwind CSS' ? 'Markup' : 'Component code'}</span>
            <small>{status || 'Ready to copy'}</small>
          </header>
          <pre><code>{code}</code></pre>
        </div>
      </section>

      <section className="related-section">
        <div className="home-section-heading">
          <div>
            <div className="eyebrow">RELATED COMPONENTS</div>
            <h2>More from {component.category}.</h2>
          </div>
          <a className="outline" href={`#/category/${slugify(component.category)}`}>
            View category ↗
          </a>
        </div>
        <ComponentGrid components={relatedComponents} />
      </section>
    </div>
  );
}
