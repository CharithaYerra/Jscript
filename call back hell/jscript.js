//call back hell and synchronus calls
function stepOne(fn){
    console.log("This is first step ");
    fn();
}

function stepTwo(fn){
    console.log("This is second step ");
    fn();
}

function stepThree(){
    console.log("This is third step ");
    
}


stepOne(()=>{
    stepTwo(()=>{
        stepThree();
    });
});

function openBook(fn){
    console.log("opening a book");
    sleep(2000);
    //fn();
}

function read(fn){
    console.log("reading a book");
    console.time("book");//to measure how much time it has taken
    sleep(1000);
    //fn();
}

function close(){
    console.timeEnd("book");
    console.log("completed the book");
}

//openBook(()=>{read(()=>{close();});});


function sleep(ms){
    var startDateTime=new Date().getTime();
    var endDateTime=startDateTime+ms;
    while(new Date().getTime()<endDateTime)
    {
        //processing the statements
    }
}

openBook();
read();
close();