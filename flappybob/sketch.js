function setup() { //Configura o Jogo
  createCanvas(larguraTela, alturaTela); //Cria as Dimensões do Jogo
  
  somTrilha.play(); //Inicia uma musica de fundo
  somTrilha.loop(); //Faz a musica ficar infinita
  somTrilha.setVolume(0.3); //Reduz o volume da musica para 0.3
   
}

function draw() { //Desenha o formato do jogo
  if(frameCount < 400) //Espera 8 segundos + ou -
    telaInicial(); //Ativa a função da Tela Inicial
  else
    if(frameCount < 1000) //Espera 18 segundos + ou -
      instruções(); //Ativa a função das Instruções
  else
    if(!perdeu) //Verifica se o jogador não perdeu o Jogo
      jogar(); //Caso não perdeu, é ativada a função Jogar    
}

function telaInicial(){ //Função que mostra a Tela Inicial do Jogo
  image(imgLogo,0, 0, 1280, 600); //Define a foto de fundo, sua posição, altura e sua largura
}

function instruções(){ //Função que mostra as Instruções
  image(imgDicas,0, 0, 1280, 600); //Define a foto de fundo, sua posição, altura e sua largura
  
}

if(yGary >= 500){
    yGary -= 1;
}


















