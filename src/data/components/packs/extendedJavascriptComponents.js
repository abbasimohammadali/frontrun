const definitions = [
  ['feature-toggle', 'Feature toggle', 'Toggles', 'toggle', 'Enable analytics', '#bd93f9'],
  ['compact-theme-toggle', 'Compact theme toggle', 'Toggles', 'toggle', 'Dark appearance', '#8be9fd'],
  ['privacy-toggle', 'Privacy toggle', 'Toggles', 'toggle', 'Private profile', '#ff8a5b'],
  ['star-rating', 'Star rating', 'Interactive', 'rating', 'Rate this component', '#f1fa8c'],
  ['emoji-rating', 'Emoji rating', 'Interactive', 'rating', 'How was your experience?', '#ff79c6'],
  ['feedback-score', 'Feedback score', 'Interactive', 'rating', 'Score the design', '#8be9fd'],
  ['account-dropdown', 'Account dropdown', 'Navigation', 'dropdown', 'Open account menu', '#bd93f9'],
  ['actions-dropdown', 'Actions dropdown', 'Navigation', 'dropdown', 'More actions', '#ff8a5b'],
  ['filter-dropdown', 'Filter dropdown', 'Navigation', 'dropdown', 'Filter results', '#8be9fd'],
  ['upload-progress', 'Upload progress', 'Data Display', 'progress', 'Upload files', '#bd93f9'],
  ['install-progress', 'Install progress', 'Data Display', 'progress', 'Install package', '#50fa7b'],
  ['course-progress', 'Course progress', 'Data Display', 'progress', 'Continue lesson', '#ff8a5b'],
  ['task-checklist', 'Task checklist', 'Forms', 'checklist', 'Launch checklist', '#50fa7b'],
  ['onboarding-checklist', 'Onboarding checklist', 'Forms', 'checklist', 'Getting started', '#bd93f9'],
  ['settings-checklist', 'Settings checklist', 'Forms', 'checklist', 'Privacy settings', '#8be9fd'],
  ['countdown-timer', 'Countdown timer', 'Data Display', 'timer', 'Release countdown', '#ff8a5b'],
  ['focus-timer', 'Focus timer', 'Data Display', 'timer', 'Focus sprint', '#bd93f9'],
  ['resend-timer', 'Resend timer', 'Data Display', 'timer', 'Resend code', '#8be9fd'],
  ['confirm-modal', 'Confirm modal', 'Overlays', 'modal', 'Delete component?', '#ff5555'],
  ['publish-modal', 'Publish modal', 'Overlays', 'modal', 'Publish changes?', '#50fa7b'],
  ['invite-modal', 'Invite modal', 'Overlays', 'modal', 'Invite teammate?', '#bd93f9'],
  ['reaction-button', 'Reaction button', 'Buttons', 'reaction', 'Celebrate', '#ff79c6'],
  ['bookmark-button', 'Bookmark button', 'Buttons', 'reaction', 'Bookmark', '#f1fa8c'],
  ['clap-button', 'Clap button', 'Buttons', 'reaction', 'Applaud', '#8be9fd'],
];

function markupFor({ kind, label }) {
  const templates = {
    toggle: `<label class="js-toggle"><span><b>${label}</b><small>Click to change this preference.</small></span><input type="checkbox" /><i></i></label>`,
    rating: `<div class="js-rating"><b>${label}</b><div aria-label="Rating"><button data-score="1">★</button><button data-score="2">★</button><button data-score="3">★</button><button data-score="4">★</button><button data-score="5">★</button></div><small>Choose a score</small></div>`,
    dropdown: `<div class="js-dropdown"><button class="dropdown-trigger">${label}<span>⌄</span></button><nav hidden><a href="#">View details</a><a href="#">Duplicate item</a><a href="#">Archive</a></nav></div>`,
    progress: `<div class="js-progress"><header><b>${label}</b><span>0%</span></header><div><i></i></div><button>Start</button></div>`,
    checklist: `<div class="js-checklist"><b>${label}</b><label><input type="checkbox" /> Create account</label><label><input type="checkbox" /> Pick a theme</label><label><input type="checkbox" /> Publish project</label><small>0 of 3 complete</small></div>`,
    timer: `<div class="js-timer"><span>${label}</span><strong>10</strong><button>Start timer</button></div>`,
    modal: `<div class="js-modal-demo"><button class="modal-trigger">Open dialog</button><div class="mini-overlay" hidden><section><b>${label}</b><p>You can safely continue or cancel this action.</p><footer><button data-close>Cancel</button><button data-confirm>Continue</button></footer></section></div></div>`,
    reaction: `<button class="js-reaction" aria-pressed="false"><span>♡</span><b>${label}</b><small>24</small></button>`,
  };

  return templates[kind];
}

