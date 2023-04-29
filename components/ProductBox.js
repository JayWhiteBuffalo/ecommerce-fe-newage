import styled from "styled-components"
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`

`;
const Box = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    img{
        max-width: 100%;
        max-height: 120px;
    }
`;

const Title = styled(Link)`
    font-weight: 500;
    font-size: .9rem;
    margin: 8px 0;
    text-align: center;
    color: inherit;
    text-decoration:none;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
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

export default function ProductBox({_id, title, description, price, images}) {
    const {addProduct} = useContext(CartContext);
    const url = '/product/' + _id;
    return(
    <ProductWrapper>
        <Box href={url}>
            <div>
            <img src={images[0]} alt =''/>
            </div>
        </Box>
        <ProductInfoBox>
        <Title href={url}>
        {title}
        </Title>
        <PriceRow>
            <Price>
                ${price}
            </Price>
            <Button onClick={() => addProduct(_id)} primary outline>
                Add to Cart
            </Button>
        </PriceRow>
        </ProductInfoBox>
    </ProductWrapper>
    );
}