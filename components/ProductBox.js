import styled from "styled-components"
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        
        img {
            scale: 105%;
        }
    }
`;
const Box = styled(Link)`
    background-color: #eee;
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

const Title = styled(Link)`
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

export default function ProductBox({_id, title, description, price, images, properties, ...rest}) {
    const {addProduct} = useContext(CartContext);
    const url = '/product/' + _id;
    console.log(properties)
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
        <Traits>
        {properties != undefined || null ? (
            Object.keys(properties).map((keyName, i) => (
                <>
                {keyName === "primary" || keyName === "third" ? 
                (<span>{properties[keyName].toUpperCase()}</span>
                ) : (null)}  
                {keyName === "secondary" ? 
                (<span>+{properties[keyName].toUpperCase()}+</span>
                ) : (null)}  
                </>  
            ))
        ) : (null)}
        </Traits>

        <PriceRow>
            <Price>
                ${price}
            </Price>
        </PriceRow>
        <Button onClick={() => addProduct(_id)} card>
            Add to Cart
        </Button>
        </ProductInfoBox>
    </ProductWrapper>
    );
}