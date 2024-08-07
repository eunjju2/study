import User from "../model/userModel.js" // 사용자 모델을 가져옴

//실습2
// 사용자를 생성하는 함수
export const create = async(req, res) => {
    try{
        // 요청 본문에서 사용자 데이터를 가져옴
        const userData = new User(req.body);
        const {email} = userData;

        // 주어진 이메일을 가진 사용자가 이미 존재하는지 확인
        const userExist = await User.findOne({email});
        if(userExist) {
            // 이미 사용자가 존재하면 400 상태 코드와 메시지를 응답
            return res.status(400).json({message: "already exist"})
        }
        const saveUser = await userData.save();  // 사용자를 데이터베이스에 저장
        res.status(200).json(saveUser); // 저장된 사용자 데이터를 200 상태 코드와 함께 응답
    }catch(error) {
        res.status(500).json({error : "연결 안됨"}); // 오류가 발생하면 500 상태 코드와 함께 오류 메시지를 응답
    }
}

// 모든 사용자를 읽어오는 함수
export const read = async(req, res) => {
    try{
        const users = await User.find(); // 데이터베이스에서 모든 사용자를 찾는다
        if(users.length === 0) {
            return res.status(404).json({message : "Not Found"}); // 사용자가 없으면 404 상태 코드와 메시지를 응답
        }
        res.status(200).json(users); // 사용자가 있으면 200 상태 코드와 함께 사용자 목록을 응답
    }catch(error) {
            res.status(500).json({error : "서버 에러"}); // 오류가 발생하면 500 상태 코드와 함께 오류 메시지를 응답
    }
}

// 사용자를 업데이트하는 함수
export const update = async(req, res) => {
    try{
        const id = req.params.id; 
        const userExist =await User.findOne({_id : id}); // 주어진 ID로 사용자가 존재하는지 확인
        if(!userExist) {
            return res.status(404).json({message : "Not Found"}); // 사용자가 없으면 404 상태 코드와 메시지를 응답
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, { // 사용자를 업데이트
            new: true,
        })
        res.status(200).json(updateUser); // 업데이트된 사용자 데이터를 200 상태 코드와 함께 응답
    }catch(error) {
        res.status(500).json({error : "서버 에러"}); // 오류가 발생하면 500 상태 코드와 함께 오류 메시지를 응답
}
}

// 사용자를 삭제하는 함수
export const deleteUser = async(req, res) => {
    try{
        const id = req.params.id; // 주어진 ID로 사용자가 존재하는지 확인
        const userExist =await User.findOne({_id : id});
        if(!userExist) {
            return res.status(404).json({message : "Not Found"}); // 사용자가 없으면 404 상태 코드와 메시지를 응답
        }
        await User.findByIdAndDelete(id); // 사용자를 삭제
        res.status(200).json({message : '삭제 완료'}); // 삭제 완료 메시지를 200 상태 코드와 함께 응답
    }catch(error) {
        res.status(500).json({error : "서버 에러"}); // 오류가 발생하면 500 상태 코드와 함께 오류 메시지를 응답
}
}