const galleryData = [
    {
        src: 'src/image/equipa (1).png',
        category: 'ambiente',
        title: 'Recepção Moderna'
    },
    {
        src: 'src/image/equipa 2.png',
        category: 'equipe',
        title: 'Equipe Profissional'
    },
    {
        src: 'src/image/DEPOIMENTO (2).png',
        category: 'antes-depois',
        title: 'Transformação Facial'
    },
    {
        src: 'src/image/DEPOIMENTO (3).png',
        category: 'momentos',
        title: 'Momento de Celebração'
    }
    // Adicione mais imagens aqui
];

const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const filterButtons = document.querySelectorAll('.filter-btn');

function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.dataset.category = item.category;
    
    galleryItem.innerHTML = `
        <img src="${item.src}" alt="${item.title}">
        <div class="overlay">
            <div class="overlay-content">
                <h3>${item.title}</h3>
            </div>
        </div>
    `;
    
    galleryItem.addEventListener('click', () => {
        lightboxImage.src = item.src;
        lightbox.style.display = 'flex';
    });
    
    return galleryItem;
}

function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterGallery(button.dataset.filter);
    });
});

galleryData.forEach(data => {
    const galleryItem = createGalleryItem(data);
    galleryGrid.appendChild(galleryItem);
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});