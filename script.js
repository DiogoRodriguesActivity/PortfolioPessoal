const darkM = document.getElementById('light-mode');

darkM.addEventListener('change', () => {
    document.body.classList.toggle('light');
})


/* Modal Sobre Mim */
const aboutDialog = document.getElementById('about-dialog');

const openAboutDialogButton = document.getElementById('open-about-dialog');
const closeAboutDialogButton = aboutDialog.querySelector('.about-dialog-close');

const aboutTabs = [...aboutDialog.querySelectorAll('[role="tab"]')];

function activateAboutTab(tab) {
  aboutTabs.forEach((currentTab) => {
    const isSelected = currentTab === tab;
    const panel = document.getElementById(currentTab.getAttribute('aria-controls'));

    currentTab.setAttribute('aria-selected', String(isSelected));
    currentTab.tabIndex = isSelected ? 0 : -1;
    panel.hidden = !isSelected;
  });
}

openAboutDialogButton.addEventListener('click', () => {
  aboutDialog.classList.remove('closing');
  document.body.classList.add('modal-open');
  aboutDialog.showModal();
});

function closeAboutDialog() {
  if (aboutDialog.open && !aboutDialog.classList.contains('closing')) {
    aboutDialog.classList.add('closing');
  }
}

closeAboutDialogButton.addEventListener('click', closeAboutDialog);

aboutDialog.addEventListener('click', (event) => {
  if (event.target === aboutDialog) {
    closeAboutDialog();
  }
});

aboutDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeAboutDialog();
});

aboutDialog.addEventListener('animationend', (event) => {
  if (event.target === aboutDialog && event.animationName === 'about-dialog-out') {
    aboutDialog.close();
  }
});

function updateModalScrollLock() {
  document.body.classList.toggle('modal-open', Boolean(document.querySelector('dialog[open]')));
}

aboutDialog.addEventListener('close', () => {
  aboutDialog.classList.remove('closing');
  updateModalScrollLock();
});

const emailLink = document.getElementById('copy-email');
const copyToast = document.getElementById('copy-toast');
let copyToastTimer;

function showCopyToast(message) {
  copyToast.textContent = message;
  copyToast.classList.add('visible');
  clearTimeout(copyToastTimer);
  copyToastTimer = setTimeout(() => copyToast.classList.remove('visible'), 2000);
}

function copyTextFallback(text) {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();

  try {
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    field.remove();
  }
}

emailLink.addEventListener('click', async (event) => {
  event.preventDefault();
  const email = emailLink.textContent.trim();
  let copied = false;

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(email);
      copied = true;
    } else {
      copied = copyTextFallback(email);
    }
  } catch {
    copied = copyTextFallback(email);
  }

  showCopyToast(copied ? 'Email copiado' : 'Não foi possível copiar o email');
});

aboutTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateAboutTab(tab));
  tab.addEventListener('keydown', (event) => {
    let nextIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % aboutTabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + aboutTabs.length) % aboutTabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = aboutTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    aboutTabs[nextIndex].focus();
    activateAboutTab(aboutTabs[nextIndex]);
  });
});
/* Fim do Modal Sobre Mim */

/*Efeito no Texto*/
 
/*Efeito no Texto*/

const schoolsDialog = document.getElementById('modalEscolas');
const closeSchoolsDialogButton = schoolsDialog.querySelector('.school-dialog-close');

function abrirModalEscolas() {
  schoolsDialog.classList.remove('closing');
  document.body.classList.add('modal-open');
  schoolsDialog.showModal();
}

function fecharModalEscolas() {
  if (schoolsDialog.open && !schoolsDialog.classList.contains('closing')) {
    schoolsDialog.classList.add('closing');
  }
}

closeSchoolsDialogButton.addEventListener('click', fecharModalEscolas);

schoolsDialog.addEventListener('click', (event) => {
  if (event.target === schoolsDialog) fecharModalEscolas();
});

schoolsDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  fecharModalEscolas();
});

schoolsDialog.addEventListener('animationend', (event) => {
  if (event.target === schoolsDialog && event.animationName === 'about-dialog-out') {
    schoolsDialog.close();
  }
});

schoolsDialog.addEventListener('close', () => {
  schoolsDialog.classList.remove('closing');
  updateModalScrollLock();
});


  /*Slide Show*/
