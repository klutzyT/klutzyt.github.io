// ...existing code...

// Animate sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const reveal = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < trigger) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});