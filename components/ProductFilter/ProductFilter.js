import styled from "styled-components";
import { useState, useEffect } from "react";
import PriceFilter from "./PriceFilter";


export default function ProductFilter({products, categories}) {

    const [status, setStatus] = useState('none')


    const Aside = styled.aside`
    width: 500px;
    height: fit-content;
    border: 1px solid black;
    `
    
    const DropdownSection = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid gray;
    border-left: none;
    border-right: none;
    `;

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
    display: ${status};
    width:auto;
    gap: .5rem;
    justify-items: center;
    align-items: center;
    padding: .5rem 0rem;
    margin: .5rem;
    `
    //contents display none display block
    const Checkbox = styled.input`

    `

    function toggleDropdown (e) {
        if(status === 'none'){
            setStatus('flex')
        } else {
            setStatus('none')
        }
    };


    console.log(products)

    return(
            <Aside>
                <div>
                    <div>
                        <h2> FILTER</h2>
                    </div>
                </div>
                <div>
                <DropdownSection >
                    <SectionHead onClick={(e)=>toggleDropdown(e)}>
                    <h3>SHOP BY TYPE</h3>
                    </SectionHead>
                    {categories.map((cat) => (
                    <Item >
                    <Checkbox type="checkbox"/>
                    <label>{cat.name}</label>
                    </Item>
                    ))}
                </DropdownSection>
                <DropdownSection >
                    <SectionHead onClick={(e)=>toggleDropdown(e)}>
                    <h3>PRICE</h3>
                    </SectionHead>
                    <Item >
                        <PriceFilter products = {products}/>
                    </Item>
                </DropdownSection>
    </div>
                {/* Price Slider */}
                {/* On Sale Items
                By category
                By type
                By Color
                By properties */}
            </Aside>


    )
}