let slideIndex = 0;
const slides = document.getElementsByClassName("slide-visite");
const descricoes = [
  "Curso feito pela Cisco sobre Hardware de computador e seus fundamentos,desenvolvi habilidades sobre:\n ⚪ Montagem de computadores, seus riscos e suas soluções",
  "Curso feito pela Cisco sobre Ciencias de dados, desenvolvi habilidades sobre:\n ⚪ gestão de dados e seus conceitos.",
  "Curso feito pela Cisco sobre a Defesa de Rede pelo Packet Tracer, desenvolvi habilidades sobre:\n ⚪ gerenciamento de operações de Ciber-Segurança \n ⚪ Virtualização e computação em Nuvem \n ⚪ Criptografia..." ,
  "⚪ Completei o treinamento de monitor na 10° edição do Code Club (Raspberry Co.)\n ⚪ Fui voluntário para ensinar crianças carentes a usar estruturas de códigos (Code Club 10°)",
  "⚪ Tenho conhecimento em desing grafico, sei manipular imagens digitais e vetorizar-las"
];

function mostrarSlide(n) {
  if (n >= slides.length){
    slideIndex = 0;
  }
  
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  document.getElementById("descricao-slide").innerText = descricoes[slideIndex];
}

function mudarSlide(n) {
  slideIndex += n;
  mostrarSlide(slideIndex);
}

function abrirModalVisite() {
  document.getElementById("modalVisite").style.display = "block";
  slideIndex = 0;
  mostrarSlide(slideIndex);
}

function fecharModalVisite(event) {
  if (event?.target?.id === "modalVisite" || event === undefined) {
    document.getElementById("modalVisite").style.display = "none";
  }
}


 // Codigo do Menu

   /*
   document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("Menu");
  let lastScrollY = window.scrollY;

  function animateMenu() {
    const currentScrollY = window.scrollY;

    // Movimenta o menu suavemente com o scroll
    const newTop = currentScrollY + 10;
    menu.style.top = `${newTop}px`;

    lastScrollY = currentScrollY;
    requestAnimationFrame(animateMenu);
  }

  animateMenu();
});
   */

document.getElementById('MainMenu').addEventListener('click', function(event) {
    event.preventDefault();
    const MainMenu1 = document.getElementById('MainMenu1');
    MainMenu1.scrollIntoView({behavior: 'smooth'});
});
document.getElementById('Gotopic').addEventListener('click', function(event) {
    event.preventDefault();
    const Gotopic1 = document.getElementById('Gotopic1');
    Gotopic1.scrollIntoView({behavior: 'smooth'});
});
document.getElementById('GoComp').addEventListener('click', function(event) {
    event.preventDefault();
    const GoComp1 = document.getElementById('GoComp1');
    GoComp1.scrollIntoView({behavior: 'smooth'});
});
document.getElementById('GoSaibaMais').addEventListener('click', function(event) {
    event.preventDefault();
    const GoSaibaMais1 = document.getElementById('GoSaibaMais1');
    GoSaibaMais1.scrollIntoView({behavior: 'smooth'});
});


  /* Codigo do Hamburguer */
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');


hamburgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
  }
});


  /* Codigo do Hamburguer */
  /*  Codigo Modal Seção 4 */
  function abrirAba(id) {
  const abas = document.querySelectorAll('.conteudo-aba');
  abas.forEach(aba => aba.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function ampliarImagem(img) {
  const overlay = document.getElementById("overlayImagem");
  const imgAmpliada = document.getElementById("imagemAmpliada");
  imgAmpliada.src = img.src;
  overlay.style.display = "flex";
}

function fecharImagemAmpliada() {
  document.getElementById("overlayImagem").style.display = "none";
}

  /*  Codigo Modal Seção 4 (31 de Março de 2026)*/

const box = document.querySelector(".Slider-content")
const images = document.querySelectorAll(".Slider-content img")
const dots = document.querySelectorAll(".dot");

let contador = 0;

function slider() {
  contador++;

  if(contador > images.length - 1){
    contador = 0; 
    // vai pegar todo o tamanho da imagem, se estiver no final, volta pro 0
  }
  console.log("oLA")
  box.style.transform = `translateX(${-contador * 100}%)`;
    
  dots.forEach(dot => 
    dot.classList.remove("active")
  );
  dots[contador].classList.add("active");
}



setInterval(slider, 2000); /* Acessa uma propriedade para repetir por certo periodo de tempo setInterval (funcao, 2000 Milesimos)*/

window.addEventListener("blur", () => {
  document.title = "Até breve ✌️";
});

window.addEventListener("focus", () => {
  document.title = "Diogo.Rodrigues";
});