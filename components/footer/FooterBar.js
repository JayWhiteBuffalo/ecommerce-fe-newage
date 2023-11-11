import styled from "styled-components";
import Image from "next/image";
import pic1 from "../../public/images/1960magician.jpg";
import pic2 from "../../public/images/alterpic.jpg";
import { secondary, gold } from "@/lib/colors";

const FBWrap = styled.section`
width: 100%;
height: 40vh;
background-color: transparent;
display: grid;
grid-template-columns: 1fr 2fr;
`;

const LocationCont = styled.div`
background-color: ${secondary};
padding: 2rem 6rem;
`;

const InnerContent = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
color: white;
justify-content: space-evenly;
h1{
font-weight: 800;
font-size: 2rem;
margin: 0px;
}
div p{
    font-weight: 500;
}
button{
    background-color: transparent;
    border:2px solid white;
    color:white;
    font-weight: 700;
    letter-spacing: .25rem;
    width: fit-content;
    padding: 1rem 3rem;
    :hover{
        color:${secondary};
        background-color: white;
    }
}
`;

const Photo2 = styled.div`
background-image: url(${pic1.src});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

export default function FooterBar(){

    return(
        <FBWrap>
            <LocationCont>
                <InnerContent>
                    <h1>Visit In Person</h1>
                    <div>
                    <p>Monday - Friday: 10 am - 6 pm</p>
                    <p>Saturday: 11 am - 5 pm </p>
                    </div>
                    <button>DIRECTIONS</button>
                </InnerContent>
            </LocationCont>
            <Photo2/>
        </FBWrap>
    )

};