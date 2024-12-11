
        const depoimentosData = [
            {
                nome: "Maria Silva",
                foto: "src/image/DEPOIMENTO (1).png",
                texto: "Senti-me completamente renovada após o tratamento! A equipe é incrível e super atenciosa.",
                avaliacao: 5
            },
            {
                nome: "João Santos",
                foto: "src/image/DEPOIMENTO (3).png",
                texto: "Resultado além das minhas expectativas. Profissionalismo e cuidado em cada detalhe.",
                avaliacao: 5
            },
            {
                nome: "Ana Oliveira",
                foto: "src/image/DEPOIMENTO (2).png",
                texto: "Minha autoestima aumentou tremendamente. Recomendo cada procedimento com confiança.",
                avaliacao: 5
            },
            {
                nome: "Carlos Souza",
                foto: "src/image/DEPOIMENTO (4).png",
                texto: "Serviço de primeira qualidade. Voltarei com certeza e indico para todos os meus amigos.",
                avaliacao: 5
            }
        ];

        function criarEstrelas(quantidade) {
            return Array(quantidade).fill().map(() => '<i class="ri-star-fill"></i>').join('');
        }

        function renderizarDepoimentos() {
            const wrapper = document.getElementById('depoimentos-wrapper');
            
            depoimentosData.forEach(depoimento => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');
                
                slide.innerHTML = `
                    <div class="depoimento-card">
                        <img src="${depoimento.foto}" alt="${depoimento.nome}" class="cliente-foto">
                        <div class="cliente-info">
                            <h3 class="cliente-nome">${depoimento.nome}</h3>
                            <div class="rating">
                                ${criarEstrelas(depoimento.avaliacao)}
                            </div>
                        </div>
                        <p class="depoimento-texto">"${depoimento.texto}"</p>
                    </div>
                `;
                
                wrapper.appendChild(slide);
            });
        }

        renderizarDepoimentos();

        // Inicializar Swiper
        const swiper = new Swiper('.swiper-depoimentos', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
   