// const me = [1, 2, 3, 4, 5]
// console.log(me);


let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
// console.log(carSales)

// let carSale2 = new Array(300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450)
// console.log(carSale2)

// let copy = Array.from(carSales);
// console.log(copy)

// let concat = [0, ...carSales, 300, 500 ]
// console.log(concat)

// let numbers = [...'0123456789'];
// console.log(numbers)

// let n = Array.from('0123456789');
// console.log(n);

// let may = carSales[4];
// console.log(may);

// let june = carSales[5];
// console.log(june)

// carSales[12] = -50;
// console.log(carSales);

// let a = [1, 2, 3, 4, 5]
// let len =a.length
// console.log(len)
// a.length = 0;
// console.log(a)

// let jan, feb, mar, rest;
// [jan, feb, mar, ...rest] = carSales;
// console.log(jan, feb, mar);
// console.log(rest);

// let sum = 0;
// for(let sale of carSales)
//     sum += sale;
// let average = sum / (carSales.length);
// let roundedAverage = average.toFixed(2);
// console.log(average);
// console.log(roundedAverage);

// let sum = 0;
// for(let [index, sale] of carSales.entries()) {
//     if(index % 2 == 0)
//         sum += sale;
// }
// let average = sum / (carSales.length / 2);
// console.log(average)

// let list = [4, 5, 6];
// for (let i in list) {
//     console.log(i) //0,1,2
// }

// for(let i of list) {
//     console.log(i) //4,5,6
// }

// const car = {
//     maker : 'BMW',
//     color : 'red',
//     year : '2012'
// }
// for (let prop of car) {
//     console.log(prop);
// }

// let sum = 0;
// carSales.forEach(sale => (sum += sale));
// let average = sum / (carSales.length)
// console.log(average.toFixed(2))


// carSales.forEach((sale, index, array) => {array[index] = sale + 50});
// console.log(carSales)

// let newCarSales = carSales.map(sale => sale + 50);
// console.log(newCarSales);
// console.log(carSales);

// let highSales = carSales.filter(sale => sale > 500);
// console.log(highSales);

// let evenSales = carSales.filter((sale, index) => index % 2 === 1);
// console.log(evenSales);

// let firstSaleSix = carSales.find(sale => sale > 600);
// console.log(firstSaleSix)

// let firstSaleSixIndex = carSales.findIndex(sale => sale > 600);
// console.log(firstSaleSixIndex);

// let allSaleSix = carSales.every(sale => sale > 600);
// console.log(allSaleSix);

// let anySaleSix = carSales.some(sale => sale > 600);
// console.log(anySaleSix);

// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// console.log(sum);

// let average = sum / (carSales.length);
// console.log(average);

// let hightest = carSales.reduce((t1, t2) => (t1 > t2) ? t1 : t2 ) //t1이 t2보다 크면 t1 반환, 아니면 t2 반환 => 가장 큰 숫자 나옴
// console.log(hightest);

// let flat = [1, [2,3]].flat();
// console.log(flat);

// let message = ['오늘은', '비가 옵니다'];
// let words = message.flatMap(msg => msg.split(''));
// console.log(words);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4,5);
// newArray = original.concat([4,5], [6,7]);
// console.log(newArray);


// let stack = [];
// stack.push(1);
// stack.push(2,3);
// stack.pop();
// stack.push(4)
// console.log(stack);
// stack.unshift(1);
// stack.unshift(2,3); //[ 2, 3, 1 ]

// stack.shift();
// console.log(stack); //[ 3, 1 ]

// const numbers = [20, 37, -21, 32, -2]
// //document.write(numbers.filter(n => n > 30));
// document.write(numbers[1] + ',');
// document.write(numbers[3]);

// let a = [1,2,3,4,5];
// //a.splice(0,2); //[3,4,5]
// //a.splice(2); //[ 1, 2 ]
// //a.splice(0,2,10,20); //[ 10, 20, 3, 4, 5 ]
// let b = a.slice(0,2);
// let c = a.slice(1,-1);
// console.log(a); //[ 1, 2, 3, 4, 5 ]
// console.log(b); //[ 1, 2 ]
// console.log(c); //[ 2, 3, 4 ]

