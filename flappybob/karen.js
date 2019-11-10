function mostraKaren(){ //Faz as Karens aparecer no Jogo

   for(let i = 0; i < imgKaren.length; i++){
    image(imgKaren[i], xKaren[i], yKaren[i], 200, 400); //Define a foto das Karens, sua posição dentro do jogo, altura e largura
   }
}

function movimentaKaren(){ //Faz com que a Karen se mova em direção ao Gary

    
     for(let i = 0; i <imgKaren.length; i++){
    {
        //Karen indo para Esquerda
      xKaren[i] -= velocidadeKaren[i] //Faz com quem as Karens se mova para a esquerda
      
      //Se o karen chegou no fim do percurso
      if(xKaren[i] < -200){ //Quando a Karen chega na posição -200, que seria fora da tela
        xKaren[i] = 1330; //Faz a Karen voltar para a posição de inicio dela
        velocidadeKaren[i] = 5; //Define a velociade dela para 5
        }
      }
    }//Else
  }//For


  

  
  
