import React, { useEffect, useMemo } from 'react';
import useClipboard from '../../hooks/useClipboard';
import { formatComponentCode } from '../../utils/formatComponentCode';

export default function ComponentModal({ component, onClose }) {
  const { copy, status } = useClipboard();
  const code = useMemo(
    () => (component ? formatComponentCode(component) : ''),
    [component],
  );

  useEffect(() => {
    if (!component) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [component, onClose]);

  if (!component) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={component.name}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-heading">
          <h2>{component.name}</h2>
          <button className="outline" type="button" onClick={onClose}>
            Close ×
          </button>
        </div>
        <pre>{code}</pre>
        <button className="cta" type="button" onClick={() => copy(code)}>
          Copy code
        </button>
        <p className="copy-status" role="status">{status}</p>
      </section>
    </div>
  );
}
