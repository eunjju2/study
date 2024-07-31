# Map/Set

Set은 배열과 유사하고 값의 모음, 컬렉션(데이터의 집합, 그룹)이다.

중복된 값을 허용하지 않는다.
인덱스가 따로 존재하지 않기 때문에 이터레이터를 사용하여 조회

Map은 key&Value 구조이다.
key는 중복을 허용하지 않고, Value는 중복 허용.

| 구분 | 배열 | Set 객체 |
| --- | --- | --- |
| 동일한 값을 중복하여 포함할 수 있다. | O | X |
| 요소 순서에 의미가 있다. | O | X |
| 인덱스로 요소에 접근할 수 있다 | O | X |

<br>
<hr>


### Set

Set 객체는 중복되지 않는 유일한 값들의 집합

Set 객체는 Set 생성자 함수로 생성

Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성하고, 중복된 값은 Set 객체에 요소로 저장되지 않는다

`. . .` 연산자는 배열이나 객체의 요소들을 펼쳐서 개별 요소들로 만들거나, 함수 호출 시 인수를 전달할 때 사용. 배열 복사와 같은 경우에도 유용하게 활용될 수 있다

```jsx
const uniq = array => [... new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 5, 4])); //[ 2, 1, 3, 4, 5 ]
```

<br>

Set 객체의 요소 개수 확인

size 프로퍼티는 getter 함수만 존재하는 접근자 프로퍼티다.

```jsx
const {size} = new Set([1, 2, 3, 3]);
console.log(size); //3
```

```jsx
const set1 = new Set('I am a student');
console.log(set1.size); //10
```

<br>

Set 객체에 요소를 추가할 때는 `add` 메서드 사용

연속 호출 가능 (체이닝 가능)

```jsx
const set = new Set();
set.add(1).add(2);
console.log(set);
```

<br>

특정 요소가 존재하는지 확인할 때는 `has` 메서드 사용

```jsx
const set = new Set([1, 2, 3]);
console.log(set.has(2)); //true
```

<br>

Set 객체에 요소를 삭제하려면 `delete` 메서드를 사용

`delete`는 연속 호출 불가능

일괄 삭제하려면 `clear` 메서드 이용

```jsx
const set = new Set([1, 2, 3]);
//set.delete(2); // {1, 3}
set.clear(); // Set(0) {}
console.log(set); 
```

<br>

for ~ of 문과 forEach() 메서드를 사용하여 포함된 값을 순회할 수 있다

```jsx
let product = 1;
odds.forEach(o => product *= o);
console.log(product) //945
```

<br>

Set 객체의 요소를 순회하려면 `forEach` 메서드 사용

3개의 인수

1. 현재 순회 중인 요소값
2. 현재 순회의 키, 즉 현재 순회 중인 요소값.  언제나 1과 같음
3. 현재 순회 중인 Set 객체 자체

```jsx
const set = new Set([1, 2, 3]);
set.forEach((v1, v2, set) => console.log(v1, v2, set));
/*
1 1 Set(3) { 1, 2, 3 }
2 2 Set(3) { 1, 2, 3 }
3 3 Set(3) { 1, 2, 3 }
*/
```

```jsx
const userIDs = [101, 102, 101, 103, 102];
const uniqueUserIDs = new Set(userIDs);
uniqueUserIDs.forEach(userID => {
    console.log(`ID : ${userID}`)
})
/*
ID : 101
ID : 102
ID : 103
*/
const tags = ['JavaScript', 'CSS', 'HTML', 'HTML'];
const uniqueTags = new Set(tags);
uniqueTags.forEach(tag => {
    console.log(`tag: ${tag}`)
}) 
/*
tag: JavaScript
tag: CSS
tag: HTML
*/
```

<br>

 구조 분해 할당은 배열이나 객체의 속성을 쉽게 추출하여 변수에 할당하는 문법

