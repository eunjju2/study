//실습1
// let str1 = 'I go to a mart. I go to a MART.'
// let pattern = /mart/ig; //ig하면 대소문자 관계 없이
// let result = str1.replace(pattern, 'office'); //단어 바꿈

// document.getElementById('show').innerHTML = result;

//실습2
// let str1 = 'A cat gets haircut c3t c_t'
// let pattern = /c.t/g; //c와 t로 끝나는 문자
// let result = str1.match(pattern); //매치 결과를 배열로 반환

// document.getElementById('show').innerHTML = result;

//실습3
// let str1 = 'Discount rate : 30%'
// let pattern = /\w/g; //word의 약어. 영문자, 숫자, 밑줄에 해당되는 문자와 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환

// document.getElementById('show').innerHTML = result;

//실습4
// let str1 = 'Phone number: 010-1234-5678'
// let pattern = /\d/g; //digit 의 약어. 0~9의 숫자와 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환

// document.getElementById('show').innerHTML = result;

//실습5
// let str1 = 'Hello world ! ! ! !'
// let pattern = /\s/g; //space 의 약어.공백, 탭, 줄바꿈 문자와 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환

// document.getElementById('show').innerHTML = result;

//실습6
// let str1 = 'You are a student. Your name is nice'
// let pattern = /\bYou/g; //begin의 약어. 특정 단어로 시작하거나 끝나는 문자와 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환

// document.getElementById('show').innerHTML = result;

//실습7
// let str1 = 'You are a student. Your name is nice'
// let pattern = /\bYou/g; //You로 시작하는 문자
// let pattern2 = /e\b/g; //e로 끝나는 문자
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// let result2 = str1.replace(pattern2, '_'); //e로 끝나는 문자를 _로 바꿔줌
// let text = result + '<br>' + result2;
// document.getElementById('show').innerHTML = text;

//실습8
// let str1 = 'You are a student. Your name is nice'
// let pattern = /\Bou/g; //ou로 시작하지 않는 문자
// let pattern2 = /e\B/g; //e로 끝나지 않는 문자와 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// let result2 = str1.replace(pattern2, '_'); //e로 끝나는 문자를 _로 바꿔줌
// let text = result + '<br>' + result2;
// document.getElementById('show').innerHTML = text;

//실습9
// let str1 = 'woops ! Wooops ! Wooooops!'
// let pattern = /o+/g; //o가 최소 1번 이상 반복될 경우 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습10
// let str1 = 'Email : Kim@email.com'
// let pattern = /w+/g; 
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습11
// let str1 = 'aahh aahhhh'
// let pattern = /ah*/g; //h가 0번 또는 1번 이상 반복될 경우 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습12
// let str1 = 'aahh aahhhh'
// let pattern = /ah?/g; //h가 0번 또는 1번 반복될 경우 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습13
// let str1 = '1 12 1222 123 1234 12345 1234456'
// let pattern = /\d{3}/g; //숫자가 3번 반복하는 문자열과 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습14
// let str1 = '1 12 1222 123 1234 12345 1234456'
// let pattern = /\d{5,}/g; //숫자가 5번 이상 반복하는 문자열과 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습15
// let str1 = '1 12 1222 123 1234 12345 1234456'
// let pattern = /\d{4,5}/g; //숫자가 4~5번 이상 반복하는 문자열과 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습16
// let str1 = 'I love Ice Cream. Do you like it'
// let pattern = /[ae]/g; //a,e 중 어떤 것이 와도 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습17
// let str1 = 'I love Ice Cream. Do you like it'
// let pattern = /[A-C]/g; //A~C 중 하나와 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습18
// let str1 = '1 23 456 789 10 11 123'
// let pattern = /[6-9]/g; //6~9 중 하나와 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습19
// let str1 = '1 23 456 789 10 11 123'
// let pattern = /[13]/g; //1,3 어떤 것이 와도 매치
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

//실습20
// let str1 = 'I am a boy. You are a girl'
// let pattern = /am|are/g; //am 또는 are과 매치. [XY]는 하나의 문자에 대해 사용. {is|are}에서와 같이 단어에 대해 서도 사용 가능
// let result = str1.match(pattern); //매치 결과를 배열로 반환
// document.getElementById('show').innerHTML = result;

// //문제1
// //apple 단어 포함 여부 확인
// let str1 = 'I love Apple pie and apple juice'
// let pattern1 = /\bapple/ig; 
// let result1 = str1.match(pattern1);
// document.getElementById('show').innerHTML = result1;


// //문제2
// //모든 대문자 찾기
// let str2 = 'Hello World! This is a Test String'
// let pattern2 = /[A-Z]/g; 
// let result2 = str2.match(pattern2);
// document.getElementById('show').innerHTML = result2;

// //문제3
// //결과 100, 200, 300이 나오도록 정규식 작성
// let str3 = '1 10 100 2000 30000'
// let pattern3 = /\d{3}/g; 
// let result3 = str3.match(pattern3);
// document.getElementById('show').innerHTML = result3;

// //문제4
// //결과 o, d, o, o, d, o가 나오도록 정규식 작성
// let str4 = 'How do you do'
// let pattern4 = /[od]/g; 
// let result4 = str4.match(pattern4);
// document.getElementById('show').innerHTML = result4;

// //문제5
// //결과 9, 9, 0, 9 가 실행되도록 정규식 작성
// let str5 = '89139012349'
// let pattern5 = /[09]/g; 
// let result5 = str5.match(pattern5);
// document.getElementById('show').innerHTML = result5;

// //문제6
// //A가 최소 1번 최대 2번 반복되는 문자열 검색
// let str6 = 'A AA B BB Aa Bb AAA'
// let pattern6 = /a{1,2}/ig; 
// let result6 = str6.match(pattern6);
// document.getElementById('show').innerHTML = result6;

// //문제7
// //0~9가 한번 이상 반복되는 문자열 검색
// let str7 = 'AA BB 12 345'
// let pattern7 = /[0-9]+/g; 
// let result7 = str7.match(pattern7);
// document.getElementById('show').innerHTML = result7;