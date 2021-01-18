const printing = (nick: string , age: number, gender: string): void => {
    console.log(`nick: ${nick}, age: ${age}, gender: ${gender}`);
};

const printing2 = (nick: string , age: number, gender: string): string => {
    return `nick: ${nick}, age: ${age}, gender: ${gender}`;
};

printing("daldalhada", 27, "male");
console.log(printing2("daldalhada", 27, "male"));

export {};

