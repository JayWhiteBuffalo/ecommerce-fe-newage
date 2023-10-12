import styled from "styled-components";
import ProductContext from "@/context/ProductContext";
import { useContext, useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import TraitsFilter from "./TraitsFilter";
import { format_price } from "@/utils/helpers";

const Aside = styled.aside`
width: auto;
min-width: 15vw;
height: fit-content;
display: flex;
gap: 2rem;
padding: .5rem;
justify-content: center;
align-items: center;
background-color: white;
`

const DropdownSection = styled.div`
position: relative;
width: 100%;
min-width: 15vw;
border: 1px solid gray;
border-left: none;
border-right: none;
background-color: white;
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
display: flex;
width:auto;
gap: .5rem;
justify-items: center;
align-items: center;
padding: .5rem 0rem;
margin: .5rem;
`

export default function ProductFilter () {

    const productContext = useContext(ProductContext);
    const {filterProducts, searchProducts, filterCategories, clearFilter } = productContext;
    const [priceParams, setPriceParams] = useState([])
    const [x, setX] = useState({ 
         categories: [],
        priceRange: [],
        traits: []});

    // const applyFilters = () => {
        // const filteredProducts = products.filter(product => {
        //     return activeFilters.every(filterFn => filterFn(product));
        // });
        // filterProducts(filteredProducts);



        
    // };

    useEffect(()=>{
        filterProducts(x);
        console.log(priceParams)
    },[x, setX]);

    const toggleFilter = (filterFn) => {
        console.log(x)
    };


    return(

                    <Aside>
                <div>
                    <DropdownSection >
                        <CategoryFilter onToggle={toggleFilter} setX={setX}/>
                    </DropdownSection>
                    <DropdownSection >           
                        <PriceFilter onToggle={toggleFilter} setX={setX} priceParams={priceParams} setPriceParams={setPriceParams} />
                    </DropdownSection>
                    <DropdownSection>
                        <TraitsFilter onToggle={toggleFilter} setX={setX}/>
                    </DropdownSection>
                </div>
            </Aside>
    )
}