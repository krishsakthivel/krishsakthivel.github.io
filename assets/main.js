// One reveal pass on load for hero content, plus a single observer for
// section headings coming into view. Deliberately not applied to every
// element on the page — see frontend-design notes on motion.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), 100 + i * 90);
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal:not(.hero .reveal)').forEach((el) => obs.observe(el));
});
