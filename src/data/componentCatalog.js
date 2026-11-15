import { htmlCssComponents } from './components/htmlCssComponents.js';
import { javascriptComponents } from './components/javascriptComponents.js';
import { tailwindComponents } from './components/tailwindComponents.js';
import { extendedHtmlCssComponents } from './components/packs/extendedHtmlCssComponents.js';
import { extendedJavascriptComponents } from './components/packs/extendedJavascriptComponents.js';
import { extendedTailwindComponents } from './components/packs/extendedTailwindComponents.js';

export const componentCatalog = [
  ...htmlCssComponents,
  ...javascriptComponents,
  ...tailwindComponents,
  ...extendedHtmlCssComponents,
  ...extendedJavascriptComponents,
  ...extendedTailwindComponents,
];

export const componentCategories = [
  'All',
  ...new Set(componentCatalog.map(({ category }) => category)),
];

export const componentTechnologies = [
  'All',
  ...new Set(componentCatalog.map(({ technology }) => technology)),
];
