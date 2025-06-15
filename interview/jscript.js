console.log("A"-1);//nan
console.log("divya"+100);
console.log("2"+2-"2");

console.log(3+3+"3");
console.log("3"+3+3);

//speak audio
let text="hello world";
 const utterance = new SpeechSynthesisUtterance(text); // create speech object
 utterance.lang = 'en-US';
  speechSynthesis.speak(utterance); // speak it