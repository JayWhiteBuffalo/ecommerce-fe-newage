import styled from "styled-components";
import { useState } from "react";

const SectionHead = styled.button`
position: relative;
width: 100%;
border: none;
padding: .25rem;
h3{
text-align: left;
font-size: 1rem;
font-weight: 600;
letter-spacing: 3px;
}
`

const Item = styled.div`
display: flex;
width:auto;
gap: .25rem;
justify-items: center;
align-items: center;
padding: .2rem 0rem;
margin: .1rem;
`

export default function CategoryFilter({categories, updateFilter}){

    const [isActive, setIsActive] = useState(false);

    return(
        <>
        <SectionHead onClick={() => setIsActive(!isActive)}>
            <h3>SHOP BY TYPE</h3>
        </SectionHead>

            {isActive && categories.map((cat) => (
                <Item>
                <input type="checkbox" value={cat._id} onClick={(e)=>updateFilter(e)}/>
                <label>{cat.name}</label>
                </Item>
            ))}
        </>
    )
}