
function createHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 400);

document.addEventListener('click', (e) => {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 100 + 50;
        sparkle.style.setProperty('--x', Math.cos(angle) * velocity + 'px');
        sparkle.style.setProperty('--y', Math.sin(angle) * velocity + 'px');
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
});

document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) { // Only create sometimes to avoid clutter
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        sparkle.style.setProperty('--x', (Math.random() - 0.5) * 50 + 'px');
        sparkle.style.setProperty('--y', (Math.random() - 0.5) * 50 + 'px');
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
});

function initengahan() {
    kadoIn.style = "display:none";
    ket.style = "display:none";
    Content.style = "opacity:1;margin-top:0";
    bodyblur.style = "opacity:.7";
    wallpaper.style = "transform: scale(1.5);";
}

async function mulainama() {
    bodyblur.style = "opacity:0";
    wallpaper.style = "transform: scale(1);";
    fotostiker.style = "display:inline-flex;";
    setTimeout(ftmuncul, 200);
    setTimeout(kethalo, 500);
}

function ftmuncul() {
    if (ftganti == 0) { fotostiker.src = deffotostiker; }
    if (ftganti == 1) { fotostiker.src = fotostiker1.src; }
    if (ftganti == 2) { fotostiker.src = fotostiker2.src; }
    if (ftganti == 3) { fotostiker.src = fotostiker3.src; }
    if (ftganti == 4) { fotostiker.src = fotostiker4.src; }
    fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}

function fthilang() {
    fotostiker.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}

function jjfoto() {
    fotostiker.style.animation = "rto .8s infinite alternate";
}

function bqmuncul() {
    bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
    mulaiketik1();
    fungsi = 1;
}

function bqhilang() {
    wallpaper.style = "transform: scale(2);";
    bodyblur.style = "opacity:.3";
    bq.style = "position:relative;transition:all .7s ease;";
}

function kethalo() {
    new TypeIt("#halo", {
        strings: ["" + vketikhalo],
        startDelay: 50,
        speed: 40,
        waitUntilVisible: true,
        afterComplete: function () {
            halo.innerHTML = vketikhalo;
            setTimeout(bqmuncul, 200);
        },
    }).go();
}

function tombol() {
    wallpaper.style = "transform: scale(1);";
    Tombol.style = "opacity:1;transform: scale(1);";
    fungsi = 1;
}

document.getElementById("By").onclick = function () {
    if (fungsi == 1) { pertanyaan(); }
    if (fungsi == 2) { menuju(); }
}

async function menuju() {
    await swals.fire('Yay!', 'And here comes another birthday surprise for you!', 'success');
    const audioElem = document.getElementById('linkmp3');
    if (audioElem) {
        localStorage.setItem('music_pos', audioElem.currentTime);
    }
    let basePath = window.location.pathname;
    if (basePath.endsWith('index.html')) {
        basePath = basePath.substring(0, basePath.lastIndexOf('/') + 1);
    } else if (!basePath.endsWith('/')) {
        basePath += '/';
    }
    window.location.href = basePath + "surprise.html";
}

vketik1 = kalimat.innerHTML;
kalimat.innerHTML = "";
function mulaiketik1() {
    new TypeIt("#kalimat", {
        strings: ["" + vketik1],
        startDelay: 400,
        speed: 20,
        cursor: false,
        deleteSpeed: 20,
        breakLines: false,
        waitUntilVisible: true,
        lifelike: true,
        afterComplete: function () {
            aktiopsL();
        },
    }).go();
}

opsLclick = 0;
opsLcheck = 0;
defopsL = opsL.innerHTML;
document.getElementById("bq").onclick = function () {
    if (opsLclick == 1) {
        if (opsLcheck == 1) { setTimeout(aktipesan1, 400); }
        if (opsLcheck == 2) { aktipesan2(); }
        if (opsLcheck == 3) { aktipesan4(); }
        if (opsLcheck == 4) { aktipesan5(); }
        if (opsLcheck == 5) { aktipesan6(); }
        otomatis();
        opsL.style.opacity = "0";
        opsLclick = 0;
    }
}

