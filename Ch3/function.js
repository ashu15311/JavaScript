// function myfun(a,b){
//     return a+b;
// }
// // let result=;
// console.log(myfun(5,6));

//------------------------------------------------------
function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("ashu")

//***************************************************************************** 
function sum(a, b,c=3) {
    // console.log(a + b)
    console.log("a=",a ," b=",b," c=",c)
    return a + b + c
}

result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)