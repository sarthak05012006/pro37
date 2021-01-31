var canvas;
var database;
var gameState = 0, contestantCount, quiz, question, person, allPeople;
var backgroundColor = "pink";


function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(backgroundColor);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }


  
//remember to CALL play() here with some expression or condition
}

