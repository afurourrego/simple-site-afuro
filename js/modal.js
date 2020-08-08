
var modal = {
  elements: document.querySelectorAll('.modal-trigger'),
  modals: document.querySelectorAll('.modal'),
  modal: null,
  overlay: document.createElement('div'),
};

var methodsModal = {
  start: function () {
    modal.overlay.classList.add('modal-overlay');
    modal.overlay.addEventListener('click', methodsModal.close_modal);

    for (var i = 0; i < modal.elements.length; i++) {
      modal.elements[i].addEventListener('click', methodsModal.open_modal);
    }
  },

  open_modal: function () {
    modal.modal = document.getElementById(this.hash.replace('#', ''));
    modal.modal.style.display = 'flex';
    document.body.appendChild(modal.overlay);

    setTimeout(function () {
      modal.modal.classList.add('active');
    }, 1);
  },

  close_modal: function () {
    modal.modal.classList.remove('active');
    modal.overlay.classList.add('inactive');

    setTimeout(function () {
      modal.modal.style.display = 'none';
      modal.overlay.classList.remove('inactive');
      
      document.body.removeChild(modal.overlay);
    }, 250);

  },
};

methodsModal.start();
