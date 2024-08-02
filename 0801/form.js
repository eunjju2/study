//실습1
// function getInput() {
//     const x = document.forms["form1"];
//     let text = "";
//     for(let i=0; i<x.length ; i++) {
//         text += x.elements[i].value + '<br>';
//     }
//     document.getElementById('show').innerHTML = text;
// }

//실습2
// function myFunction() {
//     let id = document.getElementById('id').value;
//     let pw = document.getElementById('pass').value;   

//     if(pw.length < 1) {
//         document.getElementById('show').innerHTML = '비밀번호를 입력해주세요!'
//     }
//     else if(pw.length > 10) {
//         document.getElementById('show').innerHTML = '비밀번호를 10자 이내로 입력해주세요!'
//     }
//     else {
//         document.getElementById('show').innerHTML = '입력 OK!'
//     }
//     //두 개의 입력 필드(id와 pass)의 값을 빈 문자열로 초기화    
//     ['id', 'pass'].forEach(field => document.getElementById(field).value = "");

//     setTimeout(() => {
//         document.getElementById('show').innerHTML = '';
//     }, 2000);

// }

// function getInput() {
//     const x = document.forms["form1"];
//     let text = "";
//     for(let i=0; i<x.length ; i++) {
//         text += x.elements[i].value + '<br>';
//     }
//     document.getElementById('show').innerHTML = text;
// }

// 실습3
// let check = document.querySelector('#shippingInfo');
// check.addEventListener('click', function() {
//     if(check.checked === true) {
//         document.querySelector('#shippingName').value = document.querySelector('#billingName').value;
//         document.querySelector('#shippingTel').value = document.querySelector('#billingTel').value;
//         document.querySelector('#shippingAddr').value = document.querySelector('#billingAddr').value;
//     }
//     else{
//         document.querySelector('#shippingName').value = "";
//         document.querySelector('#shippingTel').value = "";
//         document.querySelector('#shippingAddr').value = "";
//     }
// })

//실습4
// const x = document.getElementById('name')
// x.onfocus = function() {changeBgcolorFo();}
// x.onblur = function() {changeBgcolorBl();}

// function changeBgcolorFo() {
//     x.style.backgroundColor = 'pink';
// }

// function changeBgcolorBl() {
//     x.style.backgroundColor = 'gray';
// }

// const keyInput = document.getElementById('keyInput');
// keyInput.addEventListener('keyup',changeUpper);

// function changeUpper() {
//     keyInput.value = keyInput.value.toUpperCase();
// }


//실습5
// const selectFruits = document.getElementById('selectFru');
// selectFruits.addEventListener('change', (e) => {
//     document.getElementById('show').innerHTML = '내가 좋아하는 과일은 ' + e.target.value +'입니다';
// } );

//실습6
// let userId = document.querySelector("#user-id"); 
// let pw1 = document.querySelector("#user-pw1");
// let pw2 = document.querySelector("#user-pw2");

// userId.onchange = checkId;
// pw1.onchange = checkPw;
// pw2.onchange = comparePw;

// function checkId() {
//     if(userId.value.length < 4 || userId.value.length > 15){
//         alert("4~15자리의 영문과 숫자를 사용하세요.");
//         userId.select();
//     }
// }

// function checkPw() {
//     if(pw1.value.length < 8){
//         alert("비밀번호는 8자리 이상이어야 합니다.");
//         pw1.value = "";
//         pw1.focus();
//     }
// }

// function comparePw(){
//     if(pw1.value != pw2.value){
//         alert("암호가 다릅니다. 다시 입력해주세요.");
//         pw2.focus();
//         pw2.value = "";
//     }
// }

//실습7
// const submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener('click', function() {
//     const userName = document.getElementById('userName').value;
//     const majorSelect = document.getElementById('major');
//     const selectedMajor = majorSelect.value || '선택되지 않음'; //앞에 거가 아니면 뒤 출력

//     const selectedSubject = document.querySelector('input[name="subject"]:checked');
//     const subjectValue = selectedSubject ? selectedSubject.value : '선택되지 않음';

//     const selectedStudy = document.querySelector('input[name="study"]:checked');
//     const studyValue = selectedStudy ? selectedStudy.value : '선택되지 않음';


//     document.getElementById('result').innerHTML = `${userName} ${selectedMajor} ${subjectValue} ${studyValue}`
// })
