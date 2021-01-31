class Quiz {
    constructor(){

    }

getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data){
        gameState = data.val();
    })
}

updateState(state){
database.ref('/').update({
     gameState: state
    });
}

play(){
  //quiz.hide();
  backgroundColor = "yellow";
  var resultTitle = createElement("h1");
  resultTitle.html("RESULTS");
  resultTitle.position(100,10);
  Person.getPersoninfo();
  
}

async start(){
    if(gameState === 0){
      person = new Person();
      var personCountRef = await database.ref('contestantCount').once("value");
      if(personCountRef.exists()){
        contestantCount = personCountRef.val();
        person.getCount();
        
      }
      quiz = new Question()
      quiz.display();
    }
  }




}//end of js file