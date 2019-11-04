function setup() {
  createCanvas(larguraTela, alturaTela);
  
  somTrilha.play();
  somTrilha.loop();
  somTrilha.setVolume(0.3);
}

function draw() {
  if(frameCount < 400)
    telaInicial();
  else
    if(frameCount < 1000)
      instruções();
  else
    if(!perdeu)
      jogar();     
}

function telaInicial(){
  image(imgLogo,0, 0, 1280, 600);
  
}

function instruções(){
  image(imgDicas,0, 0, 1280, 600);
  
}



















