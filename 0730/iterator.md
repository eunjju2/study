# 이터레이터와 제너레이터


> 순회할 수 있는 객체란?

이터레이터를 반환하는 **특별한 메서드**를 갖는 객체

배열, 문자열, Set, Map

반복되는 열거 가능(enumerable)한 속성이 있는 객체를 '이터러블(iterable)하다’고 함

이터러블한 객체의 프로토타입 객체에는 모두 `Symbol.iterator`메서드가 있음

<br>
<hr>
<br>

### 이터레이터(iterator)

반복을 위해 설계된 특정 인터페이스가 있는 객체

조건 : 두 개의 속성 `{value, done}`을 반환하고, next 메서드를 가진다. 

<br>

이터레이션 결과(iteration result)를 반환하는 next() 메서드를 갖는 객체

이터레이션 결과: done과 value 속성을 갖는 객체

<br>

`done 속성` : 아직 순회할 수 있는 요소가 남아있는 지 여부를 반환

남아있다면 false, 없으면 true

`value 속성` : 순회할 수 있는 현재 요소를 반환 / 요소가 남아있다면 어떤 요소인지를 반환

<br>

순회할 수 있는 요소가 남아있을 때 next() 메서드가 호출되면 

`{done : false , value : ‘다음 값’}` 반환

마지막 요소를 반환한 후에 순회할 수 있는 요소가 남아있지 않을 때 next() 메서드가 호출되면

`{done : true, value : undefined}` 반환

<br>

**특별한 메서드 : [Symbol.iterator]**

자바스크립트에 내장된 Symbol 객체 중 하나

이 이름을 갖는 메서드는 인수를 취하지 않고 이터레이터 객체를 반환

```jsx
let arr = [1,2,3,4,5];
let iterator = arr[Symbol.iterator]();
console.log(iterator); //Object [Array Iterator] {}

let result = iterator.next();
console.log(result); // {value:1, done:false}
```

`value 속성` : arr 배열의 첫번째 요소인 1

`done 속성` : 순회할 수 있는 요소가 남아있기 때문에 false

<br>

while 문을 사용하여, 이터레이션 객체를 통해 배열 요소를 순회하면서 요소 값을 출력할 수 있음

```jsx
while(!result.done) {
	console.log(result.value);
	result = iterator.next();
}
```

<br>

`[Symbol.iterator]()` 메서드를 포함하는 클래스를 정의함으로써 순회할 수 있는 객체 구현 가능

```jsx

class Sequence {
    constructor(from = 0, to = Infinity, interval = 1) {
        this.from = from;
        this.to = to;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let next = this.from;
        return {
            next: () => {
                if(next <= this.to) {
                    let result = {value: next, done: false};
                    next += this.interval;
                    return result;
                }
                return {value: undefined, done:true};
            }
        }
    }
}

let evenNumbers = new Sequence(2, 10, 2);
let iterator = evenNumbers[Symbol.iterator](); //Symbol.iterator 호출
let result = iterator.next();
console.log(result); //{ value: 2, done: false }

//끝까지 순회하기 위함
while(!result.done){ 
    console.log(result.value); //2 4 6 8 10
    result = iterator.next();
}

for (let num of evenNumbers) {
    console.log(num); // 2 4 6 8 10
}

```

Sequence 클래스는 interval 간격을 갖는 from에서부터 to까지 범위의 순차적인 수를 반환하는 
순회할 수 있는 객체를 생성한다

<br>

`. . .` 확산 연산자와 함께 배열 초기화 가능

```jsx
let arr = [...evenNumbers];
console.log(arr); // 2 4 6 8 10
```

<br>

<hr>

<br>

### 제너레이터(generator)

이터레이터를 발생시키는 함수 / 이터레이터 객체를 반환하는 함수 

일련의 값을 생성하는 특별한 종류의 순회할 수 있는 객체

중간에 원하는 부분에서 멈추었다가, 그 부분에서 다시 실행할 수 있는 함수 ⇒ 연속적X

<br>

배열처럼 이미 객체에 포함되어 있는 요소들을 순회하는 것이 아니라, 어떤 연산의 결과로 생성된 값을 순회할 때 유용. 일련의 값을 생성해주는 생성기

<br>

제너레이터 객체는 제너레이터 함수를 통해서만 생성 (화살표 함수 사용 불가)

예약어 `function*` :  일반적인 함수가 아닌 제너레이터 함수라는 것을 나타냄

`yield`키워드는 next()가 호출될 때 이터레이터가 리턴할 결과 값을 순서대로 지정

(제너레이터 함수를 머추거나 다시 시작하게 하는데 사용되는 키워드. 중단점)

```jsx
function* generate() {
    console.log('제너레이터 실행');
    console.log('1 생성');
    yield 1;
    console.log('2 생성');
    yield 2;
    console.log('3 생성');
    yield 3;
}
```
<br>

제너레이터 함수를 호출할 때 즉시 몸체의 코드가 실행되지 않음

그 대신 제너레이터 객체를 반환

```jsx
let generator = generate();
console.log(generator); // Object [Generator] {}
```

반환된 제너레이터 객체는 순회할 수 있는(이터러블) 객체로, 이터레이터다.

