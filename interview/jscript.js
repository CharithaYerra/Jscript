console.log("A"-1); //NaN
console.log(100+"divya"); //divya100
console.log(2+"2"-"2"); //20

console.log(3+3+"3"); //63
console.log("3"+3+3);//333

//speak audio
let text="hello world";
 const utterance = new SpeechSynthesisUtterance(text); // create speech object
 utterance.lang = 'en-US';
  speechSynthesis.speak(utterance); // speak it