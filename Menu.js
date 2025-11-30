const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});
