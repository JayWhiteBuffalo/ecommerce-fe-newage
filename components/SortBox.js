
import styled from "styled-components"
import SelectBox from "./SelectBox"
import ProductContext from "@/context/ProductContext";
import { useContext } from "react";

export default function SortBox() {

    const productContext = useContext(ProductContext);
    const {sortProducts } = productContext;

    return(
        <>
        <h2>Sort By:</h2>
        <SelectBox onChange={(e)=>sortProducts(e.target.value)}>
            <option value="ph2l">Price - High to Low</option>
            <option value="pl2h">Price - Low to High</option>
            <option value="dn2o">Date - New to Old </option>
            <option value="do2n">Date - Old to New </option>
            <option value="a2z">Alphabetically - A-Z</option>
            <option value="z2a">Alphabetically - Z-A</option>
            <option value="onsale">On Sale</option>
        </SelectBox>
        </>
    )
}