function aktiopsL() {
    opsL.innerHTML = defopsL;
    opsL.style.opacity = ".8";
    opsLclick = 1;
    opsLcheck += 1;
}

function otomatis() {
    kalimat.style = "opacity:0";
    setTimeout(otolanj, 400);
}

function otolanj() {
    kalimat.style = "opacity:1";
}

function aktipesan1() {
    kalimat.innerHTML = pesan1.innerHTML;
    kolombaru.style = "position:relative;opacity:1;transform:scale(1);";
}

vketik2 = pesan2.innerHTML;
vketik3 = pesan3.innerHTML;
function aktipesan2() {
    wallpaper.style = "transform: scale(1.5);";
    kolombaru.style = "";
    kalimat.innerHTML = "";
    new TypeIt("#kalimat", {
        strings: ["" + vketik2, "" + vketik3],
        startDelay: 20,
        speed: 30,
        cursor: true,
        deleteSpeed: 30,
        breakLines: false,
        waitUntilVisible: true,
        lifelike: true,
        afterComplete: function () {
            kalimat.innerHTML = vketik3;
            setTimeout(aktipesan4, 700);
        },
    }).go();
}

vketik4 = pesan4.innerHTML;
pesan4.innerHTML = "";
function aktipesan4() {
    wallpaper.style = "transform: scale(1);";
    fthilang();
    ftganti = 2;
    setTimeout(ftmuncul, 300);
    new TypeIt("#pesan4", {
        strings: ["" + vketik4],
        startDelay: 1,
        speed: 52,
        cursor: true,
        waitUntilVisible: true,
        lifelike: true,
        afterComplete: function () {
            pesan4.innerHTML = vketik4;
            setTimeout(aktipesan5, 700);
        },
    }).go();
}

vketik5 = pesan5.innerHTML;
pesan5.innerHTML = "";
function aktipesan5() {
    wallpaper.style = "transform: scale(1.5);";
    fthilang();
    ftganti = 3;
    setTimeout(ftmuncul, 300);
    new TypeIt("#pesan5", {
        strings: ["" + vketik5],
        startDelay: 1,
        speed: 52,
        cursor: true,
        waitUntilVisible: true,
        lifelike: true,
        afterComplete: function () {
            pesan5.innerHTML = vketik5 + " 😊";
            setTimeout(aktipesan6, 700);
        },
    }).go();
}

vketik6 = pesan6.innerHTML;
pesan6.innerHTML = "";
function aktipesan6() {
    wallpaper.style = "transform: scale(1);";
    fthilang();
    ftganti = 4;
    setTimeout(ftmuncul, 300);
    new TypeIt("#pesan6", {
        strings: ["" + vketik6],
        startDelay: 1,
        speed: 52,
        cursor: true,
        waitUntilVisible: true,
        lifelike: true,
        afterComplete: function () {
            pesan6.innerHTML = vketik6;
            setTimeout(tombol, 400);
        },
    }).go();
}

var slov = 0;
document.getElementById("lv1").onclick = function () {
    lv1.style = "opacity:0";
    slov += 1;
    this.onclick = null;
    checkslov();
}
document.getElementById("lv2").onclick = function () {
    lv2.style = "opacity:0";
    slov += 1;
    this.onclick = null;
    checkslov();
}
document.getElementById("lv3").onclick = function () {
    lv3.style = "opacity:0";
    slov += 1;
    this.onclick = null;
    checkslov();
}
document.getElementById("lv4").onclick = function () {
    lv4.style = "opacity:0";
    slov += 1;
    this.onclick = null;
    checkslov();
}
function checkslov() {
    if (slov == 4) {
        kolombaru.style = "position:relative;transform:scale(1)";
        fthilang();
        ftganti = 1;
        setTimeout(ftmuncul, 300);
        otomatis();
        setTimeout(aktipesan2, 400);
    }
}
