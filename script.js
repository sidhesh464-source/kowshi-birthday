document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const loadingScreen = document.getElementById('loading-screen');
    const mainContainer = document.getElementById('main-container');
    const music = document.getElementById('hbd-music');
    const bannerContainer = document.querySelector('.banner-container');
    const balloonsContainer = document.querySelector('.balloons-container');

    const scenes = [
        document.getElementById('scene-1'),
        document.getElementById('scene-2'),
        document.getElementById('scene-3'),
        document.getElementById('scene-4')
    ];

    const colors = ['#ff4d6d', '#00d2ff', '#ffd700', '#70e000', '#ff9770', '#8338ec'];

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        const color = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.background = color;
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
        balloon.style.width = (Math.random() * 30 + 50) + 'px';
        balloon.style.height = (parseFloat(balloon.style.width) * 1.3) + 'px';
        balloonsContainer.appendChild(balloon);

        // Remove balloon after it floats away
        setTimeout(() => balloon.remove(), 10000);
    }

    function typeWriter(text, elementId, speed = 100) {
        let i = 0;
        const element = document.getElementById(elementId);
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    startBtn.addEventListener('click', () => {
        // Start Music
        music.play().catch(e => console.log("Music blocked: ", e));

        // Hide Loader
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            startSequence();
        }, 1000);
    });

    async function startSequence() {
        // Stage 0: Scene 1 visible, wait 3s
        await sleep(3000);

        // Stage 1: Banner Drops, Balloons Start
        bannerContainer.classList.add('show-banner');
        setInterval(createBalloon, 800);

        // Transition to Scene 2 (Gift)
        transitionScene(0, 1);

        const giftBox = document.getElementById('gift-box');
        giftBox.addEventListener('click', async () => {
            giftBox.classList.add('open');
            await sleep(1000);
            continueAfterGift();
        }, { once: true });
    }

    async function continueAfterGift() {
        // Transition to Scene 3 (Cake)
        transitionScene(1, 2);
        await sleep(5000);

        // Transition to Scene 4 (Card)
        transitionScene(2, 3);
        const message = "On this special day, I wanted to tell you how incredible you are. You bring so much light into the world, and I'm so lucky to have you. May your year be filled with as much happiness as you give to others. Happy Birthday, my love! ❤️";
        typeWriter(message, 'typed-message', 60);
    }

    function transitionScene(currentIdx, nextIdx) {
        scenes[currentIdx].style.opacity = '0';
        setTimeout(() => {
            scenes[currentIdx].classList.add('hidden');
            scenes[nextIdx].classList.remove('hidden');
            scenes[nextIdx].style.opacity = '1';
        }, 1000);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
