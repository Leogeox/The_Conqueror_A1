var cards = document.querySelectorAll('.cards')

cards.forEach(card=> {
    card.addEventListener('click', function() {
        if (document.fullscreenElement) {
        document.exitFullscreen();
        return;
        }
        card.requestFullscreen();
    });
})

var boite = document.querySelector('.boite_tourne')

boite.addEventListener('click', function() {
    if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
    }
    boite.requestFullscreen();
})
