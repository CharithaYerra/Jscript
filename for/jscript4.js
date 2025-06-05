// do {
//   // code to run
// } while (condition);


let count = 1;

do {
  console.log("Count is:", count);
  count++;
} while (count <= 5);


let num = 10;

do {
  console.log("This runs once, num =", num);
  num++;
} while (num < 5);



let userInput;

do {
  userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);

console.log("Thanks! You entered:", userInput);
