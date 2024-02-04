//  ++++++++++++++++++  Q1  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let a="harr\"y";
console.log(a);
console.log(a.length);

// ++++++++++++++++++  Q2  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let str = "Hello, world!";

// includes()
console.log(str.includes("world")); // Returns true if "world" is found in the string

// startsWith()
console.log(str.startsWith("Hello")); // Returns true if the string starts with "Hello"

// endsWith()
console.log(str.endsWith("!")); // Returns true if the string ends with "!"

// --------------------------  Q3  ------------------------------------------------------
let p="ASHU";
console.log(p.toLowerCase());

// **************************  Q4  *********************************************************
let amount="Please give $1000 ";
console.log(amount.slice(12));

// --------------------------  Q5  ---------------------------------------------------
let b="cartoon";
b[3]='o';
console.log(b);    //  No the value is not changed. as string is immutable ..