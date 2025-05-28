let PersonalDetails={
    name:"siri",
    age:20,
    getPerson:function(died){
        console.log(this.name);
        console.log(this.age);
        console.log("died in age of ",died);
        console.log(this);
    }
}
PersonalDetails.getPerson();

let anotherIdentity={
    name:"tarak",
    age:50
}
PersonalDetails.getPerson.call(anotherIdentity,40);
PersonalDetails.getPerson.apply(anotherIdentity,["16 date","4th month","yea of 1999"]);
console.log(PersonalDetails.getPerson.bind(anotherIdentity,["16 date","4th month","yea of 1999"]));

//it does not work
let vehicle={
    model:"bike",
    cost:"400000",
    getDetails:()=>{
        console.log(this.model);
        console.log(this.cost);
        //console.log("died in age of ",died);
        console.log(this);

    }
};
vehicle.getDetails();
let bike={
    model:"car",
    cost:50000
};
vehicle.getDetails.call(bike);