
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval( () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
// E.G. 60 / 60 = 1, then multiplied by 360 = 360, will place the degree of rotation correctly.
// '+ 90' to offset default transform: rotate value.
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minDegrees = ((minutes / 60) * 360) + 90;    
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//  Fix glitch where hand runs back to startpoint when seconds === 0.
    if (seconds === 0) {secondHand.classList.add('fast')}
    if (seconds > 0) {secondHand.classList.remove('fast')}
}, 1000);

