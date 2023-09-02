import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductGrid";
import { gold, secondary } from "@/lib/colors";
import ProductFilter from "./ProductFilter/ProductSearch";

const TitleCont = styled.div`
    width: 100%;
    height: 50px;
    margin: 0px 0px 0px 0px;
    text-align: left;
    font-size: 26px;
    font-weight: 600;
    position: relative;
    &:after{
        content:'';
        width: 95%;
        border-bottom: solid 1.5px #fff;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        border-color: ${gold};
    }
    &:before{
        content:'';
        width: 95%;
        border-bottom: solid 1.5px #fff;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        border-color: ${gold};
    }
`;

const Title = styled.h2`
    background-color: #eee;
    width: auto;
    display: inline-block;
    z-index: 3;
    padding: 0 20px 0 100px;
    color: ${gold};
    position: relative;
    font-family: calibri;
    font-weight: lighter;
    margin: 0;
`

export default function NewProducts () {

    return (
        <Center>
            <TitleCont>
                <Title>New Arrivals</Title>
            </TitleCont>
        <ProductsGrid/>
        </Center>
    );
}