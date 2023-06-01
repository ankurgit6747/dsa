

class PersonObj {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello from ${this.name} and his age is ${this.age}`)
  }
}

let person1 = new PersonObj('Ankur', 25)

person1.sayHello()