import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import ValueCard from "./ValueCard";
import truck from "../public/images/truck.png"
import box from "../public/images/return-box.png"
import hand from "../public/images/hand.png"
import CartNav from "./CartNav";
import { secondary } from "@/lib/colors";


const StyledHeader = styled.header`
padding-top: .5rem;
width: 100%;
height:fit-content;
background-color: white;
`;
const Logo =styled(Link)`
width: 300px;
height: 70px;
display: flex;
background-image:url("https://www.zarla.com/images/zarla-crystalized-1x1-2400x2400-20210609-mhx98xwt8qyg89dy9vck.png?crop=1:1,smart&width=250&dpr=2");
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`
;
const Wrapper = styled.div`
    display: flex;
    position: relative;
    padding-top: 1rem;
    flex-direction: column;
    width: 99%;
`
;
 const ValueCardCont = styled.div`
    display: grid;
    grid-template-columns: 1fr .3fr .3fr .3fr 1fr;
    gap: 2rem;
 `

 const CartWrap = styled.div`
    width:100%;
    display: flex;
    justify-content: end;
 `


export default function Header({categories}){

    return (
        <StyledHeader>
      
                <ValueCardCont>
                    <Logo href="\"></Logo>
                    <ValueCard icon={truck}title={"FREE SHIPPING"} subtext={"On orders over $100.00"}/>
                    <ValueCard icon={box}title={"FREE RETURN"} subtext={"Free 30 day return policy"}/>
                    <ValueCard icon={hand}title={"MEMBER DISCOUNT"} subtext={"Free to register"}/>
                    <CartWrap>
                    <CartNav/>
                    </CartWrap>
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