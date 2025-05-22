//array function
var Attendece=["siri","nandini","samantha"];

let Class=()=>{
    console.log(`%c${Attendece} members are present today`,"color:green");
    document.write(Attendece+" members are present today");
}

Class();

//return functions scopt of variables
function Results(){
    let name="Hari";
    let subject="Hindi";
    let marks=20;
    return {
        names: name,
        subjects: subject,
        mark: marks
    };
    
}
var Result=Results();
console.log(Result);

//return

var Color="Red";
//same scope cant have two same name
//function Color(...Color){
function Rainbow(...Color){
    console.log(`%crainbow %chas %cthe %ccolors %c${Color}`,"color:red","color:blue","color:green","color:pink","color:yellow");
    return Color;
}
Rainbow("violet", "indigo", "blue", "green", "yellow", "orange");
console.log(Color);



function Timeof(){
    let time="seconds";
    setTimeout(function(){
        let seconds="2000seconds";
        console.log("the time is caluculate in "+time);
        console.log("seconds will be "+seconds);
    },2000);
    console.log(time);
    //this is defined only in settimeout
    //console.log(seconds);
}
Timeof();


var Tablets="Dolo";
function List(){
    let Tablets="Citregin";
    console.log(Tablets);
    //now we are reassigning so it is taking local variable
    Tablets="Paracetmale";
    console.log(Tablets);

}
List();
console.log(Tablets);
