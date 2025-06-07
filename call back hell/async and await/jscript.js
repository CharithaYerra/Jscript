//async

async function sayHello() {
    console.time("time");
  return "Hello!";
}

sayHello().then(msg => {
    console.log(msg);
    console.timeEnd("time");
}); // Output: Hello!


async function greet(lang){
    return new Promise((resolve,reject)=>
    {
        if(lang=="english"){
            resolve("hello");
        }
        else if(lang=="telugu")
        {
            console.log("wait 3s we are searching for language");
            setTimeout(()=>{
            reject("we don't have the language you are looking for");

            },3000);
        }
    });
}

greet("telugu").then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(message);
});





