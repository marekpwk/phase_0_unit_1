// I paired [by myself] on this challenge.




// Pseudocode
//INIT variable secretNumber with a number
//INIT variable password with a string
//INIT variable allowedIn with a boolean value
//ININT memmbers array
//ADD  "John" at index 0
//ADD  "Mary" at index 3
//


// __________________________________________
Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false ;
var members = [];
members[0] = "John";
members[3] = "Mary";

// _________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false ;
var members = ["John",,,"Mary"];




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here.
// It was really interesting challenge. In some way it reminded me playing video games and going thru different levels.
// I think TDD is a very interesting concept. It might look like a waste of time and tedious work but
// in a long run its a time and money saver. It helps eliminate bugs as soon as they appear, not at the end of development,
// when it is much more expensive to fix them.

// __________________________________________
// Driver Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

