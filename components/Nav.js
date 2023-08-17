import styled from "styled-components"
import Link from "next/link";
import { useContext, useState } from "react";
import SeachBox from "./SearchBox";

const StyledNav = styled.nav`
width: 100%;
align-items: start;
display: flex;
flex-direction: column;
gap: 20px;
div{
display: flex;
}
`

const NavLink = styled(Link)`
color:#000;
text-decoration: none;
display: flex;
width: 100%;
min-width: 30px;
justify-content: center;
align-items: center;
padding: 0px 1.5rem;
border: 1px solid #ccc;
border-bottom-style: none;
border-top-style: none;
font-size: .85rem;
font-weight: 600;
`
;

const NavGrid = styled.div`
display: grid;
position: relative;
grid-template-columns: auto auto auto;
width: 100%;
`;

const NavBar = styled.div`
width:100%;
height:50px;
display: flex;
justify-items: space-between;
border: 1px solid #ccc;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

const SearchCont = styled.div`
padding: .5rem;
`

export default function Nav () {
    const [searchParams, setSearchParams] = useState('');
return(
    <StyledNav>
        <NavBar>
            <NavGrid>
                <div>
                    <NavLink href={'/'}>HOME</NavLink>
                    <NavLink href={'/products'}>PRODUCTS</NavLink>
                    <NavLink href={'/categories'}>CATEGORIES</NavLink>
                    <NavLink href={'/services'}>SERVICES</NavLink>
                    <NavLink href={'/support'}>SUPPORT</NavLink>
                    <NavLink href={'/contact'}>CONTACT</NavLink>
                    <NavLink href={'/account'}>ACCOUNT</NavLink>
                    {/* <NavLink href={'/cart'}><CartIcon/> ({cartProducts.length})</NavLink> */}
                </div>
            </NavGrid>
            <SearchCont>
                <SeachBox setSearchParams={setSearchParams} searchParams={searchParams}/>
            </SearchCont>
        </NavBar>
    </StyledNav>
)
}