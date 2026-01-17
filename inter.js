const menuBtn = document.getElementById('menuBtn');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    header.classList.toggle('active');

    if (header.classList.contains('active')) {
        menuBtn.innerHTML = '✖';
        // Force le bouton à devenir FIXE quand le menu est ouvert
        menuBtn.style.position = 'fixed';
    } else {
        menuBtn.innerHTML = '☰';
        // Repasse en ABSOLUTE quand on ferme pour qu'il suive à nouveau le body
        menuBtn.style.position = 'absolute';
    }
});

// On ajoute 'e' ici pour récupérer l'événement du clic
function toggleTab(e, tabId) { 
    // 1. Gérer les CONTENUS
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    // 2. Gérer les TITRES
    document.querySelectorAll('.tab-title').forEach(title => {
        title.classList.remove('active');
    });

    // On utilise le 'e' du paramètre (plus de trait barré !)
    e.currentTarget.classList.add('active');
}