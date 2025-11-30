const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
const submenus = document.querySelectorAll(".submenu > a"); // Selecciona todos los enlaces de submenú

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-visible");
});

submenus.forEach(enlace => {
    enlace.addEventListener("click", (event) => {
        if (window.innerWidth <= 768) {
            
            event.preventDefault(); 
            
            const parentLi = enlace.closest(".submenu");
            
            parentLi.classList.toggle("activo");
            
            document.querySelectorAll(".submenu").forEach(item => {
                if (item !== parentLi && item.classList.contains("activo")) {
                    item.classList.remove("activo");
                }
            });
        }
    });
});
