$(window).ready(function () {

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500)
    }, 500);

    /*----------------- MODAL ----------------*/

    $('.get-modal').click(function () {
        $('.modal').fadeIn(400).css('display', 'flex');
    });

    $('.modal').click(function (event) {
        var clickedElement = event.target;
        if(!$(clickedElement).closest('.modal-inner').length) {
            $('.modal').fadeOut(400);
        }
        if($(clickedElement).hasClass('close-modal')) {
            $('.modal').fadeOut(400);
        }
    });

    /*----------- Modal-counter ------------*/

    var defaultCounterValue = 1;
    $('.counter-value').text(defaultCounterValue);
    $('.counter input').val(defaultCounterValue);

    $('.counter-plus').click(function() {
        var current = parseInt($(this).siblings('.counter-value').text());
        current++;
        $(this).siblings('.counter-value').text(current);
        $(this).siblings('input').val(current);
    });

    $('.counter-minus').click(function() {
        var current = parseInt($(this).siblings('.counter-value').text());
        if(current > 1) {
            current--;
            $(this).siblings('.counter-value').text(current);
            $(this).siblings('input').val(current);
        }
    });


    /*----------------- BURGER ----------------*/
    
    $('.burger').click(function () {
        $(this).toggleClass('fa-close fa-bars');
        $('.header-menu').toggleClass('active')
    });

});

