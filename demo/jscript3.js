//non  primitive data types

let persons=[{
    name:"divya", age:20,mail:"mail@gmail.com"
},{
    name:"siri",age:30,mail:"email@gmail.com"
}];

console.log(persons[0].mail);





console.log("welcome to our restaraunt....")
var restarauntName="food hub";
function placeOrder(orderNo)
{

console.log(`order ${orderNo} received`);

  var fooditem="pizza";
  var cookingtime="10 minutes";
  function preparefood()
  {
         console.log(`preparing ${fooditem}...`)
  
  if(cookingtime>5)
  {
    console.log("cooking in progress.....")
  }

}
preparefood();
console.log("order sent to kitchen...");

}
placeOrder(1);