function scriptFor(kind) {
  const scripts = {
    toggle: `
      const input = document.querySelector('.js-toggle input');
      input.addEventListener('change', () => {
        document.querySelector('.js-toggle small').textContent = input.checked ? 'Preference enabled.' : 'Preference disabled.';
      });
    `,
    rating: `
      const output = document.querySelector('.js-rating small');
      document.querySelectorAll('[data-score]').forEach((button) => {
        button.addEventListener('click', () => {
          const score = Number(button.dataset.score);
          document.querySelectorAll('[data-score]').forEach((star) => star.classList.toggle('active', Number(star.dataset.score) <= score));
          output.textContent = score + ' of 5 selected';
        });
      });
    `,
    dropdown: `
      const trigger = document.querySelector('.dropdown-trigger');
      const menu = document.querySelector('.js-dropdown nav');
      trigger.addEventListener('click', () => {
        menu.hidden = !menu.hidden;
        trigger.setAttribute('aria-expanded', String(!menu.hidden));
      });
    `,
    progress: `
      const button = document.querySelector('.js-progress button');
      const bar = document.querySelector('.js-progress i');
      const output = document.querySelector('.js-progress header span');
      let timer;
      button.addEventListener('click', () => {
        clearInterval(timer);
        let value = 0;
        button.disabled = true;
        timer = setInterval(() => {
          value += 4;
          bar.style.width = value + '%';
          output.textContent = value + '%';
          if (value >= 100) {
            clearInterval(timer);
            button.disabled = false;
            button.textContent = 'Restart';
          }
        }, 45);
      });
    `,
    checklist: `
      const checks = [...document.querySelectorAll('.js-checklist input')];
      const output = document.querySelector('.js-checklist small');
      checks.forEach((check) => check.addEventListener('change', () => {
        const completed = checks.filter((item) => item.checked).length;
        output.textContent = completed + ' of ' + checks.length + ' complete';
      }));
    `,
    timer: `
      const button = document.querySelector('.js-timer button');
      const output = document.querySelector('.js-timer strong');
      let timer;
      button.addEventListener('click', () => {
        clearInterval(timer);
        let value = 10;
        output.textContent = value;
        button.disabled = true;
        timer = setInterval(() => {
          value -= 1;
          output.textContent = value;
          if (value <= 0) {
            clearInterval(timer);
            button.disabled = false;
            button.textContent = 'Restart timer';
          }
        }, 500);
      });
    `,
    modal: `
      const overlay = document.querySelector('.mini-overlay');
      document.querySelector('.modal-trigger').addEventListener('click', () => { overlay.hidden = false; });
      overlay.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => { overlay.hidden = true; }));
    `,
    reaction: `
      const button = document.querySelector('.js-reaction');
      button.addEventListener('click', () => {
        const active = button.getAttribute('aria-pressed') === 'true';
        button.setAttribute('aria-pressed', String(!active));
        button.querySelector('span').textContent = active ? '♡' : '♥';
        button.querySelector('small').textContent = active ? '24' : '25';
      });
    `,
  };

  return scripts[kind];
}

