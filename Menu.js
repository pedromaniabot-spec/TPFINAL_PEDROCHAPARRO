const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
const submenus = document.querySelectorAll(".submenu > a"); 

// 1. Manejo del botón hamburguesa para el menú principal
btnMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-visible");
});

// 2. Manejo del clic en los enlaces del submenú para desplegarlos
submenus.forEach(enlace => {
    enlace.addEventListener("click", (event) => {
        // Solo aplicar este comportamiento en móvil (ancho menor o igual a 768px)
        if (window.innerWidth <= 768) {
            
            // Evita que el enlace # navegue
            event.preventDefault(); 
            
            const parentLi = enlace.closest(".submenu");
            
            // Alterna la clase 'activo' en el <li> padre para mostrar/ocultar el submenú
            parentLi.classList.toggle("activo");
            
            // Opcional: Ocultar otros submenús abiertos al abrir uno nuevo
            document.querySelectorAll(".submenu").forEach(item => {
                if (item !== parentLi && item.classList.contains("activo")) {
                    item.classList.remove("activo");
                }
            });
        }
    });
});
