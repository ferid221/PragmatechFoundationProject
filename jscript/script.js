let nav = document.querySelector(".nav");
let mybutton = document.getElementById("myBtn");
let blanks = document.querySelectorAll(".blank");
let logo = document.getElementById("darklogo");
let sections = document.querySelectorAll("section");
let header = document.getElementById("header");

// -----------------------------------------Header nav----------------------------------------
window.onscroll = function () {
    scrollFunction();
    scrl();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        logo.setAttribute("src", "img/logo-dark.png");
        nav.style.transition = 'all 0.5s ease-in-out';
        nav.style.padding = ('15px 0px');
        nav.style.background = "white";
        nav.style.boxShadow = "0 2px 8px 3px rgba(0, 0, 0, 0.05)";
        mybutton.style.display = "block";
        blanks.forEach(i => {
            i.style.color = "black";
        });
    } else {
        logo.setAttribute("src", "img/logo.png");
        nav.style.transition = 'all 0.5s ease-in-out';
        nav.style.padding = ('20px 0px');
        nav.style.background = "none";
        nav.style.boxShadow = "none";
        mybutton.style.display = "none";
        blanks.forEach(i => {
            i.style.color = "white";
        });
    };
};
// -------------------------------button top---------------------------------
mybutton.onclick = function () {
    var a = document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// ----------------- Our client bolmesi ucun yazilmis JS kodlari--------------
let dots = document.querySelectorAll('.aktiv1');
dots.forEach(i => {
    i.addEventListener('click', e => {
        dots.forEach(i => i.classList.remove('active'))
        e.target.classList.add('active')
    })
})


let akt1 = document.querySelector('#active1');
let akt2 = document.querySelector('#active2');
let akt3 = document.querySelector('#active3');
let ata = document.querySelector('#ata');

akt1.onclick = function () {
    ata.style.left = '0px';
};
akt2.onclick = function () {
    ata.style.left = '-1100px';
};
akt3.onclick = function () {
    ata.style.left = '-2200px';
};

//----------------------Scroll menu--------------------
function scrl() {
    blanks.forEach(i => i.classList.remove('isik'));
    if (scrollY > sections[5].offsetTop - 45) {
        blanks[6].classList.add("isik");
    } else if (scrollY > sections[4].offsetTop - 45) {
        blanks[5].classList.add("isik");
    } else if (scrollY > sections[3].offsetTop - 45) {
        blanks[4].classList.add("isik");
    } else if (scrollY > sections[2].offsetTop - 45) {
        blanks[3].classList.add("isik");
    } else if (scrollY > sections[1].offsetTop - 45) {
        blanks[2].classList.add("isik");
    } else if (scrollY > sections[0].offsetTop - 45) {
        blanks[1].classList.add("isik");
    } else {
        blanks[0].classList.add("isik");
    }
};
//---------------------------Portfolio Galery-------------------------------------
function galery(bu) {
    let images = ["img/work/1.jpg", "img/work/2.jpg", "img/work/3.jpg", "img/work/4.jpg", "img/work/5.jpg", "img/work/6.jpg",];
    let qaralti = document.createElement('div');
    qaralti.className = 'qaralti';
    document.body.appendChild(qaralti);
    //------------------------galery imgs ekrana verilmesi----------------------------
    let sekil = document.querySelector('.sekil');
    let src = bu.querySelector('img').getAttribute('src');
    sekil.setAttribute('src',src);
    let albom = document.querySelector(".albom");
    let sol = document.getElementById('sol');
    let sag = document.getElementById('sag');
    albom.style.display = "inline-block";
    sol.style.display = 'inline-block';
    sag.style.display = 'inline-block';
    //-------------------------Galery saga sola cevirmeq------------------------------
    // sol.onclick = function () {
    //     for (let i = 0; i > images.length; i++) {
    //         sekil.setAttribute('src',images[i]);
    //     };
    //     // images.forEach(i=> {
    //     //     sekil.setAttribute('src',i);
    //     // })
    // };
    // sag.onclick = function () {
    //     images.forEach(i => {
    //         sekil.setAttribute('src', i);
    //     })
    // };
    // //-------------------------Galery baglamaq------------------------------
    qaralti.addEventListener('click', function () {
        qaralti.remove();
        albom.style.display = 'none';
        sol.style.display = 'none';
        sag.style.display = 'none';
    });
    let bagla = document.getElementById("bagla");
    bagla.addEventListener('click', function () {
        qaralti.remove();
        albom.style.display = 'none';
        sol.style.display = 'none';
        sag.style.display = 'none';
    });
}
