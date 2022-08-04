// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();

// Added a semicolon at the end of line 12 and 15 to follow conventions
// and best practices.


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// Moved the closing curly brace to the start of line 25
// Tabbed line 23 and 24 to make it more readable

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();

// Added a space between the parenthesis and opening curly brace
// for readability. Moved the closing curly brace to line 40 by
// itself for readability. Changed 'funct' to function because it
// needs to be literal.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`)
}

average(6, 12)

  // Opening curly brace was by itself on its own line so I moved
  // it back to line 50 with the function declaration with a space
  // between it and the parenthesis. Reformatted line 51 and 52
  // because it's in the curly brace and needs to be indented for
  // readability. Moved the console.log command up since there
  // was an empty line between it and line 52. Removed the
  // indention in line 54 with the closing curly brace for readability.
  // Moved the intended period in line 53 to be within the closing
  // ticks. Added a call to function.
