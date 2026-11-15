import React from 'react';
import {
  componentCatalog,
  componentCategories,
  componentTechnologies,
} from '../data/componentCatalog';
import { slugify } from '../utils/slugify';
import Hero from '../components/layout/Hero';
import ComponentGrid from '../components/library/ComponentGrid';

const features = [
  {
    icon: '◫',
    title: 'Live previews',
    text: 'Inspect every component in an isolated, interactive preview before copying it.',
  },
  {
    icon: '⌘',
    title: 'Copy-ready code',
    text: 'Take clean HTML, CSS, JavaScript, or Tailwind markup directly into your project.',
  },
  {
    icon: '✦',
    title: 'Built to customize',
    text: 'Simple structures and clear tokens make each component easy to turn into your own.',
  },
];

export default function HomePage() {
  const categories = componentCategories.filter((category) => category !== 'All');

  const featuredComponents = categories.map((category) =>
    componentCatalog.find((component) => component.category === category),
  );

  return (
    <>
      <Hero
        componentCount={componentCatalog.length}
        categoryCount={categories.length}
      />

      <section className="wrap stats-strip" aria-label="Library statistics">
        <article><strong>{componentCatalog.length}+</strong><span>Components</span></article>
        <article><strong>{categories.length}</strong><span>Categories</span></article>
        <article><strong>{componentTechnologies.length - 1}</strong><span>Technologies</span></article>
        <article><strong>0</strong><span>Dependencies in snippets</span></article>
      </section>

      <section className="wrap home-section">
        <div className="home-section-heading centered">
          <div className="eyebrow">WHY FRONTRUN</div>
          <h2>A faster path from idea to interface.</h2>
          <p>Everything you need to discover, preview, copy, and customize useful UI patterns.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-number">0{index + 1}</div>
              <span>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="category-marquee" aria-label="Component categories">
        <div>
          {[...categories, ...categories].map((category, index) => (
            <a key={`${category}-${index}`} href={`#/category/${slugify(category)}`}>
              <span>✦</span>{category}
            </a>
          ))}
        </div>
      </section>

      <section className="wrap home-section featured-section">
        <div className="home-section-heading">
          <div>
            <div className="eyebrow">ONE FROM EVERY CATEGORY</div>
            <h2>Explore the whole system.</h2>
            <p>Each preview opens a dedicated page with full code and related components.</p>
          </div>
          <a className="outline" href="#/components">Browse all {componentCatalog.length} ↗</a>
        </div>

        <ComponentGrid components={featuredComponents} />
      </section>
    </>
  );
}
