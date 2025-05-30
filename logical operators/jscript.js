// ==,!=,>,>=,<,<=,===

console.log(1==1);

console.log(1=='1');

console.log(1==='1');

console.log(true > false);

console.log(4+5);
let Stringaddition='5'+1;

console.log(Stringaddition);
console.log(typeof(Stringaddition));

console.log("we give strin in end of +",3+'2');

console.log("try subraction of the strin and number");
console.log(2-"3");
console.log("3"-2);
console.log("try multiplication of the strin and number");
console.log(2*"3");
console.log("3"*2);


//change into number

console.log(Number('31')+1);

console.log(Number(true));
console.log(Number(false));

let marks=30;
function Result(marks){
    if(100<=marks && marks>=90)
    {
        console.log("you have passed with A+ grade");
    }
    else if(90<=marks && marks>=80)
    {
        console.log("you have passed with B+ grade");
    }
    else if(80<=marks && marks>=70)
    {
        console.log("you have passed with C+ grade");
    }
    else if(70<=marks && marks>=60)
    {
        console.log("you have passed with D+ grade");
    }
    else{
        console.log("you have failed the exam")
    }
}

Result(marks);


let password="K23acb34";

if(password=="K23aCb34"){
    console.log("you have successfully logged in");
}
else{
    console.log("Incorrect Password");
}

