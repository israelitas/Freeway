//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeMover()){
      yAtor += 3;
    }
  }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function verificaColisao () {
  for (let i = 0; i <imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao) {
      voltaAtorInicio();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }     
    }
  }
}

function voltaAtorInicio() {
  yAtor = 366;
}

function exibePontos() {
  text(meusPontos, width/5, 27);
  fill(255, 240, 0);
  textAlign(CENTER);
  textSize(25);
}

function marcaPontos() {
  if(yAtor < 12) {
    meusPontos += 1;
    voltaAtorInicio()
    somDoPonto.play();
  };
}

function pontosMaiorQueZero () {
  return meusPontos > 0
}

function podeMover() {
  return yAtor < 366;
}