import { useState } from "react"
import styled from "styled-components"


export default function SeachBox() {

    const InputBox = styled.input`
    height: 30px;
    width: 15vw;
    padding: 8px;
    border-radius:15px;
`;
    

    return(
        <>
        <InputBox type="text" placeholder="Search"/>
        </>
    )
}