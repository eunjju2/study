// function callback() {
//     console.log('콜백 함수가 호출됨');
// }

// setTimeout(callback, 1000);
// console.log('작업을 수행함');

// function getUsers(callback) {
//     setTimeout(() => {
//         const users = [
//             {name: 'Kim', email:'kim@email.com'},
//             {name: 'Lee', email: 'lee@email.com'},
//             {name: 'Park', email:'park@email.com'}
//         ];
//         callback(users);
//     }, 1000);
// }

// function findUser (name, callback) {
//     getUsers (users => {
//         const user = users.find(user => user.name === name);
//         callback(user.email);
//     })
// }

// let user = findUser('Kim', user => {
//     console.log(user);
// });

// let greeting = document.querySelector('#greeting');
// greeting.addEventListener('click', sayHello);
// function sayHello() {
//     alert('안녕하세요');
// }

// let success = true;

// function getUser() {
//     return new Promise((resolve, reject) => {
//         if(success) {
//             setTimeout(() => {
//                 resolve(
//                     [
//                         {name: 'Kim', email:'kim@email.com'},
//                         {name: 'Lee', email: 'lee@email.com'},
//                         {name: 'Park', email:'park@email.com'}
//                     ]
//                 )
//             }, 1000);
//         }else {
//             reject('실패');
//         }
        
//     })
// }

// let promise = getUser();
// promise
//     .then(users => users.find(user => user.name ==='Kim'))
//     .then(user => console.log(user.email))
//     .catch(error => console.log(error))
//     .finally(() => console.log('작업 완료'));

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject(30), 3000));

// let promises = [p1, p2, p3];

// //비동기 연산 결과를 하나로 모으는 작업
// Promise.allSettled(promises) 
//     .then(results => {
//         const fulfilledResults = results.filter(result => result.status === 'fulfilled')
//         .map(result => result.value);
//         const total = fulfilledResults.reduce((sum, value) => sum + value, 0);
//         console.log(`결과는 ${fulfilledResults}`);
//         console.log(`합계 : ${total}`);
//     })

// function getUser() {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(
//                     [
//                         {name: 'Kim', email:'kim@email.com'},
//                         {name: 'Lee', email: 'lee@email.com'},
//                         {name: 'Park', email:'park@email.com'}
//                     ]
//                 )
//             }, 1000);
//     });
// }

// function findUser(users) {
//     console.log(users);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(users.find(user => user.name === 'Kim'))
//         }, 1000);
//     })
// }

// function getEmail(user) {
//     console.log(user);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(user.email)
//         }, 3000);
//     })
// }

// getUser()
//     .then(findUser)
//     .then(getEmail)
//     .then(console.log)

// const promiseA = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('A완료');
//     },1000);
// })
    
// const promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('B완료');
//     },2000);
// })

// let promises = [promiseA, promiseB];

// Promise.all(promises).then((results) => {
//     console.log('완료', results)
// })

// let success = true;
// const promiseA = new Promise((resolve, reject) => {
//     if(success) {
//         setTimeout(() => {
//             resolve(5);
//         },1000)
//         return 5;
//     }else {
//         reject('에러!')
//     }
// })

// const promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(result => result * 10);
//     },1500)
// })

// let promises = [promiseA, promiseB];

