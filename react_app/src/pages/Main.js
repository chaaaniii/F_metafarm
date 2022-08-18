import React, { useState, useEffect} from 'react';
import "antd/dist/antd.min.css";
import { Carousel } from "antd";
import pepper from '../components/img/pepper.jpg'
import bggif from '../components/img/1oxd.gif'
import './Main.css'
//스코롤 모션
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

//이거 스코롤 모션
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const contentStyle = {
  height: '300px',
  width: '93%',
  color: 'black',
  lineHeight: '160px',
  textAlign: 'center',
  BackgroundColor: 'balck',
  // paddingLeft :'10%' ,
  // paddingRight : '10%',
  marginTop: '3%',
  marginRight: '40%',
  marginLeft: '3%',
  marginBottom: '3%'
};


  
        

export default function Main() { 

  const [ScrollY, setScrollY] = useState(0);
      const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
      
      const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if(ScrollY > 50) {
          // 100 이상이면 버튼이 보이게
          setBtnStatus(true);
        } else {
          // 100 이하면 버튼이 사라지게
          setBtnStatus(false);
        }
      }
    
      const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setScrollY(0);  // ScrollY 의 값을 초기화
        setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
      }
    
      useEffect(() => {
        const watch = () => {
          window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => {
          window.removeEventListener('scroll', handleFollow)
        }
      })

  
  return(
    <div>
      <div className='Mainhead'>
        <h1>AI 병해 탐지!</h1>
        <h3>이미지를 업로드시 AI가 직접 농작물의 병해를 찾아낸 후 그에 맞는 솔루션을 제공해 드립니다.</h3>
      </div>
      <div className='Body1'>
        <div>
          <h1 className='carou_title'>
            Best Solution!
          </h1>
        </div>
      <Carousel dotPosition='left' autoplay>
        <div>
          <img style={contentStyle} src={pepper}></img>
        </div>
        <div>
          <img style={contentStyle} src={bggif}></img>
        </div>
        <div>
          <img style={contentStyle} src={bggif}></img>
        </div>
        <div>
          <img style={contentStyle} src={bggif}></img>
        </div>
      </Carousel>
    </div>
    <ScrollContainer>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
      <span style={{ fontSize: "30px" }}>이것 봐봐랑~ ㅎㅎㅎ 😀</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>이거 나타난다~ ✨</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>이얍!!!! ⛅️</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-500, 0)}>안농~ 👋🏻</Animator>
        <Animator animation={MoveIn(500, 0)}>만나서 반가웝~! 🙋🏻‍♀️</Animator>
        - 나는 조영찬 -
        <Animator animation={MoveOut(500, 0)}>잘가룽~ ✋🏻</Animator>
        <Animator animation={MoveOut(-500, 0)}>담에 봐욥~!~! 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>끝!</span>
      <br/>
    </Animator>
  </ScrollPage>
</ScrollContainer>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
          <div >
          <button 
              className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
              onClick={handleTop}  // 버튼 클릭시 함수 호출
              >TOP</button>
          </div>
</div>
    
  );
}

