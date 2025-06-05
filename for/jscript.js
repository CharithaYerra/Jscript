//normal for

//for(initialization;condition;increment / decrement)
let num=5;
let factorial =1;
for(let i=1;i<num;i++)
    {
    
    factorial*=i;
}
console.log("factorial of "+num +" is "+factorial);


let states=["Andhra Pradesh","Telangana","karnataka"];

for(let state=0;state<3;state++){
    console.log(states[state]);
}


let Places=[
    {name:"Hyderabad",state:"Telangana"},
    {name:"Amaravathi",state:"AndhraPradesh"}
]

for(let index=0;index<2;index++){
    console.log(Places[index]);
}

for(let index=0;index<2;index++){
    console.log(Places[index].name +" is in the state of "+Places[index].state);
}



