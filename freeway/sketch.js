function telaInicial(){
  image(imgLogo,0, 0, 600, 400);
  
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  somTrilha.play();
  somTrilha.loop();
  somTrilha.setVolume(0.3);
  
}

function draw() {
  if(frameCount < 400) //10 Segundos
    telaInicial();
  else
  jogar()
}


