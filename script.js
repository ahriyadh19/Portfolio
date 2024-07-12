// script.js

// Get the screen width and height
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Calculate the number of spans based on screen width divided by 40
const numberOfSpans = Math.floor(screenWidth / 40);

// Generate spans with random --i values and animation properties
for (let i = 1; i <= numberOfSpans; i++) {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    const span = document.createElement('span');

    // Set initial and final positions
    const startX = Math.random() * screenWidth;
    const startY = Math.random() * screenHeight;
    const endX = Math.random() * screenWidth;
    const endY = Math.random() * screenHeight;

    // Set random properties
    span.style.setProperty('--i', randomValue);
    span.style.setProperty('--delay', `${Math.random() * 5 + 1}s`); // Random delay
    span.style.setProperty('--duration', `${Math.random() * 10 + 5}s`); // Random duration
    span.style.setProperty('--translateX', `${startX}px`); // Random start translateX
    span.style.setProperty('--translateY', `${startY}px`); // Random start translateY
    span.style.setProperty('--finalTranslateX', `${endX}px`); // Random end translateX
    span.style.setProperty('--finalTranslateY', `${endY}px`); // Random end translateY
    span.style.setProperty('--scale', Math.random() * 2); // Random start scale
    span.style.setProperty('--finalScale', Math.random() * 2); // Random end scale

    document.querySelector('.wrap').appendChild(span);
}
