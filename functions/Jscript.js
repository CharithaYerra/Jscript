
//function usage
let Teachers;
function School() {
    let Teachers = ["Swapna", "siri", "Karthik"];
    let Classes = [5, 6, 7, 8];
    let Address = { dno: "15-188", Street: "NGO colony", city: "kadapa" };
    console.log(Teachers);
    console.log(Classes);
    console.log(Address);
}//function defination
School();//function calling


//styling the console using %c styling directive

console.log("%c  ","background-color:lightgreen");
console.log("%cSchool Details are given above","color:Gray");

//wrap the styles in the function
//function defination having function calling

function black(){
    console.log("%c  ","background-color:black");
}

function section1(){
    console.log("%c  ","background-color:blue");
    black();  //function calling inside a function
}
section1(); //calling the section

//scope
//the a,b variables only for that function so there is no error
//we cann't use the same variable outside
let a=10
let Value=function(){
   a=20;//here the a globle value is reassined
  let b=20;
}
Value();
console.log(a);

 a=30;
let Values=function(){
  let a=10; 
  a=25; //here a value that is declared in function is reassined
  let b=20;
}
Values();
console.log(a);

  a=40,b=20;

console.log(a);