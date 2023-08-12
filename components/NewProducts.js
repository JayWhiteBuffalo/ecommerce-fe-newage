import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductGrid";

const TitleCont = styled.div`
    width: 100%;
    height: 50px;
    margin: 50px 0;
    text-align: center;
    font-size: 28px;
    position: relative;

    &:after{
        content:'';
        width: 100%;
        border-bottom: solid 1.5px #fff;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        border-color: navy;
    }
`;

const Title = styled.h2`
    background-color: #f0f0f0;
    width: auto;
    display: inline-block;
    z-index: 3;
    padding: 0 20px 0 20px;
    color: black;
    position: relative;
    font-family: calibri;
    font-weight: lighter;
    margin: 0;
    border-radius: 25%;
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