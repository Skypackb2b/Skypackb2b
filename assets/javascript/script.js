window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    let colocarClasse = document.querySelector("#navigation");
    colocarClasse.classList.add('scroll')
  } else {
    let retirarClasse = document.querySelector("#navigation");
    retirarClasse.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    let colocarClasseBackToTopButton = document.querySelector(".backToTopButton");
    let colocarClasseWhats = document.querySelector(".WhatsappButtonFixed");
    colocarClasseBackToTopButton.classList.add('show')
    colocarClasseWhats.classList.add('show')
  } else {
    let retirarClasseBackToTopButton = document.querySelector(".backToTopButton");
    let retirarClassWhats = document.querySelector(".WhatsappButtonFixed");
    retirarClasseBackToTopButton.classList.remove('show')
    retirarClassWhats.classList.remove('show')
  }
}

function openMenu() {
    // document.documentElement.scrollTop = 0; // Isso rolará a página para o topo
    document.body.classList.add("menu-expended")
}

function closeMenu() {
    document.body.classList.remove("menu-expended")
}

function adjustForAddressBar() {
  const contentElement = document.getElementById('navigation'); // 
  let addressBarHeight = window.innerHeight - document.documentElement.clientHeight;

  // Verificar se a barra de endereço está visível e ajustar a altura
  if (addressBarHeight > 0) {
    addressBarHeight = 0;
  }

  if (contentElement) {
    contentElement.style.marginTop = addressBarHeight + 'px';
    contentElement.style.marginLeft = 'auto';
    contentElement.style.marginRight = 'auto';
  }
}

function toggleContent() {
  var button = document.querySelector('.button-menu');
  var minhaImagem = document.querySelector('.seja-fornecedor');
  
  if (window.innerWidth < 1024) {
    button.textContent = 'Fale com um especialista';
    minhaImagem.src = 'assets/imagens/seja_fornecedor-cel.png';
  } else {
    button.textContent = 'Contato';
    minhaImagem.src = 'assets/imagens/seja_fornecedor-pc.png';
  }
}

function alterarDimensoesSVG() {
  if (window.innerWidth >= 1024) {
      var minhaDiv = document.querySelector('.abcSize');
      var meuSVG = minhaDiv.querySelector('svg');
      meuSVG.setAttribute('width', '700');
      meuSVG.setAttribute('height', '280');
  } else {
      var minhaDiv = document.querySelector('.abcSize');
      var meuSVG = minhaDiv.querySelector('svg');
      meuSVG.setAttribute('width', '315');
      meuSVG.setAttribute('height', '203');
  }
}

function toggleAndAdjust() {
  toggleContent();
  alterarDimensoesSVG();
  onScroll();
  alterarAlturaComprimentoCardsPortifolio();
}

window.addEventListener('resize', toggleAndAdjust);
document.addEventListener('DOMContentLoaded', toggleAndAdjust);

document.querySelectorAll('.scroll-link').forEach(element => {
  element.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
          const yOffset = -100;
          const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
      }
  });
});

function alterarAlturaComprimentoCardsPortifolio() {
  let elementos = document.querySelectorAll('.flip-card-inner');

  elementos.forEach(element => {
    let elementHeight = 1.0375 * element.offsetWidth;
    element.setAttribute("style",`height:${elementHeight}px`);
    element.style.height=element.offsetWidth;      
  });
}

window.onload = function() {
  alterarAlturaComprimentoCardsPortifolio();
};

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
}).reveal(`#home,
#home img,
.botao-whats-cell,
.abc,
.colB,
.colA,
.contato-reveal,
.button-contact,
.sobre-principal,
.img-portfolio-celular,
.portifolio-final,
.seja-fornecedor`);