import styled from "styled-components";
import { useState } from "react";

const ImageWrap = styled.div`
display: flex;
justify-content: center;
gap: .75rem;
`;

const Column = styled.div`
display: flex;
flex-direction: column;
`;

const BigImage = styled.img`
max-width: 100%;
max-height: 500px;
`;

const BigImageWrapper = styled.div`
text-align:center
`;

const Image = styled.img`
min-width: 50px;
max-width:100%;
max-height: 100%;
`;
const ImageButtons = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
flex-grow: 0;
`;

const ImageButton = styled.div`
border: 2px solid #ccc;
${props => props.active ? `
    border-color: #ccc;
` : `
    border-color: transparent;
`}
height: 100px;
width: 100px;
padding: 2px;
display: flex;
justify-content: center;

cursor: pointer;
  `;

export default function ProductImages({images}){
    
    const[activeImage, setActiveImage] = useState(images?.[0]);


    return (
        <>
        <ImageWrap>
        <ImageButtons>
            {images.map(image => (
                <ImageButton key={image} active={image===activeImage} onClick={() => setActiveImage(image)}>
                    <Image src={image} alt=""/>
                </ImageButton>       
            ) )}
        </ImageButtons>
        <BigImageWrapper>
        <BigImage src={activeImage}/>
        </BigImageWrapper>
        </ImageWrap>
        </>
    )
}