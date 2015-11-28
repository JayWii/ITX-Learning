var screenWidth = document.body.clientWidth;
var padd = screenWidth > 640 ? 640 * 0.768 : screenWidth * 0.768;
console.log(padd);
var slideout = new Slideout({
    'panel': document.getElementById('main'),
    'menu': document.getElementById('menu'),
    'padding': padd,
    'tolerance': 70
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
    slideout.toggle();
});

document.querySelector('.menu').addEventListener('click', function(eve) {
    slideout.close();
});
