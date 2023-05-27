import { useState, useEffect } from "react"
import styled from "styled-components"
import SelectBox from "./SelectBox"

export default function SortBox(props) {
    // const [activeSort, setActiveSort] = useState('default');
    // const [activeType, setActiveType] = useState('default');

    // useEffect(() => {
    //     sortItems(props)
    // },[activeSort, activeType]);
    
    // function sortItems(props){
    //     if(activeSort === 'highest'){
    //         if(activeType === "price"){
    //             console.log("Price high to low")
    //             props.setProducts(props.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));
    //             console.log(props.sortedProducts);
    //         }
    //         if(activeType === "date"){
    //             console.log("Date new to old")
    //             // props.setProducts(props.products.sort((a, b) => parseFloat(b.createdAt) - parseFloat(a.createdAt)));
    //             // console.log(props.sortedProducts);
    //         }
    //         if(activeType === "title"){
    //             console.log("A-Z")
    //             // props.setProducts(props.products.sort((a, b) => parseFloat(a.title) - parseFloat(b.title)));
    //             // console.log(props.sortedProducts);
    //         }
    //     }
    //     if(activeSort === 'lowest'){
    //         if(activeType === "price"){
    //             console.log("Price low to high")
    //            props.setProducts(props.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
    //            console.log(props.sortedProducts);
    //         }
    //         if(activeType === "date"){
    //             console.log("Date old to new")
    //             // props.setProducts(props.products.sort((a, b) => parseFloat(b.createdAt) - parseFloat(a.createdAt)));
    //             // console.log(props.sortedProducts);
    //         }
    //         if(activeType === "title"){
    //             console.log("Z-A")
    //             // props.setProducts(props.products.sort((a, b) => parseFloat(b.title) - parseFloat(a.title)));
    //             // console.log(props.sortedProducts);
    //         }
    //         }
    // }

    return(
        <>
        <h2>Sort By:</h2>
        <SelectBox onChange={e=> props.setActiveType(e.target.value)}>
            <option value="price">Price</option>
            <option value="date">Date</option>
            <option value="title">Alphabetically</option>
        </SelectBox>
        <SelectBox onChange={e=> props.setActiveSort(e.target.value)}>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
        </SelectBox>
        </>
    )
}