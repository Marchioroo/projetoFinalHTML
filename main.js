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

ScrollReveal().reveal('#video-source', {
    origin: 'right',
    duration: 1500,
    distance: '20%'
});
ScrollReveal().reveal('#video-player', {
    origin: 'right',
    duration: 1500,
    distance: '20%'
});




// Seleciona os elementos de menu
// Captura os elementos de menu e vídeo
let todos = document.getElementById('todos');
let topLink = document.getElementById('top');
let adc = document.getElementById('adc');
let mid = document.getElementById('mid');
let sup = document.getElementById('sup');
let jun = document.getElementById('jun');
let videoPlayer = document.getElementById('video-player');
let videoSource = document.getElementById('video-source');

// Adiciona ouvintes de evento para cada link de filtro
todos.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    trocarVideo('video/rota_do_meio.mp4');
    videoPlayer.play();
    
});

topLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    trocarVideo('video/rota_do_meio.mp4');
    videoPlayer.play();
    ScrollReveal().reveal('#video-source', { delay: 500 });
    ScrollReveal().reveal('#video-player', { delay: 500 });
});

adc.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    trocarVideo('video/rota_do_jungle.mp4');
    videoPlayer.play();
});

mid.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    trocarVideo('video/rota_do_meio.mp4');
    videoPlayer.play();
});

sup.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    trocarVideo('video/rota_do_meio.mp4');
    videoPlayer.play();
});

jun.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    trocarVideo('video/rota_do_meio.mp4');
    videoPlayer.play();
});

// Função para trocar o vídeo
// Função para trocar o vídeo
function trocarVideo(source) {
    // Oculta o vídeo atual suavemente
   
    
    // Aguarda um curto período para a transição ocorrer
    setTimeout(() => {
        videoSource.src = source; // Altera a origem do vídeo
        videoPlayer.load(); // Recarrega o vídeo com a nova origem
        videoPlayer.play(); // Inicia a reprodução do vídeo automaticamente
        
        
        // Exibe o novo vídeo suavemente
        
    }, 500); // Tempo deve corresponder ao tempo de transição CSS
   
}


