//asynchrous calls using call functions may lead to the synchronous function

function train1(fn){
    setTimeout(()=>{
        console.log("the train1 has reached kadapa station");
        fn();
    },3000);
}

function train2(fn){
    setTimeout(()=>{
        console.log("The train2 is starting from koduru");
        fn();
    },2000);
}

function train3(fn){
    setTimeout(()=>{
        console.log("train3 is not working today");
        fn();
    },5000);
}

train1(()=>{
    train2(()=>{
        train3(()=>{
            setTimeout(()=>{
            console.log("The information of trains is shown");
            },5000);
    });
    });
});
