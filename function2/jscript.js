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

function process(operation, x, y) {
    return operation(x, y);
}

let multiply = function(a, b) {
    return a * b;
};

console.log(process(multiply, 3, 4)); // Output: 12

var empDetails = {
    name         : "RabindraNathTagore",
    dateofbirth  : "May 7, 1861",
    books        : ["Gitanjali", "The Home and the World", "Gora"],
    address : function(){
        let street='green villas';
        let appartmentName='ldfhsajkdfs';
        let blockNo='B-545';

        return `The address is a ${this.street} ${this.blockNo} ${this.appartmentName}`
    }
}
console.log(empDetails.address());