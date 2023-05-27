import styled from "styled-components"

const StyledSelect= styled.select`
    height: 50px;
    width: 200px;
    padding: 8px;
    border-radius: 15px;
`;

export default function SelectBox(props){
    return <StyledSelect {...props}/>
}