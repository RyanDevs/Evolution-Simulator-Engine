//Evolution Simulation v0.1BETA By RyanTBH and Jv110
/*Feel free to steal code, and if you feel like giving credit give us credit:

Serac (Our Coding Team):
Twitter: https://twitter.com/SeracDevTeam

RyanTBH:
Twitter: https://twitter.com/ryantbhh
GitHub: https://github.com/RyanDevs
SoundCloud: https://soundcloud.com/ryanwtf

Jv110:
Twitter: https://twitter.com/jv110br_
GitHub: https://github.com/jv110

Project started: 11/12/16
Date finished: ?/?/?

NOTE: I am a very bad coder, feel free to add/remove features and make this better!
*/


/*
 sketch.js is the MAIN CLASS, DO NOT RENAME OR YOU WILL BE KILLED
*/

//Code to create a DI (Creature).

var population = 1;

var red = [255, 0, 0];
var green = [0, 255, 0];
var blue = [0, 0, 255];

var pink = [255, 15, 150];

var male = {
    name: "male",
    color: blue,
    lifeEx: 80,
    startRadius: 5,
    endRadius: 15
}

var female = {
    name: "female",
    color: pink,
    lifeEx: 70,
    startRadius: 5,
    endRadius: 15
};

function DI(name, gender, age) {
    this.name = name || "di" + Math.floor(Math.random() * 20);
    this.gender = gender || male;
    this.age = age || 13;
    this.puberty = 10 + Math.floor(Math.random() * 3 + 0.5); // Puberty is random, between around 10 and 13
    console.log("Creating DI (" + this.gender.name + ")");
}

DI.prototype.draw = function() {
    fill(this.gender.color);
    if(this.age >= this.puberty) {
        console.log("puberty");
        stroke(0, 200, 0); // Stroke is green if the DI can reproduce
    } else {
        console.log("lil kid");
        stroke(200, 0, 0); // Else, stroke is red
    }
    ellipse(this.age * 4, this.age * 4, this.age * 4, this.age * 4);
}

function setup(){
    createCanvas(600,600);
}

var di = new DI("", Math.random() > 0.5? female: male, 5);

function draw(){
    background(0);
    di.age += 0.01;
    di.draw();

}
