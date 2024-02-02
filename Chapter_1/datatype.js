//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;
console.log(typeof [name,name1,result]);

//number
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5
console.log(typeof[number1,number2,number3]);

// BigInt value
const value1 = 900719925124740998n;
console.log(typeof value1);
// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

//Boolean
const dataChecked = true;
console.log(typeof dataChecked);

//undefined
let book;
console.log(typeof book); // undefined

//null
let age = null;
console.log(typeof age);  //object

//symbol
let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks") 
// Each time Symbol() method 
// is used to create new global Symbol
console.log(symbol1 == symbol2); // False

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};
console.log(student);

