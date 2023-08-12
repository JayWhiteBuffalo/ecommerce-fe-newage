import { useState, useRef, useEffect} from "react"
import styled from "styled-components"


export default function SeachBox(props) {

    const InputBox = styled.input`
    height: 30px;
    width: 15vw;
    padding: 8px;
    border-radius:15px;
`;

    const searchValue = useRef("")

    useEffect((e) => {
        props.setSearchParams(searchValue.current);
        console.log(props.searchParams)
    }, [handleChange])

    function handleChange(e){
        searchValue.current = e.target.value;
    }
    

    return(
        <>
        <InputBox onChange={(e)=>handleChange(e)} type="text" placeholder="Search"/>
        </>
    )
}