래스트 문법은 주로 함수의 매개변수나 구조 분해 할당에서 사용되며, 여러 개의 인자 또는 요소를 배열로 수집하는 데 사용, 나머지 요소들은 배열로 묶는 기능

```jsx
const set = new Set([1,2,3]);
console.log([...set]); //[ 1, 2, 3 ]
const [a, ...rest] = set;
console.log(a, rest); //1 [ 2, 3 ]
```

<br>

Set 객체는 합집합, 교집합, 차집합 개념을 가질 수 있다

```jsx
let set1 = new Set([1, 2, 3]);
let set2 = new Set([4, 2, 3]);
let union = new Set([...set1, ...set2]);
let intersection = new Set([...set1].filter(x => set2.has(x))); //set2에 x값이 있는 것을 내보냄
console.log(intersection); // {2,3} 교집합
let difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); //{1} 차집합
```
<br>
<hr>

### Map

Map 객체는 키와 값의 쌍으로 이루어진 컬렉션

| 구분 | 객체 | Map 객체 |
| --- | --- | --- |
| 키로 사용할 수 있는 값 | 문자열 또는 심벌 값 | 객체를 포함한 모든 값💥  |
| 이터러블(반복 작업 수행) | X  | O |
| 요소 개수 확인 | object.keys(obj).length | map.size |

<br>

Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성

```jsx
const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map1); //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

const map2 = new Map([[1,2]]);
console.log(map2); //Map(1) { 1 => 2 }
```

<br>

Map 생성자 함수는 중복된 키를 갖는 요소가 존재하면 값이 덮어씌워진다

```jsx
const map = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map); //Map(1) { 'key1' => 'value2' }
```

<br>

요소 개수 확인은 `size` 프로퍼티 사용

```jsx
//프로퍼티이기 때문에 {}로 씀
const {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size); //2
```

<br>

Map 객체에 요소를 추가할 때는 `.set` 메서드 사용 (키, 값)

```jsx
const map = new Map();
map.set('key1', 'value1');
console.log(map); //Map(1) { 'key1' => 'value1' }
```

<br>

set 메서드를 호출한 후에 연속적으로 호출할 수 있다

```jsx
const map = new Map();
map.set('key1', 'value1').set('key2', 'value2');
console.log(map); //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
```

<br>

💥 Map 객체는 키 타입에 제한이 없다

```jsx
const map = new Map();
const lee = {name : 'Lee'};
const kim = {name : 'kim'};
map.set(lee, 'developer').set(kim, 'designer');
console.log(map);

/*
Map(2) {
  { name: 'Lee' } => 'developer',
  { name: 'kim' } => 'designer'
}
*/
```

<br>

`.delete` 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환

```jsx
const map = new Map();
const lee = {name : 'Lee'};
const kim = {name : 'kim'};
map.set(lee, 'developer').set(kim, 'designer');
console.log(map.delete(kim)); //Map(1) { { name: 'Lee' } => 'developer' }
```

<br>

`has` 메서드는 특정 요소의 존재 여부를 알리는 불리언 값을 반환

_있는지 물어보는 메서드_

```jsx

const map = new Map();
const lee = {name : 'Lee'};
const kim = {name : 'kim'};
console.log(map.has(lee)); //true
```

<br>

`.clear` 객체 요소 일괄 삭제, `clear` 메서드는 언제나 undefined를 반환

```jsx
const map = new Map();
const lee = {name : 'Lee'};
const kim = {name : 'kim'};
map.set(lee, 'developer').set(kim, 'designer');
console.log(map.clear()); //undefined
console.log(map) //Map(0) {}
```

<br>

forEach() 메서드를 사용할 수 있음

첫번째 인수: 값

두번째 인수: 키

```jsx
let map = new Map();
map.set(0, 'zero');
map.set(1, 'one');
map.forEach((value, key) => console.log(key, value));
/*
0 zero
1 one
*/
```
