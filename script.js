document.querySelectorAll('.grid-item img').forEach(img => {
    img.addEventListener('click', () => {
      const fullscreen = document.createElement('div');
      fullscreen.classList.add('fullscreen');
      const imgClone = img.cloneNode();
      fullscreen.appendChild(imgClone);
      document.body.appendChild(fullscreen);
      fullscreen.addEventListener('click', () => {
        document.body.removeChild(fullscreen);
      });
    });
  });
  