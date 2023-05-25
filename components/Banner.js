import styled from "styled-components"
import banner0 from "../public/images/banner1.jpg"

const BannerWrap = styled.div`
    width: 100%;
    height: 35%;
    position:relative;
    `;
const BannerImage = styled.img`
    width:100%
    `;
const BannerInnerGrid = styled.div`

`;
const BannerTextBox = styled.div`
    position: absolute;
    height: 100%;
    top: 25%;
    left: 40%;
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
        height: 45vh;
        width: 5vw;
        top: 0;
        bottom:0;
        z-index: 1;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    `
    const CarouselButton = styled.button`
        height: fit-content;
        background-color: transparent;
        color: #fff;
        cursor: pointer;
    `;


export default function Banner(){
    return(
        <>
        <BannerWrap>
            <BannerImage src={banner0.src} alt="/"/>
            <BannerInnerGrid>
            <BannerTextBox>
                <span>Healing Collection</span>
                <p>A new store for the new age.</p>
                <button>Shop Now</button>
            </BannerTextBox>
            <CaroselButtonWrap>
            <CarouselButton>Prev</CarouselButton>
            </CaroselButtonWrap>
            </BannerInnerGrid>
        </BannerWrap>
        </>
    )
};