//function -types with both return and non return types
//parameter-optional,default,rest parameters

//named function
//optional
function greet(lang){
    console.log("hello in ",lang);
}
greet();

function Message(lang="english"){
    return `You have seclected ${lang} language`;
}
console.log(Message());
console.log(Message("telugu"));

function languagesAvialable(...list){
    return list;

}
let list=languagesAvialable("hindi","telugu","enlish");
console.log(list);

//anonymous function
//IIFE,variable,arrow
console.log(
(function(){
    return "I am a IIFE return function";
})());


let appInstallation=function(name){
    console.log("you have successfully installed ",name," app");

};
appInstallation("Teams");

let multiply=(x,y)=>{return x*y;};
console.log(multiply(2,4));

//IIFE in arrow

(()=>{
    console.log("IIFE with arrow");
})();