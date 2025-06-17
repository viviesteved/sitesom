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
      const nomeAnimal = tecla.textContent.toLowerCase();
      const idAudio = `#som_${nomeAnimal}`;
  
      tocaSom(idAudio);
  
      const imagem = document.querySelector('#imgSom');
      const nome = document.querySelector('#nomeSom');
  
      imagem.src = `imagem/${nomeAnimal}.png`;
      imagem.style.display = 'block';
      nome.innerText = `Som: ${nomeAnimal[0].toUpperCase() + nomeAnimal.slice(1)}`;
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
  
  