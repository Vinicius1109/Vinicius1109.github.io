let atropelaGary = false;
let perdeu = false;

function mostraGary(){
  image(imgGary, xGary, yGary, 50, 50);
}

function movimentaGary(){
  
  if(keyIsDown(87)){
    //yGary  = yGary -5;
    if(yGary > 5)//Teto
      yGary -= 5;
  }
  
  if(keyIsDown(83)){
    if(yGary < 500)
      yGary += 5;
  }
}




