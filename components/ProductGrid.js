import styled from "styled-components"
import ProductBox from "./ProductBox"
import { useState, useEffect, useRef, useContext } from "react";
import { set } from "mongoose";
import ProductContext from "@/context/ProductContext";
import ProductFilter from "./ProductFilter/ProductFilter";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding: 30px;
    background-color: white;
    margin-bottom: 2.5rem;

`
export default function ProductsGrid() {

    // const [render, rerender] = useState(false)

    // useEffect(() => {
    //     let sortedList = sortItems();
    //     // let searchResults = sortedList.includes(props.searchParams);
    //     // let result = sortedList.filter(items =>
    //     //     items
    //     // )
    //             // props.setFilteredProducts(() => props.setFilteredProducts(sortedList));
    //     setFilteredProducts(sortedList)
    //     rerender(!render)

    // },[activeSort]);

//Refactor into Switch statement
    // function sortItems(){
    //     if(activeSort === 'ph2l'){
    //             let result = (filteredProducts).sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    //             console.log(result)
    //             return result;
    //         }
    //     if(activeSort === "dn2o"){
    //             let result = ((filteredProducts).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)));
    //             return result;
    //         }
    //     if(activeSort === "z2a"){
    //         let result = (filteredProducts.sort((a, b) => b.title.replaceAll(' ','').toUpperCase().localeCompare(a.title.replaceAll(' ','').toUpperCase())));
    //             return result;
    //     }
    //     if(activeSort === 'pl2h'){
    //             let result = (filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
    //             return result;
    //         }
    //     if(activeSort === "do2n"){
    //             let result = (filteredProducts.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)));
    //             return result;
    //         }
    //     if(activeSort === "a2z"){
    //             let result = (filteredProducts.sort((a, b) => a.title.replaceAll(' ','').toUpperCase().localeCompare(b.title.replaceAll(' ','').toUpperCase())));
    //             return result;
    //     }
    // }

        const productContext = useContext(ProductContext);
        const {products, filtered} = productContext;



    return(

        <StyledProductsGrid>
            <ProductFilter/>
            {
                filtered !==null ? (
                    filtered.map(product => 
                        <>
                        <ProductBox key={product.id} {...product}/>
                        </>
                        )
                ) : (
                    products.map(product => 
                        <ProductBox key={product.id} {...product}/>)  
                    
                )
            }
        </StyledProductsGrid>
        // <StyledProductsGrid>
        //         {filteredProducts?.length > 0 ? filteredProducts.map((product, index) => (
        //             <ProductBox key={index} {...product}/>
        //         )) : (
        //             products.map((product, index) => (
        //             <ProductBox key={index} {...product}/>
        //         )))}
        // </StyledProductsGrid>
    )
};