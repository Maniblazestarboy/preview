function toggleMenu() {
  const nav = document.getElementById('nav');
  const menuToggle = document.querySelector('.menu-toggle');

  nav.classList.toggle('active');

  // Troca o ícone do menu
  if (nav.classList.contains('active')) {
    menuToggle.innerHTML = '<i class="ri-close-line"></i>';
  } else {
    menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
  }
}

// Fechar menu ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav');
    const menuToggle = document.querySelector('.menu-toggle');

    nav.classList.remove('active');
    menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
  });
});