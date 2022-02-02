window.onload = function() {

    var elems = document.getElementsByClassName('services-main-item-header');
    var bodies = document.getElementsByClassName('services-main-item-body');

    var body, elem;

    elems[0].onclick = function() {
        HideBody(0);
    };
    elems[1].onclick = function() {
        HideBody(1);
    };
    elems[2].onclick = function() {
        HideBody(2);
    };
    elems[3].onclick = function() {
        HideBody(3);
    };
    elems[4].onclick = function() {
        HideBody(4);
    };

    function HideBody(i) {
        body = bodies[i];
        if (!body.classList.contains('services-main-item-body-op')) {
            body.classList.toggle('services-main-item-body-op');
            setTimeout(function() {
                body.classList.toggle('services-main-item-body-dis');
            }, 300);
        } else {
            body.classList.toggle('services-main-item-body-dis');
            setTimeout(function() {
                body.classList.toggle('services-main-item-body-op');
            }, 30);
        }
    }

    $('.customers-comments').slick({
        vertical: true,
        slidesToShow: 2,
        verticalSwiping: true,
        prevArrow: '<img src="img/keyboard_arrow_up.png">"',
        nextArrow: '<img src="img/keyboard_arrow_down.png">"',
    });
}