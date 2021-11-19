
const backDrop = document.querySelector('.backdrop');
const model = document.querySelector('.modal');
const btnAll = document.querySelectorAll('.plan__button');
const closeBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
for(let i = 0; i < btnAll.length; i++){
    btnAll[i].addEventListener('click' , function(){
        model.style.display = 'block';
        backDrop.style.display = 'block';
    })
}
closeBtn.addEventListener('click' , function(){
    model.style.display = 'none';
    backDrop.style.display = 'none';
});

backDrop.addEventListener('click' , function(){
    model.style.display = 'none';
    backDrop.style.display = 'none';
    mobileNav.style.display = 'none';
});

toggleBtn.addEventListener('click' , function(){
    mobileNav.style.display = 'block';
    backDrop.style.display = 'block';
});