// Animate sections and images on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const images = document.querySelectorAll('.pop-img');
  const reveal = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < trigger) {
        section.classList.add('visible');
      }
    });
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < trigger) {
        img.classList.add('pop');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});