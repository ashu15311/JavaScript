// let a=[9,8,56,85,25];

// a.forEach((value,index,a)=>{
//     console.log(value,index,a)
// })

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => {
//   console.log(number * 2); // Prints each number doubled
// });

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       // MAP
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number,index,array) => {
//     return number * 2;
// });
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// console.log(numbers);       // Original array remains unchanged: [1, 2, 3, 4, 5]

//  ---------------------------------------------------------------------
            // FILTER
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((number) =>{
//     return number % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4, 6]
// console.log(numbers);     // Original array remains unchanged: [1, 2, 3, 4, 5, 6]

// -------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => 
            accumulator + currentValue
            );
console.log(sum); // Output: 15

// S1: accumulator takes the initial value then
// S2 -> SLast : then the returned values takes the accumulator

// --------------------------------------------------------------------------
const str = 'Hello, world!';
const arr = Array.from(str);
console.log(arr); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']

