const definitions = [
  ['neon-outline-button', 'Neon outline button', 'Buttons', 'button', 'Launch project', '↗', '#8be9fd'],
  ['soft-shadow-button', 'Soft shadow button', 'Buttons', 'button', 'Continue', '✦', '#bd93f9'],
  ['split-arrow-button', 'Split arrow button', 'Buttons', 'button', 'View collection', '→', '#ff8a5b'],
  ['feature-spotlight', 'Feature spotlight', 'Cards', 'card', 'Built for speed', '⚡', '#f1fa8c'],
  ['article-preview', 'Article preview', 'Cards', 'card', 'Design systems that scale', 'Aa', '#8be9fd'],
  ['testimonial-quote', 'Testimonial quote', 'Cards', 'card', 'A remarkably clean component kit.', '“', '#ff79c6'],
  ['floating-label-field', 'Floating label field', 'Inputs', 'field', 'Email address', '@', '#bd93f9'],
  ['search-command-field', 'Search command field', 'Inputs', 'field', 'Search components', '⌘K', '#8be9fd'],
  ['newsletter-field', 'Newsletter field', 'Inputs', 'field', 'Join the newsletter', '→', '#ff8a5b'],
  ['compact-pagination', 'Compact pagination', 'Navigation', 'nav', 'Pages', '1', '#bd93f9'],
  ['segmented-navigation', 'Segmented navigation', 'Navigation', 'nav', 'Views', '2', '#8be9fd'],
  ['step-navigation', 'Step navigation', 'Navigation', 'nav', 'Progress', '3', '#ff8a5b'],
  ['info-banner', 'Info banner', 'Feedback', 'feedback', 'A new version is available.', 'i', '#8be9fd'],
  ['warning-notice', 'Warning notice', 'Feedback', 'feedback', 'Review your settings before publishing.', '!', '#f1fa8c'],
  ['success-message', 'Success message', 'Feedback', 'feedback', 'Your changes were saved.', '✓', '#50fa7b'],
  ['dot-wave-loader', 'Dot wave loader', 'Loaders', 'loader', 'Loading resources', '•••', '#bd93f9'],
  ['equalizer-loader', 'Equalizer loader', 'Loaders', 'loader', 'Processing audio', '▥', '#8be9fd'],
  ['pulse-ring-loader', 'Pulse ring loader', 'Loaders', 'loader', 'Connecting', '◉', '#ff8a5b'],
  ['mini-chart', 'Mini chart', 'Data Display', 'data', 'Monthly reach', '28.4K', '#bd93f9'],
  ['activity-row', 'Activity row', 'Data Display', 'data', 'Active sessions', '1,284', '#50fa7b'],
  ['metric-delta', 'Metric delta', 'Data Display', 'data', 'Conversion rate', '12.8%', '#ff8a5b'],
  ['status-pill', 'Status pill', 'Badges', 'badge', 'Operational', '●', '#50fa7b'],
  ['version-tag', 'Version tag', 'Badges', 'badge', 'Version 0.3', 'v', '#bd93f9'],
  ['count-badge', 'Count badge', 'Badges', 'badge', 'Notifications', '12', '#ff79c6'],
];

function createMarkup({ kind, label, icon }) {
  const templates = {
    button: `<button class="pack-button"><span>${icon}</span><b>${label}</b><i>→</i></button>`,
    card: `<article class="pack-card"><span>${icon}</span><h3>${label}</h3><p>Reusable, responsive, and ready to customize.</p><a href="#">Explore →</a></article>`,
    field: `<label class="pack-field"><span>${label}</span><div><b>${icon}</b><input placeholder="Type here…" /></div></label>`,
    nav: `<nav class="pack-nav" aria-label="${label}"><button>Back</button><a>1</a><a class="active">2</a><a>3</a><button>Next</button></nav>`,
    feedback: `<div class="pack-feedback"><strong>${icon}</strong><div><b>${label}</b><small>Everything is ready for your next step.</small></div><button>×</button></div>`,
    loader: `<div class="pack-loader"><i></i><i></i><i></i><span>${label}</span></div>`,
    data: `<article class="pack-data"><span>${label}</span><strong>${icon}</strong><small>↗ 14.2% from last month</small><div><i></i></div></article>`,
    badge: `<span class="pack-badge"><i>${icon}</i>${label}</span>`,
  };

  return templates[kind];
}

