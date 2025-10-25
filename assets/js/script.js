// --- Glow animation for headings ---
const glowText = document.querySelectorAll('h1, h2, .cta');

glowText.forEach((el) => {
  el.addEventListener('mouseover', () => {
    el.style.textShadow = '0 0 25px #ff4fa3, 0 0 50px #ff007f';
  });
  el.addEventListener('mouseout', () => {
    el.style.textShadow = '';
  });
});

// --- Floating animation effect for hero section ---
const hero = document.querySelector('.hero');
let floatPos = 0;
let direction = 1;

function floatHero() {
  floatPos += direction * 0.3;
  hero.style.transform = `translateY(${Math.sin(floatPos / 5) * 10}px)`;
  requestAnimationFrame(floatHero);
}

floatHero();

/*sliding bar for navigation menu */

const links = document.querySelectorAll('.nav-slider ul li a');
const slider = document.querySelector('.slider');

links.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    slider.style.left = `${index * 120}px`; // adjust spacing if needed
  });
});

const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach((bubble, i) => {
  bubble.animate(
    [
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0px)' },
    ],
    {
      duration: 3000 + i * 500,
      iterations: Infinity,
    }
  );
});

// GSAP Animation
// Smooth entrance for intro section
gsap.from(".intro-text", { 
  duration: 1, 
  y: 50, 
  opacity: 0, 
  ease: "power2.out" 
});

// Floating effect for bubbles
gsap.to(".bubble", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut"
});

//Three.js -- a glowing 3D particle in background 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const particles = new THREE.Geometry();
for (let i = 0; i < 300; i++) {
  const x = Math.random() * 600 - 300;
  const y = Math.random() * 600 - 300;
  const z = Math.random() * 600 - 300;
  particles.vertices.push(new THREE.Vector3(x, y, z));
}

const material = new THREE.PointsMaterial({ color: 0xff69b4, size: 2 });
const pointCloud = new THREE.Points(particles, material);
scene.add(pointCloud);

camera.position.z = 200;
function animate() {
  requestAnimationFrame(animate);
  pointCloud.rotation.y += 0.001;
  renderer.render(scene, camera);
}
animate();
