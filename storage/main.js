// Importing from math.js and constants.js
import { add, multiply } from './math.js';
import { PI } from './variable.js';

console.log("Add:", add(2, 3));           // Add: 5
console.log("Multiply:", multiply(4, 5)); // Multiply: 20
console.log("PI:", PI);


// PI: 3.14159




import { Person } from './person.js';
import isAdult, { getGreeting } from './data.js';

const person1 = new Person("Divya", 17);
person1.greet();

console.log("Is adult?", isAdult(person1.age));       
console.log("Greeting:", getGreeting());





import { fetchPost } from './fetch.js';

async function showPost() {
  try {
    const post = await fetchPost(1);
    console.log("Post Title:", post.title);
    
  } catch (error) {
    console.error("Failed to fetch post:", error);
  }
}

showPost();

