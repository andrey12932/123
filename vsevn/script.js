mobile();

let width = window.innerWidth;
let email;

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

document.querySelectorAll('.popup-sigin button')[0].addEventListener('click', e => {
    authorize(0, e);
});

document.querySelectorAll('.popup-sigin button')[1].addEventListener('click', e => {
    authorize(1, e);
});

function authorize (i, e) {
    e.preventDefault();
    email = document.querySelectorAll('.popup-sigin form input')[i * 2].value;
    closePopups();
    authorized = true;
    updateAuthorized();
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

function loginFunc (e) {
    e.preventDefault();
    showPopup(1);
}

document.querySelector('#login').addEventListener('click', loginFunc)

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
        document.querySelector('#login a').innerText = 'Мой профиль';
        document.querySelector('.header-logout').style.display = 'grid';
        document.querySelector('.header-bottom .header__item:nth-child(5)').style.display = 'block';
        document.querySelector('.header-bottom').style.gridTemplateColumns = '10% 86.2%';
        document.querySelector('#menu > ul > li > span').style.display = 'block';
        document.querySelector('#menu > ul > li > span').innerText = email;
        document.querySelector('#login').removeEventListener('click', loginFunc);
        document.querySelector('#login').addEventListener('click', (e) => {
            e.preventDefault();
            console.log(1)
            if(document.querySelector('#login a').innerText == 'Мой профиль'){
                document.querySelector('.reg-block').classList.toggle('hidden');
            }
        });
    }
    else {
        document.querySelector('#login a').innerText = 'Войти';
        document.querySelector('.logout').style.display = 'none';
        document.querySelector('#login').style.display = 'grid';
        document.querySelector('#reg').style.display = 'grid';
        document.querySelector('.header-logout').style.display = 'none';
        document.querySelector('#menu > ul > li > span').style.display = 'none';
        locks.map(el => el.style.display = 'block');
        document.querySelector('.header-bottom .header__item:nth-child(5)').style.display = 'none';
        document.querySelector('.header-bottom').style.gridTemplateColumns = '10% 87.2%';
    }
}

let wrap;
let allDots = Array.from(document.getElementsByClassName('swiper-pagination-bullet'));
let dots;

let page = 0;

updateWrap();

for (let i = 0; i < allDots.length; i++) {
    allDots[i].addEventListener('click', e => {
        page = i;
        nextPage();
    })
}

function updateWrap() {
    wrap = document.querySelectorAll('.popup-sigin.popup-sigin-sigin')[0].classList.contains('d-none-over') 
            ? document.getElementsByClassName('swiper-wrapper')[0] : document.getElementsByClassName('swiper-wrapper')[1];
    dots = document.querySelectorAll('.popup-sigin.popup-sigin-sigin')[0].classList.contains('d-none-over') 
            ?  allDots.slice(0, allDots.length / 2): allDots.slice(allDots.length / 2);
    wrap.style.transform = 'translate3d(0px, 0px, 0px)';
}

let int = setInterval(() => {
    if (page == 6)
        page = 0;
    nextPage();
}, 4000);

function stop() {
    clearInterval(int)
}

function nextPage() {
    dots.map(el => el.classList.remove('swiper-pagination-bullet-active'));
    wrap.style.transition = 'all 0.3s';
    if (page > 5)
        page = page - 6;
    dots[page].classList.add('swiper-pagination-bullet-active');
    wrap.style.transform = `translate3d(-${page*572}px, 0px, 0px)`;
    page++;
}

let popupClose = document.getElementsByClassName('popup-exit')[0];
let popupClose1 = document.getElementsByClassName('popup-exit')[1];

function closePopups() {
    document.querySelectorAll('.popup-sigin.popup-sigin-sigin')[0].classList.add('d-none-over');
    document.querySelectorAll('.popup-sigin.popup-sigin-login')[0].classList.add('d-none-over');
    document.querySelector('.popup-bg').style.display = 'none';
}

popupClose1.addEventListener('click', e => {
    closePopups();
});

popupClose.addEventListener('click', e => {
    closePopups();
});

function showPopup(i) {
    document.querySelectorAll('.popup-sigin')[i].classList.remove('d-none-over');
    document.querySelector('.popup-bg').style.display = 'block';
    updateWrap();
    page = 0;
}

document.querySelector('.mini-btn-signup.sigIn-btn').addEventListener('click', e => {
    document.querySelectorAll('.popup-sigin.popup-sigin-sigin')[0].classList.add('d-none-over');
    document.querySelector('.popup-sigin.popup-sigin-login').classList.remove('d-none-over');
    updateWrap()
    page = 0;
});

document.querySelector('.mini-btn-signup.logIn-btn').addEventListener('click', e => {
    document.querySelectorAll('.popup-sigin.popup-sigin-login')[0].classList.add('d-none-over');
    document.querySelector('.popup-sigin.popup-sigin-sigin').classList.remove('d-none-over');
    updateWrap()
    page = 0;
})