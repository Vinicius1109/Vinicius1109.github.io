function atropelamento() {
  for(let i = 0; i<imgKaren.length; i++){
    
    atropelaGary = 
      collideRectRect(xGary, yGary, 75, 75, 
                      xKaren[i], yKaren[i], 200, 400);
    
    if(atropelaGary){
        perdeu = true;
        somBatida.play();
        garyPerdeu();
      
      
    }
  }
}