// Promise.all(promises)
//     .then(console.log)
//     .catch(console.log)

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(success) {
//             resolve(5);
//         }else {
//             reject('에러');
//         }
//     },1000);
// })

// promise.then(
//     num => {
//         return new Promise((resolve, reject) =>{
//             setTimeout(() => {
//                 resolve(num * 10);
//             }, 1500);
//         })
//     })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// async function sayHello() {
//     return '안녕';
// }
// sayHello()
//     .then(console.log);

// let sayHello = async function() {
//     return '안녕';
// }
// sayHello()
//     .then(console.log);

// let sayHello = async () => '안녕';
// sayHello()
//     .then(console.log);

// class Greeter {
//     async sayHello() {
//         return '안녕';
//     }
// }

// const greeter = new Greeter();
// greeter.sayHello()
//     .then(console.log);

// async function sayHello() {
//     return Promise.resolve('안녕');
// }

// sayHello()
//     .then(console.log)

// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('안녕'), 1000);
//     })
// }

// sayHello()
//     .then(console.log)

// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('안녕'), 1000);
//     })
// }

// async function display() {
//     try {
//         let result = await sayHello(); 
//         console.log(result);
//     }catch (e) {
//         console.log(e);
//     }
    
// }
// display();

// function getUser() {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(
//                     [
//                         {name: 'Kim', email:'kim@email.com'},
//                         {name: 'Lee', email: 'lee@email.com'},
//                         {name: 'Park', email:'park@email.com'}
//                     ]
//                 )
//             }, 1000);
//     });
// }

// function findUser(users, name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(users.find(user => user.name === name))
//         }, 1000);
//     })
// }

// function getEmail(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(user.email);
//         }, 3000)
//     })
// }

// async function getUserEmail(name) {
//     let users = await getUser();
//     let user = await findUser(users, name);
//     let email = await getEmail(user);
//     return email;
// }

// async function displayUserEmail() {
//     let email = await getUserEmail('Kim'); //getUserEmail() 구할 때까지 기다렸다가 반환하도록 await붙여줌. async 내에서만 사용 가능하므로 async 붙여줌
//     console.log(email);
// }

// displayUserEmail();

// const myPromise = () => new Promise((resolve) => {
//     resolve('value is');
// });

// function* gen() {
//     let result = '';
//     yield myPromise().then(data => {result = data});
//     yield result + '1';
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//     console.log(asyncFunc.next());
// })

/*
{ value: Promise { <pending> }, done: false }
{ value: 'value is1', done: false }
*/

// async function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout = 1000) {
//     let next = from;
//     while(next <= to) {
//         yield new Promise((resolve, reject) => {
//             setTimeout(() => resolve(next), timeout);    
//         })
//         next += interval;
//     }
// }
// (async() => {
//     let seq = asyncSequence(2, 10, 2);
//     for await (let value of seq)
//         console.log(value)
// })();




// async function* gen(from = 0, to = Infinity, interval = 1, timeout = 2000) {
//     let next = from;
//     while(next <= to) {
//         yield new Promise((resolve, reject) => {
//             setTimeout(() => resolve(next), timeout);    
//         })
//         next += interval;
//      }
// }
// (async() => {
//     let seq = gen(2, 10, 2);
//     for await (let value of seq)
//         console.log(value)
// })();


// function* taskGenerator () {
//     yield new Promise((resolve) => {setTimeout(()=> resolve('1 완료'), 2000)});
//     yield new Promise((resolve) => {setTimeout(()=> resolve('2 완료'), 2000)});
//     yield new Promise((resolve) => {setTimeout(()=> resolve('3 완료'), 2000)});

// }

// const tasksDisplay = async () => {
//     const tasks = taskGenerator(); //제너레이터에 들어간 하나하나. 들어올 때까지 기다려줘야 하므로 await
//     for (let task of tasks) {
//         const result = await task;
//         console.log(result);
//     }
// }

// tasksDisplay();


// function getUsers() {
//         return new Promise((resolve, reject) => {
//                 users = {
//                     1: {name : 'Kim', age :25},
//                     2: {name : 'Lee', age : 30},
//                     3: {name : 'Jung', age : 35},
//                 };
//                 setTimeout(() => {
//                     resolve(users)}, 1000);
//                 });
//     }

// async function displayUser () {
//     const users = await getUsers();
//     console.log(users);
// }
// displayUser();

function userData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: {name : 'Kim', age :25},
                2: {name : 'Lee', age : 30},
                3: {name : 'Jung', age : 35},
            }
            const user = users[userId];
            if(user){
                resolve(user);
            }else {
                reject('사용자를 찾을 수 없습니다');
            }
        }, 1000);
    })
}

async function getUser(userId) {
    try{
        const userDataGet = await userData(userId);
        console.log(`${userDataGet.name}, ${userDataGet.age}`);
    }catch(error) {
        console.error(error);
    }
}

getUser(1);
getUser(4);

