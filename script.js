// menus
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
// mensajes d contacto
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

// ranqueo de estrellas del menui
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', (e) => {
    const rating = e.target.dataset.value;
    const container = e.target.closest('.rating');
    
    container.querySelectorAll('.star').forEach(s => {
      s.classList.remove('active');
      if (s.dataset.value <= rating) {
        s.classList.add('active');
      }
    });
  });

  star.addEventListener('mouseover', (e) => {
    const value = e.target.dataset.value;
    const container = e.target.closest('.rating');
    
    container.querySelectorAll('.star').forEach(s => {
      s.style.opacity = s.dataset.value <= value ? '1' : '0.3';
    });
  });

  star.closest('.rating').addEventListener('mouseleave', () => {
    document.querySelectorAll('.star').forEach(s => {
      s.style.opacity = s.classList.contains('active') ? '1' : '0.3';
    });
  });
});