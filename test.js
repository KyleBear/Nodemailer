const nodemailer = require('nodemailer')
const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false,
    "auth": {
        user: "9ad3238c512d8c",
        pass: "a5d84a198564f4"
    }
};
// 해당정보를 받아올 수 있게하게끔 메일서버를 열어줘야함 가상 메일서버 서비스 (mailtrap)

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => { //옵션(이메일 제목, 내용)이라는 파라매터를
        if(error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    }); // 콜백끝
}

// 옵션 내부 선언 
let email_data = {
    from: 'juongho1024@gmail.com',
    to: 'juongho1024@gmail.com',
    subject: '테스트메일',
    text: 'node js smtp 서버 테스트'
}

send(email_data)
// 설치한 프로그램 선언

// send email // node mailer 내부 패키지명령어로 보내줌
