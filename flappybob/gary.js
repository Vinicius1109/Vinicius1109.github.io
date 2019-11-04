let atropelaGary = false;
let perdeu = false;

function mostraGary(){
  image(imgGary, xGary, yGary, 75, 75);
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




function atropelamento() {
  for(let i = 0; i<imgKaren.length; i++){
    
    atropelaGary = collideRectRect(xGary, yGary, 75, 75, xKaren[i], yKaren[i], 200, 400);
    
    if(atropelaGary){
        perdeu = true;
        garyPerdeu();
      
    }
  }
}