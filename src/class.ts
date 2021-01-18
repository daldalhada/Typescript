interface Human {
    nick: string,
    age: number,
    gender:string
}

const person = {
    nick: "daldalhada",
    gender: "male",
    age: 22
};

const printing = (person: Human): string => {
    return `nick: ${person.nick}, age: ${person.age}, gender: ${person.gender}`;
};

console.log(printing(person));

export {};

