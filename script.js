// Colors palette (you can adjust to match your theme)
const colors = [
    { base: '#4fc3dc', alpha: '#4fc3dc33' }, // Cyan
    { base: '#ff2d75', alpha: '#ff2d7544' }, // Pink
    { base: '#f7b731', alpha: '#f7b73133' }, // Yellow
    { base: '#3ad29f', alpha: '#3ad29f33' }, // Green
    { base: '#e74c3c', alpha: '#e74c3c33' }, // Red
    { base: '#3498db', alpha: '#3498db33' }  // Blue
];

// Shapes array
const shapes = ['circle'];

// Get the screen width and height
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Calculate the number of spans based on screen width divided by 40
const numberOfSpans = Math.floor(screenWidth / 40);

// Generate spans with random --i values, shapes, and animation properties
for (let i = 1; i <= numberOfSpans; i++) {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    const span = document.createElement('span');

    // Randomly pick a color from the palette
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Set initial and final positions
    const startX = Math.random() * screenWidth;
    const startY = Math.random() * screenHeight;
    const endX = Math.random() * screenWidth;
    const endY = Math.random() * screenHeight;

    // Set random properties
    span.style.setProperty('--i', randomValue);
    span.style.setProperty('--delay', `${Math.random() * 5 + 1}s`); // Random delay
    span.style.setProperty('--duration', `${Math.random() * 8 + 5}s`); // Random duration between 3-11s for more variance
    span.style.setProperty('--translateX', `${startX}px`); // Random start translateX
    span.style.setProperty('--translateY', `${startY}px`); // Random start translateY
    span.style.setProperty('--finalTranslateX', `${endX}px`); // Random end translateX
    span.style.setProperty('--finalTranslateY', `${endY}px`); // Random end translateY
    span.style.setProperty('--scale', Math.random() * 2); // Random start scale
    span.style.setProperty('--finalScale', Math.random() * 2); // Random end scale

    // Set color and alpha (box-shadow) based on random pick
    span.style.setProperty('--color', randomColor.base);
    span.style.setProperty('--color-alpha', randomColor.alpha);

    // Randomly assign a shape
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    span.classList.add(randomShape); // Apply circle, square, or triangle

    document.querySelector('.wrap').appendChild(span);
}
