var canvas,backgroundImage;
var gameState = 0;
var database;
var playerCount;
var form,player,game;
var allPlayers;
var distance  = 0;
var car1;
var car2;
var car3;
var car4;
var cars;
var car1image;
var car2image;
var car3image;
var car4image;
var trackimage;



function preload(){
    car1image = loadImage('images/car1.png');
    car2image = loadImage('images/car2.png');
    car3image = loadImage('images/car3.png');
    car4image = loadImage('images/car4.png');
    track = loadImage('images/track.png');
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
if(playerCount === 4){
game.update(1)
}
if(gameState === 1){
clear()
game.play()
}
if(gameState  === 2){
game.end()
}
}



