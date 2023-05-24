import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { MdKeyboardArrowUp } from "react-icons/md";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    };
    const listenToScroll = () => {
        let heightToHidden = 500;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
    return (
        <>
            <Wrapper>
                {isVisible && (
                    <div className='top-btn' onClick={goToBtn}>
                        <MdKeyboardArrowUp />
                    </div>
                )}
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .top-btn {
        font-size: 1.5rem;
        width: 2.5rem;
        height: 2.5rem;
       background-color: rgb(194, 224, 255);
       color: #156afd;
        border-radius: 50%;
       position: fixed;
        bottom: 1rem;
        right: 0.95rem;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: rgba(170, 180, 190, 0.3) 0px 4px 20px;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }

    .top-btn:hover{
        background-color: rgb(153, 204, 243);
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
       
    }
    @media (max-width: 768px) {
    .top-btn {
        right: 10px;
        
    }
    }`;
export default GoToTop