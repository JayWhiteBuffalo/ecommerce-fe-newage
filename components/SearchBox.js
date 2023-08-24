import { useState, useRef, useEffect} from "react"
import styled from "styled-components"
import loupe from "../public/images/loupe.png"

const InputBox = styled.input`
height: 30px;
width: 15vw;
padding: 0px 10px;
border: none;
background-color: transparent;
font-size: 1rem;
margin-top: .15rem;
:focus {
    outline:none;
}
`;

const IconCont = styled.button`
display: flex;
position: relative;
justify-content: center;
align-items: center;
padding: .5rem;
border: none;
width: 40px;
cursor: pointer;
background-color: transparent;
img{
position: relative;
width: 100%;
}
`;

const SearchCont = styled.div`
background-color: white;
border-radius: 5px;
height:20px;
`
export default function SeachBox(props) {



    const searchValue = useRef("")

    useEffect((e) => {
        props.setSearchParams(searchValue.current);
    }, [handleChange])

    function handleChange(e){
        searchValue.current = e.target.value;
    }
    

    return(
        <SearchCont>
        <InputBox onChange={(e)=>handleChange(e)} type="text" placeholder="Search"/>
        <IconCont>
        <img src={loupe.src}/>
        </IconCont>
        </SearchCont>
    )
}