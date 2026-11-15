import React from 'react';
import ComponentCard from './ComponentCard';

export default function ComponentGrid({ components }) {
  if (!components.length) {
    return <p className="empty-state">No components found. Try another filter.</p>;
  }

  return (
    <div className="component-grid">
      {components.map((component) => (
        <ComponentCard key={component.id} component={component} />
      ))}
    </div>
  );
}
