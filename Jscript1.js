//Non primitive data types
let Numbers=[1,2];
console.log(Numbers,[1]);

//Student details
let STdDetails=["Siri",20,"btech",true];
//student details
let Stddetails=["name","age","phno",
    ["divya",20,2478329]]
    console.log(Stddetails[1][2]);

//object usages

let Objects={
    key:"value",
    book:"author",
    actors:{harry:"Daniel",granger:"watson"},
    entertainment :[ "movie","cartoon"]
};
console.log(Objects);
console.log(Objects.actors["harry"]);


console.log(Objects.actors.granger);
console.log(Objects.entertainment[1]);

console.log(Objects.actors.granger,Stddetails[1][2]);


//----employess names if they are active and their position


let employees=["shiva","Manasa","deva",
    {sravya:"Resign",kabeer:"Notice",Navi:["Notice","hold"]}];

console.log(employees[3].sravya);
console.log(employees[3].Navi[1]);




//------------------


let employee=["narmada","isha","durga","pavani"];//arrays
       console.log(employee[0]);
 
       let empId=["emp123","emp567","emp238","emp986"];
       console.log(`${employee[2]} ${empId[2]} `);
       console.log(employee[2],empId[2]);
let empdata;
 //console.log(`${empdata["hobbies"]}`);
 //console.log(empdata.details["username"]); 


 //push values

 const myArray = [1, 2, 3];

 console.log(myArray.push(4), myArray);
console.log("New array after concat:", myArray.concat([2]));
console.log(myArray);


//console.log("New array using spread syntax:", [...myArray,4,2]);
console.log("Original array:", myArray);

// Method 4: Adding multiple values with push()
myArray.push(6,7);
console.log("Array after pushing multiple values:", myArray);     

       