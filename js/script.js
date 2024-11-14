// script.js

// Função para ocultar o carregador de página quando a página for carregada
window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.display = 'none';  // Oculta o carregador
    }
});

// Função para mostrar/ocultar o submenu no menu de navegação
document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuItem = document.querySelector('.navbar-nav > li > a');

    // Ao passar o mouse sobre o item de menu, o submenu será exibido
    menuItem.addEventListener('mouseover', function() {
        if (dropdownMenu) {
            dropdownMenu.style.display = 'block';
        }
    });

    // Ao sair o mouse do item de menu, o submenu será ocultado
    menuItem.addEventListener('mouseout', function() {
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
    });
});

// Função para rolagem suave ao clicar nos links da navbar
const smoothScroll = function(e) {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').substring(1); // Obtém o ID do destino da âncora
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
};

// Adiciona a rolagem suave aos links de navegação
const navLinks = document.querySelectorAll('.page-scroll');
navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});
