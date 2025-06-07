async function fetchData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();



///

let FirstapiAddress  = "https://jsonplaceholder.typicode.com/todos/1";

async function getFirstAPIResult() {
  try {
        // Fetch and log second API data
        const secondResponse = await getSecondAPIPromise();
        const secondData = await secondResponse.json();
        console.log("Second API Data:", secondData);

        // Fetch and log first API data
        const firstResponse = await fetch(FirstapiAddress);
        const firstData = await firstResponse.json();
        console.log("First API Data:", firstData);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
let SecondApiAddress = "https://jsonplaceholder.typicode.com/todos/2";



async function getSecondAPIPromise() {
    return fetch(SecondApiAddress);  // Promise
}

getFirstAPIResult();
