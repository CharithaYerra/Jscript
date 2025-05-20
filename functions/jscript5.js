//sum of two numbers
//let x,y,z;
//it took as a global variables
function sum(){
        x=10;
          y=20;
          z=x+y;
      }
   sum();
console.log("the addition is "+z);


let multiply = function mul(x,y){
      return x*y;
}
console.log("this is multiplication of "+x+" , " +y+" is " + multiply(x,y));


//here it returns the string to console prints that

let show = function Don() {
  return "This is a function stored in a variable.";
};

console.log(show());
//console.log(Don());//it is inner 


//square of the number...........
   let squares=function(num){
        return num*num;
    }
    console.log("%c the square of the number is" +squares(5),"color:red");


    let square = (num) => {
  return num * num;
};

console.log(square(5)); // Output: 25
console.log(square);



//function

//varaible function
let bookName = function(){
      console.log("Harry Potter series");
};
//here when the bookName() is called it goes to function
//then there it will run console
//but it doesnot return anything
//so when it returns there will be nothing so undefined

console.log(bookName());
console.dir(bookName);




    