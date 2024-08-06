const express = require('express');
const app = express();
//실습2
const port = 3000;
const path = require('path'), aysnc = require('async'), fs=require('fs');


//실습1
// app.listen(3000, () => {
//     console.log("서버 실행");
// } ) //3000포트를 기반으로 함수 실행

// // get요청 url 경로를 먼저 적어주고, request, response 인자를 줘서 콜백함수를 줌
// // res: 서버에서 클라이언트로 전송되는 데이터
// // 클라이언트가 서버에 보낸 요청에 대한 결과로서, 서버는 이에 맞는 응답을 생성하고 클라이언트에게 전송

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html'); 
//     //글자는 send, 파일은 sendFile로 클라이언트에 전송
//     //__dirname 는 node 프로세스가 실행되는 디렉토리의 절대경로, 즉 현재 해당 파일이 존재하는 폴더 경로
// })

// app.get('/post', (req, res) => {
//     res.send('포스트 페이지 입니다!');
// })

// app.get('/shop', (req, res) => {
//     res.send('쇼핑 페이지 입니다!');
// })


//실습2
// app.listen(port, () => {
//     console.log(`서버 실행 : http://localhost:${port}`)
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html')); 
// })

// app.get('/greet', (req, res) => {
//     res.send(JSON.stringify({message: '안녕하세요!!!!!'}));
// })


//실습3

const users = [
    {name: 'kim', email : 'kim@gmail.com'},
    {name: 'lee', email : 'lee@gmail.com'},
    {name: 'park', email : 'park@gmail.com'},
]

app.listen(port, () => {
    console.log(`서버 실행 : http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')); 
})

app.get('/users', (req, res) => {
    res.json(users); 
})
