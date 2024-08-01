
//실습1
// let div = document.querySelector('div');
// console.log(div)

// function changeContent() {
//     div.outerHTML = '<h1>DOM API</h1> <p>선수 조건 : 없음</p>'

// }

//실습2
//아이디는 요소당 하나이기 때문에 하나만 바뀌는 문제
// const ele = document.getElementById('banana');
// ele.style.color = 'red';

//실습3
//태그 이름으로 전부 가져옴
// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele =>{ele.style.color = 'red';})
//HTMLCollection은 forEach 메서드를 제공해주지 않아서, 스프레드 연산을 사용하여 배열로 변환해서 forEach 메서드를 사용

//실습4
//클래스로 접근
// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elem => {elem.style.color = 'blue'});

//실습5
// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(elem => {elem.style.color='green'})

//실습6
// const boxEL = document.querySelector('.box');
// boxEL.addEventListener('click', function() {
//     // if(boxEL.classList.contains('active')) {
//     //     boxEL.classList.remove('active'); //active 가지고 있으면 없앰
//     // }else {
//     //     boxEL.classList.add('active');
//     // }
//     console.log('click!');
//     boxEL.classList.toggle('active');
// })

//실습7
// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function(boxEl, index){
//     boxEl.classList.add(`order-${index + 1}`);
//     console.log(index, boxEl);
// })

//실습8
// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('result');

// div.addEventListener('click', (event) => {
//     result.innerHTML += '<div>click</div>';
// })

// div.addEventListener('mouse', (event) => {
//     result.innerHTML += '<div>mousedown</div>';
// })

// div.addEventListener('mouseup', (event) => {
//     result.innerHTML += '<div>mouseup</div>';
// })

// clearbtn.addEventListener('click', (event) => {
//     result.innerHTML = ''; //지워줌
// ;})

//실습9
// function sayHi(name) {
//     console.log(`HI ${name}`);
// }

//실습10
//하나의 이벤트에 하나의 이벤트 핸들러만 바이닝 가능
// const button = document.querySelector('button');
// button.onclick=function {
//     console.log('button clicked 1');
// };
// button.onclick=function {
//     console.log('button clicked 2'); //얘만 출력
// };

//실습11
//등록 순서대로 호출
// const button = document.querySelector('button');
// button.onclick = function () {
//     console.log('이벤트 핸들러 프로퍼티 방식')
// }
// button.addEventListener('click', function() {
//     console.log('addEventListener');
// })

//실습12
//등록 순서대로 호출
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log('addEventListener1');
// })
// button.addEventListener('click', function() {
//     console.log('addEventListener2');
// })

//실습13
// const button = document.querySelector('button');
// const handleClick = () => console.log('button click');

// button.addEventListener('click', handleClick); //한번만 출력
// button.addEventListener('click', handleClick);


//실습14
// const button = document.querySelector('button');
// const handleClick = () => console.log('button click');

// button.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick);

//실습15
//콘솔에 한번만 button Click!이 출력되고 이벤트가 사라짐
// const button = document.querySelector('button');
// button.addEventListener('click', function add() {
//     console.log('button Click!'); //1번 실행
//     button.removeEventListener('click', add);
// });

//실습16
//제거 불가능
// const button = document.querySelector('button');
// const handleClick = () => console.log('button click');

// button.onclick = handleClick;

// button.removeEventListener('click', handleClick);
// //button.onclick = null; //붙여줘야 제거 가능

//실습17
// const msg = document.querySelector('.message');
// function showCoords(e) {
//     msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
// }
// document.onclick = showCoords;

//실습18
// const fruits = document.getElementById('fruits');
// function activate({target}) {
//     if(!target.matches('#fruits > li')) return;
//     [...fruits.children].forEach(fruit => {
//         fruit.classList.toggle('active', fruit === target)
//     })
// }
// fruits.onclick = activate;


//실습19
// const buttons = document.querySelectorAll(".check");
// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         button.classList.toggle('active');
//     })
// })

//실습20
//마우스로 끌고가서 박스 위치 변경
// const box = document.querySelector('.box');
// const initialMousePos = {x : 0, y: 0}; //초기 마우스 위치
// const offset = {x : 0, y : 0}; // 박스의 이동 오프셋을 저장

// // 박스를 이동시키는 함수
// const move = e => {
//     // 현재 마우스 위치에서 초기 마우스 위치를 빼서 이동 오프셋 계산
//     offset.x = e.clientX - initialMousePos.x; 
//     offset.y = e.clientY - initialMousePos.y; 
//     // 박스를 오프셋만큼 이동
//     box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`
// };

// // 박스에 마우스다운 이벤트 리스너 추가
// box.addEventListener('mousedown', e => {
//     // 마우스를 클릭한 위치를 초기 마우스 위치로 설정
//     initialMousePos.x = e.clientX - offset.x; 
//     initialMousePos.y = e.clientY - offset.y;

//     // 마우스를 이동할 때마다 move 함수 호출
//     document.addEventListener('mousemove', move)
// })

// // 문서 전체에 마우스업 이벤트 리스너 추가
// //마우스를 떼면 이벤트 삭제
// document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', move)
// })

//실습21
//마우스 클릭 시 박스 위치 변경
// const box = document.querySelector('.box');
// const initialMousePos = {x : 0, y: 0}; //초기 마우스 위치
// const offset = {x : 0, y : 0}; // 박스의 이동 오프셋을 저장

// document.addEventListener('click', e => {
//     const boxWidth = box.offsetWidth;
//     const boxHeight = box.offsetHeight;

//     //박스 중앙이 기준이 되기 위함
//     const newX = e.clientX - boxWidth / 2;
//     const newY = e.clientY - boxHeight / 2;

//     offset.x = newX;
//     offset.y = newY;
//     box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`

// })