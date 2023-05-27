import styled from "styled-components"
import ProductBox from "./ProductBox"
import { useState, useEffect } from "react";
import { set } from "mongoose";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding-top: 30px;
`
export default function ProductsGrid(props) {

    const [filteredProducts, setFilteredProducts] = useState(props.products);

    useEffect(() => {
        let list = sortItems();
        setFilteredProducts(() => setFilteredProducts(list));
        console.log("useEffect Fired")
    },[props.activeSort, props.activeType, filteredProducts]);

    function sortItems(){
        if(props.activeSort === 'highest'){
            if(props.activeType === "price"){
                console.log("Price high to low")
                let result = props.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                return result;
            }
            if(props.activeType === "date"){
                console.log("Date new to old")
                let result = (props.products.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)));
                console.log(result)
                return result;
            }
            if(props.activeType === "title"){
                console.log("A-Z")
                let result = (props.products.sort((a, b) => b.title.replaceAll(' ','').toUpperCase().localeCompare(a.title.replaceAll(' ','').toUpperCase())));
                console.log(result)
                return result;
        }
    }
        if(props.activeSort === 'lowest'){
            if(props.activeType === "price"){
                console.log("Price low to high")
                let result = (props.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
                return result;
            }
            if(props.activeType === "date"){
                console.log("Date old to new")
                let result = (props.products.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)));
                console.log(result)
                return result;
            }
            if(props.activeType === "title"){
                console.log("Z-A")
                let result = (props.products.sort((a, b) => a.title.replaceAll(' ','').toUpperCase().localeCompare(b.title.replaceAll(' ','').toUpperCase())));
                console.log(result)
                return result;
        }
            }
    }

    return(
        <StyledProductsGrid>
                {filteredProducts?.length > 0 && filteredProducts.map((product, index) => (
                    <ProductBox key={index} {...product}/>
                ))}
        </StyledProductsGrid>
    )
};