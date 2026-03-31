const checkbox =
document.getElementById('toggle--daynight');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})


 /*Codigo para o Modal (com as abas)*/
    
 // Ativa a primeira aba por padrão
   document.getElementsByClassName("tablink")[0].click();

    function openCity(evt, cityName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.classList.add("w3-light-grey");
    }

    function closeOnOutsideClick(event, modalId) {
      var modal = document.getElementById(modalId);
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
/*Fim do Codigo para o Modal (com as abas)*/

/*Efeito no Texto*/
 
/*Efeito no Texto*/

function abrirModalEscolas() {
    document.getElementById('modalEscolas').style.display = 'block';
  }

  function fecharModalEscolas() {
    document.getElementById('modalEscolas').style.display = 'none';
  }


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
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

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
const toggleDark = document.getElementById('toggle--daynight');

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

toggleDark.addEventListener('change', () => {
  document.body.classList.toggle('dark', toggleDark.checked);
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
  // console.log("oLA")
  box.style.transform = `translateX(${-contador * 100}%)`;
    
  dots.forEach(dot => 
    dot.classList.remove("active")
  );
  dots[contador].classList.add("active");
}



setInterval(slider, 2000); /* Acessa uma propriedade para repetir por certo periodo de tempo setInterval (funcao, 2000 Milesimos)*/