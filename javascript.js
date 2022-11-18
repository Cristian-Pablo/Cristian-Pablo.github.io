//copiar menú para móvil
function copyMenu() {
    //copie dentro de .dpt-cat a .departamentos
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copiar dentro de nav a nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copie .header-top .wrapper a .the top-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//mostrar menú móvil
const menuButton = document.querySelector('.trigger');
      closeButton = document.querySelector('.t-close');
      addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})


//mostrar el submenú en el móvil
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

//control deslizante
const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
});

//mostrar búsqueda
const searchButton =document.querySelector('.t-search');
      tClose = document.querySelector('.search-close');
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch');
})
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch');
})


//mostrar menú dpt
const dptButton = document.querySelector('.dpt-cat .dpt-trigger');
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt');
})

//control deslizante de la imagen del producto
var productThumb = new Swiper ('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});
var productBig = new Swiper ('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }
})

//porcentaje de ancho de barra de productos en stock
var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock;
    available = stocks[x].querySelector('.qty-available').innerHTML;
    sold = stocks[x].querySelector('.qty-sold').innerHTML;
    percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}

//mostrar carrito al hacer clic
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250 )
})

//cerrar haciendo clic fuera
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
    }
})

//mostrar modal en carga
window.onload = function () {
    document.querySelector('.site').classList.toggle('showmodal')
}
document.querySelector('.modalclose').addEventListener('click', function() {
    document.querySelector('.site').classList.remove('showmodal');
})

//validar reseña de productos
function valida(){
    let xnombre, xresumen;
    xnombre = document.getElementById("nombre").value;
    xresumen = document.getElementById("resumen").value;
    if(xnombre=="" && xresumen==""){
        alert("Rellenar los datos por favor")
    }else{
        alert("Reseña enviado con 'Exito'")
    }
}

//validar suscripcion
function suscrito(){
    let xplaceholder;
    xplaceholder = document.getElementById("placeh").value;
    if(xplaceholder==""){
        alert("Rellenar este campo")
    }else{
        alert("Suscripción Exitosa")
    }
}