'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Page Navigation
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click' , function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  })
})

/////////////////////////////////////////////

//SELECT/CEATE/DELETE ELEMENT
//select the entire page code
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header = document.querySelector('.header');

const allsecitons = document.querySelectorAll('.section');
console.log(allsecitons);

console.log(document.getElementById('section--1'));
//all element with the name of button - <button>
console.log(document.getElementsByTagName('button'));

console.log(document.getElementsByClassName('btn'));

//create /Insert html elements
//create
const message = document.createElement('div');
//add classes
message.classList.add('cookie-message');
//message.textContent = "We use cookies for improved functionality!!!";
message.innerHTML = "We use cookies for improved functionality!!!. <button class='btn btn--close-cookie'>Got It</button>";
//insert into DOM
header.prepend(message);//add as first child of an element
//header.append(message);//add as last child of an element

//insert multiple copy of an element
header.append(message.cloneNode(true));
header.append(message.cloneNode(true));

header.before(message); //before teh header
header.after(message); //after the header

//DELETE 
document.querySelector('.btn--close-cookie').addEventListener('click' , function(){
          message.remove();
        });


//STYLE / ATTRIBUTES //CLASSES
//styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//to retrieve the style which already defined
console.log(getComputedStyle(message).color);

//increase the height by 40px;
 message.style.height = Number.parseInt(getComputedStyle(message).height , 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary' , 'orangered');

//Attributes

//access the attributes
const  logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

//access the non standaerd attribute
console.log(logo.getAttribute('designer'));


//set attributes
logo.alt = "Beautiful logo";
console.log(logo.alt);

//get non standard attribute
logo.setAttribute('desinger' , 'Nishanth');

logo.getAttribute('src');
console.log(logo.src);

//classes
logo.classList.add('c');
logo.classList.remove('c');
//if present remove, if not add it
logo.classList.toggle('c');
//retrun true if conatins 
logo.classList.contains('c');


///Implementng Smooth scrolling

//when we click a button it moves to next section

const  btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click' , function(e){
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);
  console.log(e.target.getBoundingClientRect());
//how much we have scrolled from the top of the page
  console.log(window.pageXOffset , pageYOffset);

  console.log('hight width of view port' , document.documentElement.clientHeight , document.documentElement.clientWidth);

  //scrolling
  //old method
 // window.scrollTo(s1cords.left + window.pageXOffset , s1cords.top + window.pageYOffset);

  //old method
  window.scrollTo({
    left: s1cords.left + window.pageXOffset,
    top: s1cords.top + window.pageYOffset,
    behavior: 'smooth'
  });

  //new method
  section1.scrollIntoView({
    behavior: 'smooth'
  });
     
});

//TYPES OF EVENTS AND EVENT HANDLERS
const h1 = document.querySelector('h1');
const alertH1 = function(e){
  alert('addEventListener: Great! you are reading heareder');

};
 h1.addEventListener('mouseenter' ,alertH1) ;

 setTimeout(() =>h1.removeEventListener('mouseenter' , alertH1)  , 3000);

//EVENT PROPERCATION: BUBBLING AND CAPTURING

const randomInt = (min , max) => Math.floor(Math.random() * (max-min+1) + min); 

const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
console.log(randomColor());

//DOM TRAVERSING
//we cans select element based on another element

//going doqnwards: select child eleemnts
console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes);
console.log(h1.children);//direct children
h1.firstElementChild.style.color = "blue";
h1.lastElementChild.style.color = "green";

//going upwords :- selecting parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.backgroundColor = 'green';
h1.closest('h1').style.backgroundColor = 'red';

//going sideways : siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);


//tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t=>t.addEventListener('click',() => {

// }));

tabContainer.addEventListener('click' , function(e){
  //const clicked = e.target.parentElement;
  const clicked = e.target.closest('operations__tab');
  //ignore other click
  if(!clicked) return;
  if(clicked){
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabContent.forEach(t => t.classList.remove('operations__content--active'));
    clicked.classList.add('operations__tab--active');
    //operations__content--2
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
            .classList.add('operations__content--active');
  }
});


///PASSING ARGUMENTS TO EVENT HANDLERS
//Menu fade animation
const navN = document.querySelector('.nav');
// const navNavi = document.querySelector('.');
// const navNavi = document.querySelector('.');
// const navNavi = document.querySelector('.');
navN.addEventListener('mouseover' , function(e){
if(e.target.classList.contains('nav__link')){
  const link = e.target;
  //need to sleect the siblings
  //go to psrent and select childreb
  const siblings = link.closest('.nav')
                    .querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');
  siblings.forEach(el => {
    if(el !== link){
      el.style.opacity = 0.5;
    }
    logo.style.opacity = 0.5;
  });
}
});
navN.addEventListener('mouseout' , function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    //need to sleect the siblings
    //go to psrent and select childreb
    const siblings = link.closest('.nav')
                      .querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if(el !== link){
        el.style.opacity = 1;
      }
      logo.style.opacity = 1;
    });
  }
});

//REvealing elemnts on scroll
//lazy loading image
