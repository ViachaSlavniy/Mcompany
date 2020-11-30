const questionsItemBtn = document.querySelectorAll('.questions__item-btn');
const worksPhotoItem = document.querySelectorAll('.works__photo-item');
const popupContainer = document.querySelector('.popup__container');
const popupImg = document.querySelector('.popup__img');
const body = document.querySelector('body');
const popupBtnWrap = document.querySelector('.popup__btn-wrap')
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockId = anchor.getAttribute('href').substring(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        
    });
};

questionsItemBtn.forEach(el => el.addEventListener('click', showAnswer));
worksPhotoItem.forEach(el => el.addEventListener('click', showPopup));
popupImg.addEventListener('click', hidePopup);
popupBtnWrap.addEventListener('click', hidePopup);


function showAnswer(event) {
    let clickTarget = event.target;
    let parent = clickTarget.closest('.questions__item');
    let questionsAnswer = parent.querySelector('.questions__answer');
    if(questionsAnswer.classList.contains('hide')) {
        questionsAnswer.classList.remove('hide');
        clickTarget.style.transform = 'rotate(-45deg)';
    } else {
        questionsAnswer.classList.add('hide');
        clickTarget.style.transform = 'rotate(0deg)';
    }
}   

function showPopup(event) {
    srcImage = event.target.getAttribute('src');
    popupImg.setAttribute('src', srcImage);
    popupContainer.classList.remove('hide');
    body.classList.add('no-scroll');
}

function hidePopup() {
    popupContainer.classList.add('hide');
    body.classList.remove('no-scroll');
}

// BURGER

const burgerBtn = document.querySelector('.menu__burger-wrap');
const menu = document.querySelector('.menu__item-links');
const menuLink = document.querySelectorAll('.menu__item-link');


burgerBtn.addEventListener('click', toggleMenu);
menuLink.forEach(item => item.addEventListener('click', closeMenu));

function toggleMenu() {
    menu.classList.toggle('menu__item-links-show');
}

function closeMenu(){
    menu.classList.remove('menu__item-links-show');
}