import { useState, useRef, useEffect} from "react"
import styled from "styled-components"
import loupe from "../public/images/loupe.png"
import Image from "next/image";

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
border:none;
}
`;

const SearchCont = styled.div`
background-color: white;
height:20px;
border: none;
`
export default function SeachBox({setSearchParams, ...rest}) {



    const searchValue = useRef("")

    useEffect((e) => {
        setSearchParams(searchValue.current);
    }, [handleChange,setSearchParams])

    function handleChange(e){
        searchValue.current = e.target.value;
    }
    

    return(
        <SearchCont>
        <InputBox onChange={(e)=>handleChange(e)} type="text" placeholder="Search"/>
        <IconCont>
        <Image src={loupe} alt=""      style={{
        width: '100%',
        height: 'auto',
      }}/>
        </IconCont>
        </SearchCont>
    )
}