// let a = new Array(5);
// a.fill(0); //[ 0, 0, 0, 0, 0 ]
// //a.fill(1,1); //[ 0, 1, 1, 1, 1 ]
// a.fill(1,1,-1); //[ 0, 1, 1, 1, 0 ]
// console.log(a); 

// let a = [0, 1, 2, 3, 2, 1, 0];
// let b = a.indexOf(2); //2
// let c = a.lastIndexOf(2); //4
// let d = a.indexOf(5); //-1
// console.log(d); 

// let a = [0, true, 2, false, NaN];
// let b = a.includes(true); //true가 있는지 질문
// console.log(b);

// let a = ['apple', 'cherry', 'banana'];
// let b = a.sort(); //[ 'apple', 'banana', 'cherry' ]
// console.log(b);

// let c = [22,333,121];
// let d = c.sort(); //[ 121, 22, 333 ]
// console.log(d);
// let e = c.sort((a,b) => a-b); //[ 22, 121, 333 ]
// console.log(e);

// let a = [1, 2, 3];
// let b = a.join(); //1,2,3
// let c = a.join(''); //123
// console.log(c);

// let score = [67, 82, 97, 100, 92];
// for (let i = 0; i < score.length; i++){
//     console.log(score[i]);
// }
// console.log('---');
// for (s of score) {
//     console.log(s);
// }

// let tel = ['010', '1234', '5678'];
// let telephone = tel.join('-');
// console.log(telephone);


// let color = ['빨강', '노랑', '파랑', '주황'];
// let firstColor, restColor;
// [firstColor, ...restColor] = color;
// console.log(restColor +'/' + firstColor);
//방법2
// let arr = color.shift();
// console.log(color + '/' + arr);

// let arr = new Array(2);
// for (let i = 0; i< arr.length; i++) {
//     arr[i] = new Array(3);
// }
// console.log(arr);

// let arr = Array.from(new Array(2), () => new Array(3))
// console.log(arr);

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;

// console.table(arr);

// for (let i = 0; i<arr.length; i++) {
//     for (let j=0; j<arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// let studentA = [83, 90, 70, 87];
// let studentB = [87, 93, 62, 83];
// let studentC = [98, 90, 77, 97];

// let aSum = 0;
// let bSum = 0;
// let cSum = 0;

// for (let i = 0; i < studentA.length; i++) {
//     aSum += studentA[i];
//     bSum += studentB[i];
//     cSum += studentC[i];
// }

// console.log(`studentA 성적의 합계 : ${aSum}, 평균 : ${aSum/studentA.length}`)
// console.log(`studentB 성적의 합계 : ${bSum}, 평균 : ${bSum/studentB.length}`)
// console.log(`studentC 성적의 합계 : ${cSum}, 평균 : ${cSum/studentC.length}`)

// const scores = [[83, 90, 70, 87],[87, 93, 62, 83],[98, 90, 77, 97]]
// let sum, average;
// let text = "";
// for(let i=0; i < 3; i++){
//     sum = 0;
//     for (let j=0; j < 4; j++) {
//         sum += scores[i][j];
//     }
//     average = sum / 4;
//     text += i + '번째 학생의 합계: ' + sum +', 평균: ' + average +'\n';
// }
// console.log(text);

// const mathScores = [90, 85, 70, 86, 97];
// let sum = 0;
// let average = 0;
// for (let i = 0; i < mathScores.length; i++) {
//     sum += mathScores[i];
// }
// average = sum / mathScores.length;

// console.log(sum , average);

// const tempNumbers = [7, -24, -8, 10, 17, -18];
// let num = tempNumbers.filter(num => num< 0)[0];
// tempFind = tempNumbers.find(num => num < 0);
// console.log(tempFind);

// const a = [12, 0 ,2, 5, 4]
// const b = [0, 2, 3, 12 ,8]
// let arr=[];
// for (let i = 0; i< b.length; i++) {
//     if(a.includes(b[i]))
//         arr.push(b[i]);
// }
// console.log(arr);

//방법2
// b.forEach(element => {
//     if(a.includes(element))
//         arr.push(element);
// })
// console.log(arr);

// const numbers = [1,3,5];
// let arr= numbers.map(num => num*10);
// console.log(arr);
