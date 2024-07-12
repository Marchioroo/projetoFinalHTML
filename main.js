function mostrarIcone(qrElementId, qrImgId) {
    var qrcode = document.getElementById(qrElementId);
    var qrimg = document.getElementById(qrImgId);

    qrcode.addEventListener('mouseover', () => {
        qrimg.style.visibility = 'visible';
    });

    qrcode.addEventListener('mouseout', () => {
        qrimg.style.visibility = 'hidden';
    });
}

mostrarIcone('qr-1', 'qrimg-1');
mostrarIcone('qr-2', 'qrimg-2');

const sections = document.querySelectorAll('aside');
const navItems = document.querySelectorAll('.menu-item');

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const scrollPosition = window.scrollY;

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
        header.style.boxShadow = 'none';
        menu.style.boxShadow = 'none'; // Remove o box-shadow quando no topo da página
    } else {
        // header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
        menu.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)'; // Adiciona o box-shadow quando a página é rolada
    }

    sections.forEach((section, i) => {
        const sectionTop = section.offsetTop - 96;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false;
        }
    });

    navItems.forEach((item) => {
        item.classList.remove('active');
    });
    if (navItems[activeSectionIndex]) {
        navItems[activeSectionIndex].classList.add('active');
    }
});

ScrollReveal().reveal('#hok-logo', {
    origin: 'top',
    duration: 1000,
    distance: '20%'
});

ScrollReveal().reveal('.qrcode', {
    origin: 'top',
    duration: 1000,
    distance: '20%'
});
