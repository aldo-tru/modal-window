'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// looping through our ".show-modal" node list 
for (let i = 0; i < btnsShowModal.length; i++) {

    // Adding an event click to out ".show-modal" buttons
    btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    
    // Know if the "escape" key has been pressed
    // and if the modal element doesn't contain the ".hidden" class
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }

});