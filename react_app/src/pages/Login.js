import React, {useState} from 'react';
import './login.css';
// import logo from '../../img/logo.png'

// // 아이콘 임포트
import id from '../components/img/id.png';
import pw from '../components/img/pw.png';

function Login() {
    let [JoinLogin,setJoinLogin] = useState('로그인')


    return (
    <body className='body-login'>
        <div className='login-box'>
            <span>{JoinLogin}</span>
            <form>
            {
              JoinLogin === '로그인'
              ?(
                <>
                <input type="text" placeholder="아이디를 입력하세요"/>
                <input type="password" placeholder="비밀번호를 입력하세요"/>
                <button className="JoinLoign-button">{JoinLogin}</button>
                </>
              )
              :(
                <>
                <input type="text" placeholder="아이디를 입력하세요"/>
                <input type="password" placeholder="비밀번호를 입력하세요"/>
                <button className="JoinLoign-button">{JoinLogin}</button>
                </>
              )
            }
          </form>
          <div className="login-foot">
            {
              JoinLogin === '회원가입'
              ?
              (
                <>
                <span>이미 회원이신가요  ?</span>
                <div className="foot-link" onClick={()=>{
                setJoinLogin('로그인')
                }}>로그인</div>
                </>
              )
              :
              (
                <>
                <span>아직 회원이 아니신가요 ?</span>
                <div className="foot-link" onClick={()=>{
                setJoinLogin('회원가입')
                }}>회원가입</div>
                </>
              )
            }
          </div>
         </div>
     </body>
);
}

export default Login;