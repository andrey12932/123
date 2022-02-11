var header = document.getElementsByTagName('header')[0];
var logo = document.getElementsByClassName('header-content-left__logoimg')[0];
var text = document.getElementsByClassName('header-content-mid')[0];
var button = document.getElementsByClassName('header-content-right__button')[0];
var buttonArrow = document.getElementsByClassName('header-content-right__button-img')[0];

$(window).scroll(function() {
    if ($(window).scrollTop() < 200) {
        header.classList.add('hidden');
        recolorSVG(logo, '#00CCA6');
        recolorTextList(text, "#00CCA6");
        recolorButton(button, '#00CCA6', 'white');
        recolorSVG(buttonArrow, 'white');
    } else {
        header.classList.remove('hidden');
        recolorSVG(logo, '#ffffff');
        recolorTextList(text, 'white');
        recolorButton(button, 'white', 'black');
        recolorSVG(buttonArrow, 'black');
    }
});

function recolorSVG(elem, col) {
    var list = elem.getElementsByTagName('path');
    for(var i = 0; i < list.length; i++) {
        list[i].setAttribute('fill', col);
    }
}

function recolorTextList(elem, col) {
    var list = elem.getElementsByTagName('span')
    for (var i = 0; i < list.length; i++) {
        list[i].style.color = col;
    }
}

function recolorButton (elem, bgcol, col) {
    elem.style.color = col;
    elem.style.backgroundColor = bgcol;
}

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.01] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }