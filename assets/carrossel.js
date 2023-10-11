document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.gallery__stream');
    var items = document.querySelectorAll('.gallery__item');
    var prev = document.querySelector('.gallery__prev');
    var next = document.querySelector('.gallery__next');

    var currentIndex = 0;
    var interval;

    function goToNext() {
        currentIndex = (currentIndex + 1) % items.length;
        stream.appendChild(items[currentIndex]);
    }

    function startAutoAdvance() {
        interval = setInterval(goToNext, 2500); // Avança a cada 2.5 segundos
    }

    function stopAutoAdvance() {
        clearInterval(interval);
    }

    prev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        stream.insertBefore(items[currentIndex], items[0]);
        stopAutoAdvance();
    });

    next.addEventListener('click', function() {
        goToNext();
        stopAutoAdvance();
    });

    prev.removeEventListener('click', null);
    next.removeEventListener('click', null);
    // Inicia
    startAutoAdvance();

    // Pausa 
    stream.addEventListener('mouseenter', function() {
        stopAutoAdvance();
    });

    // Retoma 
    stream.addEventListener('mouseleave', function() {
        startAutoAdvance();
    });


});