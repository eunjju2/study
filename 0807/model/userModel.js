import mongoose from "mongoose"; // mongoose 모듈을 가져옴

// 사용자 스키마를 정의
const userSchema = new mongoose.Schema({
    name: String,    // 사용자 이름 (문자열)
    email: String,   // 사용자 이메일 (문자열)
    address: String  // 사용자 주소 (문자열)
});

// 정의한 스키마를 바탕으로 사용자 모델을 생성하고 내보냄
export default mongoose.model("users", userSchema);