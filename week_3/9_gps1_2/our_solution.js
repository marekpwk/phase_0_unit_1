// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Marek Pyczkowski
//  2. Ismail Kalimi


// 1. "YOU SIGNED... WHO?!"




// 2. "Here they Come!"





// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var adam = {
    Name: "Adam Sandler",
    byear: 1967,
    Quote: "That's your home! Are you too good for your home?!"
};

function Clients(name, byear, quote){
  this.Name = name;
  this.byear = byear;
  this.Quote = quote;
  this.showQuote = function(){
    return this.Quote;
  };
};

var shooterMcGavin = new Clients("Shooter McGavin", 1955, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Clients;
shooterMcGavin.byear === 1955;
shooterMcGavin.Quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var harrison = new Clients("Harrison Ford", 1942, "May the force be with you!");
var kristen = new Clients("Kristen Bell", 1980, "Do you wanna build a snowman?");
var carrey = new Clients("Jim Carrey", 1962, "...So you're telling me there's a chance? YEAH!");



Clients.prototype.calcage = function(byear){
  var currentyear = 2014;
  return (currentyear - byear);
};


// 4. "SHOW 'EM OFF!"


var clientList = [harrison, kristen, carrey, adam];

for (var i=0;i<clientList.length;i++){
  console.log("Name of the client: " + clientList[i].Name);
  console.log("Birth year of the client: " + clientList[i].byear)
  console.log("Quote of the client: " + clientList[i].Quote)
}


// ** BONUS **
var salary = function(person){
  if (person.calcage(person.byear) >50){
    return 5000000;
  }
  else if (person.calcage(person.byear) >30){
    return 3000000;
  }
  else{
    return 500;
  }
};

console.log(salary(harrison));

//  Your Reflection:
// In this GPS session, we were exploring creating the objects and inheritance.
// I think I am slowly starting to better understand use of prototype in JavaScript.
// I also found the following post from StockOverflow really helpful:
// http://stackoverflow.com/questions/572897/how-does-javascript-prototype-work