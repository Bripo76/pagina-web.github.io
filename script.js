// script.js - única función JS
function toggleMenu() {
  document.body.classList.toggle('menu-open');
  const hb = document.querySelector('.hamburger span');
  if (!hb) return;
  if (document.body.classList.contains('menu-open')) {
    hb.style.transform = 'rotate(45deg)';
  } else {
    hb.style.transform = 'rotate(0deg)';
  }
}
// simple form feedback for contact pages
function setupContactForms() {
  document.querySelectorAll('form[data-contact="true"]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('¡Gracias! Tu mensaje ha sido enviado. Nos comunicaremos pronto.');
      form.reset();
    });
  });
}
document.addEventListener('DOMContentLoaded', setupContactForms);
