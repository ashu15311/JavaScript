// var ans = new Promise((res, rej)=>{
//     if(true) {
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("resolve hogaya tha")
// })
// .catch(function(){
//     console.log("reject hua tha !")
// })

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let promise = new Promise(function (resolve, reject) {
// 	const x = "geeksforgeeks";
// 	const y = "geeksforgeeks"
// 	if (x === y) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// promise
// 	.then(function () {
// 		console.log('Success, You are a GEEK');
// 	})
//   .catch(function () {
// 		console.log('Some error has occurred');
// 	});


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var ans = new Promise((res, rej) => {
//   if (true) {
//     return res();
//   } else {
//     return rej();
//   }
// })

// ans
//   .then(function () {
//     console.log("resolve hogaya tha");
//   })
//   .catch(function () {
//     console.log("reject hua tha !");
//   });

//  ----------------------  PROMISE CHAINING   -----------------------------

// sabse pehle ghar par aao
// gate kholo aur gate lagao
// khana pakao kahana khao
// incognito mode chalao
// sojao kyuki tum thakl gaye ho

var ans= new Promise((resolve, reject) => {
  return resolve("sabse pehle ghar par aao");
})

var p2 = ans.then((data)=>{
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("gate kholo aur gate lagao");
  })
})

var p3=p2.then((data)=>{
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("khana pakao kahana khao");
  })
})

var p4=p3.then((data)=>{
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("incognito mode chalao");
  })
})

var p5=p4.then((data)=>{
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("sojao kyuki tum thakl gaye ho");
  })
})