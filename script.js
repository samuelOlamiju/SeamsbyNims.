// Nav scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => io.observe(el));

// Process circle - highlight current step on hover
const steps = document.querySelectorAll('.process-step');
const innerNum = document.querySelector('.process-inner-num');
const innerLabel = document.querySelector('.process-inner-label');
steps.forEach((step, i) => {
  step.addEventListener('mouseenter', () => {
    innerNum.textContent = '0' + (i + 1);
    innerLabel.textContent = ['Consult', 'Design', 'Wear'][i];
  });
  step.addEventListener('mouseleave', () => {
    innerNum.textContent = '3';
    innerLabel.textContent = 'Easy Steps';
  });
});

// Animate hero headline on load
document.querySelectorAll('.hero .reveal').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 150 + i * 120);
});

// Newsletter form
const nlInput = document.querySelector('.nl-input');
const nlBtn = document.querySelector('.nl-btn');
if (nlBtn) {
  nlBtn.addEventListener('click', () => {
    if (nlInput && nlInput.value.includes('@')) {
      nlBtn.textContent = '✓ Subscribed!';
      nlBtn.style.background = 'var(--gn)';
      setTimeout(() => { nlBtn.textContent = 'Subscribe'; nlBtn.style.background = ''; }, 3000);
    } else if (nlInput) {
      nlInput.style.border = '1px solid rgba(168,112,48,.6)';
      setTimeout(() => nlInput.style.border = '', 2000);
    }
  });
}

// Wishlist toggle
document.querySelectorAll('.prod-wishlist').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.style.background = btn.style.background === 'var(--tl)' ? '#fff' : 'var(--tl)';
    btn.querySelector('svg path').style.fill = btn.style.background === 'var(--tl)' ? '#fff' : 'none';
    btn.querySelector('svg path').style.stroke = btn.style.background === 'var(--tl)' ? '#fff' : '#0A1818';
  });
});
