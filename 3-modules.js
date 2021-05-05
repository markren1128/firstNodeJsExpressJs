// CommonJS, every file is module (by default)
// Modules = Encapsulated code (only share minimum)
const secret = "SUPE SECRET";
const john = "John";
const peter = "Peter";

const sayHi = (name) =>
{
    console.log(`Hello there ${name}`);
}

sayHi("Susan");
sayHi(john);
sayHi(peter);