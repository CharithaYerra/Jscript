// fetch.js
export async function fetchPost(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
  const data = await response.json();
  return data;
}

