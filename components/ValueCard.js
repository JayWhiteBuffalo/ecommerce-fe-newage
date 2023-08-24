import styled from "styled-components";


const Cont = styled.div`
width: 200px;
height 50px;
display: grid;
grid-template-columns: 1fr 3fr;
border: 1px solid #ccc;
border-radius: 5%;
gap: .75rem;
background-color: white;
margin-top: .75rem;
`
const IconCont = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
padding: .25rem;
img{
    width: 100%;
}
`
const TextCont = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: .25rem;
justify-content: center;
align-items: start;
span{
    font-size: .75rem;
    opacity: 70%;
}
`
const ValueText = styled.span`
font-weight: 700;
font-size: .75rem;
`




export default function ValueCard ({icon, title, subtext}) {


    return (
        <>
        <Cont>
            <IconCont>
                <img src={icon} alt = ""/>
            </IconCont>
            <TextCont>
                <ValueText>{title}</ValueText>
                <span>{subtext}</span>
            </TextCont>
        </Cont>
        </>
    )
}