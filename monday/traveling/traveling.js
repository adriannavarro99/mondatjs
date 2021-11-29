var tigger = {character: "Tigger"}; 
var pooh = {character: "Winnie the Pooh"};
tigger.north = pooh; 
pooh.south = tigger;
pooh.north = tigger.north.north;

var piglet = { character: "Piglet"};        
piglet.east = tigger.north;         
tigger.north.west = piglet;

var bees = {character: "Bees"};
bees.west = tigger.north;
tigger.north.east = bees;

var owl = {character:"Owl"};
owl.east = pooh.north;
piglet.north = owl;


var christopherRobin = {character: "Christopher Robin"};
christopherRobin.south = tigger.north;
christopherRobin.west = piglet.north;


var rabbit = {character: "Rabbit"};
bees.north = rabbit;
christopherRobin.east = bees.north;


var gopher = {character: "Gopher"};
gopher.west = rabbit;
rabbit.east = bees.north.east;


var kanga = {character: "Kanga"};
christopherRobin.north = kanga;


var eeyore = {character: "Eeyore"};
eeyore.south = christopherRobin.north;
kanga.north = eeyore;

var heffalumps = {character: "Heffalumps"};
heffalumps.west = kanga.north;
eeyore.east = heffalumps;





var player = {
    location: tigger
}

function moveto(direction){
    if(direction == "north" ){
        if(player.location.north == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.north;
            console.log("You moved to North " + player.location.character );
        }
    }
    if(direction == "south" ){
        if(player.location.south == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.south;
            console.log("You moved to South  " + player.location.character );
        }
    }
    if(direction == "east" ){
        if(player.location.east == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.east;
            console.log("You moved to East " + player.location.character );
        }
    }
    if(direction == "west" ){
        if(player.location.west == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.west;
            console.log("You moved to West  " + player.location.character );
        }
    }
}



moveto("south");
moveto("north");
moveto("west");
