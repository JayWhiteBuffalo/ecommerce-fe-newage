import styled from "styled-components"

const StyledSelect= styled.select`
height: 45px;
width: 15vw;
padding: 0px 10px;
border: none;
font-size: 1rem;
margin-top: 0rem;
margin-left: 1rem;
margin-right: .75rem;
border-radius: 5%;
:focus {
    outline:none;
}
`;

export default function SelectBox(props){
    return <StyledSelect {...props}/>
}