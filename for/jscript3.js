let count = 1

while (count <= 5) {
  console.log("Count is:", count);
  count += 1;
}




console.time("time start");
function sleep(){
  let start=new Date().getTime();
  let end=start+1000;
  while(new Date().getTime()<end){

  }
}
function stopwatch(seconds){
for(let i=seconds;i>=1;i--){
  console.log("no of seconds remaining is "+i);
  sleep();
}
}
stopwatch(5);
console.timeEnd("time start");//4999