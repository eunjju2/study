import express from "express" // Express 모듈
import {create, deleteUser, read, update} from "../controller/userController.js" //필요한 함수들을 가져옵

//실습2
const route = express.Router(); // 라우터 생성

// POST 요청에 대한 핸들러를 정의
// "/create" 경로로 들어오는 POST 요청은 create 함수에 의해 처리
//http://localhost:8000/user/create
route.post("/create", create);

// GET 요청에 대한 핸들러를 정의
// "/getUsers" 경로로 들어오는 GET 요청은 read 함수에 의해 처리
// http://localhost:8000/user/getUsers
route.get("/getUsers", read);

// PUT 요청에 대한 핸들러를 정의
// "/update/:id" 경로로 들어오는 PUT 요청은 update 함수에 의해 처리
//http://localhost:8000/user/update/id
route.put("/update/:id", update);

// DELETE 요청에 대한 핸들러를 정의
// "/delete/:id" 경로로 들어오는 DELETE 요청은 deleteUser 함수에 의해 처리
//http://localhost:8000/user/delete/id
route.delete("/delete/:id", deleteUser);

// 이 라우터를 기본 모듈로 내보냄
export default route;
