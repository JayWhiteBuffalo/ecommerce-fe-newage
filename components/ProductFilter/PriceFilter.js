import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import ProductContext from "@/context/ProductContext";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { format_price, get_price_params } from "@/utils/helpers";

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

export default function PriceFilter ({ setX }) {

    const productContext = useContext(ProductContext);
    const {filterProducts, clearFilter, products, filtered } = productContext;
    const [isActive, setIsActive] = useState(false);
    const [price, setPrice] = useState([]);
    const [priceParams, setPriceParams] = useState([])

    useEffect(()=>{
        let params = get_price_params(products);
        let min = format_price(params[0])
        let max = format_price(params[1])
        setPriceParams([min,max])
        setX(prevState => ({...prevState, priceRange: [min,max]}))
     },[]);


  

     const min = priceParams[0];
     const max = priceParams[1];


    const handlePriceChange = (newValue) => {
        let value=[format_price(newValue[0]), format_price(newValue[1])]
        setPrice(value);
        setX(prevState => ({...prevState, priceRange: newValue}))    
    };

    return(
        <>
        <SectionHead onClick={() => setIsActive(!isActive)}>
        <h3>PRICE</h3>
        </SectionHead>
        {isActive && <PriceCont>
            <InputCont>
                <input type="text" defaultValue={priceParams[0]} value={price[0]}/>
                <label>-</label>
                <input type="text" defaultValue={priceParams[1]} value={price[1]}/>
            </InputCont>
            <Slider
                range
                min={Number(priceParams[0])}
                max={Number(priceParams[1])}
                step={.01}
                allowCross={false}
                defaultValue={priceParams}
                onAfterChange={(e)=>handlePriceChange(e)}
            />    
            <PriceParams>
                <span>${priceParams[0]}</span>
                <span>${priceParams[1]}</span>
            </PriceParams>
        </PriceCont>}
        </>
    )
}