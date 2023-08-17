import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartIcon from "./icons/CartIcon";
import CategoryNav from "./CategoryNav";
import Nav from "./Nav";
import ValueCard from "./ValueCard";
import truck from "../public/images/truck.png"
import box from "../public/images/return-box.png"
import hand from "../public/images/hand.png"
import CartNav from "./CartNav";


const StyledHeader = styled.header`
background-color: white;
padding: .5rem 0rem;
width: 100%;

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
    position: relative;
    padding: 20px 0px;
    flex-direction: column;
    width: 99%;
`
;
 const ValueCardCont = styled.div`
    display: grid;
    grid-template-columns: 1fr .5fr .5fr .5fr .75fr;
    gap: 2rem;
 `

 const CartWrap = styled.div`
    width:100%;
    display: flex;
    justify-content: end;
 `


export default function Header({categories}){
    const {cartProducts} = useContext(CartContext);
    console.log(cartProducts);
    console.log(CartContext);
    return (
        <StyledHeader>
      
                <ValueCardCont>
                    <Logo href="\">CompSci Crystals</Logo>
                    <ValueCard icon={truck.src}title={"FREE SHIPPING"} subtext={"On orders over $100.00"}/>
                    <ValueCard icon={box.src}title={"FREE RETURN"} subtext={"Free 30 day return policy"}/>
                    <ValueCard icon={hand.src}title={"MEMBER DISCOUNT"} subtext={"Free to register"}/>
                    <CartWrap>
                    <CartNav/>
                    </CartWrap>
                    {/* <Link href={'/cart'}><CartIcon/> ({cartProducts.length})</Link> */}
                </ValueCardCont>
                <Wrapper>
            <Nav/>
            </Wrapper>

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