import styled from "styled-components"
import ad1 from "../public/images/plantbannerad.jpg"
import ad2 from "../public/images/plantbannerad2.jpg"
import Center from "./Center";

const Cont = styled.section`
    width: 100%;
    height: auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0rem 2rem;
    justify-content: center;
    align-items: center;
`;

const TopBar = styled.div`
    diplay: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    max-height: 40vh;
    background-color: aqua;
    position: relative;
    div{
        display: inline-block;
    }
`


export default function BelowBanner () {

    return(
        <>
            
            <Cont>
                <TopBar>
                    <div>
                    <img src={ad1.src}/>
                    </div>
                    <div>
                    <img src={ad2.src}/>
                    </div>
                </TopBar>
            </Cont>   
              
        </>


    )
};