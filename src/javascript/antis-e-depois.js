function initAntesDepoisGallery() {
  const galleryData = [
    {
      before: 'src/image/depois2.jpg',
      after: 'src/image/antis(1).jpg',
      title: 'Tratamento Facial',
      description: 'Redução de manchas e uniformização da pele',
      testimonial: '"Minha autoestima melhorou muito!" - Maria S.'
    },

    {
      before: 'src/image/after.jpg ',
      after: 'src/image/before.jpg',
      title: 'Clareamento Dental',
      description: 'Sorriso mais branco e natural',
      testimonial: '"Adorei o resultado!" - João P.'
    },

    {
      before: 'src/image/after (2).jpg',
      after: 'src/image/befor.jpg',
      title: 'Contorno Corporal',
      description: 'Definição muscular e perda de medidas',
      testimonial: '"Transformação incrível!" - Ana L.'
    },
    // Outros itens mantidos igual
  ];

  function createAntesDepoisItem(data) {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    item.innerHTML = `
          <div class="image-comparison">
              <div class="image-comparison-container">
                  <img src="${data.after}" alt="Depois" class="after-image">
                  <img src="${data.before}" alt="Antes" class="before-image">
                  <div class="comparison-slider">
                      <div class="slider-handle">
                          <i class="ri-swap-line"></i>
                      </div>
                  </div>
              </div>
          </div>
          <div class="gallery-content">
              <h3>${data.title}</h3>
              <p>${data.description}</p>
              <p class="testimonial">${data.testimonial}</p>
          </div>
      `;

    const container = item.querySelector('.image-comparison-container');
    const slider = item.querySelector('.comparison-slider');
    const beforeImage = item.querySelector('.before-image');

    function updateSlider(clientX) {
      const containerRect = container.getBoundingClientRect();
      let pos = ((clientX - containerRect.left) / containerRect.width) * 100;
      pos = Math.max(0, Math.min(pos, 100));

      beforeImage.style.clipPath = `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`;
      slider.style.left = `${pos}%`;
    }

    // Use mouseenter para evitar conflitos com outros eventos
    container.addEventListener('mouseenter', () => {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    });

    function handleMouseMove(e) {
      updateSlider(e.clientX);
    }

    function handleMouseLeave() {
      beforeImage.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
      slider.style.left = '50%';

      // Remover os event listeners para evitar múltiplas adições
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    }

    return item;
  }

  const gallery = document.getElementById('antesDepoisGallery');

  // Verificar se o elemento existe antes de adicionar
  if (gallery) {
    galleryData.forEach(data => {
      const galleryItem = createAntesDepoisItem(data);
      gallery.appendChild(galleryItem);
    });
  }
}

// Executar a inicialização quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', initAntesDepoisGallery);
