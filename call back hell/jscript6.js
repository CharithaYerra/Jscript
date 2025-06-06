//use of api for the promise

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
      .then(data => console.log(data))

      //use of api for the promise

fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(response => response.json())
      .then(data => setTimeout(()=>{console.log(data)},2000));



 fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
      .then(data => setTimeout(()=>{console.log(data)},2000));     


