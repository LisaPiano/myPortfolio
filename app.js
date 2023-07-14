

// TOGGLE THEME for dark and light mode===========================================================

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
});

// Surprise button===========================================================

const clickOnButton = document.querySelector('.clickOnButton');
const hiddenMessage = document.querySelector('.hiddenMessage');
const open = document.querySelector('.open');

clickOnButton.addEventListener('click', () => {
    hiddenMessage.classList.toggle('surpriseMessage');
    if (open.innerHTML == "Click for more information!"){
    open.textContent ="Click to close";
    } else {
        open.textContent = "Click for more information!";
    }
});

