mobile();

let width = window.innerWidth;

pc();
let maxMobile = 1100;
let version = 'pc';


let authorized = false;

changeVersion();
updateAuthorized();

window.addEventListener('resize', () => {
    
    width = window.innerWidth;
    changeVersion();
});

function changeColor(elem, colorClass) {
    let children = Array.from(elem.children);
    children.map(el => {
        if (el.nodeName == 'svg') {
            el.children[0].classList.add(colorClass);
        } else {
            el.classList.add(colorClass);
        }
    });
}

function removeColor(elem, colorClass) {
    let children = Array.from(elem.children);
    children.map(el => {
        if (el.nodeName == 'svg') {
            el.children[0].classList.remove(colorClass);
        } else {
            el.classList.remove(colorClass);
        }
    });
}

let headerItems = Array.from(document.querySelectorAll('.header__item-icon')).concat(Array.from(document.querySelectorAll('.header__item-icon-two')));

headerItems.map(el => {
    el.addEventListener('mouseenter', e => changeColor(e.target, 'red'));
    el.addEventListener('mouseleave', e => removeColor(e.target, 'red'));
});

function mobile() {
    document.getElementsByClassName('header-top')[0].style.display = 'none';
    document.getElementsByClassName('header-bottom-right')[0].style.display = 'none';
}

function pc() {
    document.getElementsByClassName('header-top')[0].style.display = 'grid';
    document.getElementsByClassName('header-bottom-right')[0].style.display = 'grid';
}

function changeVersion() {
    if (maxMobile >= width && version == 'pc') {
        version = 'mob';
        mobile();
    }
    if (maxMobile < width && version == 'mob') {
        version = 'pc';
        pc();
    }
}

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

document.querySelector('#reg').addEventListener('click', (e) => {
    e.preventDefault();
    showPopup(0);
})

document.querySelector('#login').addEventListener('click', (e) => {
    e.preventDefault();
    showPopup(1);
})

document.querySelector('.logout').addEventListener('click', (e) => {
    e.preventDefault();
    authorized = false;
    updateAuthorized();
}) 

document.querySelector('.header-logout').addEventListener('click', (e) => {
    e.preventDefault();
    authorized = false;
    updateAuthorized();
}) 

function updateAuthorized() {
    let locks = Array.from(document.querySelectorAll('.lock'));
    if (authorized) {
        document.querySelector('.logout').style.display = 'block';
        locks.map(el => el.style.display = 'none');
        document.querySelector('#reg').style.display = 'none';
        document.querySelector('#login').style.display = 'none';
        document.querySelector('.header-logout').style.display = 'grid';
    }
    else {
        document.querySelector('.logout').style.display = 'none';
        document.querySelector('#login').style.display = 'grid';
        document.querySelector('#reg').style.display = 'grid';
        document.querySelector('.header-logout').style.display = 'none';
        locks.map(el => el.style.display = 'block');
    }
}

let wrap = document.getElementsByClassName('swiper-wrapper')[0];
let dots = Array.from(document.getElementsByClassName('swiper-pagination-bullet'));

let page = 0;

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', e => {
        page = i;
        nextPage();
    })
}

wrap.style.transform = 'translate3d(0px, 0px, 0px)';

setInterval(() => {
    if (page == 6)
        page = 0;
    nextPage();
}, 4000);

function nextPage() {
    dots.map(el => el.classList.remove('swiper-pagination-bullet-active'));
    wrap.style.transform = `translate3d(-${page*469.5}px, 0px, 0px)`;
    dots[page].classList.add('swiper-pagination-bullet-active');
    page++;
}

let popupClose = document.getElementsByClassName('popup-exit')[0];
let popupClose1 = document.getElementsByClassName('popup-exit')[1];

popupClose1.addEventListener('click', e => {
    document.querySelectorAll('.popup-sigin.popup-sigin-sigin')[0].classList.add('d-none-over');
    document.querySelectorAll('.popup-sigin.popup-sigin-login')[0].classList.add('d-none-over');
    document.querySelector('.popup-bg').style.display = 'none';
});

popupClose.addEventListener('click', e => {
    document.querySelectorAll('.popup-sigin.popup-sigin-sigin')[0].classList.add('d-none-over');
    document.querySelectorAll('.popup-sigin.popup-sigin-login')[0].classList.add('d-none-over');
    document.querySelector('.popup-bg').style.display = 'none';
});

function showPopup(i) {
    document.querySelectorAll('.popup-sigin')[i].classList.remove('d-none-over');
    document.querySelector('.popup-bg').style.display = 'block';
}

document.querySelector('.mini-btn-signup.sigIn-btn').addEventListener('click', e => {
    document.querySelectorAll('.popup-sigin.popup-sigin-sigin')[0].classList.add('d-none-over');
    document.querySelector('.popup-sigin.popup-sigin-login').classList.remove('d-none-over');
});

document.querySelector('.mini-btn-signup.logIn-btn').addEventListener('click', e => {
    document.querySelectorAll('.popup-sigin.popup-sigin-login')[0].classList.add('d-none-over');
    document.querySelector('.popup-sigin.popup-sigin-sigin').classList.remove('d-none-over');
})