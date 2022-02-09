window.onload = function() {

    var elems = document.getElementsByClassName('services-main-item-header');
    var bodies = document.getElementsByClassName('services-main-item-body');
    var panel = document.getElementsByClassName('navpan')[0];

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

    var wasScrolled;

    $(window).scroll(function(){
        if ($(window).scrollTop() > 200) {
            $('.head-top').addClass('scroll');
            wasScrolled = true;
        }
        else {
            $('.head-top').removeClass('scroll')
            wasScrolled = false;
        }
    });

    $('a').on('click', function(){
        if(this.hash) $(document).data('h',1);
    });
    $(document).scroll(function(){
        if($(this).data('h'))
            $(this).data('h',0).scrollTop($(this).scrollTop()-130);
    });

    $('.head-top-adapt__menu').on('click', function() {
        var head = document.getElementsByClassName('head-top')[0];
        panel.classList.toggle('hidden');
        if (!head.classList.contains('scroll')){
            head.classList.toggle('scroll');
        } else {
            if (!wasScrolled) {
                head.classList.toggle('scroll');
            }
        }
    });

    $('.navpan__item').on('click', function() {
        panel.classList.toggle('hidden');
    });
}