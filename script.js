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
const cursorTrail = document.querySelector('.cursor-trail');
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX - 10}px`;
    cursor.style.top = `${mouseY - 10}px`;
});

function moveTrail() {
    const diffX = mouseX - trailX;
    const diffY = mouseY - trailY;

    trailX += diffX * 0.1;
    trailY += diffY * 0.1;

    cursorTrail.style.left = `${trailX - 4}px`;
    cursorTrail.style.top = `${trailY - 4}px`;

    requestAnimationFrame(moveTrail);
}

// Glass Box Parallax
const glassBox = document.querySelector('.glass-box');
document.addEventListener('mousemove', e => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    glassBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Initialize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateParticles();
moveTrail();

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