

// TOGGLE THEME for dark and light mode===========================================================

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
});

// Surprise button===========================================================

let clickOnButton = document.querySelector('.clickOnButton');
let hiddenMessage = document.querySelector('.hiddenMessage');
let open = document.querySelector('.open');

clickOnButton.addEventListener('click', () => {
    hiddenMessage.classList.toggle('surpriseMessage');
    if (open.innerHTML == "Click for more information!") {
        open.textContent = "Click to close";
    } else {
        open.textContent = "Click for more information!";
    }
});

