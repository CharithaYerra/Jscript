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


//simple use of asyn by addition
async function sum(a,b){
    return a+b;
}

sum(4,5).then((result)=>{
    console.log(result);
});


async function add(a, b) {
  return a + b;
}

const result = add(5, 10);

console.log(result); // 👉 Promise { 15 }

result.then((sum) => {
  console.log("The sum is:", sum); //  The sum is: 15
});



async function loginUser(username) {
  return `Welcome, ${username}!`;
}

const response = loginUser("Divya");

console.log(response); //  Promise { "Welcome, Divya!" }

response.then((message) => {
  console.log(message); //  Welcome, Divya!
});




