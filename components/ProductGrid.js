import styled from "styled-components"
import ProductBox from "./ProductBox"
import { useState, useEffect, useRef, useContext } from "react";
import { set } from "mongoose";
import ProductContext from "@/context/ProductContext";
import ProductState from "@/context/ProductState";
import ProductFilter from "./ProductFilter/ProductSearch";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding: 30px;
    background-color: white;
    margin-bottom: 2.5rem;
    justify-content: start;

`
export default function ProductsGrid() {


        const productContext = useContext(ProductContext);
        const {products, filtered, setLoadedProducts,loadedProducts } = productContext;

        useEffect(() => {

            setLoadedProducts(filtered)
            }
        ,[filtered])

        
    return(

        <StyledProductsGrid>
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