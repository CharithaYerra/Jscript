// declared with variable
function fruits(){
    var fruit="apple";
    console.log(fruit);

}
fruits();


//variable is defined by global but it takes main local if same name

function Places(nameofplace){
    console.log("the turist place i recentle visited "+nameofplace);
}
var nameofplace="Karnataka";
Places();
Places("hyderabad");
console.log(nameofplace);//here it will take global variable


// as thier scope is only to block we can again declare them
function OldestMovie(){
    let MovieName="Chanti";
    console.log("My favorite old movie is ",MovieName);
}
function RecentMovie(){
    let MovieName="Jack";
    console.log("My favorite recent movie is ",MovieName);
}
OldestMovie();
RecentMovie();


//function scope+variables
function Outer(){
    let Work="painting";
    function Middlefunction(){
        let objectused="canvas";
        function inner()
        {
            console.log("I am "+Work+" using the "+objectused);
        }
        inner();
    }
    Middlefunction();
}
Outer();

