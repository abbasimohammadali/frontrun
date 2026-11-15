import React from 'react';

export default function NotFoundPage() {
  return (
    <section className="wrap not-found">
      <span>404</span>
      <h1>This component ran ahead.</h1>
      <p>The page does not exist or may have moved to another route.</p>
      <a className="cta" href="#/">Return home</a>
    </section>
  );
}
