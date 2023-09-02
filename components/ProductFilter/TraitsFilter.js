import styled from "styled-components";
import { useState, useContext } from "react";
import ProductContext from "@/context/ProductContext";
import { set } from "mongoose";
import { all } from "axios";

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

const Item = styled.form`
display: flex;
width:auto;
gap: .25rem;
justify-items: center;
align-items: center;
padding: .2rem 0rem;
margin: .1rem;
`

export default function TraitsFilter(){

    const productContext = useContext(ProductContext);
    const {filterByTrait, clearFilter, products, filtered } = productContext;
    const [isActive, setIsActive] = useState(false);
    const [selectedTraits, setSelectedTraits] = useState([]);
    // 
    
        const handleChange = (e) => {
        let filteredArray = selectedTraits.includes(e.currentTarget.value);
        if(selectedTraits.length <= 0){
            selectedTraits.push(e.currentTarget.value)
        }  
        else if(filteredArray === false){
            selectedTraits.push(e.currentTarget.value) 
        } else {
            let index = selectedTraits.indexOf(e.currentTarget.value)
            selectedTraits.splice(index,1)
        }
         filterByTrait(selectedTraits)
    }

    function getAllTraits(){
        let allTraits = [];
        products.map((p) => {
            if (p.properties && p.properties.primary && p.properties.secondary && p.properties.third) {
                allTraits.push(p.properties.primary.trim());
                allTraits.push(p.properties.secondary.trim());  
                allTraits.push(p.properties.third.trim());             
            }
        })
        let traitSet = new Set(allTraits)
        allTraits = [];
        for (const x of traitSet.values()) {
            allTraits.push(x);
          }
        return allTraits
    }

    let traitList = getAllTraits();

    return(
        <>
        <SectionHead onClick={() => setIsActive(!isActive)}>
            <h3>SHOP BY TRAIT</h3>
        </SectionHead>

            {isActive && traitList.map(t => 
                <Item>
                <input type="checkbox" value={t} onClick={(e)=>handleChange(e)}/>
                <label>{t}</label>
                </Item>
            )}
        </>
    )
}