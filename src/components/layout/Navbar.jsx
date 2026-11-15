import React from 'react';
import { componentCatalog, componentCategories } from '../../data/componentCatalog';
import { slugify } from '../../utils/slugify';

const navigation = [
  { label: 'Home', href: '#/' },
  { label: 'Components', href: '#/components' },
];

export default function Navbar({ currentPath, isLightTheme, onThemeToggle }) {
  const categories = componentCategories.filter((category) => category !== 'All');

  function closeCategoryMenu(event) {
    event.currentTarget.closest('details')?.removeAttribute('open');
  }

  return (
    <nav className="site-nav">
      <div className="wrap nav-content">
        <a className="brand" href="#/" aria-label="FrontRun home">
          ↗ Front<span>Run</span>
        </a>

        <div className="nav-actions">
          <div className="nav-links">
            {navigation.map((item) => {
              const itemPath = item.href.slice(1);
              const isActive =
                itemPath === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith('/component') ||
                    currentPath === '/components';

              return (
                <a
                  key={item.href}
                  className={isActive ? 'active' : ''}
                  href={item.href}
                >
                  {item.label}
                </a>
              );
            })}

            <details className="category-menu">
              <summary className={currentPath.startsWith('/category') ? 'active' : ''}>
                Categories <span>⌄</span>
              </summary>
              <div className="category-menu-panel">
                <header>
                  <div>
                    <b>Browse categories</b>
                    <small>Jump directly to a focused collection.</small>
                  </div>
                  <span>{categories.length} groups</span>
                </header>

                <div className="category-menu-grid">
                  {categories.map((category) => {
                    const count = componentCatalog.filter(
                      (component) => component.category === category,
                    ).length;

                    return (
                      <a
                        key={category}
                        href={`#/category/${slugify(category)}`}
                        onClick={closeCategoryMenu}
                      >
                        <span>✦</span>
                        <div><b>{category}</b><small>{count} components</small></div>
                        <i>→</i>
                      </a>
                    );
                  })}
                </div>
              </div>
            </details>
          </div>

          <a className="nav-cta" href="#/components">Browse library</a>
          <button
            className="outline icon-button"
            type="button"
            onClick={onThemeToggle}
            aria-label="Toggle color theme"
          >
            {isLightTheme ? '☾' : '☀'}
          </button>
        </div>
      </div>
    </nav>
  );
}
