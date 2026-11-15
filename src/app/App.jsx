import React, { useMemo, useState } from 'react';
import { componentCatalog, componentCategories } from '../data/componentCatalog';
import useHashRoute from '../hooks/useHashRoute';
import { slugify } from '../utils/slugify';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomePage from '../pages/HomePage';
import LibraryPage from '../pages/LibraryPage';
import CategoryPage from '../pages/CategoryPage';
import ComponentPage from '../pages/ComponentPage';
import NotFoundPage from '../pages/NotFoundPage';

function resolveRoute(path) {
  if (path === '/') return { name: 'home' };
  if (path === '/components') return { name: 'library' };

  if (path.startsWith('/category/')) {
    return { name: 'category', value: decodeURIComponent(path.slice('/category/'.length)) };
  }

  if (path.startsWith('/component/')) {
    return { name: 'component', value: decodeURIComponent(path.slice('/component/'.length)) };
  }

  return { name: 'not-found' };
}

export default function App() {
  const path = useHashRoute();
  const [isLightTheme, setIsLightTheme] = useState(false);
  const route = resolveRoute(path);

  const page = useMemo(() => {
    if (route.name === 'home') {
      return <HomePage />;
    }

    if (route.name === 'library') {
      return <LibraryPage />;
    }

    if (route.name === 'category') {
      const category = componentCategories.find(
        (name) => name !== 'All' && slugify(name) === route.value,
      );

      return category ? <CategoryPage category={category} /> : <NotFoundPage />;
    }

    if (route.name === 'component') {
      const component = componentCatalog.find(({ id }) => id === route.value);
      return component ? <ComponentPage component={component} /> : <NotFoundPage />;
    }

    return <NotFoundPage />;
  }, [route.name, route.value]);

  return (
    <div className={`app-shell ${isLightTheme ? 'theme-light' : ''}`}>
      <Navbar
        currentPath={path}
        isLightTheme={isLightTheme}
        onThemeToggle={() => setIsLightTheme((currentTheme) => !currentTheme)}
      />
      <main>{page}</main>
      <Footer />
    </div>
  );
}
