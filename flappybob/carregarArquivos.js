//Variaveis das Imagens

  let imgKaren = []; //Coloca a Karen no jogo


//Variaveis da Tela

  let larguraTela = 1280; //Define a largura da Tela do Jogo
  let alturaTela = 600; //Define a altura da Tela do Jogo

//Variaveis do Placar

  let placarGary = 0; //Define o placar para 0 no inicio do jogo

  let xGary = 20; //Define a posição X do Gary no jogo
  let yGary = 200; //Define a posição Y do Gary no jogo

  let xKaren = [1330, 1630, 1930, 2230, 2530, 1330, 1630, 1930, 2230, 2530]; //Define a posição X das Karens no jogo
  let yKaren = [-110, -150, -80, -150, -60, 450, 400, 470, 420, 490 ]; //Defina a posição X das Karens no jogo
  let velocidadeKaren = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]; //Define a velocidade das Karens no jogo

function preload(){ //Previo Carregamento das Imagens e Sons antes do jogo
  imgGary = loadImage('imagens/gary.png'); //Carrega a imagem do Gary no jogo
  
  imgKaren[0] = loadImage('imagens/karen_baixo.png'); //Carrega a imagem da Karen no jogo
  imgKaren[1] = loadImage('imagens/karen_baixo.png'); //Carrega a imagem da Karen no jogo
  imgKaren[2] = loadImage('imagens/karen_baixo.png'); //Carrega a imagem da Karen no jogo
  imgKaren[3] = loadImage('imagens/karen_baixo.png'); //Carrega a imagem da Karen no jogo
  imgKaren[4] = loadImage('imagens/karen_baixo.png'); //Carrega a imagem da Karen no jogo
  
  imgKaren[5] = loadImage('imagens/karen.png'); //Carrega a imagem da Karen no jogo
  imgKaren[6] = loadImage('imagens/karen.png'); //Carrega a imagem da Karen no jogo
  imgKaren[7] = loadImage('imagens/karen.png'); //Carrega a imagem da Karen no jogo
  imgKaren[8] = loadImage('imagens/karen.png'); //Carrega a imagem da Karen no jogo
  imgKaren[9] = loadImage('imagens/karen.png'); //Carrega a imagem da Karen no jogo
  
  imgFundo = loadImage('imagens/fundo.png'); //Carrega a imagem de Fundo no jogo
  imgLogo = loadImage('imagens/tela_inicial.png'); //Carrega a imagem da Tela Inicial no jogo
  imgDicas = loadImage('imagens/dicas.png'); //Carrega a imagem das Instruções no jogo
  imgGanhou = loadImage('imagens/ganhou.png'); //Carrega a imagem se o Gary venceu no jogo
  imgPerdeu = loadImage('imagens/perdeu.png'); //Carrega a imagem se o Gary perdeu no jogo
  
  somTrilha = loadSound("sons/trilha.mp3"); //Carrega o som de fundo do jogo
  somBatida = loadSound("sons/som-batida.mp3"); //Carrega o som de batida no jogo
  somContador = loadSound("sons/som-contador.mp3"); //Carrega o som de contar pontos no jogo
  
  

}
