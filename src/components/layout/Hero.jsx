import React from 'react';

export default function Hero({ componentCount, categoryCount }) {
  return (
    <section className="home-hero">
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span></span>
            OPEN SOURCE · V0.3
          </div>
          <h1>
            Build at the speed
            <br />
            of <em>momentum.</em>
          </h1>
          <p>
            A growing collection of production-ready interface components for
            HTML, JavaScript, and Tailwind CSS.
          </p>

          <div className="hero-actions">
            <a className="cta" href="#/components">Explore {componentCount} components ↗</a>
            <a className="hero-secondary" href="#/category/buttons">View categories</a>
          </div>

          <div className="hero-proof">
            <span><b>{componentCount}+</b> components</span>
            <span><b>{categoryCount}</b> categories</span>
            <span><b>3</b> technologies</span>
          </div>
        </div>

        <div className="hero-stage" aria-label="Animated component preview">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="hero-glow"></div>

          <div className="code-window">
            <header>
              <i></i><i></i><i></i>
              <span>component.jsx</span>
            </header>
            <pre>
              <code><b>const</b> momentum = <em>{'{'}</em></code>
              <code>  components: <strong>{componentCount}</strong>,</code>
              <code>  framework: <span>'yours'</span>,</code>
              <code>  limits: <span>'none'</span></code>
              <code><em>{'}'}</em>;</code>
            </pre>
          </div>

          <div className="floating-chip chip-html">HTML/CSS</div>
          <div className="floating-chip chip-js">JavaScript</div>
          <div className="floating-chip chip-tailwind">Tailwind</div>
          <div className="floating-card">
            <span>✦</span>
            <div><b>Copy. Customize.</b><small>Ship something great.</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
