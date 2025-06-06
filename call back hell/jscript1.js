//synchronus calls

function sleep(ms){
    var startDateTime=new Date().getTime();
    var endDateTime=startDateTime+ms;
    while(new Date().getTime()<endDateTime)
    {
        //processing the statements
    }
}

console.log("start of work")
function story(){
    console.log("collecting the story for the news paper");
    sleep(2000);
}
function print(){
    console.log("printing the selected stories");
    sleep(3000);
}
function distribute(){
    console.log("Distributing the papers");
    sleep(2000);
}

story();
print();
distribute();
console.log("work completed...");
