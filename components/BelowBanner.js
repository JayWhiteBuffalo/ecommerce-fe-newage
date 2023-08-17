import styled from "styled-components"

const Cont = styled.section`
    width: 100%;
    height: auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0%;
    opacity: 60%;
`;

const TopBar = styled.div`
    width: 100%;
    height: auto;
    background-color: aqua;
    position: relative;
`


export default function BelowBanner () {

    return(
        <>
            <Cont>
                <TopBar>
                    <h1>Div1</h1>
                </TopBar>
            </Cont>     
        </>


    )
};