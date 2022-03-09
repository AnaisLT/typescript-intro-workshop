let masterJedi = "Obi-Wan Kenobi";

// Property length does not exist on type string
console.log(masterJedi.len);

// Error: This expression is not callable.
// Type 'Number' has no call signatures.
console.log(masterJedi.length());


console.log(masterJedi.length);

