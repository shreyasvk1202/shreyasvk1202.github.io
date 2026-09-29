const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
const typingText = document.getElementById("typing-text");

const roles = [
  "Software Development Engineer",
  "AI & Data Science Student",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

  const currentRole = roles[roleIndex];

  if(!deleting){

    typingText.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if(charIndex === currentRole.length){
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }

  }else{

    typingText.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();
