import { slugify } from './slugify';

export function getTechnologyClass(technology) {
  return `technology-${slugify(technology)}`;
}
