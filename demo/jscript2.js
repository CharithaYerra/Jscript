//variable function



const sum = function(a, b) {
  return a + b;
};

console.log(sum(3, 7));  



//passing the variables to function
let x=10;
let y=20;

let multiply = function mul(x,y){
      return x*y;
}
console.log("this is multiplication of "+x+" , " +y+" is " + multiply(x,y));

//assigns the function to variable in a function

var greet;
let language = function(lang) {
  console.log("the language is " + lang);
  greet = function() {
    console.log("hello");
  };
};

language("en"); // Call the function
greet();        // Call the new greet function



//give the variable function to the other function as a argument

let welcome = function(name) {
  return "Welcome, " + name + "!";
};

function showMessage(fn) {
  console.log(fn("Siri"));
}

showMessage(welcome); //  Welcome, Alice!
