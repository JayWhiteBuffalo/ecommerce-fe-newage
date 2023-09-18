import styled from "styled-components";
import { useState, useContext } from "react";
import ProductContext from "@/context/ProductContext";

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

const Item = styled.form`
display: flex;
width:auto;
gap: .25rem;
justify-items: center;
align-items: center;
padding: .2rem 0rem;
margin: .1rem;
`

export default function CategoryFilter(){

    const productContext = useContext(ProductContext);
    const {categories, filterCategories, filterProducts, clearFilter } = productContext;
    const [isActive, setIsActive] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

        const handleChange = (e) => {
        let filteredArray = selectedCategories.includes(e.currentTarget.value);
        if(selectedCategories.length <= 0){
            selectedCategories.push(e.currentTarget.value)
        }  
        else if(filteredArray === false){
            selectedCategories.push(e.currentTarget.value) 
        } else {
            let index = selectedCategories.indexOf(e.currentTarget.value)
            selectedCategories.splice(index,1)
        }
        // console.log(selectedCategories)
        filterCategories(selectedCategories)
    }

    return(
        <>
        <SectionHead onClick={() => setIsActive(!isActive)}>
            <h3>SHOP BY TYPE</h3>
        </SectionHead>

            {isActive && categories.map((cat) => (
                <Item key={cat._id}>
                <input type="checkbox" value={cat._id} onClick={(e)=>handleChange(e)}/>
                <label>{cat.name}</label>
                </Item>
            ))}
        </>
    )
}