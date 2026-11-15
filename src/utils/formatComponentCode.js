export function formatComponentCode(component) {
  if (component.technology === 'Tailwind CSS') {
    return component.html.trim();
  }

  const sections = [component.html.trim()];

  if (component.css) {
    sections.push(`<style>\n${component.css.trim()}\n</style>`);
  }

  if (component.javascript) {
    sections.push(`<script>\n${component.javascript.trim()}\n</script>`);
  }

  return sections.join('\n\n');
}
