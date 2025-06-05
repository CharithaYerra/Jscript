// for usage in arrays
//for(vaiblae of arrayname){}

let objectsNearMe=["pen","book","laptop","adapter"];

for(objects of objectsNearMe){
    console.log(objects);
    if(objects=="adapter"){
        console.log("You need to charge your laptop")
    }
}

let classNames=[["siri","nadya","nikil"],["swathi","satya","thilak"]];
console.log(classNames.length);
console.log(classNames[0].length);

for(index of classNames){
    for(name of index){
        console.log(name)
    }

}

console.log("different type ----------------")
for (let i = 0; i < classNames.length; i++) {
    for (let j = 0; j < classNames[i].length; j++) {
        console.log(classNames[i][j]);
    }
}


let letterAdress={
    name:"Siri",
    dno:"3048-48A",
    city:"kadapa",
    pin_no:247855
}

for (let [key, value] of Object.entries(letterAdress)) {
  console.log(`${key}: ${value}`);
}



let familyDetails=[ 
    {name:"siri",age:35},
    {name:"harsha",age:10},
    {name:"tarun",age:50}];
//for(let index of familyDetails){
for(let i=0;i< familyDetails.length;i++){
    //for(let [key,value] of Object.entries(index))
    let person=familyDetails[i];

    for(let [key,value] of Object.entries(person))
        console.log(`${key} : ${value}`);
    let age=index.age;
    if(age<18){
        console.log("child");
    }
    else if(age<50 && age>18){
        console.log("middle aged person");
    }
    else{
        console.log("elderly");
    }
}    