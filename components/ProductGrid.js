import styled from "styled-components"
import ProductBox from "./ProductBox"
import { useState, useEffect } from "react";
import { set } from "mongoose";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding: 30px;
    background-color: white;
    margin-bottom: 2.5rem;

`
export default function ProductsGrid(props) {

    const [filteredProducts, setFilteredProducts] = useState(props.products);

    useEffect(() => {
        let sortedList = sortItems();
        // let searchResults = sortedList.includes(props.searchParams);
        // let result = sortedList.filter(items =>
        //     items
        // )
        setFilteredProducts(() => setFilteredProducts(sortedList));
    },[props.activeSort, filteredProducts]);


    function sortItems(){
        if(props.activeSort === 'ph2l'){
                let result = props.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                return result;
            }
        if(props.activeSort === "dn2o"){
                let result = (props.products.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)));
                return result;
            }
        if(props.activeSort === "z2a"){
            let result = (props.products.sort((a, b) => b.title.replaceAll(' ','').toUpperCase().localeCompare(a.title.replaceAll(' ','').toUpperCase())));
                return result;
        }
        if(props.activeSort === 'pl2h'){
                let result = (props.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
                return result;
            }
        if(props.activeSort === "do2n"){
                let result = (props.products.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)));
                return result;
            }
        if(props.activeSort === "a2z"){
                let result = (props.products.sort((a, b) => a.title.replaceAll(' ','').toUpperCase().localeCompare(b.title.replaceAll(' ','').toUpperCase())));
                return result;
        }
    }



    return(
        <StyledProductsGrid>
                {filteredProducts?.length > 0 ? filteredProducts.map((product, index) => (
                    <ProductBox key={index} {...product}/>
                )) : (
                    props.products.map((product, index) => (
                    <ProductBox key={index} {...product}/>
                )))}
        </StyledProductsGrid>
    )
};