document.addEventListener('DOMContentLoaded', function () {
    var spCarousel = new bootstrap.Carousel(document.getElementById('speakersCarousel'), {
        interval: 4000,
        wrap: true,
    });
    var pastCarousel = new bootstrap.Carousel(document.getElementById('pastActsCarousel'), {
        interval: 4000,
        wrap: true,
    });
});


