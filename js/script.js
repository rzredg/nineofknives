/* js/script.js */
document.addEventListener('DOMContentLoaded', () => {
  // Gallery Slideshow
  document.querySelectorAll('.gallery').forEach(gallery => {
    const images = gallery.dataset.images.split(',');
    let current = 0;
    const imgEl = document.createElement('img');
    imgEl.src = images[current];
    gallery.appendChild(imgEl);

    imgEl.addEventListener('click', () => {
      current = (current + 1) % images.length;
      imgEl.src = images[current];
    });
  });

  // Scroll reveal animations
  const reveals = document.querySelectorAll('.reveal, section, .project');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
