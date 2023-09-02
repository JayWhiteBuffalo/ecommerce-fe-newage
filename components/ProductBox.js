import styled, { css, keyframes }  from "styled-components"
import { ifProp } from "styled-tools";
import { slideInDown, slideOutUp } from "react-animations";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import SaleTag from "./SaleTag";
import Image from "next/image";
import { format_price } from "@/utils/helpers";


const ProductWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow: hidden;
    &:hover {

    }
`;
const Box = styled.div`
    position:relative;
    background-color: white;
    padding: 0px;
    height: 30vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;
`;

const ImageCont = styled.div`
    height: 100%;
    width: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`

const Title = styled(Link)`
    font-weight: 600;
    font-size: .75rem;
    text-align: left;
    color: inherit;
    text-decoration:none;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
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
    font-size: .75rem;
    font-weight: 600;
`

const Traits = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    font-size: .6rem;
    justify-content: start;
    align-items: start;

`;

const fadeIn = keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: 2rem;
  }
`

const ItemButtons = styled.div`
    position: absolute;
    bottom: 0%;
    display: flex;
    width: 95%;
    gap: .5rem;
    background-color: white;
    padding: .5rem .5rem;
    opacity: 70%;
    animation: .175s ${fadeIn} ease-out;
`;
    
const ItemLink = styled(Link)`
    width: 50%;
    height: 17px;
    position: relative;
    background-color: white;
    opacity: 100%;
    border: 1px solid black;
    color:black;
    border-radius: 0;
    padding: .5rem .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .65rem;
    letter-spacing: .1rem;
    text-decoration: none;
    &:hover{
        background-color: black;
        color: white;
    }
`

export default function ProductBox(product) {
    const {_id, title, description, price, images, properties,discount, ...rest} = product;
    const {addProduct} = useContext(CartContext);
    const url = '/product/' + _id;
    const [activeItem, setItem] = useState(null);


    return(
    <ProductWrapper onMouseEnter={()=>setItem('isActive')} onMouseLeave={()=>setItem(null)}>
        <Box>
        {discount? (<SaleTag/>) : (null)}
            <ImageCont>
            <Image src={images[0]} alt ='' style={{width:'100%', height:'100%'}} width={500}
      height={250}/>
            </ImageCont>
        {activeItem != null? (
        <ItemButtons>
        <ItemLink href={url}>View Item</ItemLink>
        <Button onClick={() => addProduct(_id)} itemCard>Add to Cart</Button>
        </ItemButtons>
        ):(null)
        }
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
                (<span key={i}>{properties[keyName].toUpperCase()}</span>
                ) : (null)}  
                {keyName === "secondary" ? 
                (<span key={i}>+{properties[keyName].toUpperCase()}+</span>
                ) : (null)}  
                </>  
            ))
        ) : (null)}
        </Traits>

        <span>Reviews</span>

        <PriceRow>
            <Price>
                ${format_price(price)}
            </Price>
        </PriceRow>
        {/* <Button onClick={() => addProduct(_id)} card>
            Add to Cart
        </Button> */}
        </ProductInfoBox>
    </ProductWrapper>
    );
}