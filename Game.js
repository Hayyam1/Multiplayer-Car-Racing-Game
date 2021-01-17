class Game {
  constructor(){}
  
  getState(){
   var gamestate = database.ref('GameState') 
   gamestate.on("value",function(data){

GameState = data.val()

   })
  }

  update(state){
  database.ref("/").update({

GameState : state 
    
  })  
  }

  start(){
  
 if(GameState === 0){

player = new Player();
form = new Form();
form.display();
player.getCount();

 }   

  }
}
