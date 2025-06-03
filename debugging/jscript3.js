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
  console.log(e.name); // TypeError
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

