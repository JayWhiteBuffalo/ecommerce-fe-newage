import styled from "styled-components"
import Link from "next/link";
import { useContext, useState } from "react";
import SeachBox from "./SearchBox";
import { gold, secondary } from "@/lib/colors";

const StyledNav = styled.nav`
width: 100%;
align-items: start;
display: flex;
flex-direction: column;
gap: 20px;
div{
display: flex;
align-items: center;
text-align:center;
justify-content: space-evenly;
background-color:white;
}
`

const NavLink = styled(Link)`
color:#000;
text-decoration: none;
display: inline-block;
position:relative;
width: 100%;
min-width: 10vw;
height: 50px;
padding: 0px 1rem;
border: 1px solid #ccc;
border-bottom-style: none;
border-top-style: none;
font-size: .85rem;
font-weight: 600;

:hover{
    background-color: #89d961;
    color: white;
    height: 50px;
}
::after{
    background: none repeat scroll 0.0 transparent;
    bottom: 0;
    left:0;
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.3s ease-out;
    background: ${gold};
}
:hover::after{
        transform: scaleX(1);
        left: 0;
}
`;


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
position:relative;
padding: .5rem;
`

export default function Nav () {
    const [searchParams, setSearchParams] = useState('');
return(
    <StyledNav>
        <NavBar>
            <NavGrid>
                <div>
                    <NavLink href={'/'}><h4>HOME</h4></NavLink>
                    <NavLink href={'/products'}><h4>PRODUCTS</h4></NavLink>
                    <NavLink href={'/services'}><h4>SERVICES</h4></NavLink>
                    <NavLink href={'/support'}><h4>SUPPORT</h4></NavLink>
                    <NavLink href={'/contact'}><h4>CONTACT</h4></NavLink>
                    <NavLink href={'/account'}><h4>ACCOUNT</h4></NavLink>
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