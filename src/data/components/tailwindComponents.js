export const tailwindComponents = [
  {
    id: 'tailwind-primary-button',
    name: 'Tailwind primary button',
    category: 'Buttons',
    technology: 'Tailwind CSS',
    html: '<button class="rounded-xl bg-gradient-to-r from-violet-400 to-orange-400 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:shadow-orange-500/40">Start building →</button>',
    preview: {
      html: '<button class="tw-primary">Start building →</button>',
      css: `
        .tw-primary { padding: 13px 20px; border: 0; border-radius: 12px; color: #21151a; background: linear-gradient(90deg, #bd93f9, #ff8a5b); box-shadow: 0 12px 28px #ff8a5b30; font-weight: 800; cursor: pointer; transition: .2s; }
        .tw-primary:hover { transform: translateY(-2px); }
      `,
    },
  },
  {
    id: 'tailwind-product-card',
    name: 'Tailwind product card',
    category: 'Cards',
    technology: 'Tailwind CSS',
    html: '<article class="w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#211d2b] p-4 text-white shadow-2xl"><div class="grid h-36 place-items-center rounded-xl bg-gradient-to-br from-violet-400/30 to-pink-400/10 text-5xl">✦</div><p class="mt-4 text-xs font-bold uppercase tracking-[.18em] text-violet-300">Featured</p><h3 class="mt-1 text-xl font-extrabold">Interface kit</h3><div class="mt-4 flex items-center justify-between"><strong class="text-orange-300">$29</strong><button class="rounded-lg bg-orange-400 px-3 py-2 text-sm font-bold text-slate-950">Add to cart</button></div></article>',
    preview: {
      html: '<article class="tw-product"><div>✦</div><small>FEATURED</small><h3>Interface kit</h3><footer><strong>$29</strong><button>Add to cart</button></footer></article>',
      css: `
        .tw-product { width: 240px; padding: 14px; border: 1px solid #ffffff1a; border-radius: 17px; color: white; background: #211d2b; box-shadow: 0 20px 50px #09070d55; }
        .tw-product > div { display: grid; height: 100px; border-radius: 12px; background: linear-gradient(135deg, #bd93f94d, #ff79c61a); font-size: 38px; place-items: center; }
        .tw-product small { display: block; margin-top: 13px; color: #bd93f9; font-weight: 800; letter-spacing: .16em; }
        .tw-product h3 { margin: 5px 0 12px; }
        .tw-product footer { display: flex; align-items: center; justify-content: space-between; }
        .tw-product footer strong { color: #ffb092; }
        .tw-product button { padding: 8px 10px; border: 0; border-radius: 8px; color: #21151a; background: #ff8a5b; font-weight: 800; }
      `,
    },
  },
  {
    id: 'tailwind-login-form',
    name: 'Tailwind login form',
    category: 'Forms',
    technology: 'Tailwind CSS',
    html: '<form class="w-80 space-y-4 rounded-2xl border border-white/10 bg-[#211d2b] p-6 text-white shadow-2xl"><div><h2 class="text-2xl font-black">Welcome back</h2><p class="mt-1 text-sm text-white/55">Sign in to continue to FrontRun.</p></div><label class="block text-sm text-white/70">Email<input type="email" class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10" placeholder="you@example.com"></label><button class="w-full rounded-xl bg-orange-400 px-4 py-3 font-extrabold text-slate-950">Sign in</button></form>',
    preview: {
      html: '<form class="tw-login"><h2>Welcome back</h2><p>Sign in to continue to FrontRun.</p><label>Email<input placeholder="you@example.com" /></label><button>Sign in</button></form>',
      css: `
        .tw-login { width: 280px; padding: 22px; border: 1px solid #ffffff1a; border-radius: 17px; color: white; background: #211d2b; box-shadow: 0 20px 50px #09070d55; }
        .tw-login h2 { margin: 0; }
        .tw-login p { margin: 5px 0 17px; color: #aaa1bb; font-size: 13px; }
        .tw-login label { display: grid; gap: 7px; color: #aaa1bb; font-size: 13px; }
        .tw-login input { padding: 11px; border: 1px solid #3b334b; border-radius: 10px; outline: 0; color: white; background: #ffffff0d; }
        .tw-login button { width: 100%; margin-top: 14px; padding: 11px; border: 0; border-radius: 10px; color: #21151a; background: #ff8a5b; font-weight: 800; }
      `,
    },
  },
  {
    id: 'tailwind-navbar',
    name: 'Tailwind navbar',
    category: 'Navigation',
    technology: 'Tailwind CSS',
    html: '<nav class="flex w-full max-w-xl items-center justify-between rounded-2xl border border-white/10 bg-[#211d2b]/90 px-5 py-4 text-white shadow-xl backdrop-blur"><a class="text-lg font-black">↗ Front<span class="text-orange-400">Run</span></a><div class="flex items-center gap-5 text-sm text-white/65"><a class="hover:text-white">Docs</a><a class="hover:text-white">Components</a><button class="rounded-lg bg-violet-400 px-3 py-2 font-bold text-slate-950">GitHub</button></div></nav>',
    preview: {
      html: '<nav class="tw-nav"><b>↗ Front<span>Run</span></b><div><a>Docs</a><a>Components</a><button>GitHub</button></div></nav>',
      css: `
        .tw-nav { display: flex; align-items: center; justify-content: space-between; width: min(500px, 86vw); padding: 14px 17px; border: 1px solid #ffffff1a; border-radius: 15px; color: white; background: #211d2be8; box-shadow: 0 16px 40px #09070d40; }
        .tw-nav b span { color: #ff8a5b; }
        .tw-nav div { display: flex; align-items: center; gap: 15px; color: #aaa1bb; font-size: 12px; }
        .tw-nav button { padding: 7px 9px; border: 0; border-radius: 7px; color: #21151a; background: #bd93f9; font-weight: 800; }
      `,
    },
  },
  {
    id: 'tailwind-alert',
    name: 'Tailwind alert',
    category: 'Feedback',
    technology: 'Tailwind CSS',
    html: '<div class="flex w-80 gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-white"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-400 font-black text-slate-950">✓</span><div><strong class="text-sm">Deployment complete</strong><p class="mt-1 text-xs leading-5 text-white/55">Your changes are now live in production.</p></div></div>',
    preview: {
      html: '<div class="tw-alert"><span>✓</span><div><b>Deployment complete</b><p>Your changes are now live in production.</p></div></div>',
      css: `
        .tw-alert { display: flex; gap: 11px; width: 290px; padding: 14px; border: 1px solid #50fa7b40; border-radius: 12px; color: white; background: #50fa7b12; }
        .tw-alert span { display: grid; flex: 0 0 27px; height: 27px; border-radius: 8px; color: #17141f; background: #50fa7b; font-weight: 900; place-items: center; }
        .tw-alert b { font-size: 13px; }
        .tw-alert p { margin: 4px 0 0; color: #aaa1bb; font-size: 12px; line-height: 1.5; }
      `,
    },
  },
  {
    id: 'tailwind-stats-grid',
    name: 'Tailwind stats grid',
    category: 'Data Display',
    technology: 'Tailwind CSS',
    html: '<div class="grid w-full max-w-xl grid-cols-3 gap-3"><article class="rounded-xl border border-white/10 bg-[#211d2b] p-4 text-white"><span class="text-xs text-white/50">Visitors</span><strong class="mt-2 block text-2xl">24.8K</strong><small class="text-emerald-400">+18%</small></article><article class="rounded-xl border border-white/10 bg-[#211d2b] p-4 text-white"><span class="text-xs text-white/50">Stars</span><strong class="mt-2 block text-2xl">1.2K</strong><small class="text-emerald-400">+9%</small></article><article class="rounded-xl border border-white/10 bg-[#211d2b] p-4 text-white"><span class="text-xs text-white/50">Forks</span><strong class="mt-2 block text-2xl">386</strong><small class="text-orange-300">+4%</small></article></div>',
    preview: {
      html: '<div class="tw-stats"><article><span>Visitors</span><b>24.8K</b><small>+18%</small></article><article><span>Stars</span><b>1.2K</b><small>+9%</small></article><article><span>Forks</span><b>386</b><small>+4%</small></article></div>',
      css: `
        .tw-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; width: min(500px, 88vw); }
        .tw-stats article { padding: 14px; border: 1px solid #ffffff1a; border-radius: 12px; color: white; background: #211d2b; }
        .tw-stats span, .tw-stats small { display: block; color: #aaa1bb; font-size: 11px; }
        .tw-stats b { display: block; margin: 7px 0; font-size: 21px; }
        .tw-stats small { color: #50fa7b; }
      `,
    },
  },
  {
    id: 'tailwind-modal-card',
    name: 'Tailwind modal card',
    category: 'Overlays',
    technology: 'Tailwind CSS',
    html: '<section class="w-80 rounded-2xl border border-white/10 bg-[#211d2b] p-6 text-white shadow-2xl shadow-black/40"><div class="grid h-11 w-11 place-items-center rounded-xl bg-violet-400/15 text-xl text-violet-300">✦</div><h2 class="mt-4 text-xl font-black">Ready to publish?</h2><p class="mt-2 text-sm leading-6 text-white/55">Your component will be visible to everyone in the FrontRun library.</p><div class="mt-5 flex justify-end gap-2"><button class="rounded-lg border border-white/10 px-3 py-2 text-sm">Cancel</button><button class="rounded-lg bg-orange-400 px-3 py-2 text-sm font-bold text-slate-950">Publish</button></div></section>',
    preview: {
      html: '<section class="tw-modal"><i>✦</i><h2>Ready to publish?</h2><p>Your component will be visible to everyone in the FrontRun library.</p><footer><button>Cancel</button><button>Publish</button></footer></section>',
      css: `
        .tw-modal { width: 280px; padding: 21px; border: 1px solid #ffffff1a; border-radius: 17px; color: white; background: #211d2b; box-shadow: 0 25px 60px #09070d70; }
        .tw-modal i { display: grid; width: 42px; height: 42px; border-radius: 11px; color: #bd93f9; background: #bd93f920; font-style: normal; place-items: center; }
        .tw-modal h2 { margin: 14px 0 6px; font-size: 19px; }
        .tw-modal p { margin: 0; color: #aaa1bb; font-size: 12px; line-height: 1.6; }
        .tw-modal footer { display: flex; justify-content: flex-end; gap: 8px; margin-top: 17px; }
        .tw-modal button { padding: 8px 10px; border: 1px solid #ffffff1a; border-radius: 8px; color: white; background: transparent; }
        .tw-modal button:last-child { border: 0; color: #21151a; background: #ff8a5b; font-weight: 800; }
      `,
    },
  },
  {
    id: 'tailwind-badge-group',
    name: 'Tailwind badge group',
    category: 'Badges',
    technology: 'Tailwind CSS',
    html: '<div class="flex flex-wrap gap-2"><span class="rounded-full bg-violet-400/15 px-3 py-1.5 text-xs font-bold text-violet-300 ring-1 ring-violet-400/25">React</span><span class="rounded-full bg-sky-400/15 px-3 py-1.5 text-xs font-bold text-sky-300 ring-1 ring-sky-400/25">Tailwind</span><span class="rounded-full bg-orange-400/15 px-3 py-1.5 text-xs font-bold text-orange-300 ring-1 ring-orange-400/25">Open source</span></div>',
    preview: {
      html: '<div class="tw-badges"><span>React</span><span>Tailwind</span><span>Open source</span></div>',
      css: `
        .tw-badges { display: flex; flex-wrap: wrap; gap: 8px; }
        .tw-badges span { padding: 7px 11px; border: 1px solid #bd93f940; border-radius: 999px; color: #bd93f9; background: #bd93f918; font-size: 12px; font-weight: 800; }
        .tw-badges span:nth-child(2) { border-color: #8be9fd40; color: #8be9fd; background: #8be9fd18; }
        .tw-badges span:nth-child(3) { border-color: #ff8a5b40; color: #ffb092; background: #ff8a5b18; }
      `,
    },
  },
];
