// I worked [ with: Angela Kosek] on this challenge

// Your mission description:
//1. Our objects are a knight and dragon.
    //The knight can fight, move, and slay the dragon. He has different levels of
    //energy when he is fighting.
    //The dragon can blow fire at the knight.
    //They each hkve a health level.
//2. Objective: Knight needs to get past the dragon to rescue the princess.
//3. "this" refers to the object that is being directed.
// Knight runs straight, when close to the dragon the knight fights
//the dragon, dragon blows fire at the knight, the knight kills the dragon,
//the knight rescues the princes. And they live happily every after.


// INIT level as an Array
// INIT current_pos and SET to 0
// INIT object knight and
// SET properties: name to "Arthur" ,health_level to 100, attack_strength to 35,
// SET property move as a function
// FUNCTION move
  // SET current_pos to current_pos + 1
  // SET level at current_pos eqaul to knight name
  // SET level at current_pos-1 to "_"
  // DISPLAY level1 on the screen
// END FUNCTION
// INIT object dragon and
// SET properties: name to "Sean the Dragon" ,health_level to 100, attack_strength to 10
// FUNCTION move(object)
  // SUBSTRACT the attack_strength of current object from the health of passed object
// END FUNCTION
// SET knight.attack equal to attack function
// SET dragon.attack equal to attack function
// SET var princess to "princess"
// SET var level1 to [knight.name,"","",dragon.name, princess];
// WHILE level1[current_pos + 1] != dragon.name
//   knight.move
// END WHILE
// DISPLAY "Dragon is very close...fight " + knight.name + "!!!"
// WHILE  (knight.health_level > 0 && dragon.health_level > 0)
//    knight.attack(dragon)
//    dragon.attack(knight)
// END WHILE
// DISPLAY "Knight: " + knight.health_level
// DISPLAY "Dragon: " + dragon.health_level
// IF dragon.health_level <= 0
//   WHILE level1[current_pos + 1] != "princess"
//       knight.move
//   END WHILE
//   DISPLAY "The knight won and rescued the princess. THE END!!!"
// END IF


var level = [];
// Initial Code
// knight object
var current_pos = 0;
var knight = {
  name: "Arthur",
  health_level: 100,
  attack_strength: 35,
  move : function(){ // moves knight by 1
    current_pos += 1;
    level1[current_pos] = knight.name;
    level1[current_pos-1] = "_";
    console.log(level1);
    }
  };

// dragon object
var dragon = {
  name: "Sean The Dragon",
  health_level: 100,
  attack_strength: 10,

 }

// attack method
var attack = function(object){
  object.health_level -= this.attack_strength
}

knight.attack = attack;
dragon.attack = attack;
var princess = "princess";
var level1 = [knight.name,"","",dragon.name, princess];


while(level1[current_pos + 1] != dragon.name){
  knight.move()
}
console.log("Dragon is very close...fight " + knight.name + "!!!");

while(knight.health_level > 0 && dragon.health_level > 0){
  knight.attack(dragon);
  dragon.attack(knight);
}

console.log("Knight: "+knight.health_level);
console.log("Dragon: "+ dragon.health_level);
if (dragon.health_level <= 0){
  while(level1[current_pos + 1] != "princess"){
      knight.move();
  }
  console.log("The knight won and rescued the princess. THE END!!!")
}






// Refactored Code






// Reflection
//
//
//
//
//
//


