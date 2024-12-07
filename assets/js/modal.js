const units = {
    infanterie: {
        title: 'Infanteriedivisionen',
        subtitle: 'Dywizje piechoty',
        description: 'Infanteriedivisionen stanowiły podstawowy element sił lądowych Wehrmachtu podczas II wojny światowej. Były to standardowe jednostki bojowe składające się z około 15 000 żołnierzy, podzielonych na pułki, batalony i kompanie.',
        image: './assets/img/piechota-2.webp'
    },
    aufklarung: {
        title: 'Aufklärungsabteilung',
        subtitle: 'Dywizje zwiadu',
        description: 'Wyspecjalizowane jednostki zwiadu i rozpoznania w strukturach Wehrmachtu. Ich kluczowym zadaniem było zbieranie informacji wywiadowczych o przeciwniku, terenie oraz sytuacji strategicznej.',
        image: './assets/img/rowery.webp'
    },
    roa: {
        title: 'Russische Befreiungsarmee',
        subtitle: 'Rosyjska Armia Wyzwoleńcza',
        description: 'Rosyjska Armia Wyzwoleńcza złożona z radzieckich jeńców wojennych i ochotników, którzy walczyli po stronie Niemiec przeciwko Związkowi Radzieckiemu.',
        image: './assets/img/roa.webp'
    },
    volkssturm: {
        title: 'Volkssturm',
        subtitle: 'Ostatnia obrona Niemiec',
        description: 'Pospolite ruszenie utworzone pod koniec II wojny światowej, składające się z mężczyzn między 16 a 60 rokiem życia, którzy nie służyli wcześniej w wojsku.',
        image: './assets/img/volkssturm.webp'
    }
};


const modal = document.getElementById('unit-modal');
const modalContent = modal.querySelector('.modal-content');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.unit-card').forEach(card => {
    card.addEventListener('click', () => {
        const unitKey = card.getAttribute('data-unit');
        openModal(unitKey);
    });
});

function openModal(unitKey) {
    const unit = units[unitKey];
    const modal = document.getElementById('unit-modal');
    
    document.getElementById('modal-unit-title').textContent = unit.title;
    document.getElementById('modal-unit-subtitle').textContent = unit.subtitle;
    document.getElementById('modal-unit-description').textContent = unit.description;
    document.getElementById('modal-unit-image').src = unit.image;
    
    document.body.style.overflow = 'hidden';
    
    modal.classList.remove('invisible');

    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    anime({
        targets: modal.querySelector('.modal-content'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
}

function closeModal() {
    const modal = document.getElementById('unit-modal');
    document.body.style.overflow = 'auto';
    
    anime({
        targets: modal.querySelector('.modal-content'),
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    anime({
        targets: modal,
        opacity: [1, 0],
        duration: 300,
        easing: 'easeOutQuad',
        complete: () => {
            modal.classList.add('invisible');
        }
    });
}


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});