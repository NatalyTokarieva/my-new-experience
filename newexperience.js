
// 'use strict'

// function showName(){
//     console.log('Vasya')
//   }
//   setTimeout(showName, 0);
//   console.log('Kolya')

// let userInfo = {
//     name: 'Vasya',
//     age: 20,    
// }

// let user = Object.assign({}, userInfo);

// user.age = 18;

// console.log(userInfo);
// console.log(user);

let userInfo = {
    name: 'Vasya',
    age: 20,
}
//     "58": 'Property value'
// }
// console.log(userInfo[58]); 
let user = userInfo;
user.age = 18;
console.log(userInfo.age)