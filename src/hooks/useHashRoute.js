import { useEffect, useState } from 'react';

function getCurrentPath() {
  const path = window.location.hash.slice(1);
  return path.startsWith('/') ? path : '/';
}

export default function useHashRoute() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const handleRouteChange = () => {
      setPath(getCurrentPath());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  return path;
}
