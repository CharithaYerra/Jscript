//take a function with 2 parameter 
//parameter will be a function and a data type

function  coursesList(count,func){
func(count);
}

coursesList(5,function(noOfCourses)
{
console.log("you have enrolled in ",noOfCourses," courses.");
});

//callback with parameter arrow
coursesList(3,(noOf)=>{
console.log("you have enrolled in ",noOf," courses.");

});

//function with default parameter and rest parameter

function parts(company="hp",fncall,...list){
    fncall(company,list);
}

parts("dell",function(brand,listOfParts){
    console.log(brand," has the parts ",listOfParts)
},"cpu","memory");

//then you have to give undefined for not giving default value


//return  type

function greet(lang,fun){
    return fun(lang);
}

console.log(greet("english",function(lang){
    return "this is "+lang+" language";
}));



function Courses(names){
    names();
    console.log(names);
}

Courses(function(){
    let Names=["BZC","BTZC","BCOM"];
    document.write(Names);
    
});




function InterCourse(Ids){
    Ids("Mpc","Bipc");
}

InterCourse(function(...names)
{
    console.log(`the courses available in inter are %c${names}`,"color:pink");
});