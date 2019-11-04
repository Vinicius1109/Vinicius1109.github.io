let placarGary = 0;
let imgLogo;

let imgGary;
let imgKaren = [];

let xGary = 20;
let yGary = 200;


let yKaren = [-200, -250, -180, -210, -250, 350, 300, 400, 380, 300];
let xKaren = [1330, 1630, 1970, 2230, 2530, 1330, 1630, 1970, 2230, 2530];
let velocidadeKaren = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];


let alturaTela = 600;
let larguraTela = 1280;

function preload(){
  imgGary = loadImage('imagens/gary.png');
  
  imgKaren[0] = loadImage('imagens/karen_baixo.png');
  imgKaren[1] = loadImage('imagens/karen_baixo.png');
  imgKaren[2] = loadImage('imagens/karen_baixo.png');
  imgKaren[3] = loadImage('imagens/karen_baixo.png');
  imgKaren[4] = loadImage('imagens/karen_baixo.png');
  
  imgKaren[5] = loadImage('imagens/karen.png');
  imgKaren[6] = loadImage('imagens/karen.png');
  imgKaren[7] = loadImage('imagens/karen.png');
  imgKaren[8] = loadImage('imagens/karen.png');
  imgKaren[9] = loadImage('imagens/karen.png');
  
  imgFundo = loadImage('imagens/fundo.png');
  imgLogo = loadImage('imagens/tela_inicial.png');
  imgDicas = loadImage('imagens/dicas.png');
  imgGanhou = loadImage('imagens/ganhou.png');
  imgPerdeu = loadImage('imagens/perdeu.png');
  
  somTrilha = loadSound("sons/trilha.mp3");
  somBatida = loadSound("sons/som-batida.mp3");
  somContador = loadSound("sons/som-contador.mp3");

}
