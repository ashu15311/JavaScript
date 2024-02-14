/*  
    koi bhi esa function jisme ap async code likhenge ,kyunki async code hai to ap promise ka istemal kar sakte ho,jab uska answer ayega apko ,then lagana padega,
    us then ko lagane se bachne ke liye , ap async ka istemal kar sakte ho
*/

// code in promise
// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     });
// }
// abcd()
//               VS 

// code in async/await

async function abcd(){
    let raw=await fetch(`https://randomuser.me/api/`);
    let ans=await raw.json();
    console.log(ans);
}

abcd();