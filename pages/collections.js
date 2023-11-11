import Header from "@/components/Header";
import banner from "../public/images/banner3.jpg";
import styled from "styled-components";
import Center from "@/components/Center";
import bgImg1 from "../public/images/AuraQuartz.png";
import Image from "next/image";

const Banner = styled.div`
width: 100%;
height: 300px;
background-image: url(${banner.src});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

const TextBox = styled.div`
position: absolute;
width: 100%;
height: 300px;
`

const BannerText = styled.h2`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 75%;
color: white;
font-size: 3rem;
letter-spacing: 2px;
`

const BgImageCont = styled.div`
position: absolute;
width: auto;
top: 40%;
right: -10%;
rotate: -90deg;
overflow: hidden;
`;

const CollectionBox = styled.div`
border: 1px solid black;
margin: 1.5rem;
width: 80%;
height: 25vw;
display: flex;
border-radius: 9px / 8px;
overflow: hidden;
`;

const CollectionImageCont = styled.div`
width: 50%;
height: 100%;
transition: transform 0.4s ease-in-out;
background-color: blue;
:hover{
    transform: scale(3);
}
`;

const CollectionTextCont = styled.div`
width: 50%;
height: 100%;
background-color: green;
transition: transform 0.4s ease-in-out;
:hover{
    transform: scale(3);
}
`

export default function ServicesPage () {

    return(
        <>
        <Header/>
        <Banner>
            <TextBox>
            <BannerText>Shop Collections</BannerText>
            </TextBox>
        </Banner>
        <section>
            <Center>
                <BgImageCont>
                <Image width={600} height={600} src={bgImg1}/>
                </BgImageCont>
                <CollectionBox>
                    <CollectionImageCont>
                    </CollectionImageCont>
                    <CollectionTextCont>
                    </CollectionTextCont>
                </CollectionBox>
            </Center>
        </section>
        <section>
            <Center>
                <BgImageCont>
                <Image width={600} height={600} src={bgImg1}/>
                </BgImageCont>
                <CollectionBox></CollectionBox>
            </Center>
        </section>
        </>
    )
}