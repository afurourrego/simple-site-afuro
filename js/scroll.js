
var scroll = {
  position: window.pageYOffset,
  elements: document.querySelectorAll('.scroll_to'),
  destiny: null,
  distance: null,
  interval: null,
};

var methodsScroll = {
  start: function () {
    for (var i = 0; i < scroll.elements.length; i++) {
      scroll.elements[i].addEventListener('click', methodsScroll.move_to);
    }
  },

  move_to: function (e) {
    e.preventDefault();

    clearInterval(scroll.interval);
    scroll.destiny = this.getAttribute('href');
    scroll.distance = document.querySelector(scroll.destiny).offsetTop;
    scroll.position = window.pageYOffset;
    scroll.interval = setInterval(function () {

      if (scroll.position <= scroll.distance) {
        scroll.position += 40;

        if (scroll.position >= scroll.distance) {
          clearInterval(scroll.interval);
        }
      } else {
        scroll.position -= 40;

        if (scroll.position <= scroll.distance) {
          clearInterval(scroll.interval);
        }
      }

      window.scrollTo(0, scroll.position);

    }, 15);
  },
};

methodsScroll.start();
