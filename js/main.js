// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Footer year
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

// Trial form: opens the visitor's email app with the note filled in
const form = document.getElementById('trial-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const body = [
      `Name: ${d.get('name')}`,
      `Phone: ${d.get('phone') || '-'}`,
      `Email: ${d.get('email')}`,
      `Who's training: ${d.get('who')}`,
      '',
      d.get('message') || ''
    ].join('\n');
    const subject = `2-week trial request from ${d.get('name')}`;
    window.location.href = `mailto:info@trivalleykarate.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
