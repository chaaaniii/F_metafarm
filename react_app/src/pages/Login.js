import React from 'react';
import './login.css';
// import logo from '../../img/logo.png'

// // 아이콘 임포트
import id from '../components/img/id.png';
import pw from '../components/img/pw.png';

function Login() {
    return (
    <body className='body-login'>
        <div className='login-box'>
         <form className="login" action="/login" method="post">
         <div>
             <img className='sign-icon' src={id} alt='id'/>
             <input type="text" className='write' placeholder="   ID를 입력하세요"/>
         </div>
        
         <div>
             <img className='sign-icon' src={pw} alt='password'/>
             <input type="password" className='write' placeholder="   Password를 입력하세요"/>
         </div>

         <div className='submit'>
             <button type="submit" className="btn" onClick='checkPW();'>로그인</button>
             <p className="margin">계정이 없으신가요? <a href="./signup">회원가입하기</a></p>
         </div>

         </form>
         </div>
     </body>
);
}

export default Login;