class Human {
    public nick: string;
    public age: number;
    public gender: string;

    constructor(nick: string, age: number, gender: string){
        this.nick = nick;
        this.age = age;
        this.gender = gender;
    }
}

const daldal = new Human("daldalhada", 24, "male");

const printing = (person: Human): string => {
    return `nick: ${person.nick}, age: ${person.age}, gender: ${person.gender}`;
};

console.log(printing(daldal));

export {};

