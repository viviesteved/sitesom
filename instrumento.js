function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.tagName === 'AUDIO') {
      elemento.currentTime = 0;
      elemento.play();
    }
  }
  
  const listaDeTeclas = document.querySelectorAll('.botoes button');
  
  listaDeTeclas.forEach(tecla => {
    tecla.onclick = function () {
      const nomeSom = tecla.textContent.toLowerCase(); 
      const idAudio = `#som_${nomeSom}`; 
  
      tocaSom(idAudio);
  
      const imagem = document.getElementById('imgSom');
      const nome = document.getElementById('nomeSom');
  
      imagem.src = `imagem/${nomeSom}.png`; 
      imagem.style.display = 'block';
      nome.innerText = `Som: ${nomeSom[0].toUpperCase() + nomeSom.slice(1)}`;
    };
  
    tecla.onkeydown = function (evento) {
      if (
        evento.code === 'Space' ||
        evento.code === 'Enter' ||
        evento.code === 'NumpadEnter'
      ) {
        tecla.classList.add('ativa');
      }
    };
  
    tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
    };
  });
  