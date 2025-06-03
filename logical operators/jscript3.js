let rollNo=53;
let name="siri";


//logical and ----> &&

console.log("the results of logical and are:")

console.log(rollNo=='53' && name=="siri");
console.log(rollNo=='53' && name=="Siri");
console.log(rollNo==54 && name=="siri");
console.log(rollNo==54 && name=="Siri");


//logical or ---->  ||

console.log("the results of logical OR are:")


console.log(rollNo=='53' || name=="siri");
console.log(rollNo=='53' || name=="Siri");
console.log(rollNo==54 || name=="siri");
console.log(rollNo==54 || name=="Siri");



let apparID=487454658789454;
let password="Dkuengf5578";

if(apparID==487454658789454  && password=="Dkuengf5578")
{
    console.log("Successfully logged in to your account");
}
else if(apparID==487454658789454  || password=="Dkuengf5578")
{
    if(apparID==487454658789454 ){
        console.log("Incorrect Password");
    }
    else{
        console.log("Incorrect Account number");
    }
}
else{
    console.log("Incorrect Details");
}


