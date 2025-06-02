//let const var

let date="31-05-2025";

date="01-06-2025";

const heading="practice";
document.write(heading);

console.log("today date is : ",date);

// var age=20;
// var age=30;

// console.log(age);

//primitive data types

//string,boolean,number,null,undefined,symbol

let name="divya";
let physicallydisabled=false;
let age=25;

console.log("the name,physicallydisabled,age data type is : ",typeof(name),typeof(physicallydisabled),typeof(age));

let gmail;
console.log("gmail is: ",gmail);

let phoneno=null;
console.log("null is: ",phoneno);


let sym1 = Symbol("javascript");
console.log(sym1);

//non-primitive data types

//objcets,arrays,functions

let teatorsList=["ravi","apsara","prathap","sandya"];

console.log("the recent movie i watch in teator is in ",teatorsList[3]);

let addressOfTeators={ravi:{streetname:"ngo colony",city:"kadapa"} ,apsara:{streetname:"masima circle",city:"kadapa"
    }
};

console.log("ravi teators address is ",addressOfTeators.ravi);



//function
//set of statements for a particular task


function Bookshow(moviename,teator){
    console.log("you have booked the show of ",moviename,"in the ",teator," teator")

}
Bookshow("court","apsara");


