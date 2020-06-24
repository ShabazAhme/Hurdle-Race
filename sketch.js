var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var ath, ath1, ath2, ath3, ath4;
var a1,a2,a3,a4,t;

function preload(){
 c1 = loadImage('1.jpg');
 c2 = loadImage('1.jpg');
 c3 = loadImage('1.jpg');
 c4 = loadImage('1.jpg');
 t  = loadImage('ggg.jpg');
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
