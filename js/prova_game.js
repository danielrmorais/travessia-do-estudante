//ATIVIDADE - PROVA
//NOME: DANIEL RIGO DE MORAIS
//R.A.: 00098577
//ESTUDANTE DE JOGOS DIGITAIS - UNISO

        // CHAMANDO O CANVAS
        var canvas= document.getElementById("prova_game");
        // DIMENSÃO 2D - X e Y
        var ctx = canvas.getContext("2d");

        // LOOP DE MOVIMENTACAO DO INIMIGO
        var podeSubir= true;
        var podeSubir2= true;
        var podeSubir3= true;
        var podeSubir4= true;
        var podeSubir5= true;
        var podeSubir6= true;
        var podeSubir7= true;
        var podeSubir8= true;

        // FORÇA O JOGADOR E PERCORRER O "MAPA" E NÃO FICAR FAZENDO PONTOS AONDE NASCE
        var golEsquerda = false;

        //TECLAS
        var teclas = {};
        

        // INIMIGOS - HORIZONTAL, VERTICAL, ALTURA, LARGURA, VELOCIDADE 
        var inimigo = {
          x: 28, 
          y: 110, 
          altura: 15,
          largura: 152, 
          speed:0
        };

        var inimigo2 = {
          x: 109,
          y: 47,
          altura: 15,
          largura: 200,      
          speed: 0
        };

        var inimigo3 = {
          x: 180,
          y: 169,
          altura: 15,
          largura: 105,      
          speed: 0
        };

        var inimigo4 = {
          x: 130,
          y: 223,
          altura: 15,
          largura: 172,      
          speed: 0
        };

        var inimigo5 = {
          x: 24,
          y: 283,
          altura: 15,
          largura: 94,      
          speed: 0
        };

         var inimigo6 = {
          x: 180,
          y: 283,
          altura: 15,
          largura: 98,      
          speed: 0
        };

         var inimigo7 = {
          x: 59,
          y: 345,
          altura: 15,
          largura: 200,      
          speed: 0
        };

         var inimigo8 = {
          x: 0,
          y: 411,
          altura: 15,
          largura: 152,      
          speed: 0
        };
        // FIM INIMIGOS 
        


        // PERSONAGEM - HORIZONTAL, VERTICAL, ALTURA, LARGURA, PONTOS, VELOCIDADE 
        var personagem = { //Parâmetros para a criação do personagem
          x: 10,
          y: 14,
          altura: 28,
          largura: 28,
          score: 0,
          speed: 0
        };

        // IDENTIFICADOR DE TECLA PRESSIONADA
        document.addEventListener("keydown", function(e){
        teclas[e.keyCode]=true;
        },false);

        document.addEventListener("keyup", function(e){ 
          delete teclas[e.keyCode];
        },false);

        // BOTAO DE INICIAR JOGO E RESETA POSICAO - HORIZONTAL, VERTICAL, VELOCIDADE, PONTOS E PONTUACAO FORÇADA AO LADO OPOSTO
        function PlayGame(){
          personagem.speed = 4;
          personagem.x=10;
          personagem.y=14;
         
          inimigo.speed = 2;
          inimigo2.speed=1;
          inimigo3.speed=2;
          inimigo4.speed=1;
          inimigo5.speed=2;
          inimigo6.speed=2;
          inimigo7.speed=1;
          inimigo8.speed=2;

          personagem.score=0; 
          golEsquerda = false;
        }

        // MOVIMENTACAO DO PERSONAGEM E BLOQUEIO DE PASSAGEM NAS BORDAS DO CANVAS
        function mover()
        {
          if(87 in teclas && personagem.y>8)
            personagem.y -= personagem.speed;
          if(83 in teclas && personagem.y+personagem.altura<canvas.height-8)
            personagem.y += personagem.speed;

          if(65 in teclas && personagem.x>=3)
            personagem.x -=personagem.speed;
          if(68 in teclas && personagem.x+personagem.largura<=canvas.width-3)
            personagem.x +=personagem.speed;




          // PONTUACAO - AUMENTO NA PONTUACAO DO SCORE CADA VEZ QUE CHEGA DO OUTRO LADO, VELOCIDADE DO INIMIGO AUMENTADA E BLOQUEIO DE PASSAGEM NAS BORDAS
          if(golEsquerda==true && personagem.y<=8){
            
            personagem.score++;
            
            inimigo.speed+=0.3;
            inimigo2.speed+=0.3;
            inimigo3.speed+=0.3;
            inimigo4.speed+=0.3;
            inimigo5.speed+=0.3;
            inimigo6.speed+=0.3;
            inimigo7.speed+=0.3;
            inimigo8.speed+=0.3;

            golEsquerda=false;
          }
          if(golEsquerda==false && personagem.y+personagem.largura>=canvas.height-8)
          {
            personagem.score++;

            inimigo.speed+=0.2;
            inimigo2.speed+=0.2;
            inimigo3.speed+=0.2;
            inimigo4.speed+=0.2;
            inimigo5.speed+=0.2;
            inimigo6.speed+=0.2;
            inimigo7.speed+=0.2;
            inimigo8.speed+=0.2;

            golEsquerda=true;
          }
          
          


          // MOVIMENTACAO DOS INIMIGOS - VARIAVEL BOOLEANA PARA O INIMIGO PODER SE MOVIMENTAR E LIMITADOR DE LARGURA PROS INIMIGOS VOLTAREM A TELA
          if(podeSubir==true){   
            inimigo.x -=inimigo.speed;
          
          if(inimigo.x<=0)     
            podeSubir = false; 
             }
          if(podeSubir == false){ 
            inimigo.x +=inimigo.speed;
            if(inimigo.x>= canvas.width-140)//O TANTO QUE ELE ENTRA NA TELA 
              podeSubir=true;
          }


          // Inimigo 2
          if(podeSubir2==true){
            inimigo2.x -=inimigo2.speed;
          
          if(inimigo2.x<=0)
            podeSubir2 = false;
             }
          if(podeSubir2 == false){
            inimigo2.x +=inimigo2.speed;
            if(inimigo2.x>= canvas.width-190)//O TANTO QUE ELE ENTRA NA TELA 
              podeSubir2=true;
          }


          // Inimigo 3
          if(podeSubir3==true){
            inimigo3.x -=inimigo3.speed;
          
          if(inimigo3.x<=0)
            podeSubir3 = false;
             }
          if(podeSubir3 == false){
            inimigo3.x +=inimigo3.speed;
            if(inimigo3.x>= canvas.width-95)//O TANTO QUE ELE ENTRA NA TELA 
              podeSubir3=true;
          }          


          // Inimigo 4
          if(podeSubir4==true){
            inimigo4.x -=inimigo4.speed;
          
          if(inimigo4.x<=0)
            podeSubir4 = false;
             }
          if(podeSubir4 == false){
            inimigo4.x +=inimigo4.speed;
          if(inimigo4.x>= canvas.width-155)//O TANTO QUE ELE ENTRA NA TELA 
              podeSubir4=true;
          } 


          // Inimigo 5
          if(podeSubir5==true){
            inimigo5.x -=inimigo5.speed;
          
          if(inimigo5.x<=100)
            podeSubir5 = false;
             }
          if(podeSubir5 == false){
            inimigo5.x +=inimigo5.speed;
          if(inimigo5.x>= canvas.width-50)//O TANTO QUE ELE ENTRA NA TELA 
              podeSubir5=true;
          } 


          // Inimigo 6
          if(podeSubir6==true){
            inimigo6.x -=inimigo6.speed;
          
          if(inimigo6.x<=0)
            podeSubir6 = false;
             }
          if(podeSubir6 == false){
            inimigo6.x +=inimigo6.speed;
          if(inimigo6.x>= canvas.width-240)//O TANTO QUE ELE ENTRA NA TELA 
              podeSubir6=true;
          } 


          // Inimigo 7
          if(podeSubir7==true){
            inimigo7.x -=inimigo7.speed;
          
          if(inimigo7.x<=0)
            podeSubir7 = false;
             }
          if(podeSubir7 == false){
            inimigo7.x +=inimigo7.speed;
          if(inimigo7.x>= canvas.width-190)//O TANTO QUE ELE ENTRA NA TELA 
              podeSubir7=true;
          } 


          // Inimigo 8
          if(podeSubir8==true){
            inimigo8.x -=inimigo8.speed;
          
          if(inimigo8.x<=0)
            podeSubir8 = false;
             }
          if(podeSubir8 == false){
            inimigo8.x +=inimigo8.speed;
          if(inimigo8.x>= canvas.width-145)//O TANTO QUE ELE ENTRA NA TELA 
              podeSubir8=true;
          }

          // COLISAO DO PLAYER COM O INIMIGO - X + LARGURA = VALOR DAS LATERAIS DO QUADRADO
          // Y + ALTURA = VALOR DO TOPO E DA BASE DO QUADRADO
          // VELOCIDADE DO PERSONAGEM E DOS INIMIGOS
          if(personagem.x+personagem.largura>inimigo.x && personagem.x<inimigo.x+inimigo.largura && personagem.y+personagem.altura>inimigo.y && personagem.y<inimigo.y+inimigo.altura)
          {
            personagem.speed=0;

            inimigo.speed=0;
            inimigo2.speed=0;
            inimigo3.speed=0;
            inimigo4.speed=0;
            inimigo5.speed=0;
            inimigo6.speed=0;
            inimigo7.speed=0;
            inimigo8.speed=0;
          }

          // Inimigo 2
          if(personagem.x+personagem.largura>inimigo2.x && personagem.x<inimigo2.x+inimigo2.largura && personagem.y+personagem.altura>inimigo2.y && personagem.y<inimigo2.y+inimigo2.altura)
          {
            personagem.speed=0;

            inimigo.speed=0;
            inimigo2.speed=0;
            inimigo3.speed=0;
            inimigo4.speed=0;
            inimigo5.speed=0;
            inimigo6.speed=0;
            inimigo7.speed=0;
            inimigo8.speed=0;
          }

          // Inimigo 3
          if(personagem.x+personagem.largura>inimigo3.x && personagem.x<inimigo3.x+inimigo3.largura && personagem.y+personagem.altura>inimigo3.y && personagem.y<inimigo3.y+inimigo3.altura)
          {
            personagem.speed=0;

            inimigo.speed=0;
            inimigo2.speed=0;
            inimigo3.speed=0;
            inimigo4.speed=0;
            inimigo5.speed=0;
            inimigo6.speed=0;
            inimigo7.speed=0;
            inimigo8.speed=0;
          }

          // Inimigo 4
          if(personagem.x+personagem.largura>inimigo4.x && personagem.x<inimigo4.x+inimigo4.largura && personagem.y+personagem.altura>inimigo4.y && personagem.y<inimigo4.y+inimigo4.altura)
          {
            personagem.speed=0;

            inimigo.speed=0;
            inimigo2.speed=0;
            inimigo3.speed=0;
            inimigo4.speed=0;
            inimigo5.speed=0;
            inimigo6.speed=0;
            inimigo7.speed=0;
            inimigo8.speed=0;
          }

          // Inimigo 5
          if(personagem.x+personagem.largura>inimigo5.x && personagem.x<inimigo5.x+inimigo5.largura && personagem.y+personagem.altura>inimigo5.y && personagem.y<inimigo5.y+inimigo5.altura)
          {
            personagem.speed=0;

            inimigo.speed=0;
            inimigo2.speed=0;
            inimigo3.speed=0;
            inimigo4.speed=0;
            inimigo5.speed=0;
            inimigo6.speed=0;
            inimigo7.speed=0;
            inimigo8.speed=0;
          }

          // Inimigo 6
          if(personagem.x+personagem.largura>inimigo6.x && personagem.x<inimigo6.x+inimigo6.largura && personagem.y+personagem.altura>inimigo6.y && personagem.y<inimigo6.y+inimigo6.altura)
          {
            personagem.speed=0;

            inimigo.speed=0;
            inimigo2.speed=0;
            inimigo3.speed=0;
            inimigo4.speed=0;
            inimigo5.speed=0;
            inimigo6.speed=0;
            inimigo7.speed=0;
            inimigo8.speed=0;
          }

          // Inimigo 7
          if(personagem.x+personagem.largura>inimigo7.x && personagem.x<inimigo7.x+inimigo7.largura && personagem.y+personagem.altura>inimigo7.y && personagem.y<inimigo7.y+inimigo7.altura)
          {
            personagem.speed=0;

            inimigo.speed=0;
            inimigo2.speed=0;
            inimigo3.speed=0;
            inimigo4.speed=0;
            inimigo5.speed=0;
            inimigo6.speed=0;
            inimigo7.speed=0;
            inimigo8.speed=0;
          }  

          // Inimigo 8
          if(personagem.x+personagem.largura>inimigo8.x && personagem.x<inimigo8.x+inimigo8.largura && personagem.y+personagem.altura>inimigo8.y && personagem.y<inimigo8.y+inimigo8.altura)
          {
            personagem.speed=0;

            inimigo.speed=0;
            inimigo2.speed=0;
            inimigo3.speed=0;
            inimigo4.speed=0;
            inimigo5.speed=0;
            inimigo6.speed=0;
            inimigo7.speed=0;
            inimigo8.speed=0;
          }                  
        };

        
         // EXECUTA SEPARADAMENTE E FICA EM LOOP CONSTANTE PARA DESENHAR NA TELA
         function desenha()
         {

          // ATUALIZA OS VALORES DE ALTURA E LARGURA INICIAL DO CANVAS
          ctx.clearRect(0,0,canvas.width, canvas.height);
          mover();
          
          // PLAYER - COR AO PLAYER (CONTEXTO+FILLSTYLE = COR #098577)
          ctx.fillStyle = "#098577";
          // CONTEXTO DO QUADRADO - POSICAO HORIZONTAL, VERTICAL, LARGURA E ALTURA
          ctx.fillRect(personagem.x, personagem.y, personagem.largura, personagem.altura);
            
          // INIMIGOS - COR AO PLAYER (CONTEXTO+FILLSTYLE = COR #FFFFFF)
          ctx.fillStyle = "#FFFFFF";
          // CONTEXTO DOS INIMIGOS - POSICAO HORIZONTAL, VERTICAL, LARGURA E ALTURA
          ctx.fillRect(inimigo.x, inimigo.y,inimigo.largura, inimigo.altura);
          ctx.fillRect(inimigo2.x, inimigo2.y,inimigo2.largura, inimigo2.altura);
          ctx.fillRect(inimigo3.x, inimigo3.y,inimigo3.largura, inimigo3.altura);
          ctx.fillRect(inimigo4.x, inimigo4.y,inimigo4.largura, inimigo4.altura);
          ctx.fillRect(inimigo5.x, inimigo5.y,inimigo5.largura, inimigo5.altura);
          ctx.fillRect(inimigo6.x, inimigo6.y,inimigo6.largura, inimigo6.altura);
          ctx.fillRect(inimigo7.x, inimigo7.y,inimigo7.largura, inimigo7.altura);
          ctx.fillRect(inimigo8.x, inimigo8.y,inimigo8.largura, inimigo8.altura);


          // PONTOS - COR DO PLACAR E TEXTO (#AEAE00)
          ctx.fillStyle = "#AEAE00";
          // TAMANHO DA FONTE E FONTE PERSONALIZADA (Yu Gothic UI Semibold)
          ctx.font ="13.5px Yu Gothic UI Semibold"; 

          // PONTOS - TEXTO DOS PONTOS | ATRIBUICAO DE PONTOS AO PLAYER | POSICAO HORIZONTAL E VERTICAL
          ctx.fillText("⬆ DANIEL RM - PONTOS: "+ personagem.score, 68, 28);
          ctx.fillText("⬇ DANIEL RM - PONTOS: "+ personagem.score, 68, 463);

          // AREA DE PONTO - COR DA AREA QUE FAZ PONTO (#AEAE00)
          ctx.fillStyle = "#AEAE00";
          //AREA DE PONTO - PARTE DE CIMA DA AREA
          ctx.fillRect(0,-473,320,canvas.height);
          // AREA DE PONTO - PARTE DE BAIXO DA AREA
          ctx.fillRect(canvas.width-320,473,320,canvas.height);

          // REPETICAO DA FUNCAO DESENHA, NA VELOCIDADE DE 15 FRAMES (OU SEJA, 15 QUADROS)
          setTimeout(desenha,15);

         };

         // FUNCAO DESENHA - A PROPRIA FUNCAO SE POEM EM LOOP
         desenha();

//ATIVIDADE - PROVA
//NOME: DANIEL RIGO DE MORAIS
//R.A.: 00098577
//ESTUDANTE DE JOGOS DIGITAIS - UNISO