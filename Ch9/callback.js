// calback : Ek ke andar aur ek

// +++++++++++++++++++++++++  01  ++++++++++++++++++++++++++++++
// addTwoNumber(4,5,addition);

// function addTwoNumber(no1,no2,sum){
//  return sum(no1,no2);
// }

// function addition(num1,num2){
//  console.log(`sum is:${num1+num2}`);
// }

//  ++++++++++++++++++++++++  02  +++++++++++++++++++++++++++++ 
// first sum two number and then multiply with 10

// addMultiply(6,4,multiply);

// function addMultiply(no1,no2,result){
//     let ans=no1+no2;
//     return result(ans);
// }

// function multiply(ans){
//     console.log(`Answer is:${ans*10}`);
// }


//  +++++++++++++++++++++++++++++  03  +++++++++++++++++++++++++++++

greetAfterDelay("John",logGreeting);

function greetAfterDelay(name,callback){
    setTimeout(()=>{
        console.log(`Hello,${name}`);
        callback(name);
    },3000)
}

function logGreeting(name){
    console.log(`Thanks ${name},See you soon`);
}