//constructors and classes
//not a purely object oriented language it is multi paradigm language=functional paradigm and object use krke code likh sakte h 

//this keyword points to the current context or object
//bahar ki side define krenge toh browser global obj window and yaha node m normal object
// normal function k case k dono jagah global object milenge
//arrow function k case m browse m window  and node m empty object
// console.log(this);
// let obj={
//     fname:"sonal",
//     lastname:"rajwani",
//     greet:()=>{
//         console.log(`hello,${this.fname} good morning`);
//     }
// }
// obj.greet();

// function sum(){
//     console.log(this);
// }

// sum();

//constructor name first letter should be capital
//before ES6


// function Person(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.greet=function(){
//         console.log(`hello ${this.firstname}`)
//     }
// }
// Person.prototype.greet=function(){
//     console.log(`hello ${this.firstname}`)
// }

// const p1=new Person("shubham","jain");
// const p2=new Person("sonal","rajwani");

// Person.greet();
// let arr=[10,20,30];
// console.log(arr)

// console.log(p1._proto_==Person.prototype);
// console.log(Person.prototype==p2._proto_);
// console.log(p1._proto_==p2._proto_);
// p1._proto_.gender="Male";
// p1._proto_=Person.prototype;
// p2._proto_=Person.prototype;

// console.log(p2.gender);

// Array.proto


class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log(`hello ${this.firstname}, Good morning`)
    }
}

const p1=new Person("Shubham","jain");
console.log(p1);
p1.greet();

//inheritance

class Animal{
    constructor(name){
        this.name=name;
    }

    speak(){
        console.log(`${this.name} is speaking`);
    }
}

class Dog extends Animal{
    constructor(name,voice){
        super(name);
        this.voice=voice;
    }
    speak(){
        super.speak();
        console.log("speaking from dog");
    }
}

//Private property 

class Account{
    #balance;
    constructor(name,initialBalance){
        this.name=name;
        this.#balance=initialBalance;
    }
    get balance(){
        console.log(this.#balance);
    }
    set balance(amount){
        this.#balance+=amount;
    }
}

const a1=new Account("sonal","1000");
a1.showBalance();
a1.updateBalance(1000);
a1.showBalance();
//Getters ans Setters
//console.log()

a1.balance=1000;
a1.balance;