function createStyles({ kind, accent }) {
  const common = `
    * { box-sizing: border-box; }
    button, input { font: inherit; }
  `;

  const styles = {
    button: `
      .pack-button { display: inline-flex; align-items: center; gap: 10px; padding: 11px 13px; border: 1px solid ${accent}66; border-radius: 12px; color: #f8f5ff; background: #211d2b; box-shadow: 0 12px 32px #09070d45; cursor: pointer; transition: .2s; }
      .pack-button span { display: grid; width: 31px; height: 31px; border-radius: 9px; color: #17141f; background: ${accent}; place-items: center; }
      .pack-button i { margin-left: 9px; color: ${accent}; font-style: normal; }
      .pack-button:hover { transform: translateY(-3px); box-shadow: 0 0 30px ${accent}30; }
    `,
    card: `
      .pack-card { width: 260px; padding: 20px; border: 1px solid #3b334b; border-radius: 17px; color: #f8f5ff; background: linear-gradient(145deg, #211d2b, #292337); box-shadow: 0 20px 45px #09070d45; }
      .pack-card > span { display: grid; width: 42px; height: 42px; border-radius: 12px; color: #17141f; background: ${accent}; font-weight: 900; place-items: center; }
      .pack-card h3 { margin: 16px 0 7px; }
      .pack-card p { margin: 0 0 16px; color: #aaa1bb; font-size: 13px; line-height: 1.55; }
      .pack-card a { color: ${accent}; font-size: 13px; font-weight: 800; text-decoration: none; }
    `,
    field: `
      .pack-field { display: grid; gap: 8px; width: 300px; color: #aaa1bb; font-size: 12px; }
      .pack-field > span { font-weight: 700; }
      .pack-field div { display: flex; align-items: center; gap: 9px; padding: 0 12px; border: 1px solid #3b334b; border-radius: 11px; background: #211d2b; }
      .pack-field b { color: ${accent}; }
      .pack-field input { flex: 1; min-width: 0; padding: 13px 0; border: 0; outline: 0; color: #f8f5ff; background: transparent; }
      .pack-field div:focus-within { border-color: ${accent}; box-shadow: 0 0 0 4px ${accent}1f; }
    `,
    nav: `
      .pack-nav { display: flex; align-items: center; gap: 6px; padding: 7px; border: 1px solid #3b334b; border-radius: 12px; background: #211d2b; }
      .pack-nav a, .pack-nav button { display: grid; min-width: 34px; height: 34px; padding: 0 9px; border: 0; border-radius: 8px; color: #aaa1bb; background: transparent; place-items: center; }
      .pack-nav .active { color: #17141f; background: ${accent}; font-weight: 900; }
      .pack-nav button { color: #f8f5ff; cursor: pointer; }
    `,
    feedback: `
      .pack-feedback { display: flex; align-items: flex-start; gap: 11px; width: 330px; padding: 14px; border: 1px solid ${accent}45; border-radius: 13px; color: #f8f5ff; background: ${accent}12; }
      .pack-feedback > strong { display: grid; flex: 0 0 29px; height: 29px; border-radius: 9px; color: #17141f; background: ${accent}; place-items: center; }
      .pack-feedback div { display: grid; gap: 4px; }
      .pack-feedback small { color: #aaa1bb; }
      .pack-feedback button { margin-left: auto; border: 0; color: #aaa1bb; background: transparent; font-size: 19px; }
    `,
    loader: `
      .pack-loader { display: flex; align-items: center; gap: 7px; color: #aaa1bb; font-size: 12px; }
      .pack-loader i { width: 10px; height: 10px; border-radius: 50%; background: ${accent}; animation: pack-bounce .8s infinite alternate; }
      .pack-loader i:nth-child(2) { animation-delay: .15s; }
      .pack-loader i:nth-child(3) { animation-delay: .3s; }
      .pack-loader span { margin-left: 8px; }
      @keyframes pack-bounce { to { opacity: .25; transform: translateY(-9px) scale(.7); } }
    `,
    data: `
      .pack-data { position: relative; width: 250px; overflow: hidden; padding: 19px; border: 1px solid #3b334b; border-radius: 16px; color: #f8f5ff; background: #211d2b; }
      .pack-data span { color: #aaa1bb; font-size: 12px; }
      .pack-data strong { display: block; margin: 7px 0; font-size: 31px; }
      .pack-data small { color: ${accent}; }
      .pack-data div { height: 28px; margin: 14px -19px -19px; background: linear-gradient(180deg, ${accent}28, transparent); clip-path: polygon(0 80%, 20% 50%, 38% 67%, 58% 18%, 78% 42%, 100% 0, 100% 100%, 0 100%); }
    `,
    badge: `
      .pack-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border: 1px solid ${accent}45; border-radius: 999px; color: ${accent}; background: ${accent}12; font-size: 13px; font-weight: 800; }
      .pack-badge i { display: grid; min-width: 20px; height: 20px; border-radius: 50%; color: #17141f; background: ${accent}; font-size: 10px; font-style: normal; place-items: center; }
    `,
  };

  return common + styles[kind];
}

export const extendedHtmlCssComponents = definitions.map(
  ([id, name, category, kind, label, icon, accent]) => {
    const definition = { kind, label, icon, accent };

    return {
      id,
      name,
      category,
      technology: 'HTML & CSS',
      html: createMarkup(definition),
      css: createStyles(definition),
    };
  },
);
