
function mostraPlacar(){ //Faz aparecer o Placar
  textSize(50); //Define o tamanho dele
  fill("white"); //Define para que ele seja branco
  text(placarGary, larguraTela - 150, 60); //Faz com que os pontos do Gary apareça na tela, no canto superior direito
  
}

function jogar(){ //Função que faz o jogo iniciar
  
  if(placarGary < 2000 ){ //Se os pontos do Gary forem menor que 2 mil o jogo é iniciado
  background(imgFundo); //Define a imagem de fundo do jogo
  mostraGary(); //Ativa a função que mostra o Gary
  mostraKaren(); //Ativa a função que mostra as Karens
  movimentaGary(); //Ativa a função que faz o Gary se mexer
  movimentaKaren(); //Ativa a função que faz as Karens se moverem
  adicionaPontos(); //Ativa a função que conta os pontos do Gary
  mostraPlacar(); //Ativa a função que mostra os pontos do Gary
  encosta(); //Ativa a função que verifica se o Gary encostou em alguma Karen
  cai();
  }else{
    //Verifica e mostra o campeão
    if(placarGary >= 2000 ) //Se os pontos do Gary chegarem a 2 mil
      garyVenceu(); //Ativa a função que mostra que o Gary venceu
  }
}

function adicionaPontos(){ //Função que adiciona pontos para o Gary
  
  if(xGary <= 20 ){ //Quando as Karens começam a vir atrás do Gary
    placarGary += 1; //Adiciona 1 ponto para o Gary
   
  }
}//Fim do Adiciona Ponto

function garyVenceu(){ //Função que identifica que o Gary venceu o jogo
  image(imgGanhou, 0, 0, larguraTela, alturaTela); //Define a foto do fundo, sua posição, altura e largura
  
}

function garyPerdeu(){ //Função que identifica que o Gary perdeu o jogo
  image(imgPerdeu, 0, 0, larguraTela, alturaTela); //Define a foto do fundo, sua posição, altura e largura 

}

