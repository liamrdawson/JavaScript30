
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval( () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
// E.G. 60 / 60 = 1, then multiplied by 360 = 360, will place the degree of rotation correctly.
// '+ 90' to offset default transform: rotate value.
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((minutes / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}, 1000);