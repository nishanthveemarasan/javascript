'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
document.querySelector('.show-modal')
        .addEventListener('click' , function(){
            //remove class or classes
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//use ESC key
//Keyboard event

document.addEventListener('keydown' ,function(e){
    if(e.key == 'Escape'){
        console.log(e.key);
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
    }
} );