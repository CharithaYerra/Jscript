function Data(){
    console.log(this);
    this.type="string";
    let place="ram";
    console.log(this.type);
}
Data();//global
new Data();//only funtion scope
console.log(Data.length);
console.log(Data.name);



// Constructor function
function User(name, age) {
    this.name = name;
    this.age = age;
}

// Adding multiple methods to the prototype
User.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

User.prototype.isAdult = function() {
    return this.age >= 18;
};


//we cannot use the arrow function here as it doesnot take function variables

User.prototype.details = function() {
    console.log(`${this.name} is ${this.age} years old`);
};

// Create instance

let user1 = new User("siri", 21);

// Use prototype methods


user1.greet();       // Output: Hello, my name is siri
console.log(user1.isAdult()); // Output: true
user1.details();     // Output: siri is 21 years old
