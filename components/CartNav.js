import styled from "styled-components";
import { CartContext } from "./CartContext";
import CartIcon from "./icons/CartIcon";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { format_price } from "@/utils/helpers";

const CartCont = styled(Link)`
width: 200px;
height 50px;
display: grid;
grid-template-columns: 1fr 3fr;
border-radius: 5%;
gap: .75rem;
text-decoration: none;
color: black;
margin-top: .75rem;
`
const IconCont = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
padding: .25rem;
img{
    width: 100%;
}
`
const TextCont = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: .25rem;
justify-content: center;
align-items: start;
span{
    font-size: .75rem;
    opacity: 70%;
}
`
const ValueText = styled.p`
font-weight: 700;
font-size: .75rem;
`




export default function CartNav () {
    
    const {cartProducts} = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (cartProducts.length > 0){
            axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
                setProducts(response.data);
            })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    let total = 0;
    for( const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }
    let cartTotal = format_price(total)

    return (
        <>
        <CartCont href={'/cart'}>
            <IconCont>
                <CartIcon/>
            </IconCont>
            <TextCont>
                <ValueText>SHOPPING CART</ValueText>
                <span>({cartProducts.length}) Items - ${cartTotal}</span>
            </TextCont>
        </CartCont>
        </>
    )
}