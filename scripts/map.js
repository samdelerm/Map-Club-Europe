const paysElements = document.querySelectorAll('.pays');
const popup = document.getElementById('popup');

const countryInfo = {
    'Tchéquie': { content: 'Tchéquie' },
    'France': { content: 'France' },
    'Allemagne': { content: 'Allemagne' },
    'Belgique': { content: 'Belgique' },
    'Suisse': { content: 'Suisse' },
    'Italie': { content: 'Italie' },
    'Espagne': { content: 'Espagne' },
    'Portugal': { content: 'Portugal' },
    'Sardaigne': { content: 'Sardaigne' },
    'Corse': { content: 'Corse' },
    'Luxembourg': { content: 'Luxembourg' },
    'Pays-Bas': { content: 'Pays-Bas' },
    'Royaume-Uni': { content: 'Royaume-Uni' },
    'Irlande': { content: 'Irlande' },
    'Danemark': { content: 'Danemark' },
    'Suède': { content: 'Suède' },
    'Norvège': { content: 'Norvège' },
    'Finlande': { content: 'Finlande' },
    'Estonie': { content: 'Estonie' },
    'Lettonie': { content: 'Lettonie' },
    'Lituanie': { content: 'Lituanie' },
    'Biélorussie': { content: 'Biélorussie' },
    'Ukraine': { content: 'Ukraine' },
    'Moldavie': { content: 'Moldavie' },
    'Roumanie': { content: 'Roumanie' },
    'Bulgarie': { content: 'Bulgarie' },
    'Grèce': { content: 'Grèce' },
    'Turquie': { content: 'Turquie' },
    'Chypre': { content: 'Chypre' },
};

paysElements.forEach(pays => {
    pays.addEventListener('mouseover', (e) => {
        const paysNom = e.target.getAttribute('data-pays');
        if (countryInfo[paysNom]) {
            popup.innerHTML = countryInfo[paysNom].content;
        } else {
            popup.textContent = paysNom;
        }

        const rect = e.target.getBoundingClientRect();
        popup.style.left = `${rect.x + window.scrollX}px`;
        popup.style.top = `${rect.y + window.scrollY}px`;
        popup.style.display = 'block';
    });

    pays.addEventListener('mouseout', () => {
        popup.style.display = 'none';
    });

    pays.addEventListener('click', (e) => {
        const paysNom = e.target.getAttribute('data-pays');
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
    });
});
