import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductGrid";
import { secondary } from "@/lib/colors";

const TitleCont = styled.div`
    width: 100%;
    height: 50px;
    margin: 50px 0px 0px 0px;
    text-align: left;
    font-size: 26px;
    font-weight: 600;
    position: relative;
    background-color: ${secondary};

    &:after{
        content:'';
        width: 95%;
        border-bottom: solid 1.5px #fff;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        border-color: white;
    }
`;

const Title = styled.h2`
    background-color: ${secondary};
    width: auto;
    display: inline-block;
    z-index: 3;
    padding: 0 20px 0 50px;
    color: white;
    position: relative;
    font-family: calibri;
    font-weight: lighter;
    margin: 0;
`

export default function NewProducts ({products}) {
    return (
        <Center>
            <TitleCont>
                <Title>New Arrivals</Title>
            </TitleCont>
        <ProductsGrid products={products}/>
        </Center>
    );
}