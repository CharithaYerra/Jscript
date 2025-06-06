function train1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("the train1 has reached kadapa station");
            resolve("About train1")
        
    },3000);

        
    });

}

function train2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("The train2 is starting from koduru");
            
            resolve("About train2")
        
    },4000);

        
    });

}

function train3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("train3 is not working today");
            resolve("About train3")
        
    },2000);

        
    });

}

// train1().then((message)=>{
//     console.log(message);
//     return train2();
//     //return train3(); It does not even run
// }).then((message)=>{
//     console.log(message);
// });


Promise.all([train1(),train2(),train3()]).then((messages)=>{
    console.log(messages);
});


console.time("time");
train1().then((message)=>{
    console.log(message);
    return Promise.all([train2(),train3()]);
}).then((message)=>{
    console.log(message);
    console.timeEnd("time");
});




