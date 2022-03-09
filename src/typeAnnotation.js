// Primitive Data
var jedi = "Obi-Wan Kenobi";
var age = 35;
var hasLightSaber = true;
// Arrays
// If all the elements of the array are the same type,
// all we need is to add [] after the data type
var jediArray = ["Yoda", "Qui-Gon Jinn", "Obi-Wan Kenobi", "Luke Skywalker"];
// But you cannot for example do this:
// let jediArray: string[] = [ "Yoda", "Qui-Gon Jinn", { jedi: "Obi-Wan Kenobi", age: 35 }, "Luke Skywalker"];
//In this case, you will need to use any:
// let jediArray: any[] = [ "Yoda", "Qui-Gon Jinn", { jedi: "Obi-Wan Kenobi", age: 35 }, "Luke Skywalker"];
// My personal opinion though is to try and avoid the use of any as much as possible.
console.log(jediArray);
// Objects
var jediObject = {
    fullName: "Obi-Wan Kenobi",
    hasLightSaber: true
};
var jediObject2 = {
    fullName: "Obi-Wan Kenobi",
    hasLightSaber: true
};
