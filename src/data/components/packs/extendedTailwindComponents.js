const definitions = [
  ['tailwind-icon-button', 'Tailwind icon button', 'Buttons', 'button', 'Create project', 'violet'],
  ['tailwind-danger-button', 'Tailwind danger button', 'Buttons', 'button', 'Delete item', 'pink'],
  ['tailwind-success-button', 'Tailwind success button', 'Buttons', 'button', 'Confirm changes', 'green'],
  ['tailwind-feature-card', 'Tailwind feature card', 'Cards', 'card', 'Lightning fast setup', 'orange'],
  ['tailwind-team-card', 'Tailwind team card', 'Cards', 'card', 'Collaborate together', 'violet'],
  ['tailwind-resource-card', 'Tailwind resource card', 'Cards', 'card', 'Developer resources', 'cyan'],
  ['tailwind-search-field', 'Tailwind search field', 'Inputs', 'field', 'Search library', 'violet'],
  ['tailwind-email-field', 'Tailwind email field', 'Inputs', 'field', 'Email address', 'orange'],
  ['tailwind-command-field', 'Tailwind command field', 'Inputs', 'field', 'Run a command', 'cyan'],
  ['tailwind-pagination', 'Tailwind pagination', 'Navigation', 'nav', 'Browse pages', 'violet'],
  ['tailwind-tabs', 'Tailwind tabs', 'Navigation', 'nav', 'Switch views', 'orange'],
  ['tailwind-stepper', 'Tailwind stepper', 'Navigation', 'nav', 'Setup progress', 'cyan'],
  ['tailwind-info-banner', 'Tailwind info banner', 'Feedback', 'feedback', 'New components are available.', 'cyan'],
  ['tailwind-warning-banner', 'Tailwind warning banner', 'Feedback', 'feedback', 'Your trial ends in three days.', 'orange'],
  ['tailwind-success-banner', 'Tailwind success banner', 'Feedback', 'feedback', 'Deployment completed successfully.', 'green'],
  ['tailwind-revenue-metric', 'Tailwind revenue metric', 'Data Display', 'data', 'Revenue', 'violet'],
  ['tailwind-users-metric', 'Tailwind users metric', 'Data Display', 'data', 'Active users', 'cyan'],
  ['tailwind-stars-metric', 'Tailwind stars metric', 'Data Display', 'data', 'GitHub stars', 'orange'],
  ['tailwind-status-badge', 'Tailwind status badge', 'Badges', 'badge', 'Online', 'green'],
  ['tailwind-role-badge', 'Tailwind role badge', 'Badges', 'badge', 'Maintainer', 'violet'],
  ['tailwind-beta-badge', 'Tailwind beta badge', 'Badges', 'badge', 'Public beta', 'pink'],
  ['tailwind-empty-state', 'Tailwind empty state', 'Overlays', 'empty', 'No components yet', 'violet'],
  ['tailwind-upload-state', 'Tailwind upload state', 'Overlays', 'empty', 'Drop files to upload', 'cyan'],
  ['tailwind-search-empty', 'Tailwind search empty', 'Overlays', 'empty', 'No matching results', 'orange'],
];

const tones = {
  violet: { bg: 'bg-violet-400', soft: 'bg-violet-400/10', text: 'text-violet-300', ring: 'ring-violet-400/25', hex: '#bd93f9' },
  pink: { bg: 'bg-pink-400', soft: 'bg-pink-400/10', text: 'text-pink-300', ring: 'ring-pink-400/25', hex: '#ff79c6' },
  green: { bg: 'bg-emerald-400', soft: 'bg-emerald-400/10', text: 'text-emerald-300', ring: 'ring-emerald-400/25', hex: '#50fa7b' },
  orange: { bg: 'bg-orange-400', soft: 'bg-orange-400/10', text: 'text-orange-300', ring: 'ring-orange-400/25', hex: '#ff8a5b' },
  cyan: { bg: 'bg-cyan-300', soft: 'bg-cyan-300/10', text: 'text-cyan-200', ring: 'ring-cyan-300/25', hex: '#8be9fd' },
};

