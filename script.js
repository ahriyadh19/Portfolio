// Particle System
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0, this.x, this.y, this.size
        );
        gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
        particle.size *= 0.99; // Gradual shrinking effect
        if (particle.size < 0.5) particle.size = Math.random() * 2 + 1;
    });
    requestAnimationFrame(animateParticles);
}

// Resize Handler
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

// Cursor Effects
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX - 6}px`;
    cursor.style.top = `${mouseY - 6}px`;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${mouseX - 4}px`;
    trail.style.top = `${mouseY - 4}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500); // Remove trail after animation
});

// Glass Box Parallax
const glassBox = document.querySelector('.glass-box');
document.addEventListener('mousemove', e => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    glassBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.textContent = '☀️';
} else if (savedTheme === 'dark') {
  themeToggle.textContent = '🌙';
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.body.classList.add('light-theme');
  themeToggle.textContent = '☀️';
}
// Toggle on click
themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registered:', reg))
      .catch(err => console.error('SW registration failed:', err));
  });
}

// Initialize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateParticles();

// Interactive Social Icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mousemove', function (e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;

        this.style.background = `radial-gradient(circle at ${x}px ${y}px, 
                    rgba(255,255,255,0.2), rgba(255,255,255,0))`;
    });

    icon.addEventListener('mouseleave', function () {
        this.style.background = 'rgba(255,255,255,0.1)';
    });
});