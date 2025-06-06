function train1(){
    setTimeout(()=>{
        console.log("the train1 has reached kadapa station");
    },3000);
}

function train2(){
    setTimeout(()=>{
        console.log("The train2 is starting from koduru");
    },2000);
}

function train3(){
    setTimeout(()=>{
        console.log("train3 is not working today");
    },5000);
}

train1();
train2();
train3();