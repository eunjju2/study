//실습1
// const express = require('express');
// const app = express();
// const path = require('path');

// app.set('views', path.join(__dirname, 'views')); //views 폴더 안을 바라봄
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     const data = {message : 'hello world'};
//     res.render('index', {
//         data,
//         people : [
//             {name: 'lee'},
//             {name: 'kim'},
//             {name: 'park'},
//         ]
//     });
// })

// app.listen(8000, () => {
//     console.log(`서버 연결 http://localhost:8000`);
// })

//실습2
const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
//const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views')); //views 폴더 안을 바라봄
app.set('view engine', 'ejs');


app.use(expressLayouts);
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); //최신 Express 버전에서는 body-parser의 일부 기능이 express 패키지 자체에 포함되어 있으므로, express의 json 및 urlencoded 미들웨어를 사용하면 됨
// app.use(bodyParser); //전체 모듈 대신에 개별 미들웨어 (json 및 urlencoded)를 사용하라는 의미

//문제1
const users = [
    {name: 'kim', age: 17, role :'front'},
    {name: 'lee', age: 25, role :'back'},
    {name: 'park', age: 30, role :'full'},
    {name: 'choi', age: 16, role :'front'}
];

app.get('/', (req, res) => {
    const data = {message : 'hello world'};
    res.render('index', {
        users,
        tasks : tasks, //일반 객체 리터럴 구문. tasks 만 써도 상관 X(속성 축약 구문)
        data,
        people : [
            {name: 'lee'},
            {name: 'kim'},
            {name: 'park'},
        ]
    });
})

app.get('/about', (req,res) => { //보여지려면 render 해야 함
    res.render('about'); //경로에 원하는 내용을 띄워줌
})

app.get('/form', (req, res) => {
    res.render('form');
})

app.post('/submit', (req, res) => {
    const {name, email} = req.body; //응답 받음
    res.render('result', {name, email}); //result창에서 name, email 을 사용할 수 있게 됨
})

//실습3
let tasks = []; //할 일을 담을 빈 배열 생성
app.post('/addTask', (req, res) => {
    const newTask = req.body.newTask;
    if(newTask) {
        tasks.push(newTask);
    }
    res.redirect('/') //끝나면 다시 루트로(index.ejs)
})

app.post('/deleteTask', (req, res) => {
    const deleteTask = req.body.task;
    tasks = tasks.filter(task => task !== deleteTask);
    res.redirect('/') 
})

app.listen(8000, () => {
    console.log(`서버 연결 http://localhost:8000`);
})

