// // Example 1: Arithmetic operators in JavaScript
// let x = 5;
// let y = 3;

// // addition
// console.log('x + y = ', x + y);  // 8

// // subtraction
// console.log('x - y = ', x - y);  // 2

// // multiplication
// console.log('x * y = ', x * y);  // 15

// // division
// console.log('x / y = ', x / y);  // 1.6666666666666667

// // remainder
// console.log('x % y = ', x % y);   // 2

// // increment
// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // prints 6 and then increased to 7
// console.log('x = ', x);     // 7

// // decrement
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // prints 6 and then decreased to 5
// console.log('x = ', x);     // 5

// //exponentiation
// console.log('x ** y =', x ** y);
// ---------------------------------------------------------------------------------------------------------------------------
//  (==)
console.log(1 == 1)         // true
console.log("1" == 1)       // true
console.log(1 == '1')       // true
console.log(0 == false)     // true
console.log( 0 == null)     // false  //null & undefined are not equal to any value except each other

// -------------------------------------------------------------------------------------------------------------------------
// Comparing null and undefined
console.log(0   == undefined )            // false
console.log(null  == undefined)           // true
console.log( null === undefined );        // O/P - false
console.log( null > 0 );                  // O/P - false
console.log( null >= 0 );                 // O/P - true
console.log( null == 0 );                 // O/P - false
console.log( undefined  > 0 );            // O/P - false
console.log( undefined  >= 0 );           // O/P - false
console.log( undefined  == 0 );           // O/P - false