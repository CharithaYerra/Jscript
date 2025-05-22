var global="global variable";
    console.log(global);

{
    var firstblock="block 1 variable";
    console.log(firstblock);
    console.log(global+" used in block 1");
}
   //as it is only block var is taking the global
  //  console.log(firstblock);

{
    let secondblock="block 2 variable";
    console.log(secondblock);
    console.log(global+" used in block 2");

}
    console.log("we can use the "+global+" anywhere in the execution context." );



//global and local variables with var using blocks    
var country="india";
{
    var state="Andhra Pradesh";//because var global variable
    console.log(country);
    console.log(state);
}  

{
    let state="Telangana";//let created a local variable again
    console.log(country);
    console.log(state);
}
    console.log(state);


    
//scope of the variable 
//variables scope is only until its block ends
{
    let PersonalDetails={
        name:"Divya",gender:"female"
    };
    {
        let age="20years";
        {
            let Studies="BTECH";
            console.log(PersonalDetails.name,age,Studies);

        }
            console.log(PersonalDetails.name,age);

    }
            console.log(PersonalDetails);

}

