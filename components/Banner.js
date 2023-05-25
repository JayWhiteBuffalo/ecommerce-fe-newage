import styled from "styled-components"
import banner0 from "../public/images/banner0.jpg"
import banner1 from "../public/images/banner1.jpg"
import banner2 from "../public/images/banner2.jpg"
import banner3 from "../public/images/banner3.jpg"
import banner4 from "../public/images/banner4.jpg"
import banner5 from "../public/images/banner5.jpg"
import carouselBtn from "../public/images/back.png"
import { useState } from "react"


const heroItems = [
    {
        image: banner0,
        title: 'Crystal Collection',
    },
    {
        image: banner1,
        title: 'Healing Collection',
    },
    {
        image: banner3,
        title: 'Meditation Collection',
    },
    {
        image: banner4,
        title: 'Sacred Space Collection',
    },
];

const BannerWrap = styled.div`
    width: 100%;
    height: 40vh;
    position:relative;
    background-color: black;
    `;
const BannerImage = styled.img`
    width:100%;
    height: 40vh;
    opacity: 90%;
    `;
const BannerInnerCont = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    background-color: transparent;
    width: 100%;
    height: 100%;
`;
const BannerTextBox = styled.div`
    text-align: center;
    z-index: 10;
    text-transform: uppercase;
    color: white;
    font-weight: 800;
    font-size: 1.75rem;
    p {
        font-size: .75rem;
        font-weight: 400;
    }
    button{
        text-transform: uppercase;
        padding: 1rem 1.5rem;
        font-weight: 700;
        font-size: 1.25rem;
        letter-spacing: 1px;
        background-color:transparent;
        color: white;
        border-color:white;
        cursor: pointer;
    }
    button:hover{
        background-color:white;
        color:black;
    }
    `;
    const CaroselButtonWrap = styled.div`
        position: absolute;
        display: flex;
        height: 40vh;
        width: 5vw;
        top: 0;
        bottom:0;
        z-index: 1;
        align-items: center;
        justify-content: center;
        background-color: blue;
        ${props => props.next ? `
        background-color: transparent; right:0; transform: rotate(180deg);
        ` : `
        background-color: transparent;
        `}
    `
    const CarouselButton = styled.button`
        height: fit-content;
        background-color: transparent;
        color: #fff;
        cursor: pointer;
        border: none;
        img{
            height:50px;
            opacity: 30%;
        }
        img:hover{
            opacity:70%;
        }
    `;


export default function Banner(){

    const [activeSlide, setActiveSlide] = useState(0);

    function nextSlide() {
        if(activeSlide < heroItems.length -1){
            setActiveSlide(activeSlide+1);
        } else {
            setActiveSlide(0);
        }
    };

    function prevSlide(){
        if(activeSlide === 0){
            setActiveSlide(heroItems.length-1)
        } else {
            setActiveSlide(activeSlide-1);
        }
    };

    return(
        <>
        <BannerWrap>
            <BannerImage src={heroItems[activeSlide].image.src} alt="/"/>
            <BannerInnerCont>
                <BannerTextBox>
                    <span>{heroItems[activeSlide].title}</span>
                    <p>A new store for the new age.</p>
                    <button>Shop Now</button>
                </BannerTextBox>
            </BannerInnerCont>
                <CaroselButtonWrap>
                    <CarouselButton onClick={()=> prevSlide()}>
                        <img src={carouselBtn .src} alt=""/>
                    </CarouselButton>
                </CaroselButtonWrap>
                <CaroselButtonWrap next>
                    <CarouselButton onClick={()=> nextSlide()}>
                        <img src={carouselBtn.src} alt=""/>
                    </CarouselButton>
                </CaroselButtonWrap>
        </BannerWrap>
        </>
    )
};