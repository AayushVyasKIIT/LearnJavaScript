//object literals
let PersonObjectLiteral = {
    firstName : "Aayush",
    lastName : "Vyas",
    age : 2,

    getName : function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(PersonObjectLiteral.getName());
//adding new properties to ObjectLiteral
PersonObjectLiteral["nation"] = "Indian";
console.log(PersonObjectLiteral.nation);
//class
class PersonClass{

    _firstName;
    _lastName;
    _age;

    constructor(firstName, lastName, age){
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    //getter
    get getName(){
        return this._firstName + " " + this._lastName;
    };
    //setter
    set age(age){
        this._age = age;
    }
}

let person = new PersonClass("Aayush", "Vyas", 22);
console.log(person.getName);
person.age = 25;
console.log(person._age);
person["religion"] = "Hindu";
// console.log(person.nation); // this won't work
// PersonClass.prototype.nation = "Indian";
console.log(person.religion);

//constructor
function PersonConstructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const ConObh = new PersonConstructor("Aayush","Vyas",22);
console.log(ConObh.firstName);
PersonConstructor.nation = "India";
PersonConstructor.prototype.religion = "Hindu";
console.log(PersonConstructor.nation);
console.log(ConObh.nation);
console.log(PersonConstructor.religion);



