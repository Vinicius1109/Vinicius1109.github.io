function mostraKaren(){

   for(let i = 0; i < imgKaren.length; i++){
    image(imgKaren[i], xKaren[i], yKaren[i], 200, 400);
   }
}

function movimentaKaren(){

    
     for(let i = 0; i <imgKaren.length; i++){
    {
    //Karen indo para Esquerda
      xKaren[i] -= velocidadeKaren[i]
      
      //Se o karen chegou no fim do percurso
      if(xKaren[i] < -200){
        xKaren[i] = 1330;
        velocidadeKaren[i] = 5;
  }
    }
    }//Else
  }//For


  

  
  
