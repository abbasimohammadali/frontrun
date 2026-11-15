const PREVIEW_THEME = {
  background: '#1d1927',
  foreground: '#f8f5ff',
};

export function createPreviewDocument(component) {
  const html = component.preview?.html ?? component.html;
  const css = component.preview?.css ?? component.css ?? '';
  const javascript = component.javascript ?? '';

  return `
    <style>
      body {
        display: grid;
        place-items: center;
        height: 100vh;
        margin: 0;
        color: ${PREVIEW_THEME.foreground};
        background: ${PREVIEW_THEME.background};
        font-family: Inter, ui-sans-serif, system-ui, sans-serif;
      }
      ${css}
    </style>
    ${html}
    ${javascript ? `<script>${javascript}</script>` : ''}
  `;
}