function snippetFor({ kind, label, tone }) {
  const color = tones[tone];
  const templates = {
    button: `<button class="inline-flex items-center gap-2 rounded-xl ${color.bg} px-5 py-3 font-extrabold text-slate-950 shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${color.ring}"><span>✦</span>${label}<span aria-hidden="true">→</span></button>`,
    card: `<article class="w-72 rounded-2xl border border-white/10 bg-[#211d2b] p-5 text-white shadow-2xl"><span class="grid h-11 w-11 place-items-center rounded-xl ${color.soft} ${color.text} ring-1 ${color.ring}">✦</span><h3 class="mt-4 text-lg font-black">${label}</h3><p class="mt-2 text-sm leading-6 text-white/55">A polished component built with utility classes.</p><a class="mt-4 inline-flex text-sm font-bold ${color.text}" href="#">Learn more →</a></article>`,
    field: `<label class="block w-72 text-sm font-bold text-white/70"><span>${label}</span><div class="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-400/10"><span class="${color.text}">⌘</span><input class="w-full bg-transparent py-3 text-white outline-none placeholder:text-white/30" placeholder="Type here…"></div></label>`,
    nav: `<nav class="flex items-center gap-1 rounded-xl border border-white/10 bg-[#211d2b] p-1.5 text-sm text-white/55" aria-label="${label}"><button class="rounded-lg px-3 py-2 hover:bg-white/5">Back</button><a class="rounded-lg px-3 py-2">1</a><a class="rounded-lg ${color.bg} px-3 py-2 font-black text-slate-950">2</a><a class="rounded-lg px-3 py-2">3</a><button class="rounded-lg px-3 py-2 hover:bg-white/5">Next</button></nav>`,
    feedback: `<div class="flex w-80 gap-3 rounded-xl border ${color.ring} ${color.soft} p-4 text-white ring-1 ${color.ring}"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-lg ${color.bg} font-black text-slate-950">!</span><div><strong class="text-sm">${label}</strong><p class="mt-1 text-xs leading-5 text-white/55">Open the details to learn more about this update.</p></div></div>`,
    data: `<article class="w-60 rounded-2xl border border-white/10 bg-[#211d2b] p-5 text-white shadow-xl"><span class="text-xs font-bold uppercase tracking-wider text-white/45">${label}</span><strong class="mt-2 block text-3xl font-black">24.8K</strong><small class="mt-1 block ${color.text}">↗ 18.2% this month</small><div class="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5"><i class="block h-full w-3/4 rounded-full ${color.bg}"></i></div></article>`,
    badge: `<span class="inline-flex items-center gap-2 rounded-full ${color.soft} px-3 py-1.5 text-xs font-extrabold ${color.text} ring-1 ${color.ring}"><i class="h-1.5 w-1.5 rounded-full ${color.bg}"></i>${label}</span>`,
    empty: `<section class="grid w-80 place-items-center rounded-2xl border border-dashed border-white/15 bg-[#211d2b] p-8 text-center text-white"><span class="grid h-12 w-12 place-items-center rounded-xl ${color.soft} text-xl ${color.text} ring-1 ${color.ring}">✦</span><h3 class="mt-4 font-black">${label}</h3><p class="mt-2 text-sm leading-6 text-white/50">Try creating something new or adjusting your filters.</p><button class="mt-5 rounded-xl ${color.bg} px-4 py-2.5 text-sm font-extrabold text-slate-950">Create new</button></section>`,
  };

  return templates[kind];
}

