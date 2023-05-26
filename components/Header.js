import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import logo from "../public/images/logo.png"

const StyledHeader = styled.header`
background-color: #000;
padding: .5rem 1rem;

`;
const Logo =styled(Link)`
color:#FFF;
font-weight: 900;
letter-spacing: .175rem;
text-decoration:none;
display: flex;
img {
    position: absolute;
    top: 0;
    left:0;
    height: 80px;
    width: 100px;
    background-color: transparent;
}
span {
    margin-left: 35px;
}
`
;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`
;
const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`
;
const NavLink = styled(Link)`
    color:#aaa;
    text-decoration: none;
    `
    ;

export default function Header(){
    const {cartProducts} = useContext(CartContext);
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
            <Logo href={'/'}>
                <img src={logo.src} alt=""/>
                <span>Spiritual Supply</span>
            </Logo>
            <StyledNav>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>View Products</NavLink>
                <NavLink href={'/services'}>Services</NavLink>
                <NavLink href={'/account'}>Account</NavLink>
                <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                </StyledNav>
            </Wrapper>
            </Center>
        </StyledHeader>
    )
}