(function () {
  var menu = {
    btn: document.getElementById('btn_menu'),
    slide_hidden: document.querySelector('.slide_hidden'),
    slide: document.querySelector('#slide_menu nav'),
    status: false,
    elements: document.querySelectorAll('#slide_menu nav a'),
  };

  var methodsMenu = {
    start: function () {
      menu.btn.addEventListener('click', methodsMenu.toggleMenu);
      menu.slide_hidden.addEventListener('click', methodsMenu.hideMenu);

      for (var i = 0; i < menu.elements.length; i++) {
        menu.elements[i].addEventListener('click', methodsMenu.hideMenu);
      }
    },

    toggleMenu: function () {
      if (menu.status == false) {
        menu.status = true;
        menu.slide.className = menu.slide.className + ' active';
        menu.slide_hidden.style.display = 'block';

      }else {
        methodsMenu.hideMenu();
      }
    },

    hideMenu: function () {
      if (menu.status == true) {
        menu.status = false;
        menu.slide.className = menu.slide.className.replace(' active', '');
        menu.slide_hidden.style.display = 'none';
      }
    },
  };

  methodsMenu.start();

}());
