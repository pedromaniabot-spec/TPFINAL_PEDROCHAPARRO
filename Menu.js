cdocument.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('.hamburguesa');
    const menu = document.querySelector('nav.menu');

    hamburguesa.addEventListener('click', () => {
        menu.classList.toggle('activo');
    });

    // Submenús móviles
    document.querySelectorAll('nav.menu .submenu > a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el enlace
            item.parentElement.classList.toggle('activo');
        });
    });
});
