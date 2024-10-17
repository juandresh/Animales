const abrirAjolote = document.querySelector('.ajolote_');
const abrirPolar = document.querySelector('.polar_');
const abrirCasuario = document.querySelector('.casuario_');
const abrirChimpance = document.querySelector('.chimpance_');
const abrirVarano = document.querySelector('.varano_');
const abrirTiburon = document.querySelector('.tiburon_');

const modalAjolote = document.querySelector(".modal_ajolote");
const modalPolar = document.querySelector(".modal_polar");
const modalCasuario = document.querySelector(".modal_casuario");
const modalChimpance = document.querySelector(".modal_chimpance");
const modalVarano = document.querySelector(".modal_varano");
const modalTiburon = document.querySelector(".modal_tiburon");

const cerrarAjolote = document.querySelector('.cerrar-ajolote');
const cerrarPolar = document.querySelector('.cerrar-polar');
const cerrarCasuario = document.querySelector('.cerrar-casuario');
const cerrarChimpance = document.querySelector('.cerrar-chimpance');
const cerrarVarano = document.querySelector('.cerrar-varano');
const cerrarTiburon = document.querySelector('.cerrar-tiburon');

abrirAjolote.addEventListener('click', () =>{
    modalAjolote.classList.add('section--show');
});

abrirPolar.addEventListener('click', () =>{
    modalPolar.classList.add('section--show');
});

abrirCasuario.addEventListener('click', () =>{
    modalCasuario.classList.add('section--show');
});

abrirChimpance.addEventListener('click', () =>{
    modalChimpance.classList.add('section--show');
});

abrirVarano.addEventListener('click', () =>{
    modalVarano.classList.add('section--show');
});

abrirTiburon.addEventListener('click', () =>{
    modalTiburon.classList.add('section--show');
});

cerrarAjolote.addEventListener("click", () =>{
    modalAjolote.classList.remove('section--show');
});

cerrarPolar.addEventListener("click", () =>{
    modalPolar.classList.remove('section--show');
});

cerrarCasuario.addEventListener("click", () =>{
    modalCasuario.classList.remove('section--show');
});

cerrarChimpance.addEventListener("click", () =>{
    modalChimpance.classList.remove('section--show');
});

cerrarVarano.addEventListener("click", () =>{
    modalVarano.classList.remove('section--show');
});

cerrarTiburon.addEventListener("click", () =>{
    modalTiburon.classList.remove('section--show');
});

window.onclick = function(event) {
    if (event.target == modalAjolote) {
        modalAjolote.classList.remove('section--show');
    }else if ( event.target == modalPolar){
        modalPolar.classList.remove('section--show');
    } else if (event.target == modalCasuario) {
        modalCasuario.classList.remove('section--show');
    } else if (event.target == modalChimpance) {
        modalChimpance.classList.remove('section--show');
    } else if (event.target == modalVarano) {
        modalVarano.classList.remove('section--show');
    } else if (event.target == modalTiburon) {
        modalTiburon.classList.remove('section--show');
    }
}