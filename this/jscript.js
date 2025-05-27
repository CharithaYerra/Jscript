let Details={
    name:"divya",
    age:24,
    address:'534 ,banglore',
    checkQualification:function(){
        return "yes she/he is qualified for exam"
    }
};
console.log(Details.checkQualification());


var bookshelf={firstrow:["hindi","communication"],
    secondrow:["cybersecrity","database"],
    countBooks:function(){
        return "the book count is 4"
    }
};

console.log("window is",this);
console.log("bookshelf",this.bookshelf);
console.log(bookshelf.countBooks());

console.log(this.bookshelf.secondrow);


function packageDetails(){
   this.item="tv";
   this .cost="546";
   this. order=function(){
    console.log("you order is successfully place");
   }

} 
let packagePlacedDetails=new packageDetails();
let itemname=packagePlacedDetails.item;
console.log(itemname);



//arrow function=this

var multiply=(x,y)=>{
let result=x*y;
console.log(this);//window
return result
}
console.log(multiply(2,5));
console.log(this.multiply);



//arrow function in object

var apps={
    names:["telegram","meet"],
    space:{telegram:"25kb",meet:"54kb"},
    getprocess:()=>{
        console.log(this,"in the arrow ");
        console.log(this.apps);
        console.log(this.names);//undefined

    },
    getDigital:function(){
        console.log(this.apps);//undefined
        console.log("digital process is",this);
        console.log(this.names);

    }
}
apps.getprocess();
apps.getDigital();

const user1 = {
  name: "Charlie",
  delayedGreet: function () {
    setTimeout(() => {
      console.log("Hello from " + this.name);
    }, 1000);
  }
};

user1.delayedGreet(); 
