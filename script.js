// ==========================================
// VOCES NATIVAS DE AMÉRICA
// ==========================================

// Menú que cambia al hacer scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0b5d3b";
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(11,93,59,.90)";
        header.style.boxShadow = "none";

    }

});

// Animación al aparecer las tarjetas

const cards = document.querySelectorAll(".card");

const mostrar = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".8s";

    mostrar.observe(card);

});
//================ BOTÓN ARRIBA ================

const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnArriba.style.display = "block";

    } else {

        btnArriba.style.display = "none";

    }

});

btnArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
