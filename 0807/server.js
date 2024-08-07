import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
//실습2
import bodyParser from 'body-parser'
import route from "./routes/userRoutes.js"


//실습1
// const app = express();
// dotenv.config();

// const PORT = process.env.PORT ||  8000;
// const MONGOURL = process.env.MONGO_URL;

// mongoose.connect(MONGOURL)
// .then(() => {
//     console.log('연결 완료')
//     app.listen(PORT, () => {
//         console.log(`연결 잘 됐어요. http://localhost:${PORT}`)
//     })
// })
// .catch((error) => console.log(error));

// // 사용자 스키마를 정의
// const userSchema = new mongoose.Schema({
//     name: String, // 사용자 이름 (문자열)
//     age : Number, // 사용자 나이 (숫자)
// });

// // 정의한 스키마를 바탕으로 사용자 모델을 생성
// const userModel = mongoose.model("users", userSchema);

// // GET 요청에 대한 핸들러를 정의
// app.get("/users", async (req, res) => {
//     // 사용자 데이터를 데이터베이스에서 가져옴
//     const userData =  await userModel.find();
//     // 가져온 사용자 데이터를 JSON 형식으로 응답
//     res.json(userData);
// })

//실습2
// // import bodyParser from 'body-parser'
// // import route from "./routes/userRoutes.js"
// model, controller, routes 폴더 생성

const app = express(); // Express 애플리케이션 생성
dotenv.config(); // 환경 변수 로드
app.use(bodyParser.json()); // body-parser를 사용하여 JSON 요청을 파싱

// 포트와 MongoDB URL을 환경 변수에서 가져옴
const PORT = process.env.PORT ||  8000; 
const MONGOURL = process.env.MONGO_URL;

// MongoDB에 연결
mongoose.connect(MONGOURL)
.then(() => {
    console.log('연결 완료')
    app.listen(PORT, () => {
        // 연결이 성공하면 서버를 시작
        console.log(`연결 잘 됐어요. http://localhost:${PORT}`)
    })
})
.catch((error) => console.log(error)); // 연결에 실패하면 에러를 출력
 
// "/user" 경로에 대해 사용자 정의 라우트를 사용
app.use("/user", route);

