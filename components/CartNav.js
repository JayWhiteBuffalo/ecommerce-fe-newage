import styled from "styled-components";
import { CartContext } from "./CartContext";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";

const Cont = styled.div`
width: 200px;
height 50px;
display: grid;
grid-template-columns: 1fr 3fr;
border-radius: 5%;
gap: .75rem;
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
const ValueText = styled.text`
font-weight: 700;
font-size: .75rem;
`




export default function CartNav () {
    const {cartProducts} = useContext(CartContext);

    return (
        <>
        <Cont>
            <IconCont>
                <CartIcon/>
            </IconCont>
            <TextCont>
                <ValueText>SHOPPING CART</ValueText>
                <span>({cartProducts.length}) Items - $Price</span>
            </TextCont>
        </Cont>
        </>
    )
}