import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import CategoryNav from "./CategoryNav";
import CartIcon from "./icons/CartIcon";
import SearchIcon from "./icons/SearchIcon";
import HeartIcon from "./icons/HeartIcon";

const StyledHeader = styled.header`
background-color: #FFF;
padding: .5rem 1rem;

`;
const Logo =styled(Link)`
color:#000;
font-weight: 900;
letter-spacing: .175rem;
text-decoration:none;
display: flex;
margin: 0px 20px;
`
;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
`
;
const StyledNav = styled.nav`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
div{
    display: flex;
    gap: 20px;
}
    
`
;
const NavLink = styled(Link)`
    color:#000;
    text-decoration: none;
    display: flex;
    width: 100%;
    min-width: 30px;
    gap: 5px;
    justify-items: center;
    align-items: center;
    padding: 5px;
    `
    ;

const NavGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`

const CategoryLinks = styled(Link)`
    color: #000;
    text-decoration: none;
`;

const LinksCont = styled.div`
    width: 100%;
    display: flex;
    gap: 1 rem;
    
`

export default function Header({categories}){
    const {cartProducts} = useContext(CartContext);
    console.log(categories);
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
            {/* TO DO: REPLACE TEXT WITH ICONS */}
            <StyledNav>
                <NavGrid>
                    <div>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>Search</NavLink>
                <NavLink href={'/products'}>Products</NavLink>
                </div>
                <Logo href={'/'}>
                <span>NEW AGE SUPPLY</span>
                </Logo>
                <div>
                <NavLink href={'/services'}>Wishlist</NavLink>
                <NavLink href={'/account'}>Account</NavLink>
                <NavLink href={'/cart'}><CartIcon/> ({cartProducts.length})</NavLink>
                </div>
                </NavGrid>
                <div>
                    <CategoryNav categories={categories}/>
                </div>
                {/* <div>
                <LinksCont>
                {categories.map((cat) => (
                <CategoryLinks href={cat.name}>{cat.name}</CategoryLinks>
                ))}
                <CategoryLinks href="./about">About</CategoryLinks>
                </LinksCont>
                </div> */}
            </StyledNav>
            </Wrapper>
            </Center>
        </StyledHeader>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const categories = await Category.find({}, null, {sort: {'_id':-1}});
    return {
      props: {
        categories: JSON.parse(JSON.stringify(categories))
      },
    }
  }