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

let square=(x)=>{
    return x*x;
}
console.log("Square is :"+square(4));

setTimeout(()=>{
    console.log("Set time out");
},2000);
