import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
background-color: #000;
padding: .5rem 1rem;

`;
const Logo =styled(Link)`
color:#FFF;
font-weight: 900;
letter-spacing: .175rem;
text-decoration:none;`
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
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
            <Logo href={'/'}>
                Ecommerce Store
            </Logo>
            <StyledNav>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>View Products</NavLink>
                <NavLink href={'/categories'}>Categories</NavLink>
                <NavLink href={'/account'}>Account</NavLink>
                <NavLink href={'/cart'}>Cart</NavLink>
                </StyledNav>
            </Wrapper>
            </Center>
        </StyledHeader>
    )
}