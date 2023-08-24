import styled from "styled-components";
import { useState, useEffect } from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { format_price } from "@/utils/helpers";

const PriceCont = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 1rem;
padding: .5rem;
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

export default function PriceFilter ({products}) {

    function findParams(params){
        let x = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        let y = [x[0].price, x[x.length-1].price]
        return y
     }
 
     let params = findParams();
     let min = format_price(params[0])
     let max = format_price(params[1])

    const [price, setPrice] = useState([min, max]);

    const handlePriceChange = (newValue) => {
        let cleanPrice = [format_price(newValue[0]),format_price(newValue[1])]
        console.log(cleanPrice)
        setPrice(cleanPrice);
    }

    return(
        <PriceCont>
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
        </PriceCont>
    )
}