function previewFor({ kind, label, tone }) {
  const accent = tones[tone].hex;
  const markup = {
    button: `<button class="tw-pack-button"><span>✦</span>${label}<b>→</b></button>`,
    card: `<article class="tw-pack-card"><i>✦</i><h3>${label}</h3><p>A polished component built with utility classes.</p><a>Learn more →</a></article>`,
    field: `<label class="tw-pack-field"><span>${label}</span><div><b>⌘</b><input placeholder="Type here…" /></div></label>`,
    nav: `<nav class="tw-pack-nav"><button>Back</button><a>1</a><a>2</a><a>3</a><button>Next</button></nav>`,
    feedback: `<div class="tw-pack-feedback"><span>!</span><div><b>${label}</b><p>Open the details to learn more about this update.</p></div></div>`,
    data: `<article class="tw-pack-data"><span>${label}</span><strong>24.8K</strong><small>↗ 18.2% this month</small><div><i></i></div></article>`,
    badge: `<span class="tw-pack-badge"><i></i>${label}</span>`,
    empty: `<section class="tw-pack-empty"><i>✦</i><h3>${label}</h3><p>Try creating something new or adjusting your filters.</p><button>Create new</button></section>`,
  };

  const css = `
    * { box-sizing: border-box; }
    button, input { font: inherit; }
    .tw-pack-button { display: inline-flex; align-items: center; gap: 9px; padding: 12px 17px; border: 0; border-radius: 11px; color: #17141f; background: ${accent}; font-weight: 900; box-shadow: 0 14px 30px ${accent}30; }
    .tw-pack-button b { margin-left: 7px; }
    .tw-pack-card { width: 260px; padding: 19px; border: 1px solid #ffffff1a; border-radius: 16px; color: white; background: #211d2b; box-shadow: 0 20px 48px #09070d55; }
    .tw-pack-card i, .tw-pack-empty > i { display: grid; width: 42px; height: 42px; border-radius: 11px; color: ${accent}; background: ${accent}18; font-style: normal; place-items: center; }
    .tw-pack-card h3 { margin: 14px 0 6px; }
    .tw-pack-card p, .tw-pack-empty p { margin: 0; color: #aaa1bb; font-size: 12px; line-height: 1.6; }
    .tw-pack-card a { display: block; margin-top: 13px; color: ${accent}; font-size: 12px; font-weight: 800; }
    .tw-pack-field { display: grid; gap: 8px; width: 280px; color: #aaa1bb; font-size: 12px; font-weight: 700; }
    .tw-pack-field div { display: flex; gap: 9px; padding: 0 12px; border: 1px solid #ffffff1a; border-radius: 11px; background: #ffffff0a; }
    .tw-pack-field b { align-self: center; color: ${accent}; }
    .tw-pack-field input { flex: 1; min-width: 0; padding: 12px 0; border: 0; outline: 0; color: white; background: transparent; }
    .tw-pack-nav { display: flex; gap: 5px; padding: 6px; border: 1px solid #ffffff1a; border-radius: 11px; background: #211d2b; }
    .tw-pack-nav a, .tw-pack-nav button { display: grid; min-width: 34px; height: 34px; padding: 0 9px; border: 0; border-radius: 8px; color: #aaa1bb; background: transparent; place-items: center; }
    .tw-pack-nav a:nth-of-type(2) { color: #17141f; background: ${accent}; font-weight: 900; }
    .tw-pack-feedback { display: flex; gap: 11px; width: 310px; padding: 14px; border: 1px solid ${accent}44; border-radius: 12px; color: white; background: ${accent}12; }
    .tw-pack-feedback > span { display: grid; flex: 0 0 27px; height: 27px; border-radius: 8px; color: #17141f; background: ${accent}; font-weight: 900; place-items: center; }
    .tw-pack-feedback p { margin: 4px 0 0; color: #aaa1bb; font-size: 11px; }
    .tw-pack-data { width: 230px; padding: 18px; border: 1px solid #ffffff1a; border-radius: 15px; color: white; background: #211d2b; }
    .tw-pack-data > span, .tw-pack-data small { display: block; color: #aaa1bb; font-size: 11px; }
    .tw-pack-data strong { display: block; margin: 7px 0; font-size: 29px; }
    .tw-pack-data small { color: ${accent}; }
    .tw-pack-data div { height: 6px; margin-top: 13px; overflow: hidden; border-radius: 9px; background: #ffffff0d; }
    .tw-pack-data i { display: block; width: 75%; height: 100%; background: ${accent}; }
    .tw-pack-badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 11px; border: 1px solid ${accent}45; border-radius: 999px; color: ${accent}; background: ${accent}12; font-size: 12px; font-weight: 800; }
    .tw-pack-badge i { width: 7px; height: 7px; border-radius: 50%; background: ${accent}; }
    .tw-pack-empty { display: grid; width: 280px; padding: 25px; border: 1px dashed #ffffff26; border-radius: 16px; color: white; background: #211d2b; text-align: center; place-items: center; }
    .tw-pack-empty h3 { margin: 13px 0 6px; }
    .tw-pack-empty button { margin-top: 15px; padding: 9px 12px; border: 0; border-radius: 9px; color: #17141f; background: ${accent}; font-weight: 800; }
  `;

  return { html: markup[kind], css };
}

export const extendedTailwindComponents = definitions.map(
  ([id, name, category, kind, label, tone]) => {
    const definition = { kind, label, tone };

    return {
      id,
      name,
      category,
      technology: 'Tailwind CSS',
      html: snippetFor(definition),
      preview: previewFor(definition),
    };
  },
);
