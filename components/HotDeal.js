import styled from "styled-components";
import { primary, secondary } from "@/lib/colors";
import Link from "next/link";
import Button from "./Button";
import Center from "./Center";
import SaleTag from "./SaleTag";
import Image from "next/image";

const SectionCont = styled.section`
    width: 450px;
    height:fit-content;
    padding: 0px;
    display: flex;
    flex-direction: column;
    
`

const TitleCont = styled.header`
    background-color: ${primary};
    width: 100%;
    display: flex;
    margin: 50px 0px 0px 0px;
`;
const Title = styled.h1`
    letter-spacing: 1.5px;
    padding: 0rem 1.5rem;
    font-size: 1rem;
    color: white;
`;
const ProdTitle = styled.h2`
    letter-spacing: 1.5px;
    padding: 0rem 1.5rem;
    font-size: 1rem;
    color: black;
`;
const CatCont = styled.ul`
    list-style:none;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    background-color: white;
`;

const Box = styled(Link)`
    background-color: white;
    padding: 20px;
    height: 15vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 100%;
        max-height: 120px;
    }
    &:hover {
        
    }
`;

const DealTitle = styled(Link)`
    font-weight: 600;
    font-size: 1.125rem;
    margin: 8px 0;
    text-align: center;
    color: inherit;
    text-decoration:none;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    align-items: start;
    height: auto;
`;

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2px;
`;

const Price = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
`

const Traits = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    font-size: .75rem;
`

export default function HotDeal ({product}) {

    return(

        <SectionCont>
            <TitleCont>
                <Title>HOT DEALS</Title>
            </TitleCont>
            <CatCont>
                <Box href="/">
                <div>
                {product.discount? (<SaleTag/>) : (null)}
                    <Image
                        src={product.images[0]} 
                        alt ='' 
                        style={{width:'100%', height:'auto'}} 
                        width={500}
                        height={250}
                    />
                </div>
                </Box>
                <ProductInfoBox>
                <ProdTitle href={"/"}>
                {product.title}
                </ProdTitle>
                <p>
                {product.description.length > 300 ? `${product.description.substring(0, 300)}...` : product.description}
                </p>
                </ProductInfoBox>
                <PriceRow>
                <Price>
                ${product.price}
                </Price>
                </PriceRow>
                <Button onClick={() => addProduct(_id)} card>
                Add to Cart
                </Button>
                </CatCont>

        
        </SectionCont>
    )
}