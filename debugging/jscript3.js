try {
  let result = 10 / 0;
  console.log("Result is:", result);

  // This will throw an error
  let x = y + 1; 
} catch (err) {
  console.log("An error occurred:", err);
} finally {
  console.log("This block always runs.");
}



//

try{
    console.log(age);
}
catch(error){
    console.log("Error :",error);
}



try{
    let name;
    console.log(name.length);
    console.log(name.toUpperCase());//this will not check
}
catch(error){
    console.log("exeception :",error);
}



try{
    let numberArray=[1,2,3,4,5,6];
    console.log(numberArray[7]);
    console.log(numberArray[-1]);
}
catch(error){
    console.log("error :".error);

}


try {
  let obj = null;
  obj(); // Trying to call null as a function
} catch (e) {
  console.log(e); // TypeError
}


try {
  let obj = undefined;
  obj(); // Trying to call undefined  as a function
} catch (e) {
  console.log("error :",e); // TypeError
}



function loop() {
  loop();
}
try {
  loop();
} catch (e) {
  console.log("error :",e);
}


// no error 
try{
  let x=Infinity;
  y=x+10;
  console.log("y value is :",y);  //y value is infinity
}
catch(error){
  console.log(error);
}

function add(a,b){
  try{
    if(typeof(a) != 'number' || typeof(b) != 'number'){
      console.log("both should be number");
    }
    else{
      return a+b;
    }
  
  }
  catch(error){
    console.log(error);

  }
}
console.log("addition is ",add(null,"hello"));

console.log(typeof("strinng"))