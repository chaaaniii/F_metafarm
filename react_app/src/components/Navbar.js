import React, { useEffect, useState } from "react";
// import styled from "@emotion/styled";
import classes from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import mainlogo from '../components/img/metafarm.png';
import styled from "styled-components";

const MenuLabel = styled.label`
  background-color: rgb(32, 141, 47, 70%);
  position: fixed;
  top: 1%;
  right: 3%;
  border-radius: 50%;
  height: 2.8rem;
  width: 2.8rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 1.5rem;
  height: 2px;
  display: inline-block;
  top: -14px;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 1.5rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;


 


const Navbar = () => {
    
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    const handleClick = () => setMenuOpen(!menuOpen);
  
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if (ScrollY > 50) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
        setScrollActive(false);
        }
    }
    useEffect(() => {
        function scrollListener() {
        window.addEventListener("scroll", handleScroll);
        } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
        return () => {
          window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  


  

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 890 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
        
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate("/login");
    };

    return (
        <div>
        <header className={classes.header} >
            <div className={ScrollActive? classes.header__content : classes.header__scroll }>
                <Link to="/1" className={classes.header__content__logo}>
                    <img className={classes.header__content__logo} src={mainlogo}/>
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 890 ? classes.isMenu : ""
                    }`}
                >
                    
                    <ul>
                        <li>
                            <Link to="/" onClick={menuToggleHandler}>
                                AI 병해 진단
                            </Link>
                        </li>
                        <li>
                            <Link to="/dmd" onClick={menuToggleHandler}>
                                솔루션
                            </Link>
                        </li>
                        <li>
                            <Link to="/RestauR" onClick={menuToggleHandler}>
                                게시판
                            </Link>
                        </li>
                        <li>
                            <Link to="/Inform" onClick={menuToggleHandler}>
                                회원정보
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>
                            Sign up

                    </button>
                </nav>
                <div className={classes.header__content__toggle} onClick={handleClick} >
                        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                            <Icon clicked={menuOpen}></Icon>
                        </MenuLabel>
                    {!menuOpen ? (
                        <i className='fas fa-bars' onClick={menuToggleHandler} />
                    ) : (
                        <i className='fas fa-times' onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    
        </div>
    );
};

export default Navbar;