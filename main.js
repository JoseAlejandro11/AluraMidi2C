Function tocaSom(SeletorAudio) {
  const elemento= document.query Seletor(seletorAudio);
  if (elements&& elemento.localName ==='Audio'){
   elemento.play();
  }
  else{
    console.log('Elemento não encontrado ou seletor invalido');
  }
}
const listaDeteclas = document.querySeletorAll('.tecla');
for(let contador=O;contador<listaDeteclas.length;contador++){
  const tecla=listaDeteclas[contador];
