let payment;
function Bookshow(name){
    console.log("the ",name," is available in following teators");
    function teators(){
        let list=["ravi","swapna","apsara"];
    }
    teators();
    console.log("you have selected the teator");
    payment=()=>{
        console.log("Payment successfull");
    }

}
//payment(); it does not work befor bookshow()

Bookshow("court");
payment();
console.log("The booking is successful");