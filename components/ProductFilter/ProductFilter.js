import styled from "styled-components";
import ProductContext from "@/context/ProductContext";
import { useContext, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import TraitsFilter from "./TraitsFilter";

const Aside = styled.aside`
width: auto;
height: fit-content;

display: flex;
gap: 2rem;
padding: .5rem;
justify-content: end;
align-items: center;
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
    const {filterProducts, filterCategories, clearFilter } = productContext;

    const [filter, setFilter] = useState('');

    // const handleChange = (e) => {
    //     setFilter(e.target.value);
    //     if(searchValue !== ''){
    //         filterProducts(searchValue);
    //     } else {
    //         clearFilter();
    //     }
    // }
    return(

                    <Aside>
                <div>
                    <DropdownSection >
                        <CategoryFilter />
                    </DropdownSection>
                    <DropdownSection >           
                        <PriceFilter />
                    </DropdownSection>
                    <DropdownSection>
                        <TraitsFilter/>
                    </DropdownSection>
                </div>
            </Aside>
    )
}