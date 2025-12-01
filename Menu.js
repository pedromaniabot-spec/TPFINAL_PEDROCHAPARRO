const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

// Selecciona los enlaces de los submenús (los que tienen el icono de flecha)
const submenus = document.querySelectorAll(".submenu > a");

// 1. Manejo del botón hamburguesa (menú principal)
btnMenu.addEventListener("click", () => {
    // Alterna la clase para mostrar/ocultar el menú principal en móvil
    menu.querySelector("ul").classList.toggle("active");
});

// 2. Manejo del clic en los enlaces del submenú (despliegue en móvil)
submenus.forEach(enlace => {
    enlace.addEventListener("click", (event) => {

        // Solo aplicar este comportamiento en móvil (ancho <= 768px)
        if (window.innerWidth <= 768) {

            // Evita que el enlace # navegue si tiene href="#"
            event.preventDefault();

            // Encuentra el <li> padre (que tiene la clase .submenu)
            const parentLi = enlace.closest(".submenu");

            // Alterna la clase 'activo' en el <li> padre para mostrar/ocultar el submenú
            parentLi.classList.toggle("activo");

            // Cierra otros submenús si están abiertos
            document.querySelectorAll(".submenu").forEach(item => {
                if (item !== parentLi && item.classList.contains("activo")) {
                    item.classList.remove("activo");
                }
            });
        }
    });
});
