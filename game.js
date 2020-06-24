class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      ath1 = createSprite(100,200);
      ath1.addImage("a",a1);
      ath2 = createSprite(300,200);
      ath2.addImage("b",a2);
      ath3 = createSprite(500,200);
      ath3.addImage("c",a3);
      ath4 = createSprite(700,200);
      ath4.addImage("d",a4);
      ath = [ath1, ath2, ath3, ath4];
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        
        //index of the array
        background("#c68767")
        image(t,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index = 0;
  
        //x and y position of the cars
        var x = 175;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          ath[index-1].x = x;
          ath[index-1].y = y;
  
          if (index === player.index){
            ath[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = ath[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyDown("up") && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(keyDown("down") && player.index !== null){
        player.distance -=10
        player.update();
      }
     if (player.distance>3860){
       gameState=2;
     }
      drawSprites();
    }
    
  }
  