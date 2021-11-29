
var tigger =   {character: "Tigger",
greet: function(){
    console.log("Tigger ");
}
}; 

var pooh = {character: "Winnie the Pooh",
greet: function(){
console.log("Pooh ");
}
};
tigger.north = pooh; 
pooh.south = tigger;
pooh.north = tigger.north.north;

var piglet =  { character: "Piglet",
greet: function(){
    console.log("Piglet ");
}
};                                 
piglet.east = tigger.north;          
tigger.north.west = piglet;

var bees = {character: "Bees",
greet: function(){
console.log("Bess ");
}
};
bees.west = tigger.north;
tigger.north.east = bees;

var owl =  {character:"Owl",
greet: function(){
console.log("Owl ");
}
};
owl.east = pooh.north;
piglet.north = owl;


var christopherRobin = {character: "Christopher Robin",
        greet: function(){
            console.log("Christopher Robin ");
        }
};
christopherRobin.south = tigger.north;
christopherRobin.west = piglet.north;


var rabbit = {character: "Rabbit",
greet: function(){
console.log("Rabbit ");
}
};
bees.north = rabbit;
christopherRobin.east = bees.north;


var gopher =   {character: "Gopher",
greet: function(){
    console.log("Gopher ");
}
};
gopher.west = rabbit;
rabbit.east = bees.north.east;


var kanga = {character: "Kanga",
greet: function(){
console.log("Kanga ");
}
};
christopherRobin.north = kanga;


var eeyore = {character: "Eeyore",
greet: function(){
    console.log("Eeyore");
}
};
eeyore.south = christopherRobin.north;
kanga.north = eeyore;

var heffalumps = {character: "Heffalumps",
    greet: function(){
        console.log("Heffalumps ");
    }
};
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
