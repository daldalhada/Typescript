"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(nick, age, gender) {
        this.nick = nick;
        this.age = age;
        this.gender = gender;
    }
}
const daldal = new Human("daldalhada", 24, "male");
const printing = (person) => {
    return `nick: ${person.nick}, age: ${person.age}, gender: ${person.gender}`;
};
console.log(printing(daldal));
//# sourceMappingURL=index.js.map