따라서 next() 메소드를 사용할 수 있다.

<br>

첫번째 `next()` 메서드가 호출될 때 제너레이터 함수가 실행되기 시작하여 `yield`문을 만날 때까지 실행됨

`yield`문을 만나면 실행이 멈추고 return문과 같이 값을 반환 

그러나 `yield`문은 이터레이터의 `next()` 메서드가 호출될 때까지 값을 반환하는 것을 연기

<br>

yield문 : 이터레이션 결과 객체를 반환

`yield`문이 반환하는 값 ⇒ 이터레이션 결과 객체의 value 속성에 저장

이후 yield문이 더 있기 때문에 done ⇒ false

```jsx
let result = generator.next();
console.log(result);
/*
제너레이터 실행
1 생성
{value:1, done:false}
*/
```

<br>

두번째 next() 메서드가 실행될 때,

두번째 yield문까지 실행하고 yield문은 이터레이션 결과 객체를 반환

```jsx
result = generator.next();
console.log(result);
/*
2 생성
{value:2, done:false}
*/
```

<br>

새번째 next() 메서드가 실행

세번째 yield문까지 실행하고 yield문은 이터레이션 결과 객체를 반환.

```jsx
result = generator.next();
console.log(result);
/*
3 생성
{value:3, done:false}
*/
```

<br>

네번째 next() 메서드 실행

더 이상 yield 문이 없기 때문에 다음과 같은 이터레이션 결과 객체를 반환

```jsx
result = generator.next();
console.log(result);
/*
4 생성
{value:undefined, done:true}
*/
```

<br>
<br>


> 제너레이터도 순회할 수 있는 객체(이터러블)

<br>

while문을 사용하여 제너레이터가 생성한 값을 순회하여 가져올 수 있음

```jsx
generator = generate();
let result = generator.next();

while(!result.done) {
    console.log(result.value);
    result = generator.next()
}
```

<br>

for..of 문 사용 가능

```jsx
generator = generate();
for(let gen of generator) {
    console.log(gen);
}
```

<br>

`[Symbol.iterator]()` 메서드 호출하여 이터레이터 가져올 수 있음

**이터레이터** : 이터러블에 Symbol.iterator() 메소드를 호출했을 때 반환되는 값

```jsx
generator = generate();
let iterator = generator[Symbol.iterator]();
console.log(iterator); //Object [Generator] {}
```

<br>

Sequence 이터레이터를 제너레이터 함수로 구현하면 다음과 같음

```jsx
function* sequence(from = 0, to = Infinity, interval = 1) {
    let next = from;
    while(next <= to){
        yield next;
        next += interval;
    }
}

```
<br>

sequence  제너레이터 함수는 interval 간격을 갖는 from에서부터 to까지 범위의 순차적인 수를 생성하는 

제너레이터 객체를 생성

```jsx
let evenSeq = sequence(2, 10, 2);
for (let seq of evenSeq)
    console.log(seq);

/*
2
4
6
8
10
*/
```

<br>

제너레이터 함수를 객체의 메서드로 정의할 수 있음

```jsx
let o = {
	x : 1,
	y : 2,
	z : 3,
	*values() {
		for(let value of Object.values(this))
			yield value;
	}
}
```

<br>

`value()` 메서드는 제너레이터 함수

객체 자신의 속성값을 순차적으로 생성하는 제너레이터 객체를 반환

```jsx
for(let value of o.values())
	console.log(value);

/*
1
2
3
[GeneratorFunction: values]
*/
```

<br>

제너레이터 함수를 객체의 메서드로 정의할 수 있으므로,

`[Symbol.iterator]()` 메서드를 제너레이터 메서드로 구현하여 제너레이터 객체를 반환하게 할 수 있다.

```jsx
class Sequence {
    constructor(from = 0, to = Infinity, interval = 1) {
        this.from = from;
        this.to = to;
        this.interval = interval;
    }

    *[Symbol.iterator]() {
        let num = this.from;
        while(num <= this.to) {
            yield num;
            num += this.interval;
        }
    }
}

let evenNumbers = new Sequence(2, 10, 2);
for(const num of evenNumbers) {
    console.log(num);
}
```

<br>

flat() 메서드처럼 여러 개의 순회할 수 있는 객체를 펼쳐
각 요소를 순차적으로 생성하는 제너레이터 함수를 구현할 수 있음

```jsx
function* generateIterables(...iterables) {
	for(let iterable of iterables)
		for(let item of iterable)
			yield item;
}
```

<br>

중첩 for 문을 사용하는 대신 `yield*` 사용 가능

```jsx
function* generateIterables(...iterables) {
	for(let iterable of iterables)
		yield* iterable;
}
```

<br>

`yield*` 문은 어떤 종류의 순회할 수 있는 객체와도 사용할 수 있으며, 재귀적인 제너레이터를 정의할 때 사용됨

generateIterables() 제너레이터 함수를 다음과 같이 호출

```jsx
let generator = generateIterables('abc',[1,2,3],sequence(2,10,2));
let arr = [...generator]
console.log(arr;

/*
[
'a', 'b', 'c',
1, 2, 3,
2, 4, 6, 8, 10
]
*/
```
