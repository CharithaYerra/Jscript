//iife

(function(){
    console.log("IIFE executed");
})();

(()=>{
    console.log("Arrow IIfe executed");
})();


//variable function=function expression

let greet=function(name){
    console.log("hello!, "+name);
};
greet("Anya");
//we can pass the function

let sayHello=()=>{
    console.log("Hello!");
};
sayHello();

great();
function great(){
    console.log("execting before giving defination");
}