export const javascriptComponents = [
  {
    id: 'step-counter',
    name: 'Step counter',
    category: 'Interactive',
    technology: 'JavaScript',
    html: '<div class="counter"><button data-action="minus">−</button><strong id="count">0</strong><button data-action="plus">+</button></div>',
    css: `
      .counter { display: flex; align-items: center; gap: 18px; padding: 12px; border: 1px solid #3b334b; border-radius: 14px; background: #211d2b; }
      .counter button { width: 42px; height: 42px; border: 0; border-radius: 10px; color: #21151a; background: #bd93f9; font-size: 22px; cursor: pointer; }
      .counter strong { min-width: 35px; color: #f8f5ff; font-size: 24px; text-align: center; }
    `,
    javascript: `
      const output = document.querySelector('#count');
      let value = 0;

      document.querySelectorAll('[data-action]').forEach((button) => {
        button.addEventListener('click', () => {
          value += button.dataset.action === 'plus' ? 1 : -1;
          output.textContent = value;
        });
      });
    `,
  },
  {
    id: 'password-toggle',
    name: 'Password toggle',
    category: 'Inputs',
    technology: 'JavaScript',
    html: '<label class="password"><span>Password</span><div><input id="password" type="password" value="frontrun2026" /><button id="toggle-password" type="button">Show</button></div></label>',
    css: `
      .password { display: grid; gap: 8px; width: 300px; color: #aaa1bb; font-size: 13px; }
      .password div { display: flex; border: 1px solid #3b334b; border-radius: 11px; background: #211d2b; }
      .password input { flex: 1; min-width: 0; padding: 13px; border: 0; outline: 0; color: #f8f5ff; background: transparent; }
      .password button { border: 0; padding: 0 13px; color: #bd93f9; background: transparent; font-weight: 700; cursor: pointer; }
    `,
    javascript: `
      const input = document.querySelector('#password');
      const button = document.querySelector('#toggle-password');

      button.addEventListener('click', () => {
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        button.textContent = isHidden ? 'Hide' : 'Show';
      });
    `,
  },
  {
    id: 'accordion',
    name: 'Accordion',
    category: 'Interactive',
    technology: 'JavaScript',
    html: '<div class="accordion"><button aria-expanded="true">What is FrontRun?<span>+</span></button><p>FrontRun is a collection of reusable interface components.</p><button aria-expanded="false">Can I customize it?<span>+</span></button><p hidden>Yes. Every component is designed to be edited.</p></div>',
    css: `
      .accordion { width: 330px; overflow: hidden; border: 1px solid #3b334b; border-radius: 14px; background: #211d2b; }
      .accordion button { display: flex; justify-content: space-between; width: 100%; padding: 15px; border: 0; border-bottom: 1px solid #3b334b; color: #f8f5ff; background: transparent; font-weight: 700; text-align: left; cursor: pointer; }
      .accordion button span { color: #ff8a5b; transition: .2s; }
      .accordion button[aria-expanded="true"] span { transform: rotate(45deg); }
      .accordion p { margin: 0; padding: 14px 15px; color: #aaa1bb; font-size: 13px; line-height: 1.5; }
    `,
    javascript: `
      document.querySelectorAll('.accordion button').forEach((button) => {
        button.addEventListener('click', () => {
          const panel = button.nextElementSibling;
          const isOpen = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', String(!isOpen));
          panel.hidden = isOpen;
        });
      });
    `,
  },
  {
    id: 'content-tabs',
    name: 'Content tabs',
    category: 'Navigation',
    technology: 'JavaScript',
    html: '<div class="tabs"><nav><button class="active" data-tab="preview">Preview</button><button data-tab="code">Code</button><button data-tab="usage">Usage</button></nav><p id="tab-panel">A polished live preview of your component.</p></div>',
    css: `
      .tabs { width: 330px; overflow: hidden; border: 1px solid #3b334b; border-radius: 14px; color: #f8f5ff; background: #211d2b; }
      .tabs nav { display: flex; padding: 6px; border-bottom: 1px solid #3b334b; }
      .tabs button { flex: 1; padding: 9px; border: 0; border-radius: 8px; color: #aaa1bb; background: transparent; cursor: pointer; }
      .tabs button.active { color: #21151a; background: #bd93f9; font-weight: 800; }
      .tabs p { min-height: 42px; margin: 0; padding: 18px; color: #aaa1bb; font-size: 13px; }
    `,
    javascript: `
      const content = {
        preview: 'A polished live preview of your component.',
        code: 'Clean HTML, CSS, and JavaScript ready to copy.',
        usage: 'Add it to any page and customize the design tokens.',
      };
      const panel = document.querySelector('#tab-panel');

      document.querySelectorAll('[data-tab]').forEach((tab) => {
        tab.addEventListener('click', () => {
          document.querySelector('.tabs .active').classList.remove('active');
          tab.classList.add('active');
          panel.textContent = content[tab.dataset.tab];
        });
      });
    `,
  },
  {
    id: 'character-counter',
    name: 'Character counter',
    category: 'Forms',
    technology: 'JavaScript',
    html: '<label class="message-box"><span>Short bio</span><textarea id="bio" maxlength="80" placeholder="Tell us about yourself"></textarea><small><b id="characters">0</b>/80 characters</small></label>',
    css: `
      .message-box { display: grid; gap: 8px; width: 320px; color: #aaa1bb; font-size: 13px; }
      .message-box textarea { min-height: 90px; resize: none; padding: 13px; border: 1px solid #3b334b; border-radius: 11px; outline: 0; color: #f8f5ff; background: #211d2b; font: inherit; }
      .message-box textarea:focus { border-color: #bd93f9; box-shadow: 0 0 0 3px #bd93f922; }
      .message-box small { text-align: right; }
      .message-box b { color: #ff8a5b; }
    `,
    javascript: `
      const textarea = document.querySelector('#bio');
      const output = document.querySelector('#characters');

      textarea.addEventListener('input', () => {
        output.textContent = textarea.value.length;
      });
    `,
  },
  {
    id: 'toast-trigger',
    name: 'Toast trigger',
    category: 'Feedback',
    technology: 'JavaScript',
    html: '<div class="toast-demo"><button id="show-toast">Save changes</button><div id="toast" role="status">✓ Changes saved successfully</div></div>',
    css: `
      .toast-demo > button { padding: 12px 17px; border: 0; border-radius: 10px; color: #21151a; background: #ff8a5b; font-weight: 800; cursor: pointer; }
      #toast { position: fixed; right: 18px; bottom: 18px; padding: 13px 16px; border: 1px solid #50fa7b55; border-radius: 11px; color: #f8f5ff; background: #211d2b; box-shadow: 0 18px 45px #09070d70; opacity: 0; transform: translateY(15px); transition: .25s; pointer-events: none; }
      #toast.visible { opacity: 1; transform: translateY(0); }
    `,
    javascript: `
      const toast = document.querySelector('#toast');
      let timer;

      document.querySelector('#show-toast').addEventListener('click', () => {
        clearTimeout(timer);
        toast.classList.add('visible');
        timer = setTimeout(() => toast.classList.remove('visible'), 2200);
      });
    `,
  },
  {
    id: 'like-button',
    name: 'Like button',
    category: 'Buttons',
    technology: 'JavaScript',
    html: '<button class="like-button" type="button" aria-pressed="false"><span>♡</span><b>128</b></button>',
    css: `
      .like-button { display: inline-flex; align-items: center; gap: 9px; padding: 11px 15px; border: 1px solid #3b334b; border-radius: 999px; color: #f8f5ff; background: #211d2b; cursor: pointer; transition: .2s; }
      .like-button span { color: #ff79c6; font-size: 22px; line-height: 1; }
      .like-button[aria-pressed="true"] { border-color: #ff79c666; background: #ff79c615; }
      .like-button[aria-pressed="true"] span { transform: scale(1.12); }
    `,
    javascript: `
      const button = document.querySelector('.like-button');
      const icon = button.querySelector('span');
      const count = button.querySelector('b');

      button.addEventListener('click', () => {
        const isLiked = button.getAttribute('aria-pressed') === 'true';
        button.setAttribute('aria-pressed', String(!isLiked));
        icon.textContent = isLiked ? '♡' : '♥';
        count.textContent = isLiked ? '128' : '129';
      });
    `,
  },
  {
    id: 'color-generator',
    name: 'Color generator',
    category: 'Interactive',
    technology: 'JavaScript',
    html: '<div class="color-generator"><div id="swatch"></div><code id="color-code">#BD93F9</code><button id="new-color">Generate color</button></div>',
    css: `
      .color-generator { display: grid; grid-template-columns: 70px 1fr; gap: 12px; width: 280px; padding: 16px; border: 1px solid #3b334b; border-radius: 15px; color: #f8f5ff; background: #211d2b; }
      #swatch { grid-row: span 2; border-radius: 11px; background: #bd93f9; }
      .color-generator code { align-self: center; font-size: 16px; font-weight: 800; }
      .color-generator button { padding: 9px; border: 0; border-radius: 8px; color: #21151a; background: #ff8a5b; font-weight: 700; cursor: pointer; }
    `,
    javascript: `
      const swatch = document.querySelector('#swatch');
      const code = document.querySelector('#color-code');

      document.querySelector('#new-color').addEventListener('click', () => {
        const color = '#' + Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0')
          .toUpperCase();
        swatch.style.background = color;
        code.textContent = color;
      });
    `,
  },
];