function stylesFor({ kind, accent }) {
  const base = `
    * { box-sizing: border-box; }
    button, input { font: inherit; }
    button { cursor: pointer; }
  `;

  const styles = {
    toggle: `
      .js-toggle { display: flex; align-items: center; gap: 16px; width: 320px; padding: 15px; border: 1px solid #3b334b; border-radius: 14px; color: #f8f5ff; background: #211d2b; cursor: pointer; }
      .js-toggle > span { display: grid; gap: 4px; margin-right: auto; }
      .js-toggle small { color: #aaa1bb; font-size: 11px; }
      .js-toggle input { position: absolute; opacity: 0; }
      .js-toggle i { position: relative; width: 48px; height: 27px; border-radius: 999px; background: #3b334b; transition: .2s; }
      .js-toggle i::after { position: absolute; top: 4px; left: 4px; width: 19px; height: 19px; border-radius: 50%; background: white; content: ""; transition: .2s; }
      .js-toggle input:checked + i { background: ${accent}; }
      .js-toggle input:checked + i::after { transform: translateX(21px); }
    `,
    rating: `
      .js-rating { display: grid; gap: 10px; width: 290px; padding: 18px; border: 1px solid #3b334b; border-radius: 14px; color: #f8f5ff; background: #211d2b; text-align: center; }
      .js-rating div { display: flex; justify-content: center; gap: 5px; }
      .js-rating button { border: 0; color: #51485f; background: transparent; font-size: 27px; transition: .15s; }
      .js-rating button.active { color: ${accent}; transform: scale(1.08); }
      .js-rating small { color: #aaa1bb; }
    `,
    dropdown: `
      .js-dropdown { position: relative; }
      .dropdown-trigger { display: flex; align-items: center; justify-content: space-between; gap: 25px; min-width: 210px; padding: 12px 14px; border: 1px solid #3b334b; border-radius: 10px; color: #f8f5ff; background: #211d2b; }
      .dropdown-trigger span { color: ${accent}; }
      .js-dropdown nav { position: absolute; z-index: 3; top: calc(100% + 7px); width: 100%; padding: 6px; border: 1px solid #3b334b; border-radius: 10px; background: #211d2b; box-shadow: 0 18px 40px #09070d75; }
      .js-dropdown a { display: block; padding: 9px; border-radius: 7px; color: #aaa1bb; font-size: 12px; text-decoration: none; }
      .js-dropdown a:hover { color: #17141f; background: ${accent}; }
    `,
    progress: `
      .js-progress { width: 310px; padding: 17px; border: 1px solid #3b334b; border-radius: 14px; color: #f8f5ff; background: #211d2b; }
      .js-progress header { display: flex; justify-content: space-between; font-size: 13px; }
      .js-progress header span { color: ${accent}; }
      .js-progress > div { height: 9px; margin: 13px 0; overflow: hidden; border-radius: 999px; background: #30293d; }
      .js-progress i { display: block; width: 0; height: 100%; border-radius: inherit; background: ${accent}; transition: width .1s; }
      .js-progress button { width: 100%; padding: 9px; border: 0; border-radius: 8px; color: #17141f; background: ${accent}; font-weight: 800; }
    `,
    checklist: `
      .js-checklist { display: grid; gap: 10px; width: 290px; padding: 18px; border: 1px solid #3b334b; border-radius: 14px; color: #f8f5ff; background: #211d2b; }
      .js-checklist > b { margin-bottom: 3px; }
      .js-checklist label { display: flex; gap: 9px; padding: 9px; border-radius: 8px; color: #aaa1bb; background: #ffffff08; font-size: 13px; }
      .js-checklist input { accent-color: ${accent}; }
      .js-checklist small { color: ${accent}; text-align: right; }
    `,
    timer: `
      .js-timer { display: grid; gap: 10px; width: 230px; padding: 20px; border: 1px solid #3b334b; border-radius: 16px; color: #f8f5ff; background: #211d2b; text-align: center; }
      .js-timer span { color: #aaa1bb; font-size: 12px; }
      .js-timer strong { color: ${accent}; font-size: 48px; }
      .js-timer button { padding: 10px; border: 0; border-radius: 9px; color: #17141f; background: ${accent}; font-weight: 800; }
    `,
    modal: `
      .modal-trigger { padding: 12px 17px; border: 0; border-radius: 10px; color: #17141f; background: ${accent}; font-weight: 800; }
      .mini-overlay { position: fixed; inset: 0; display: grid; padding: 15px; background: #09070dcc; place-items: center; }
      .mini-overlay[hidden] { display: none; }
      .mini-overlay section { width: 290px; padding: 20px; border: 1px solid #3b334b; border-radius: 16px; color: #f8f5ff; background: #211d2b; box-shadow: 0 25px 70px #0008; }
      .mini-overlay p { color: #aaa1bb; font-size: 13px; line-height: 1.55; }
      .mini-overlay footer { display: flex; justify-content: flex-end; gap: 8px; }
      .mini-overlay footer button { padding: 8px 10px; border: 1px solid #3b334b; border-radius: 8px; color: #f8f5ff; background: transparent; }
      .mini-overlay footer button:last-child { border-color: ${accent}; color: #17141f; background: ${accent}; }
    `,
    reaction: `
      .js-reaction { display: inline-flex; align-items: center; gap: 9px; padding: 11px 14px; border: 1px solid #3b334b; border-radius: 999px; color: #f8f5ff; background: #211d2b; transition: .2s; }
      .js-reaction span { color: ${accent}; font-size: 21px; }
      .js-reaction small { display: grid; min-width: 25px; height: 25px; border-radius: 999px; color: #17141f; background: ${accent}; font-weight: 800; place-items: center; }
      .js-reaction[aria-pressed="true"] { border-color: ${accent}66; box-shadow: 0 0 28px ${accent}20; transform: translateY(-2px); }
    `,
  };

  return base + styles[kind];
}

export const extendedJavascriptComponents = definitions.map(
  ([id, name, category, kind, label, accent]) => {
    const definition = { kind, label, accent };

    return {
      id,
      name,
      category,
      technology: 'JavaScript',
      html: markupFor(definition),
      css: stylesFor(definition),
      javascript: scriptFor(kind),
    };
  },
);
