//실습10 import {arrs, getName} from './modules.js'
//실습11 import * as R from './modules.js'
//실습12 import myData from './myData.json'
import axios from 'axios'

//실습1
// const user = {
//     name : 'eunsoo',
//     age: 25,
//     email: ['eun@gmail.com']
// }

// const copyUser = user;
// console.log(copyUser === user); //true

// user.age = 20;
// console.log(user); //20
// console.log(copyUser); //20

//실습2
// const user = {
//     name : 'eunsoo',
//     age: 25,
//     email: ['eun@gmail.com']
// }

// const copyUser = Object.assign({}, user);
// console.log(copyUser === user); //false

// user.age = 20;
// console.log(user); //20
// console.log(copyUser); //25

//실습3
// const user = {
//     name : 'eunsoo',
//     age: 25,
//     email: ['eun@gmail.com']
// }

// const copyUser = {...user}; 
// console.log(copyUser === user); //false

// user.age = 20;
// console.log(user); //20
// console.log(copyUser); //25

// user.email.push('lee@gmail.com');
// console.log(user.email === copyUser.email); //true 
// //같은 배열 참조

// console.log(user); //['eun@gmail.com', 'lee@gmail.com']
// console.log(copyUser); //['eun@gmail.com', 'lee@gmail.com']

//실습4
//import _ from 'lodash'
// const user = {
//     name : 'eunsoo',
//     age: 25,
//     email: ['eun@gmail.com']
// }
// const copyUser = _.cloneDeep(user)
// console.log(copyUser === user); //false

// user.age = 20;
// console.log(user); //20
// console.log(copyUser); //25

// user.email.push('lee@gmail.com');
// console.log(user.email === copyUser.email); //false 

// console.log(user); //['eun@gmail.com', 'lee@gmail.com']
// console.log(copyUser); //['eun@gmail.com']

//실습5
// const userA = [
//     {userID : '1', name: 'eun'},
//     {userID : '2', name: 'Lee'},
// ]

// const userB = [
//     {userID : '2', name: 'soo'},
//     {userID : '4', name: 'Kim'},
// ]

// const userC = userA.concat(userB);
// console.log(userC);
// /*{userID: '1', name: 'eun'}
// {userID: '2', name: 'Lee'}
// {userID: '3', name: 'eun'}
// {userID: '4', name: 'Kim'}*/

// //고유화 작업
// console.log(_.uniqBy(userC, 'userID')) 
// /*
// {userID: '1', name: 'eun'}
// {userID: '2', name: 'Lee'}
// {userID: '4', name: 'Kim'}
// */

// const userD = _.unionBy(userA, userB, 'userID'); //userID 속성을 기준으로 고유한 객체를 유지하면서 userA와 userB 배열을 병합
// //첫 번째 배열에서 만난 고유한 속성 값을 유지하고, 이후 배열에서 중복된 속성 값을 무시

// console.log(userD); 
/*
{userID: '1', name: 'eun'}
{userID: '2', name: 'Lee'}
{userID: '4', name: 'Kim'}
*/

//실습6
// const users = [
//     {userID : '1', name: 'eun'},
//     {userID : '2', name: 'soo'},
//     {userID : '3', name: 'Lee'},
//     {userID : '4', name: 'Kim'},
// ]

// const foundUser = _.find(users, {name: 'Lee'});
// console.log(foundUser); //{userID: '3', name: 'Lee'}

// const foundUserIndex = _.findIndex(users, {name:'Lee'})
// console.log(foundUserIndex); //2

// _.remove(users, {name:'soo'});

// console.log(users); 

//실습7
// let array = [1,2,3,4]
// let evens = _.remove(array, function(n) {
//     return n % 2 === 0
// })
// console.log(array); //[1,3]
// console.log(evens); //[2,4]

//실습8
// let myFriend = [
//     {name: 'kim', active: false},
//     {name: 'lee', active : false},
// ]

// console.log(_.every(myFriend, {name: 'kim', active: false})); //false
// console.log(_.every(myFriend, ['active', false])); //true
// console.log(_.every(myFriend, false)); //false
// console.log(_.every(myFriend, 'active')); //false

//실습9
// let mySister = [
//     {name: 'kim', age:22, city:'seoul'},
//     {name: 'lee', age:23, city:'seoul'},
//     {name: 'park', age:24, city:'seoul'},
//     {name: 'na', age:25, city:'seoul'}
// ]

// console.log(_.filter(mySister, {age: 22, name: 'kim'})); // {name: 'kim', age: 22, city: 'seoul'}
// console.log(_.filter(mySister, sister => sister.age === 24)); //{name: 'park', age: 24, city: 'seoul'}

//실습9
//import cube from './modules.js'
// console.log(cube(2,4))

//실습10
//import {arrs, getName} from './modules.js'
// console.log(arrs);
// console.log(getName());

//실습11
//import * as R from './modules.js'
// console.log(R.arrs);
// console.log(R.getName());

//실습12
//import myData from './myData.json'
// console.log(myData)

//실습13
// const user = {
//     name : 'eunsoo',
//     age: 25,
//     email: [
//         'eun@gmail.com',
//         'lee@gmail.com'
//     ]
// }
// const str = JSON.stringify(user); //JSON파일로 만들기
// console.log(str); //{"name":"eunsoo","age":25,"email":["eun@gmail.com","lee@gmail.com"]}
// const obj = JSON.parse(str); //JSON파일을 다시 객체로 만들기
// console.log(obj); //{name: 'eunsoo', age: 25, email: Array(2)}

//실습14
// const user = {
//     name : 'eunsoo',
//     age: 25,
//     email: [
//         'eun@gmail.com',
//         'lee@gmail.com'
//     ]
// }

// localStorage.setItem('user', JSON.stringify(user));
// console.log(localStorage.getItem('user')); //{"name":"eunsoo","age":25,"email":["eun@gmail.com","lee@gmail.com"]}
// console.log(JSON.parse(localStorage.getItem('user'))) //{name: 'eunsoo', age: 25, email: Array(2)}

//실습15
// const user = {
//     name : 'eunsoo',
//     age: 25,
//     email: [
//         'eun@gmail.com',
//         'lee@gmail.com'
//     ]
// }
// //localStorage.setItem('user', JSON.stringify(user));
// const str = localStorage.getItem('user');
// const obj = JSON.parse(str);
// obj.age = 22;
// console.log(obj); //{name: 'eunsoo', age: 22, email: Array(2)}
// localStorage.setItem('user', JSON.stringify(obj))

//실습16
//영화 API
function getMovies() {
    axios 
    .get('https://www.omdbapi.com/?apikey=7ed4d9ba&s=Guardians of the Galaxy Vol. 2')
    .then((response) => {
        console.log(response);
        const h1El = document.querySelector('h1');
        const imgEl = document.querySelector('img');
        const yearEl = document.getElementById('year');
        const typeEl = document.getElementById('type');
        h1El.textContent =response.data.Search[0].Title
        imgEl.src = response.data.Search[0].Poster
        yearEl.textContent = response.data.Search[0].Year
        typeEl.textContent = response.data.Search[0].Type
    })
}   
getMovies();

