"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printing = (nick, age, gender) => {
    console.log(`nick: ${nick}, age: ${age}, gender: ${gender}`);
};
const printing2 = (nick, age, gender) => {
    return `nick: ${nick}, age: ${age}, gender: ${gender}`;
};
printing("daldalhada", 27, "male");
console.log(printing2("daldalhada", 27, "male"));
//# sourceMappingURL=interface.js.map