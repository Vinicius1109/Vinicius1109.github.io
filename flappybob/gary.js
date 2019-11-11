let garyEncostou = false; //Deixa a variavel desligada
let perdeu = false; //Deixa a variavel desligada 

function mostraGary(){ //Faz o Gary aparecer no Jogo
  image(imgGary, xGary, yGary, 50, 50); //Define a foto do Gary, sua posição dentro do jogo, altura e largura
}

function cai(){
  if(xGary <= 20)
    yGary += 3;
}

function movimentaGary(){ //Função que faz o Gary se mover
  
  if(keyIsDown(87)){ //Quando a tecla W for pressionada
    if(yGary > 5) //Só movimenta para cima se o Gary estiver a mais de 5 pixels do Teto
      yGary -= 7; //Faz com que ele suba 7 pixels
  }
  
  if(keyIsDown(83)){ //Quando a tecla S for pressiona
    if(yGary < 500) //Só movimenta para baixo se o Gary estiver a 100 pixels do Chão
      yGary += 5; //Faz com que o Gary desça 5 pixels
  }
}




