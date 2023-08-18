import styled from "styled-components"
import ad1 from "../public/images/plantbannerad.jpg"
import ad2 from "../public/images/plantbannerad2.jpg"
import Center from "./Center";

const SectionWrap = styled.section`
    position: relative;
    display:flex;
    padding: 0rem 1rem;
    gap: 1.5rem;
    
`
const Cont = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    margin: 1rem 0rem;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;


const Ad1 = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${ad1.src});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem;
    background-position: center;
`;

const Ad2 = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    background-image: url(${ad2.src});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem;
    background-position: center;
`


export default function BelowBanner () {

    return(
        <>
            <SectionWrap>
            <Cont>
                <Ad1/>
                <Ad2/>
            </Cont>   
            </SectionWrap>
         
        </>


    )
};