//calling function
//argument as function


(function(fn){
    fn();
})(()=>{
    console.log("I am a calling function");
})


function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);


function dataReturn(fn){
    return fn();
}
console.log(dataReturn(function(){
    return "the data is being retrived";
}));