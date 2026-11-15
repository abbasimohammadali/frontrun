import React from 'react';
import { createPreviewDocument } from '../../utils/createPreviewDocument';
import { getTechnologyClass } from '../../utils/getTechnologyClass';

export default function ComponentCard({ component }) {
  return (
    <article className="component-card">
      <div className="preview">
        <iframe
          title={`${component.name} preview`}
          sandbox={component.javascript ? 'allow-scripts' : ''}
          srcDoc={createPreviewDocument(component)}
        />
      </div>

      <div className="card-footer">
        <div>
          <h3>{component.name}</h3>
          <small>{component.category}</small>
        </div>
        <span className={`technology-badge ${getTechnologyClass(component.technology)}`}>
          {component.technology}
        </span>
        <a className="outline" href={`#/component/${component.id}`}>
          Open ↗
        </a>
      </div>
    </article>
  );
}
