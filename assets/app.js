// Theme toggle (persist to localStorage)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved === 'light'){ root.classList.add('light'); }

themeToggle?.addEventListener('click',()=>{
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Keyboard shortcut: press "t" to toggle theme
window.addEventListener('keydown',(e)=>{ if(e.key==='t' || e.key==='T'){ themeToggle?.click(); }});

// Parallax scene & progress bar & reveals
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scene = document.querySelector('.scene');
const layers = scene ? Array.from(scene.querySelectorAll('[data-depth]')) : [];
const progress = document.querySelector('.progress');

// Scroll progress
const updateProgress = () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const p = max > 0 ? (doc.scrollTop / max) : 0;
  if(progress){ progress.style.transform = `scaleX(${p})`; }
};
document.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// Parallax on scroll and subtle mouse parallax
const state = { sy: 0, mx: 0, my: 0 };
const renderLayers = () => {
  layers.forEach(el=>{
    const d = parseFloat(el.getAttribute('data-depth')||'0');
    const x = state.mx * d * 12;
    const y = -state.sy * d + state.my * d * 12;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
};
let ticking = false;
const onScroll = () => {
  if(ticking || prefersReduced) return; ticking = true;
  requestAnimationFrame(()=>{
    state.sy = window.scrollY;
    renderLayers();
    ticking = false;
  });
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

window.addEventListener('mousemove', (e)=>{
  if(prefersReduced) return;
  const { innerWidth:w, innerHeight:h } = window;
  state.mx = (e.clientX / w - .5);
  state.my = (e.clientY / h - .5);
  renderLayers();
});

// Reveal on scroll
const revealEls = Array.from(document.querySelectorAll('section, .card, .project'));
revealEls.forEach(el=> el.setAttribute('data-reveal',''));
if(!prefersReduced && 'IntersectionObserver' in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(({isIntersecting, target})=>{
      if(isIntersecting){ target.classList.add('in'); io.unobserve(target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .1 });
  revealEls.forEach(el=> io.observe(el));
} else {
  // Fallback: make them visible immediately
  revealEls.forEach(el=> el.classList.add('in'));
}

// Magnetic buttons
const magnets = Array.from(document.querySelectorAll('.btn'));
magnets.forEach(btn=>{
  btn.classList.add('magnetic');
  btn.addEventListener('mousemove', (e)=>{
    if(prefersReduced) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width/2) / (rect.width/2);
    const dy = (e.clientY - rect.top - rect.height/2) / (rect.height/2);
    btn.style.setProperty('--tx', `${dx*6}px`);
    btn.style.setProperty('--ty', `${dy*6}px`);
  });
  btn.addEventListener('mouseleave', ()=>{
    btn.style.setProperty('--tx', '0px');
    btn.style.setProperty('--ty', '0px');
  });
});

// Avatar tilt
const avatar = document.querySelector('.avatar');
if(avatar){
  avatar.addEventListener('mousemove', (e)=>{
    if(prefersReduced) return;
    const r = avatar.getBoundingClientRect();
    const rx = (e.clientY - r.top - r.height/2) / r.height * -8;
    const ry = (e.clientX - r.left - r.width/2) / r.width * 8;
    avatar.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  avatar.addEventListener('mouseleave', ()=>{ avatar.style.transform = 'none'; });
}

// Active nav link highlighting
const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const targets = navLinks
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
if('IntersectionObserver' in window){
  const highlight = (id) => {
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  };
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(({target, isIntersecting})=>{
      if(isIntersecting){ highlight(target.id); }
    });
  }, { rootMargin: '-40% 0% -50% 0%', threshold: .01 });
  targets.forEach(el=> obs.observe(el));
}
