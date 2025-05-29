(function(){
    console.log("this line run immediately");
    
})();

//IIFE with parameters

(function (Strength){
    document.write("my strength is : " +Strength);
})("Team Work");
 

(function(...Strength){
    console.log(Strength);
})("team work","communication","positive nature");


let Weakness=["Lazyness","Movies"];

(function(weakness)
{
    console.log("My weakness is " + weakness );
})(Weakness);

//IIFE with function as parameter

(function(fprogram){
    fprogram();
})(function(){
    console.log("This is a IIFE with the parameter is function")
});


//IIFE with function call as a parameter
function MovNames(){
    console.log("The resent movie is hit3");
}

(function(Call){
    Call();
})(MovNames);