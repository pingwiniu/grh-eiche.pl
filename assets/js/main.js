lucide.createIcons();
    
const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = menuOverlay.getElementsByTagName('a');

const toggleMenu = (isOpen) => {
    const spans = menuBtn.getElementsByTagName('span');
    
    menuOverlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    
    if (isOpen) {
        anime({
            targets: spans,
            rotate: (el, i) => i ? -45 : 45,
            translateY: (el, i) => i ? -5 : 5,
            duration: 400,
            easing: 'easeOutQuad'
        });
    } else {
        anime({
            targets: spans,
            rotate: 0,
            translateY: 0,
            duration: 300,
            easing: 'easeInQuad'
        });
    }
};

menuBtn.addEventListener('click', () => {
    toggleMenu(!menuOverlay.classList.contains('active'));
});

let scrollTimeout;

window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    
    scrollTimeout = setTimeout(() => {
        document.querySelectorAll('.section-fade').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                section.classList.add('visible');
            }
        });
    }, 50);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        toggleMenu(false);



        scrolltimeout = setTimeout(() => {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 300); 

    });
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.section-fade').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                section.classList.add('visible');
            }
        });
    }, 100);
});