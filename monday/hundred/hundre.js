let tigger = {character: 'Tigger'}
let pooh = {character:'Winnie the Pooh'}
let piglet = {character:'Piglet'}
let bees = {character:'Bees'}
let christopherRobin  = {character:'Christopher Robin'}
let owl = {character:'Owl'}
let rabbit = {character: 'Rabbit'}
let gopher = {character: 'Gopher'}
let kanga ={character: 'Konga'}
let eeyore = {character:'Eeyore'}
let heffalumps ={character:'Heffalumps'}
Object = "none";

tigger.north = pooh;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = christopherRobin;

piglet.north = owl;
piglet.east = pooh;

bees.north = rabbit;
bees.west = pooh;

christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

owl.east = christopherRobin;
owl.south = piglet;

rabbit.west = christopherRobin;
rabbit.east = gopher;
rabbit.south = bees;

kanga.south = christopherRobin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;

console.log(piglet);

console.log(piglet)