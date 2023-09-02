import styled from "styled-components"

const StyledSelect= styled.input`
    height: 20px;
    width: 200px;
    padding: 8px;
`;

export default function SelectBox(props){
    return <StyledSelect {...props}/>
}