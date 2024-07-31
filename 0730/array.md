# Array

### 배열과 객체의 차이

**배열**: 순서를 갖는 값의 집합 / 배열도 사실 객체, 객체의 특별한 형식 

index 를 통해 접근 

**객체** :키가 있음 

.키를 통해 접근 

<br>
<hr>

### 배열

배열 안에 있는 각 값을 요소라 하며, Index를 가진다

`Array.prototype` ⇒ 배열에 어떤 메서드가 있는지 확인 가능. Array가 사용할 수 있는 프로토타입

`Array.isArray()` 메서드로 배열인지 확인 가능

<br>

기존 배열을 복사해서 새로운 배열로 만들기

```jsx
let copy = Array.from(arr);
```

<br>

확산 연산자를 사용하여 새로운 배열 만들기

```jsx
let concat = [...arr]
```

<br>

기본 배열의 요소를 복사하는 것이기 때문에 복사본 배열을 수정해도 원래 배열에는 영향을 미치지 않음

```jsx
let numbers = [...'0123456789'];
let n = Array.from('0123456789')

/*
[
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9'
]
*/
```

<br>

배열 비우기 

```jsx
arr.length = 0;
```

<br>

배열 구조 해체 대입

각 요소에서 값을 풀어서 한번에 여러 변수에 저장

```jsx
let jan, feb, mar, rest;
[jan, feb, mar, ...rest] = carSales;
console.log(jan, feb, mar); //300 350 400
console.log(rest);
//[ 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
```

<br>

**for ~ of 문**

for ~ of 문과 함께 entries() 메서드 사용

배열의 각 요소에 대한 인덱스와 값을 포함하는 이터레이터 객체를 반환

<br>

`for...of` 와 `for...in`의 차이

for... in은 키의 목록을 반환하고, for ... of는 값을 반환
for...in 루프는 순서없이 객체의 모든 열거 가능한 속성을 반복

```jsx
let list = [4, 5, 6];
for (let i in list) {
    console.log(i) //0,1,2
}

for(let i of list) {
    console.log(i) //4,5,6
}
```

<br>

일반 객체는 이터러블이 아님

⇒ 순환이 안됨 / for ~ of 하면 오류 발생

<br>

`forEach()`

배열에서 각 요소를 순회하면서 함수를 호출하여 배열 요소를 다루는 기능. 새로운 배열 반환 안함

매개변수 (sale, index, array) = 요소의 값, 요소의 인덱스, 배열을 인수를 넘겨줌

```jsx
carSales.forEach((sale, index, array) => {array[index] = sale + 50});
```

- Current Value (명명된 매개변수) - 처리할 현재 요소
- Index (선택적 매개변수) - 처리할 현재 요소의 인덱스
- Array (선택적 매개변수) - forEach 메서드를 호출한 배열

<br>

`map()`: 배열에서 각 요소를 순회하면서 함수를 호출하여 새로운 배열을 생성하여 반환

`filter()` : 배열에서 각 요소를 순회하면서 함수를 호출하여 새로운 배열을 생성하여 반환

<br>

`find()` / `findIndex()`

배열의 요소 찾기 / 찾는 요소의 인덱스값 찾기

<br>

`every()` : 모든 배열 요소에 대한 조건연산에서의 결과 반환(true, false)

`some()` : 모든 배열 요소에서 하나라도 참 또는 거짓을 반환하는 경우 결과 반환(true, false)

<br>

`reduce()` : 더이상 배열 요소가 없을 때까지 함수를 반복하여 하나의 값을 반환

```jsx
let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
console.log(sum);
```

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#accumulator
    
    `accumulator`
    
    누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 `initialValue`를 제공한 경우에는 `initialValue`의 값
    
    `currentValue`
    
    처리할 현재 요소.
    
    `currentIndex` (Optional)
    
    처리할 현재 요소의 인덱스. `initialValue`를 제공한 경우 0, 아니면 1부터 시작.
    
    `array` (Optional)
    
    `reduce()`를 호출한 배열
    
    ```jsx
    [0, 1, 2, 3, 4].reduce(
      function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue;
      },
    );
    ```
    
    콜백은 4번 호출. 각 호출의 인수와 반환값은 다음과 같다.
    
    | callback | accumulator | currentValue | currentIndex | array | 반환 값 |
    | --- | --- | --- | --- | --- | --- |
    | 1번째 호출 | 0 | 1 | 1 | [0, 1, 2, 3, 4] | 1 |
    | 2번째 호출 | 1 | 2 | 2 | [0, 1, 2, 3, 4] | 3 |
    | 3번째 호출 | 3 | 3 | 3 | [0, 1, 2, 3, 4] | 6 |
    | 4번째 호출 | 6 | 4 | 4 | [0, 1, 2, 3, 4] | 10 |

<br>
<br>

 t1이 t2보다 크면 t1 반환, 아니면 t2 반환 => 가장 큰 숫자 나옴

```jsx
let hightest = carSales.reduce((t1, t2) => (t1 > t2) ? t1 : t2 )
console.log(hightest);
```

<br>

`flat()`: 배열 요소에 다른 배열을 포함하고 있을 때 배열을 풀어준다. 단 포함된 배열이 다른 배열을 포함하고 있을 경우 풀어주지 못한다.

