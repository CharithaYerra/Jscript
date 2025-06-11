// Store data
//we can store more if we want

sessionStorage.setItem('sessionID', '123456');

// Retrieve data the data from the session data

const session = sessionStorage.getItem('sessionID');
console.log(session);



// Remove data
//sessionStorage.removeItem('sessionID');

// Clear all data
//sessionStorage.clear();
