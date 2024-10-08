// Colors array without alpha values
const colors = [
    '#e34c26', // HTML5 color
    '#264de4', // CSS3 color
    '#f7df1e', // JavaScript color
    '#306998', // Python color
    '#b07219', // Java color
    '#68a063', // Node.js color
    '#4f5d95', // PHP color
    '#61dafb', // React color
    '#b52e31', // Angular color
    '#42b883', // Vue.js color
    '#c6538c', // Sass color
    '#1d365d', // Less color
    '#563d7c', // Bootstrap color
    '#21759b', // WordPress color
    '#24292e', // GitHub color
    '#f34f29', // Git color
    '#cb3837', // npm color
    '#2c8ebb', // Yarn color
    '#0db7ed', // Docker color
    '#232f3e', // AWS color
    '#4285f4', // Google color
    '#f15025', // Microsoft color
    '#999999', // Apple color
    '#f8981d', // Linux color
    '#a4c639', // Android color

];

// Programming language icons
const icons = [
    '<i class="fab fa-html5"></i>',    // HTML5
    '<i class="fab fa-css3-alt"></i>', // CSS3
    '<i class="fab fa-js"></i>',       // JavaScript
    '<i class="fab fa-python"></i>',   // Python
    '<i class="fab fa-java"></i>',     // Java
    '<i class="fab fa-node-js"></i>',  // Node.js
    '<i class="fab fa-php"></i>',      // PHP
    '<i class="fab fa-react"></i>',    // React
    '<i class="fab fa-angular"></i>',  // Angular
    '<i class="fab fa-vuejs"></i>',    // Vue.js
    '<i class="fab fa-sass"></i>',     // Sass
    '<i class="fab fa-less"></i>',     // Less
    '<i class="fab fa-bootstrap"></i>',// Bootstrap
    '<i class="fab fa-wordpress"></i>',// WordPress
    '<i class="fab fa-github"></i>',   // GitHub
    '<i class="fab fa-git"></i>',      // Git
    '<i class="fab fa-npm"></i>',      // npm
    '<i class="fab fa-yarn"></i>',     // Yarn
    '<i class="fab fa-docker"></i>',   // Docker
    '<i class="fab fa-aws"></i>',      // AWS
    '<i class="fab fa-google"></i>',   // Google
    '<i class="fab fa-microsoft"></i>',// Microsoft
    '<i class="fab fa-apple"></i>',    // Apple
    '<i class="fab fa-linux"></i>',    // Linux
    '<i class="fab fa-android"></i>',  // Android
    '<i class="fab fa-windows"></i>',  // Windows
    '<i class="fab fa-flutter"></i>',  // Flutter
    '<i class="fab fa-dart"></i>',     // Dart
    '<i class="fab fa-laravel"></i>',  // Laravel
    '<i class="fas fa-database"></i>', // SQL
    '<i class="fab fa-nuxt-js"></i>',  // Nuxt.js
    '<i class="fab fa-next-js"></i>',  // Next.js
    '<i class="fab fa-node-js"></i>',  // Express.js
    '<i class="fab fa-nest-js"></i>',  // NestJS
    '<i class="fas fa-database"></i>', // MongoDB
    '<i class="fas fa-database"></i>', // MySQL
    '<i class="fas fa-database"></i>', // PostgreSQL
    '<i class="fab fa-azure"></i>',    // Azure
    '<i class="fab fa-google"></i>',   // Google Cloud
    '<i class="fab fa-firebase"></i>', // Firebase
    '<i class="fas fa-fire"></i>',     // Firestore
    '<i class="fas fa-database"></i>', // Supabase
    '<i class="fab fa-gitlab"></i>',   // GitLab
    '<i class="fab fa-bitbucket"></i>' // Bitbucket
];

// Shapes array
const shapes = ['circle', 'square'];

// Get the screen width and height
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Calculate the number of spans based on screen width divided by 40
const numberOfSpans = Math.floor(screenWidth / 50);

// Generate spans with random properties
for (let i = 1; i <= numberOfSpans; i++) {
    const span = document.createElement('span');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const startX = Math.random() * screenWidth;
    const startY = Math.random() * screenHeight;
    const endX = Math.random() * screenWidth;
    const endY = Math.random() * screenHeight;

    span.innerHTML = randomIcon; // Insert the icon HTML inside the span
    span.classList.add('icon');   // Add an icon class to style it

    // Set initial and final positions

    // Set random properties
    span.style.setProperty('--delay', `${Math.random() * 5 + 1}s`);       // Random delay
    span.style.setProperty('--duration', `${Math.random() * 8 + 5}s`);    // Random duration
    span.style.setProperty('--startX', `${startX}px`);                    // Start X position
    span.style.setProperty('--startY', `${startY}px`);                    // Start Y position
    span.style.setProperty('--endX', `${endX}px`);                        // End X position
    span.style.setProperty('--endY', `${endY}px`);                        // End Y position
    span.style.setProperty('--startScale', Math.random() * 1 + 0.3);    // Start scale between 0.5 and 2
    span.style.setProperty('--endScale', Math.random() * 1 + 0.3);      // End scale between 0.5 and 2

    // Set color
    span.style.setProperty('--color', randomColor);

    document.querySelector('.wrap').appendChild(span);
}
