//await

function wait(ms) {
  return new Promise((resolve)=>{
    setTimeout(()=>
    {
        resolve("you have waited for 2 seconds");
    },ms);
  });
}

async function showMessage() {
  console.log("Start");
  console.time("timecheck");
  console.log(await wait(2000));
  console.timeEnd("timecheck");
   // Waits 2 seconds
  console.log("After 2 seconds");
}

showMessage();



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSteps() {
  console.log("Step 1");
  await delay(5000);
  console.log("Step 2");
  await delay(1000);
  console.log("Step 3");
}

runSteps();


async function getName() {
  return "Divya";
}

async function greetUser() {
  let name = await getName();
  console.log(`Hello, ${name}!`);
}

greetUser();

