// function Point(x,y) { //생성자 함수
//     this.x = x;
//     this.y = y;
// }

// Point.prototype = {
//     toString : function() {
//         return `(${this.x},${this.y})`;
//     }
// }
// let pt1 = new Point(10,20); // Point 함수의 인스턴스
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point); // Point의 인스턴스가 맞는지
// console.log(pt2 instanceof Point); // Point의 인스턴스가 맞는지


// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function() {
//         return Math.PI * this.radius;
//     }
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea); //false 


// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea = function() {
//     return Math.PI * this.radius **2;
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea); //true

// class Person{
//     constructor(name) {
//         this.name = nanme;
//     }
//     sayHi () {
//         console.log(`HI ${this.name}`)
//     }
//     static sayHello() {
//         console.log('hello')
//     }
// }

// me.sayHi();
// Person.sayHello();

// const Person = (function() {
//     function Person(name) {
//         this.name = name;
//     }
//     Person.prototype.sayHi = function() {
//         console.log('Hi' + this.name);
//     }
//     Person.sayHello = function() {
//         console.log('Hello!')
//     }
//     return Person;
// })

// const me = new Person('Lee');
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

// class Square {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
//     static areas(width, height) {
//         return width * height;
//     }
// }

// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.areas(10,10));


// const person = {
//     firstName : 'Eunsoo',
//     lastName : 'Lee',

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split('');
//     }
// }

// console.log(`${person.firstName} ${person.lastName}`);
// console.log(person.fullName);

// class Person{
//     #name = '';
//     constructor(name) {
//         this.#name = name
//     }
//     get name() {
//         return this.#name.trim();
//     }
// }

// const me = new Person('Lee');
// //console.log(me.#name); //안됨
// console.log(me.name);

// class Vehicle {
//     constructor(name, wheel) {
//         this.name = name;
//         this.wheel = wheel;
//     }
// }

// const myVehicle = new Vehicle('자전거', 2);
// console.log(myVehicle); //Vehicle { name: '자전거', wheel: 2 }

// class Bicycle extends Vehicle {
//     constructor(name, wheel) {
//         super(name, wheel);
//     }
// }

// const myBicycle = new Bicycle('따릉이', 2);
// console.log(myBicycle); //Bicycle { name: '따릉이', wheel: 2 }

// class Car extends Vehicle {
//     constructor(name, wheel, license) {
//         super(name, wheel);
//         this.license = license;
//     }
// }

// const myCar = new Car('벤츠', 4, true);
// const wifeCar = new Car('포르쉐', 4, false);

// console.log(myCar) //Car { name: '벤츠', wheel: 4, license: true }
// console.log(wifeCar) //Car { name: '포르쉐', wheel: 4, license: false }

// class Base {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         return `Hi! ${this.name}. how are you doing?`;
//     }
// }

// class Derived extends Base {
//     sayHi() {
//         return `${super.sayHi()}`
//     }
// }

// const derived = new Derived('Lee');
// console.log(derived.sayHi());

function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}

// Book.prototype.setDate = function(date) {
//     this.date = date;
// }

// Book.prototype.setPage = function(page) {
//     this.page = page;
// }


// Book.prototype.date = '1999'
// Book.prototype.page = 171;
// const book = new Book('abc', 'Lee', 20000);
// // book.setDate(20240731);
// // book.setPage(171);
// console.log(book);


