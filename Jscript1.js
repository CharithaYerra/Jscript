//Non primitive data types
let Names=[1,2];
console.log(Names[1]);
let STdDetails=["Siri",20,"btech",true];
let Stddetails=["name","age","phno",
    ["divya",20,2478329]]
    console.log(Stddetails[1][2]);

let Objects={
    key:"value",book:"author",actors:{
        harry:"Daniel",granger:"watson"
    }, entertainment :[
        "movie","cartoon"
    ]
};
console.log(Objects);

console.log(Objects.actors.granger);
console.log(Objects.entertainment[1]);

console.log(Objects.actors.granger,Stddetails[1][2]);







let employee=["narmada","isha","durga","pavani"];//arrays
       console.log(employee[0]);
 
       let empId=["emp123","emp567","emp238","emp986"];
       console.log(`${employee[2]} ${empId[2]} `);
       console.log(employee[2],empId[2]);

       