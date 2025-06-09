let user = {
  firstName: "Divya",
  lastName: "Charitha",
  
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName);  // 👉 Divya Charitha

user.fullName = "Divya Charitha";

console.log(user.firstName); 
console.log(user.lastName);  
