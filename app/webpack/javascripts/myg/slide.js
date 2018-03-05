import MygSlide from 'myg-slide';

document.addEventListener( 'turbolinks:load', () => {
    const mygSlides = MygSlide.initAll( document.querySelectorAll('.myg-slide'), {
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 10000
    });
})