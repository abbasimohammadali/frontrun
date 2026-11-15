export const htmlCssComponents = [
  {
    id: 'glow-button',
    name: 'Glow button',
    category: 'Buttons',
    technology: 'HTML & CSS',
    html: '<button class="glow">Get started →</button>',
    css: `
      .glow { padding: 14px 24px; border: 0; border-radius: 12px; color: #21151a; background: linear-gradient(135deg, #ff8a5b, #ff704d); font-weight: 700; cursor: pointer; transition: .25s; }
      .glow:hover { box-shadow: 0 0 34px #ff8a5b70; transform: translateY(-3px); }
    `,
  },
  {
    id: 'glass-card',
    name: 'Glass card',
    category: 'Cards',
    technology: 'HTML & CSS',
    html: '<div class="glass"><span>✦</span><h3>Make it yours.</h3><p>Designed for the web.</p></div>',
    css: `
      .glass { padding: 24px; border: 1px solid #bd93f940; border-radius: 18px; color: #f8f5ff; background: linear-gradient(135deg, #bd93f91c, #ff79c608); box-shadow: 0 18px 44px #09070d35; backdrop-filter: blur(12px); }
      .glass span { color: #ff8a5b; font-size: 24px; }
      .glass h3 { margin-bottom: 6px; }
      .glass p { margin: 0; color: #aaa1bb; }
    `,
  },
  {
    id: 'orbit-loader',
    name: 'Orbit loader',
    category: 'Loaders',
    technology: 'HTML & CSS',
    html: '<div class="orbit" role="status" aria-label="Loading"></div>',
    css: `
      .orbit { width: 48px; height: 48px; border: 3px solid #bd93f92b; border-top-color: #ff8a5b; border-right-color: #bd93f9; border-radius: 50%; animation: spin .8s linear infinite; filter: drop-shadow(0 0 9px #bd93f955); }
      @keyframes spin { to { transform: rotate(360deg); } }
      @media (prefers-reduced-motion: reduce) { .orbit { animation: none; } }
    `,
  },
  {
    id: 'focus-input',
    name: 'Focus input',
    category: 'Inputs',
    technology: 'HTML & CSS',
    html: '<input class="focus-input" placeholder="Your email" aria-label="Email" type="email" />',
    css: `
      .focus-input { width: 220px; max-width: 100%; padding: 14px; border: 1px solid #3b334b; border-radius: 10px; outline: none; color: #f8f5ff; background: #211d2b; }
      .focus-input::placeholder { color: #837990; }
      .focus-input:focus { border-color: #bd93f9; box-shadow: 0 0 0 4px #bd93f925; }
    `,
  },
  {
    id: 'gradient-badge',
    name: 'Gradient badge',
    category: 'Badges',
    technology: 'HTML & CSS',
    html: '<span class="gradient-badge">New release</span>',
    css: `
      .gradient-badge { display: inline-flex; padding: 7px 12px; border: 1px solid #ff8a5b55; border-radius: 999px; color: #ffd9ca; background: linear-gradient(135deg, #ff8a5b28, #bd93f920); font-size: 13px; font-weight: 700; letter-spacing: .04em; }
    `,
  },
  {
    id: 'pricing-card',
    name: 'Pricing card',
    category: 'Cards',
    technology: 'HTML & CSS',
    html: '<article class="pricing"><span>PRO</span><h3>$19<small>/month</small></h3><p>Everything you need to ship faster.</p><button>Choose plan</button></article>',
    css: `
      .pricing { width: 240px; padding: 24px; border: 1px solid #3b334b; border-radius: 18px; color: #f8f5ff; background: #211d2b; box-shadow: 0 20px 50px #09070d40; }
      .pricing > span { color: #bd93f9; font-size: 12px; font-weight: 800; letter-spacing: .16em; }
      .pricing h3 { margin: 14px 0 6px; font-size: 34px; }
      .pricing h3 small, .pricing p { color: #aaa1bb; font-size: 13px; font-weight: 400; }
      .pricing button { width: 100%; padding: 11px; border: 0; border-radius: 9px; color: #21151a; background: #ff8a5b; font-weight: 800; cursor: pointer; }
    `,
  },
  {
    id: 'profile-card',
    name: 'Profile card',
    category: 'Cards',
    technology: 'HTML & CSS',
    html: '<article class="profile"><div class="avatar">FR</div><div><h3>FrontRun</h3><p>UI component library</p></div><button>Follow</button></article>',
    css: `
      .profile { display: flex; align-items: center; gap: 13px; width: 300px; padding: 16px; border: 1px solid #3b334b; border-radius: 16px; color: #f8f5ff; background: #211d2b; }
      .profile .avatar { display: grid; width: 46px; height: 46px; border-radius: 14px; color: #21151a; background: #ff8a5b; font-weight: 900; place-items: center; }
      .profile h3, .profile p { margin: 0; }
      .profile p { margin-top: 3px; color: #aaa1bb; font-size: 12px; }
      .profile button { margin-left: auto; padding: 8px 11px; border: 1px solid #bd93f955; border-radius: 8px; color: #bd93f9; background: transparent; }
    `,
  },
  {
    id: 'switch-toggle',
    name: 'Switch toggle',
    category: 'Toggles',
    technology: 'HTML & CSS',
    html: '<label class="switch"><input type="checkbox" checked /><span></span><b>Notifications</b></label>',
    css: `
      .switch { display: flex; align-items: center; gap: 12px; color: #f8f5ff; cursor: pointer; }
      .switch input { position: absolute; opacity: 0; }
      .switch span { position: relative; width: 48px; height: 27px; border-radius: 999px; background: #3b334b; transition: .25s; }
      .switch span::after { position: absolute; top: 4px; left: 4px; width: 19px; height: 19px; border-radius: 50%; background: white; content: ""; transition: .25s; }
      .switch input:checked + span { background: #bd93f9; }
      .switch input:checked + span::after { transform: translateX(21px); }
    `,
  },
  {
    id: 'hover-tooltip',
    name: 'Hover tooltip',
    category: 'Feedback',
    technology: 'HTML & CSS',
    html: '<button class="tooltip">Hover me<span>Helpful information</span></button>',
    css: `
      .tooltip { position: relative; padding: 11px 16px; border: 1px solid #3b334b; border-radius: 9px; color: #f8f5ff; background: #211d2b; cursor: pointer; }
      .tooltip span { position: absolute; bottom: calc(100% + 10px); left: 50%; width: max-content; padding: 8px 10px; border-radius: 7px; color: #21151a; background: #bd93f9; font-size: 12px; opacity: 0; pointer-events: none; transform: translate(-50%, 5px); transition: .2s; }
      .tooltip:hover span { opacity: 1; transform: translate(-50%, 0); }
    `,
  },
  {
    id: 'skeleton-loader',
    name: 'Skeleton loader',
    category: 'Loaders',
    technology: 'HTML & CSS',
    html: '<div class="skeleton-card"><i></i><section><b></b><span></span><span></span></section></div>',
    css: `
      .skeleton-card { display: flex; gap: 14px; width: 300px; padding: 18px; border-radius: 16px; background: #211d2b; }
      .skeleton-card i, .skeleton-card b, .skeleton-card span { display: block; border-radius: 8px; background: linear-gradient(90deg, #30293d 25%, #453a57 50%, #30293d 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; }
      .skeleton-card i { width: 52px; height: 52px; border-radius: 14px; }
      .skeleton-card section { flex: 1; }
      .skeleton-card b { width: 65%; height: 13px; margin: 4px 0 10px; }
      .skeleton-card span { width: 100%; height: 9px; margin-top: 7px; }
      @keyframes shimmer { to { background-position: -200% 0; } }
    `,
  },
  {
    id: 'notification-alert',
    name: 'Notification alert',
    category: 'Feedback',
    technology: 'HTML & CSS',
    html: '<div class="alert"><strong>✓</strong><div><b>Changes saved</b><p>Your settings were updated.</p></div></div>',
    css: `
      .alert { display: flex; align-items: flex-start; gap: 12px; width: 310px; padding: 15px; border: 1px solid #50fa7b44; border-radius: 13px; color: #f8f5ff; background: #50fa7b12; }
      .alert strong { display: grid; width: 28px; height: 28px; border-radius: 9px; color: #17141f; background: #50fa7b; place-items: center; }
      .alert b, .alert p { margin: 0; }
      .alert p { margin-top: 3px; color: #aaa1bb; font-size: 13px; }
    `,
  },
  {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    category: 'Navigation',
    technology: 'HTML & CSS',
    html: '<nav class="crumbs"><a href="#">Home</a><span>›</span><a href="#">Components</a><span>›</span><b>Cards</b></nav>',
    css: `
      .crumbs { display: flex; align-items: center; gap: 9px; padding: 10px 14px; border: 1px solid #3b334b; border-radius: 10px; color: #aaa1bb; background: #211d2b; font-size: 13px; }
      .crumbs a { color: #bd93f9; text-decoration: none; }
      .crumbs b { color: #f8f5ff; }
    `,
  },
  {
    id: 'stats-card',
    name: 'Stats card',
    category: 'Data Display',
    technology: 'HTML & CSS',
    html: '<article class="stat"><span>Weekly visitors</span><strong>24.8K</strong><small>↗ 18.2% this week</small></article>',
    css: `
      .stat { width: 240px; padding: 20px; border: 1px solid #3b334b; border-radius: 16px; color: #f8f5ff; background: linear-gradient(145deg, #211d2b, #272032); }
      .stat span { color: #aaa1bb; font-size: 13px; }
      .stat strong { display: block; margin: 8px 0; font-size: 34px; }
      .stat small { color: #50fa7b; }
    `,
  },
  {
    id: 'progress-bar',
    name: 'Progress bar',
    category: 'Data Display',
    technology: 'HTML & CSS',
    html: '<div class="progress"><header><span>Project progress</span><b>72%</b></header><div><i></i></div></div>',
    css: `
      .progress { width: 300px; color: #f8f5ff; }
      .progress header { display: flex; justify-content: space-between; margin-bottom: 9px; font-size: 13px; }
      .progress header b { color: #ff8a5b; }
      .progress > div { height: 10px; overflow: hidden; border-radius: 999px; background: #30293d; }
      .progress i { display: block; width: 72%; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #bd93f9, #ff8a5b); }
    `,
  },
  {
    id: 'avatar-group',
    name: 'Avatar group',
    category: 'Data Display',
    technology: 'HTML & CSS',
    html: '<div class="avatars"><span>AM</span><span>FR</span><span>UI</span><span>+8</span></div>',
    css: `
      .avatars { display: flex; padding-left: 12px; }
      .avatars span { display: grid; width: 44px; height: 44px; margin-left: -12px; border: 3px solid #1d1927; border-radius: 50%; color: #21151a; background: #bd93f9; font-size: 11px; font-weight: 900; place-items: center; }
      .avatars span:nth-child(2) { background: #ff8a5b; }
      .avatars span:nth-child(3) { background: #8be9fd; }
      .avatars span:last-child { color: #f8f5ff; background: #3b334b; }
    `,
  },
  {
    id: 'gradient-heading',
    name: 'Gradient heading',
    category: 'Typography',
    technology: 'HTML & CSS',
    html: '<h2 class="gradient-heading">Create without limits.</h2>',
    css: `
      .gradient-heading { margin: 0; color: transparent; background: linear-gradient(90deg, #f8f5ff 5%, #bd93f9 48%, #ff8a5b 95%); background-clip: text; font-size: clamp(28px, 6vw, 52px); font-weight: 900; letter-spacing: -.05em; -webkit-background-clip: text; }
    `,
  },
];
