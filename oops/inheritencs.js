class Animal {
  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
  
  
}

const d = new Dog();
d.eat();  
d.bark(); 




class Person {
    constructor(name) {
        this.name = name;
    }
    

    sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}


class Student extends Person {
    study() {
        console.log(this.name + " is studying");
    }
}


const s1 = new Student("Divya");

s1.sayHello();  //  Person class
s1.study();     //Student class
