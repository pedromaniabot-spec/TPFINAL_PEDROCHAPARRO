
const itemsConSubmenu = document.querySelectorAll('.menu-dropdown li.has-submenu');

itemsConSubmenu.forEach(item => {
    // Escucha click para dispositivos móviles
    item.addEventListener('click', (e) => {
        // Evita que el click haga scroll o siga el link
        e.preventDefault();
        
        // Alterna la clase 'activo' para mostrar/ocultar el submenú
        const submenu = item.querySelector('.submenu');
        if(submenu) {
            submenu.classList.toggle('activo');
        }
    });
});
