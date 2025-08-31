
const paysElements = document.querySelectorAll('[class~="pays"]');
let popup = document.getElementById('popup');
// Si la popup n'existe pas, on la crée et l'ajoute au body
if (!popup) {
    popup = document.createElement('div');
    popup.className = 'popup';
    popup.id = 'popup';
    popup.setAttribute('role', 'tooltip');
    popup.setAttribute('aria-hidden', 'true');
    document.body.appendChild(popup);
} else {
    // Si la popup existe mais n'est pas dans le body, on la déplace dans le body
    if (popup.parentNode !== document.body) {
        document.body.appendChild(popup);
    }
}

// Enrichir les infos pays (exemple, à compléter)
const countryInfo = {
    'Tchéquie': { content: '<b>Tchéquie</b><br>Exemple: Milada Horáková, Vera Čáslavská' },
    'France': { content: '<b>France</b><br>Simone Veil, Joséphine Baker' },
    'Allemagne': { content: '<b>Allemagne</b><br>Angela Merkel, Sophie Scholl' },
    'Belgique': { content: '<b>Belgique</b><br>Marie Popelin, Audrey Hepburn' },
    'Suisse': { content: '<b>Suisse</b><br>Emilie Gourd, Marthe Gosteli' },
    'Italie': { content: '<b>Italie</b><br>Rita Levi-Montalcini, Samantha Cristoforetti' },
    'Espagne': { content: '<b>Espagne</b><br>Clara Campoamor, Margarita Salas' },
    'Portugal': { content: '<b>Portugal</b><br>Amália Rodrigues, Maria de Lourdes Pintasilgo' },
    'Sardaigne': { content: '<b>Sardaigne</b>' },
    'Corse': { content: '<b>Corse</b>' },
    'Luxembourg': { content: '<b>Luxembourg</b><br>Colette Flesch, Lydie Polfer' },
    'Pays-Bas': { content: '<b>Pays-Bas</b><br>Anne Frank, Aletta Jacobs' },
    'Royaume-Uni': { content: '<b>Royaume-Uni</b><br>Mary Wollstonecraft, Elizabeth II' },
    'Irlande': { content: '<b>Irlande</b><br>Mary Robinson, Constance Markievicz' },
    'Danemark': { content: '<b>Danemark</b><br>Margrethe II, Karen Blixen' },
    'Suède': { content: '<b>Suède</b><br>Selma Lagerlöf, Greta Thunberg' },
    'Norvège': { content: '<b>Norvège</b><br>Gro Harlem Brundtland, Sigrid Undset' },
    'Finlande': { content: '<b>Finlande</b><br>Tarja Halonen, Minna Canth' },
    'Estonie': { content: '<b>Estonie</b><br>Kersti Kaljulaid, Kristiina Ehin' },
    'Lettonie': { content: '<b>Lettonie</b><br>Vaira Vīķe-Freiberga, Aspazija' },
    'Lituanie': { content: '<b>Lituanie</b><br>Dalia Grybauskaitė, Marija Gimbutas' },
    'Biélorussie': { content: '<b>Biélorussie</b>' },
    'Ukraine': { content: '<b>Ukraine</b><br>Lesya Ukrainka, Olena Zelenska' },
    'Moldavie': { content: '<b>Moldavie</b>' },
    'Roumanie': { content: '<b>Roumanie</b><br>Elena Ceaușescu, Ana Aslan' },
    'Bulgarie': { content: '<b>Bulgarie</b><br>Stanka Zlateva, Julia Kristeva' },
    'Grèce': { content: '<b>Grèce</b><br>Melina Mercouri, Katerina Sakellaropoulou' },
    'Turquie': { content: '<b>Turquie</b><br>Halide Edib Adıvar, Sabiha Gökçen' },
    'Chypre': { content: '<b>Chypre</b>' },
};

// Gestion dynamique de la popup (souris et clavier)
paysElements.forEach(pays => {
    pays.setAttribute('tabindex', '0');
    pays.setAttribute('role', 'button');
    pays.setAttribute('aria-label', pays.getAttribute('data-pays'));

    // Affichage popup souris
    pays.addEventListener('mouseenter', (e) => {
        showPopup(e.target, e);
    });
    pays.addEventListener('mousemove', (e) => {
        movePopup(e);
    });
    pays.addEventListener('mouseleave', () => {
        hidePopup();
    });

    // Affichage popup clavier
    pays.addEventListener('focus', (e) => {
        showPopup(e.target, e, true);
    });
    pays.addEventListener('blur', () => {
        hidePopup();
    });

    // Navigation clavier (Entrée ou Espace)
    pays.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            goToCountryPage(pays.getAttribute('data-pays'));
        }
    });

    // Navigation souris (clic)
    pays.addEventListener('click', (e) => {
        goToCountryPage(pays.getAttribute('data-pays'));
    });
});

function showPopup(target, evt, isKeyboard = false) {
    const paysNom = target.getAttribute('data-pays');
    if (countryInfo[paysNom]) {
        popup.innerHTML = countryInfo[paysNom].content;
    } else {
        popup.textContent = paysNom;
    }
    popup.setAttribute('aria-hidden', 'false');
    popup.style.display = 'block';
    popup.style.opacity = '0.98';
    popup.style.transition = 'opacity 0.25s';
    popup.style.transform = 'none';

    movePopup(evt, isKeyboard);
}

function movePopup(evt, isKeyboard = false) {
    let x, y;
    if (isKeyboard || evt.type === 'focus') {
        // Centrer la popup sur le pays focusé
        const rect = evt.target.getBoundingClientRect();
        x = rect.left + rect.width / 2 + window.scrollX - popup.offsetWidth / 2;
        y = rect.top + window.scrollY - popup.offsetHeight - 18;
    } else {
        x = evt.clientX + 18;
        y = evt.clientY - 18;
    }
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
}

function hidePopup() {
    popup.setAttribute('aria-hidden', 'true');
    popup.style.opacity = '0';
    setTimeout(() => { popup.style.display = 'none'; }, 180);
}

function goToCountryPage(paysNom) {
    const pages = {
        'France': 'page/france.html',
        'Tchéquie': 'page/tchequie.html',
        'Italie': 'page/italie.html',
        'Portugal': 'page/portugal.html',
        'Espagne': 'page/espagne.html',
        'Allemagne': 'page/allemagne.html',
        'Belgique': 'page/belgique.html',
        'Luxembourg': 'page/luxembourg.html',
        'Pays-Bas': 'page/pays-bas.html',
        'Irlande': 'page/irlande.html',
        'Danemark': 'page/danemark.html',
        'Suède': 'page/suede.html',
        'Finlande': 'page/finlande.html',
        'Estonie': 'page/estonie.html',
        'Lettonie': 'page/lettonie.html',
        'Lituanie': 'page/lituanie.html',
        'Pologne': 'page/pologne.html',
        'Autriche': 'page/autriche.html',
        'Slovaquie': 'page/slovaquie.html',
        'Slovénie': 'page/slovenie.html',
        'Croatie': 'page/croatie.html',
        'Hongrie': 'page/hongrie.html',
        'Roumanie': 'page/roumanie.html',
        'Bulgarie': 'page/bulgarie.html',
        'Grèce': 'page/grece.html',
        'Chypre': 'page/chypre.html',
        'Malte': 'page/malte.html',
    };
    if (pages[paysNom]) {
        window.location.href = pages[paysNom];
    }
}
