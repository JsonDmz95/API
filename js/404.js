var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 30;

function move() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px)';
    translateInv = 'translate(' + x*-1 + 'px, ' + y*-1 + 'px)';

    $('.move').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate,
        'transition': 'none'
    });


    $('.move-inversed').css({
        '-webit-transform': translateInv,
        '-moz-transform': translateInv,
        'transform': translateInv,
        'transition': 'none'
    });

    window.requestAnimationFrame(move);
}

$('.wrap-404').on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (-7 * lMouseX) / 150; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (-3.5 * lMouseY) / 150;

});

$(document).ready(function(){
    setTimeout(function() {
        move();
    }, 1000);
});