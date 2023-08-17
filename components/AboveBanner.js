import styled from "styled-components";

const Cont = styled.section`
    width: 100%;
    height: auto;
    background-color: #fff;
    display: flex;
    position: relative;
    opacity: 60%;
`;

const TopBar = styled.div`
    width: 100%;
    height: auto;
    background-color: aqua;
    position: relative;
    font-size: 1rem;
    padding: .75rem 1.5rem;
    display: grid;
`;

const GridWrap = styled.div`
    grid-column: 1;
`

export default function AboveBanner() {

    return(
        <>
        <Cont>
            <TopBar>
                <GridWrap>
                <span>FREE TUMBLED STONE WITH EACH PURCHASE!</span>
                <span>UP TO 60% OFF NEW MARKDOWNS</span>
                <span>SIGN IN</span>
                </GridWrap>
            </TopBar>
        </Cont>
        
        </>
    )
};