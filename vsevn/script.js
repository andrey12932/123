let width = window.innerWidth;
let maxMobile = 1024;
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
    document.getElementsByClassName('line')[0].style.display = 'none';
    document.getElementsByClassName('header-bottom-right')[0].style.display = 'none';
}

function pc() {
    document.getElementsByClassName('header-top')[0].style.display = 'grid';
    document.getElementsByClassName('line')[0].style.display = 'grid';
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
    authorized = true;
    updateAuthorized();
})

document.querySelector('#login').addEventListener('click', (e) => {
    e.preventDefault();
    authorized = true;
    updateAuthorized();
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