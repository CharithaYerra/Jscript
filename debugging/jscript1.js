//anonymous function , return array , return object , anonymous function given to variable,
//settimeout,array function

//anonymous function

document.write("Start debugging from here");

(function(grade){
    document.write("i am studying ",grade);
})("3rd btech");

document.write("<br>");
let Direction=function(){
    document.write("the directions are north,sounth,east,west");
}

Direction();

document.write("<br>");

let Matrix=(rows,colms)=>{
    document.write("the row: ",rows," coloms are: ",colms);
}

Matrix(2,3);

//return of array and object
document.write("<br>");



document.write("<br>");

function Company(listed){
    listed();
    return ["eklos","apple","kfc"];
}

document.write(Company(function(){
    document.write("there are companies are being listed");
}));


setTimeout(()=>{
    console.log("This will appear after 2 seconds");
},2000)