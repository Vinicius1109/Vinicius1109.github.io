
function mostraPlacar(){
  textSize(30);
  fill("white");
  text(placarGary, larguraTela - 100, 60);
  
}

function jogar(){
  
  if(placarGary < 2000 ){
  background(imgFundo);
  mostraGary();
  mostraKaren();
  movimentaGary();
  movimentaKaren();
  adicionaPontos();
  mostraPlacar();
  atropelamento();
  }else{
    //Verifica e mostra o campeão
    if(placarGary >= 2000 )
      garyVenceu();
  }
}

function adicionaPontos(){
  
  if(xGary <= 20 ){
    placarGary += 1;
   
  }
}//Fim do Adiciona Ponto

function garyVenceu(){
  image(imgGanhou, 0, 0, larguraTela, alturaTela);
  

}

function garyPerdeu(){
  image(imgPerdeu, 0, 0, larguraTela, alturaTela);
  
  

}

