//실습1
// function foo(...rest) {
//     console.log(rest)
// }

// foo(...[1,2,3])


//실습2
// let arr3 = [1,4]
// let arr4 = [2,3]
// arr3.splice(1,0,arr4);
// console.log(arr3);

//실습3
// let arr3 = [1,4]
// let arr4 = [2,3]
// arr3.splice(1,0,...arr4);
// console.log(arr3);

//실습4
// const origin = [1.2];
// const copy = origin.slice(); //같은 요소를 가지지만, origin과는 다른 새로운 배열. 서로 다른 참조
// console.log(copy);
// console.log(copy === origin); //false

//실습5
// const origin = [1.2];
// const copy = [...origin]; //같은 요소를 가지지만, origin과는 다른 새로운 배열. 서로 다른 참조
// console.log(copy);
// console.log(copy === origin); //false

//실습6
// const obj = {x:1, y:2};
// const copy = {...obj};
// console.log(copy);
// console.log(obj === copy); //false

//실습7
// const merged = {x:1, y:2, ...{a:3, b:4}}
// console.log(merged);

//실습8
// const merged = Object.assign({}, {x:1, y:2}, {y:3, x:3}); //여러 개의 객체를 병합하거나 특정 프로퍼티를 변경 또는 추가
// console.log(merged) //값이 같을 경우 뒤에 있는 값으로 변경

//실습9
// const merged = {...{x:1, y:2}, ...{y:3, x:3}};
// console.log(merged); //결과가 위와 같음

//실습10
// const arr = [1,2,3];
// const [one, two, three] = arr;
// console.log(one, two, three);

//실습11
// const [a,b] = [1,2];
// console.log(a,b);

// const [c,d] = [1];
// console.log(c,d); //1 undefined

//실습12
// const user = {firstName: 'Eunsoo', lastName: 'Lee'};
// const {firstName, lastName} = user;
// console.log(firstName, lastName);

//실습13
// function printTodo(todo) {
//     console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다`);   
// }
// printTodo({id: 1, content:'HTML', completed:true});

//실습14
// const user = {
//     name: 'Lee',
//     address: {
//         zipCode : '03068',
//         city: 'Seoul'
//     }
// }

//실습15
// const {address: {city}} =user; //중첩 객체의 경우에는 프로퍼티 키로 객체를 추출하고, 이 객체의 프로퍼티 키로 값을 추출
// console.log(city);

//문제1
const person = {name: 'Lee', age:25};
const {name: userName, age:userAge } = person;
console.log(`이름: ${userName}, 나이: ${userAge}`)
