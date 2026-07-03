// ============ Responsive Dimensions ============
var isMobile, radius, imgWidth, imgHeight;

function updateDimensions() {
  isMobile = window.innerWidth < 600;
  radius = isMobile ? 210 : 300;
  imgWidth = isMobile ? 100 : 130;
  imgHeight = isMobile ? 148 : 195;

  if (typeof ospin !== 'undefined') {
    ospin.style.width = imgWidth + 'px';
    ospin.style.height = imgHeight + 'px';
    ground.style.width = radius * 3 + 'px';
    ground.style.height = radius * 3 + 'px';
    init(1);
  }
}

updateDimensions();

// ============ Config ============
var autoRotate = true;
var rotateSpeed = 20;          // seconds per full rotation (positive = clockwise)
var bgMusicURL = './song2.mpeg';

// ============ Floating Hearts ============
function createHeart() {
  const c = document.getElementById('hearts-container');
  if (!c) return;
  const h = document.createElement('div');
  h.className = 'heart-particle';
  h.innerHTML = '❤️';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.animationDuration = (Math.random() * 6 + 6) + 's';
  h.style.fontSize = (Math.random() * 12 + 14) + 'px';
  c.appendChild(h);
  setTimeout(() => h.remove(), 12000);
}
setInterval(createHeart, 500);

// ============ Sparkle on Click ============
document.addEventListener('click', (e) => {
  for (let i = 0; i < 7; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = e.pageX + 'px';
    s.style.top = e.pageY + 'px';
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 100 + 50;
    s.style.setProperty('--x', Math.cos(angle) * velocity + 'px');
    s.style.setProperty('--y', Math.sin(angle) * velocity + 'px');
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
});

// ============ 3D Carousel Setup ============
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var ground = document.getElementById('ground');
var aImg = ospin.getElementsByTagName('img');
var aEle = [...aImg];

updateDimensions();
window.addEventListener('resize', updateDimensions);

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.width = imgWidth + 'px';
    aEle[i].style.height = imgHeight + 'px';
    aEle[i].style.transform = 'rotateY(' + (i * (360 / aEle.length)) + 'deg) translateZ(' + radius + 'px)';
    aEle[i].style.transition = 'transform 1s';
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';
  }
  ground.style.width = radius * 3 + 'px';
  ground.style.height = radius * 3 + 'px';
}

// ============ Camera / Drag ============
var tX = 0, tY = 20, desX = 0, desY = 0;

function applyTransform() {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;
  odrag.style.transform = 'rotateX(' + (-tY) + 'deg) rotateY(' + tX + 'deg)';
}

function playSpin(on) {
  ospin.style.animationPlayState = on ? 'running' : 'paused';
}

// Auto spin
if (autoRotate) {
  ospin.style.animation = 'spin ' + Math.abs(rotateSpeed) + 's infinite linear';
}

// Drag/Touch events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  var sX = e.clientX, sY = e.clientY;

  this.onpointermove = function (e) {
    var nX = e.clientX, nY = e.clientY;
    desX = nX - sX; desY = nY - sY;
    tX += desX * 0.1; tY += desY * 0.1;
    applyTransform();
    sX = nX; sY = nY;
  };

  this.onpointerup = function () {
    odrag.timer = setInterval(function () {
      desX *= 0.95; desY *= 0.95;
      tX += desX * 0.1; tY += desY * 0.1;
      applyTransform();
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };
  return false;
};

// Subtle float
var floatT = 0;
setInterval(() => {
  floatT += 0.04;
  odrag.style.transform = `rotateX(${-tY + Math.sin(floatT) * 3}deg) rotateY(${tX}deg) translateY(${Math.sin(floatT * 0.5) * 10}px)`;
}, 50);

// Mouse wheel zoom
document.addEventListener('wheel', (e) => {
  radius += e.deltaY > 0 ? -10 : 10;
  radius = Math.max(100, Math.min(500, radius));
  init(1);
});

// ============ Music ============
if (bgMusicURL) {
  const mc = document.getElementById('music-container');
  const savedPos = parseFloat(localStorage.getItem('music_pos') || '0');
  mc.innerHTML = `<audio id="bg-audio" src="${bgMusicURL}" controls autoplay loop></audio>`;
  const audio = document.getElementById('bg-audio');
  if (audio) {
    audio.currentTime = savedPos;
    setTimeout(() => audio.play().catch(() => { }), 200);
  }
}

// ============ Final Surprise ============
document.getElementById('show-final-btn').onclick = function () {
  const fs = document.getElementById('final-surprise');
  const card = document.getElementById('final-card');
  const btn = this;

  fs.style.display = 'flex';
  setTimeout(() => {
    fs.style.opacity = '1';
    btn.style.display = 'none';
    setTimeout(() => {
      card.classList.add('show');
      startFinalTyping(fs);
    }, 900);
  }, 80);
};

function startFinalTyping(fs) {
  // Floating hearts in final scene
  setInterval(() => {
    const h = document.createElement('div');
    h.className = 'final-heart';
    h.innerHTML = '❤️';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.top = (Math.random() * 40 + 55) + 'vh';
    fs.appendChild(h);
    setTimeout(() => h.remove(), 5000);
  }, 900);

  new TypeIt('#typeit-final', {
    strings: [
      'To the Guru of my life, my absolute #1 priority ✨❤️',
      'kowshi!!, seeing you happy is the only thing that matters to me...',
      'Whenever you feel alone, just look at these photos and remember —',
      'I will always be right here, by your side, through everything ❤️',
      'You are so deeply loved, endlessly admired, and forever special to me.',
      'No matter where life takes us, my heart will always beat for you ❤️',
      'Happy Birthday, kowshi!!. 🎂',
      'With all my love,',
      'Your Caretaker ❤️'
    ],
    speed: 45,
    breakLines: true,
    nextStringDelay: 800,
    waitUntilVisible: true,
    afterComplete() {
      // Sparkle burst
      for (let i = 0; i < 80; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = Math.random() * 100 + 'vh';
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 180 + 80;
        s.style.setProperty('--x', Math.cos(angle) * velocity + 'px');
        s.style.setProperty('--y', Math.sin(angle) * velocity + 'px');
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1800);
      }
    }
  }).go();
}