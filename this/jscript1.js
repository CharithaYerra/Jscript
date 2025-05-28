var Data={
    capacity:"20kb",
    datatype:"string",
    GetDetails:function(){
        console.log("This is the data");
    }
};

console.log(Data.capacity);
console.log(Data.datatype);
Data.GetDetails();

var attendance=["Diya","siri","krishna",function(){
    console.log("3 memebers are present");
}];

attendance[3]();
console.log(attendance.reverse());
console.log(attendance.concat(3));
console.log("length of the array is :",attendance.length);
console.log(attendance.slice("diya"));
console.log("index of siri is ",attendance.indexOf("siri"));

