//this ,new,complex data types,call, apply ,bind
 let productType={
    type:"conditioner",
    brands:["dove","loriel","plum"],
    countfunction:()=>{
        console.log("the number of brands available are 3");
    }
 }
 productType.countfunction();



 function packageDetails(){
   this.item="health product";
   this .cost="1852";
   this. order=function(){
    console.log("you order is successfully place");
   }

}
let packagePlacedDetails=new packageDetails();
let itemname=packagePlacedDetails.item;
console.log(itemname);


function greetUser(name, age) {
    this.name = name;
    this.age = age;
}

// Adding multiple methods to the prototype
greetUser.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

User.prototype.isAdult = function() {
    return this.age >= 18;
};