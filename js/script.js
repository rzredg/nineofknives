/* js/script.js */
document.addEventListener('DOMContentLoaded', () => {
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
});