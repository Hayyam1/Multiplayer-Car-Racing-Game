class Player {
  constructor(){}

  getCount(){
  var playercount = database.ref('PlayerCount') 
   playercount.on("value",function(data){

PlayerCount = data.val()

   })
  }

  updateCount(count){
    
database.ref('/').update({

  PlayerCount : count

})

  }

  update(name){

    var playerindex = "player" + PlayerCount
    database.ref(playerindex).set({

name : name 

    })
    
  }
}
