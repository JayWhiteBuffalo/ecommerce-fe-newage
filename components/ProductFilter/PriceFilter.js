import styled from "styled-components";
import { useState, useEffect } from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { format_price } from "@/utils/helpers";

const PriceCont = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
gap: 1rem;
padding: 1rem;
justify-items: center;
align-items: center;
`;

const InputCont = styled.div`   
display: flex;
justify-content: space-between;
gap: 1rem;
input{
    position:relative;
    width: 30%;
    padding: .5rem;
}
`;
const PriceParams = styled.div`
width: 100%;
display: flex;
gap: 1rem;
justify-content: space-between;
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

export default function PriceFilter ({filterPrice ,min,max,products, price, setPrice}) {

    const [isActive, setIsActive] = useState(false);
    const [render, rerender] = useState(false)

    function findParams(params){
        let x = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        let y = [x[0].price, x[x.length-1].price]
        return y
     }
 
     let params = findParams();
   

    // const [price, setPrice] = useState([min, max]);

    const handlePriceChange = (newValue) => {
        let cleanPrice = [format_price(newValue[0]),format_price(newValue[1])]
        console.log(cleanPrice)
        setPrice(cleanPrice);
        filterPrice()

    }

    return(
        <>
        <SectionHead onClick={() => setIsActive(!isActive)}>
        <h3>PRICE</h3>
        </SectionHead>
        {isActive && <PriceCont>
            <InputCont>
                <input type="text" value={price[0]}/>
                <label>-</label>
                <input type="text" value={price[1]}/>
            </InputCont>
            <Slider
                range
                min={params[0]}
                max={params[1]}
                step={.01}
                // value={price}
                // onChange={handlePriceChange}
                allowCross={false}
                defaultValue={price}
                onAfterChange={(e)=>handlePriceChange(e)}
            />    
            <PriceParams>
                <span>${min}</span>
                <span>${max}</span>
            </PriceParams>
        </PriceCont>}
        </>
    )
}