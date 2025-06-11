
class Person {
    introduce() {
        console.log("I am a person.");
    }
}

class Student extends Person {
    introduce() {
        console.log("Hi, I'm a student.");
    }
}
class Teacher extends Person {
    introduce() {
        console.log("Hello, I'm a teacher.");
    }
}



// let teacher1=new Teacher();
// teacher1.introduce();

// let student1=new Student();
// student1.introduce();



let people = [new Person(), new Student(), new Teacher()];

for (let person of people) {
    person.introduce();  // same method name, but different outputs
}




class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
}

const shapes = [
  new Circle(3),
  new Rectangle(4, 5),
  new Triangle(6, 7),
];

shapes.forEach(shape => {
  console.log(`Area: ${shape.getArea()}`);
});

