function encosta() {
  for(let i = 0; i<imgKaren.length; i++){
    
    garyEncostou = 
      collideRectRect(xGary, yGary, 50, 50, 
                      xKaren[i], yKaren[i], 200, 400);
    
    if(garyEncostou){
        perdeu = true;
        somBatida.play();
        garyPerdeu();    
    }
  }
}