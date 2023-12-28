// Sélection des éléments HTML nécessaires
const btnMenu = document.querySelector('.boutonRondMenu');
const nav = document.querySelector('.navigationGauche');
const allItemNav = document.querySelectorAll('.itemMenuNavigation');
const ligne = document.querySelector('.conteneurLigne');
const txtAnim = document.querySelector('.texteAnimation');
const input_fields = document.querySelectorAll('input');
const navbar = document.querySelector('.navigationGauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.boutonAccueil');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');
const presentationContainer = document.querySelector('.presentation');
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche');
const listePres = document.querySelectorAll('.item-liste');
const portfolioContainer = document.querySelector('.portfolio');
const titrePortfolio = document.querySelector('.titre-port');
const itemPortfolio = document.querySelectorAll('.vague1');
const itemPortfolio2 = document.querySelectorAll('.vague2');
const itemPortfolio3 = document.querySelectorAll('.vague3');
const sectionComp = document.querySelector('.section-range');
const titreComp = document.querySelector('.titre-exp');
const allLabel = document.querySelectorAll('.label-skill');
const allPourcent = document.querySelectorAll('.number-skill');
const allBarres = document.querySelectorAll('.barre-skill');
const allShadowBarres = document.querySelectorAll('.barre-grises');

// Ajout d'un gestionnaire d'événement pour le bouton de menu
btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active'); // Toggle de la classe 'active' sur l'élément '.conteneurLigne'
    nav.classList.toggle('menu-visible'); // Toggle de la classe 'menu-visible' sur l'élément '.navigationGauche'
});

// Ajout d'un gestionnaire d'événement pour les éléments de menu de navigation (si la largeur de la fenêtre est inférieure à 1300px)
if (window.matchMedia('(max-width: 1300px)').matches) {
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible'); // Toggle de la classe 'menu-visible' sur l'élément '.navigationGauche'
            ligne.classList.toggle('active'); // Toggle de la classe 'active' sur l'élément '.conteneurLigne'
        });
    });
}

// Initialisation de l'animation d'écriture
let typewriter = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
});

typewriter
    .pauseFor(1800)
    .changeDelay(20)
    .typeString('Moi c\'est Johanna')
    .pauseFor(300)
    .typeString('<strong>, Intégrateur Web</strong>')
    .pauseFor(1000)
    .typeString('<span style="color: #27ae60;"> HTML </span>')
    .pauseFor(1000)
    .typeString('<span style="color: #EA39ff;"> CSS</span>')
    .pauseFor(1000)
    .typeString('<span style="color: #FFF351;"> JAVASCRIPT</span>')
    .pauseFor(1000)
    .typeString('<span style="color: #6EE0FF;">REACT</span> !')
    .start();

// Ajout d'un gestionnaire d'événement pour les champs de saisie
for (let i = 0; i < input_fields.length; i++) {
    let field = input_fields[i];
    field.addEventListener('input', (e) => {
        if (e.target.value !== '') {
            e.target.parentNode.classList.add('animation');
        } else if (e.target.value === '') {
            e.target.parentNode.classList.remove('animation');
        }
    });
}

// Animation GSAP + ScrollMagic pour la page d'accueil
const TL1 = gsap.timeline({ paused: true });

TL1
    .to(navbar, { left: '0px', ease: Power3.easeOut, duration: 0.6 })
    .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
    .staggerFrom(btn, 1, { opacity: 0 }, 0.2, '-=0.30')
    .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, '-=0.75')
    .from(btnRondAccueil, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 }, '-=1');

window.addEventListener('load', () => {
    TL1.play(); // Lecture de l'animation au chargement de la page
});

// Animation ScrollMagic GSAP pour la section de présentation
const tlpres = new TimelineMax();

tlpres
    .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
    .from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, '-=0.5')
    .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, '-=0.5');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(tlpres)
    .addTo(controller);

// Animation GSAP + ScrollMagic pour la section du portfolio
const tlPortfolio = new TimelineMax();

tlPortfolio
    .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
    .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, '-=0.5');

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(tlPortfolio)
    .addTo(controller);

// Animation GSAP + ScrollMagic pour la deuxième vague du portfolio
const tlPortfolio2 = new TimelineMax();

tlPortfolio2
    .staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, '-=0.5');

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
    .setTween(tlPortfolio2)
    .addTo(controller);

// Animation GSAP + ScrollMagic pour la troisième vague du portfolio
const tlPortfolio3 = new TimelineMax();

tlPortfolio3
    .staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, '-=0.5');

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
    .setTween(tlPortfolio3)
    .addTo(controller);

// Animation GSAP + ScrollMagic pour la section des compétences
const tlCompetences = new TimelineMax();

tlCompetences
    .from(titreComp, { opacity: 0, duration: 0.6 })
    .staggerFrom(allLabel, 0.5, { y: -50, opacity: 0 }, 0.1, '-=0.5')
    .staggerFrom(allPourcent, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
    .staggerFrom(allShadowBarres, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
    .staggerFrom(allBarres, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1');

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
    .setTween(tlCompetences)
    .addTo(controller);
