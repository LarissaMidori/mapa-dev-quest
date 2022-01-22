/* -Quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem 
  -A imagem atual começa em 0 pq é a primeira imagem
  -Assim que for clicado no avançar, adicionar + 1 ao contador de imagens pra saber que agora a segunda imagem será mostrada 
  -Esconder todas as imagens
  -Pegar todas as imagens usando o DOM e remover a classe mostrar
  - Mostrar a próxima imagem
  -Pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela */

const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

/* -Assim que for clicado no avançar, adicionar + 1 ao contador de imagens pra saber que agora a segunda imagem será mostrada  */

setaAvancar.addEventListener('click', () => {

  //testa se o contador da imagemAtual é igual ao total de imagens
  const totalDeImagens = imagensPainel.length - 1;
  if (imagemAtual === totalDeImagens) {
    return;
  }

  /* -A imagem atual começa em 0 pq é a primeira imagem */

  imagemAtual++

  /* -Esconder todas as imagens
-Pegar todas as imagens usando o DOM e remover a classe mostrar */

  imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
  });

  /*  - Mostrar a próxima imagem
-Pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela */

  imagensPainel[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', () => {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
  });

  imagensPainel[imagemAtual].classList.add('mostrar');

});
