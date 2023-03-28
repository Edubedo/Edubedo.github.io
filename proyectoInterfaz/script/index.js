// REFERENCIAS A LOS ELEMENTOS HTML
const menuOpen = document.getElementById("menuOpenHeader");
const menuClose = document.getElementById("menuCloseHeader");
const menuMobile = document.getElementById("menuMobile");
const lista = document.getElementById("listaHeader");


// Si hacemos click en el menu
menuOpen.addEventListener("click", () => {
    // Mostramos el menu mobile
    menuMobile.classList.remove("ocultar-elementos");
    menuClose.style.display = "flex";
    menuOpen.style.display = "none";
    
    
})

menuClose.addEventListener("click", () => {
    menuMobile.classList.add("ocultar-elementos");
    menuClose.style.display = "none";
    menuOpen.style.display = "flex";  
})