```jsx
let flat = [1, [2,3]].flat();
console.log(flat);
//[1,2,3]
```

<br>

`flatMap()`: 배열의 각 요소에 주어진 콜백함수를 적용한 다음 그 결과를 한 단계씩 평탄화하여 새 배열로 반환

```jsx
let message = ['오늘은', '비가 옵니다'];
let words = message.flatMap(msg => msg.split(''));
console.log(words);
/* [
  '오', '늘', '은',
  '비', '가', ' ',
  '옵', '니', '다'
] */
```
<br>

`concat()`: 두개 이상의 배열을 병합하는데 사용. 기존 배열을 변경하지 않고,새 배열을 반환

```jsx
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

//[ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

```jsx
let original = [1, 2, 3];
let newArray;
newArray = original.concat(4,5); //[ 1, 2, 3, 4, 5 ]
newArray = original.concat([4,5], [6,7]);
console.log(newArray);

// [ 1, 2, 3, 4, 5, 6, 7]
```
<br>

`push()` : 배열의 끝에 요소를 추가

`pop()`: 배열 끝에 있는 요소를 꺼내와 반환하고 해당 요소를 배열에서 삭제

<br>

`unshift()` : 배열의 처음에 요소를 추가

`shift()`: 배열의 처음에 있는 요소를 꺼내와 삭제

<br>

`slice()` : 배열을 잘라서 분할된 서브 배열을 반환 원래의 배열을 변경하지 않음 

두번째 인수는 인덱스

```jsx
let a = [1,2,3,4,5];
let b = a.slice(0,2);
let c = a.slice(1,-1);
console.log(a); //[ 1, 2, 3, 4, 5 ]
console.log(b); //[ 1, 2 ]
console.log(c); //[ 2, 3, 4 ]
```
<br>

`splice()` : 배열을 잘라서 분할된 서브 배열을 반환 원래 배열을 변경시킴 

두번째 인수는 잘라낼 요소의 개수

두번째 인수를 생략하면 마지막 요소까지 잘라냄 

_세개 이상의 인수일 경우_

1.시작 인덱스

2.잘라낸 요소 개수

3.인수에 지정된 값이 배열의 첫번째인 수의 위치에 추가

```jsx
let a = [1,2,3,4,5];
//a.splice(0,2); //[3,4,5]
//a.splice(2); //[ 1, 2 ]
a.splice(0,2,10,20); //[ 10, 20, 3, 4, 5 ]
console.log(a); 
```

<br>

`fill()` : 배열을 첫 번째 인수에 지정된 값으로 채운다.

첫 번째 인수는 값으로 채우고, 두 번째 인수는 시작 인덱스, 세번째 인수는 끝 인덱스

```jsx
let a = new Array(5);
a.fill(0); //[ 0, 0, 0, 0, 0 ]
//a.fill(1,1); //[ 0, 1, 1, 1, 1 ]
a.fill(1,1,-1); //[ 0, 1, 1, 1, 0 ]
console.log(a); 
```
<br>

`indexOf()` : 배열에서 인수와 일치하는 맨 처음 요소의 인덱스

`lastIndexOf()` : 배열에서 끝에서부터 인수와 일치하는 요소를 찾아 맨 처음 요소의 인덱스

찾지 못하면 -1 을 반환

```jsx
let a = [0, 1, 2, 3, 2, 1, 0];
let b = a.indexOf(2); //2
let c = a.lastIndexOf(2); //4
let d = a.indexOf(5); //-1
```
<br>

`includes()` : 인수에 지정된 값이 배열에 포함되어 있으면 true / 아니면 false

_질문처럼 생각하기 !_

```jsx
let a = [0, true, 2, false, NaN];
let b = a.includes(true); //true
console.log(b);
```

<br>

`sort()` : 배열을 정리할 때 사용, 알파벳 순으로 정렬한다.

```jsx
let a = ['apple', 'cherry', 'banana'];
let b = a.sort(); //[ 'apple', 'banana', 'cherry' ]
console.log(b);
```

<br>

숫자의 경우에는 함수를 통해 지정

```jsx
let c = [22,333,121];
let d = c.sort(); //[ 121, 22, 333 ]
console.log(d);
let e = c.sort((a,b) => a-b); //[ 22, 121, 333 ]
console.log(e); 
```

<br>

`join()` : 배열의 모든 요소를 문자열로 변환하여 결합한 문자열을 반환

```jsx
let a = [1, 2, 3];
let b = a.join(); //1,2,3
let c = a.join(''); //123
```
<br>
<hr>

### 다차원 배열

자바스트립트 언어 자체에서 다차원 배열을 지원하지 않는다. 

그대신에 내포된 배열을 사용하여 다차원 배열을 생성할 수 있다.

`array of array`

```jsx
let arr = new Array(2);
for (let i = 0; i< arr.length; i++)
    arr[i] = new Array(3);
```

```jsx
let arr = Array.from(new Array(2), () => new Array(3))
```

```jsx
arr[0][0] = 1;
arr[0][1] = 2;
arr[0][2] = 3;
arr[1][0] = 4;
arr[1][1] = 5;
arr[1][2] = 6;

console.table(arr);
/*
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│ 0       │ 1 │ 2 │ 3 │
│ 1       │ 4 │ 5 │ 6 │
└─────────┴───┴───┴───┘
*/
```
