// Primitive Data
let jedi: string = "Obi-Wan Kenobi"
let age: number = 35
let hasLightSaber: boolean = true

// Arrays
// If all the elements of the array are the same type,
// all we need is to add [] after the data type
let jediArray: string[] = [ "Yoda", "Qui-Gon Jinn", "Obi-Wan Kenobi", "Luke Skywalker"];

// But you cannot for example do this:
// let jediArray: string[] = [ "Yoda", "Qui-Gon Jinn", { jedi: "Obi-Wan Kenobi", age: 35 }, "Luke Skywalker"];

// In this case, you will need to use any:
// let jediArray: any[] = [ "Yoda", "Qui-Gon Jinn", { jedi: "Obi-Wan Kenobi", age: 35 }, "Luke Skywalker"];

// Tuples
let jediArray: [string, number, boolean] = [ "Obi-Wan Kenobi", 35, true]


// My personal opinion though is to try and avoid the use of any as much as possible.
console.log(jediArray);

// Objects

let jediObject = {
  fullName: "Obi-Wan Kenobi",
  hasLightSaber: true,
}

let jediObject2: {
  fullName: string,
  hasLightSaber: boolean
} = {
  fullName: "Obi-Wan Kenobi",
  hasLightSaber: true,
}

// Types can be used with primitives and unions
// type Point = number | string;

// Interfaces are usually used with objects and functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const add: MathFunc = (x: number, y: number): number => x - y;

// Optional property ?

interface JediInterface {
  fullName: string;
  age?: number;
  hasLightSaber: boolean;
}
