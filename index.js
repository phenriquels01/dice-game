var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

img1.setAttribute('src', `images/dice${randomNumber1}.png`);
img2.setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {

    const result = document.querySelector('h1');
    result.textContent = "Player 1 Wins! 🚩";
}

else if (randomNumber1 < randomNumber2) {

    const result = document.querySelector('h1');
    result.textContent = "Player 2 Wins! 🚩";
}

else {

    const result = document.querySelector('h1');
    result.textContent = "Draw!";
}

function date() {
    return new Date().getFullYear()
}

window.onload = function() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `© ${date()} Pedro Siqueira. All rights reserved.`;
};

