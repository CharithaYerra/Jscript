//arrow function
//syntax let variable =()=>{}

let    Listoftheaters=()=>{
    console.log("Theater near me is %cravi","font-weight:bold");
}

Listoftheaters();

let cinemas=(...names)=>{
    console.log(names);

};
cinemas("hit3","yashoda");

let movies=(...names)=>{
    return `my favorite movies are ${names}`;

};
console.log(movies("hit3","yashoda"));


setTimeout(()=>{
    console.log("Set time out");
},2000);
