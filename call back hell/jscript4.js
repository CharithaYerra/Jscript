//promise
// let promise=new Promise((resolve,reject)=>{
//     if(true){
//         resolve("success message 🎆🎆");
//     }
// });

// promise.then((message)=>{
//     console.log(message);
// });


// function firstPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("It is a first promise 👍");
//     });
// }

// firstPromise().then((result)=>{
//     console.log(result);
// });


// //settime out

// function success(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.time("time check");
//             console.log("It is successfully working ");
//             resolve("After 4s")
//         },4000);
//     });
// }

// success().then((result)=>{
//     console.log(result);
//             console.timeEnd("time check");

// });

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

train1().then((result)=>{
    console.log(result);
    return train2();
}).then((result)=>{
    console.log(result);
});


