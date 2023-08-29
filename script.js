// script.js

// Get the screen width and height
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// Calculate the number of spans based on screen width divided by 25
var numberOfSpans = Math.floor(screenWidth / 40);

// Generate spans with random --i values and animation properties
for (let i = 1; i <= numberOfSpans; i++) {
    var randomValue = Math.floor(Math.random() * 10) + 1;
    var span = document.createElement('span');
    span.style.setProperty('--i', randomValue);
    span.style.setProperty('--delay', Math.random() * 5 + 1 + 's'); // Random delay
    span.style.setProperty('--duration', Math.random() * 10 + 5 + 's'); // Random duration
    span.style.setProperty('--translateX', (Math.random() * screenWidth * 2 - screenWidth) + 'px'); // Random translateX with negative and positive values
    span.style.setProperty('--translateY', (Math.random() * screenHeight * 2 - screenHeight) + 'px'); // Random translateY with negative and positive values
    span.style.setProperty('--scale', Math.random() * 2); // Random scale
    document.querySelector('.wrap').appendChild(span);
}
