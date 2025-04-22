/*Modal PPE e certificados*/
var modal = document.getElementById("modalNav");
var botao = document.getElementById("navButton");
var span = document.getElementsByClassName("fechar")[0];

botao.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

/*Modal Tecnico*/
var modalTecnico = document.getElementById("modalTecnico");
var botaoTecnico = document.getElementById("navButtonTecnico");
var spanTecnico = document.getElementsByClassName("fecharTecnico")[0]; 

botaoTecnico.onclick = function() {
    modalTecnico.style.display = "block";
}
spanTecnico.onclick = function() {
    modalTecnico.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == modalTecnico) {
        modalTecnico.style.display = "none";
    }
}

/*Carrossel*/
const slide = document.getElementById('slidesFotos1');
const prev = document.getElementById('prev1');
const next = document.getElementById('next1');

let scrollAmount = 0;
const scrollPerClick = 300; 

next.addEventListener('click', () => {
    slide.scrollBy({ left: scrollPerClick, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
    slide.scrollBy({ left: -scrollPerClick, behavior: 'smooth' });
});

 //segundo
const slide2 = document.getElementById('slidesFotos2');
const prev2 = document.getElementById('prev2');
const next2 = document.getElementById('next2');

next2.addEventListener('click', () => {
    slide2.scrollBy({ left: scrollPerClick, behavior: 'smooth' });
});

prev2.addEventListener('click', () => {
    slide2.scrollBy({ left: -scrollPerClick, behavior: 'smooth' });
});

 //terceiro
const slide3 = document.getElementById('slidesFotos3');
const prev3 = document.getElementById('prev3');
const next3 = document.getElementById('next3');
 

next3.addEventListener('click', () => {
    slide3.scrollBy({ left: scrollPerClick, behavior: 'smooth' });
});

prev3.addEventListener('click', () => {
    slide3.scrollBy({ left: -scrollPerClick, behavior: 'smooth' });
});