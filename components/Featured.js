import Center from "./Center";
import styled from "styled-components";
import PrimaryBtn from "./Button";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
background-color: #EEE;
padding: 50px 0;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
      `
;
const Column = styled.div`
    display: flex;
    aligned-items: center;
`;
const ButtonsWrapper = styled.div`
display: flex;
gap: 10px;
margin-top:25px;
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);

    function addFeaturedtoCart(){
        addProduct(product._id);
    }

    return(
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <div>
                            <h1>
                                {product.title}
                            </h1>
                            <p>
                            {product.description.length > 300 ? `${product.description.substring(0, 300)}...` : product.description}
                            </p>
                            <ButtonsWrapper>
                            <ButtonLink href={"/products/" + product._id} outline={1} white>Read More</ButtonLink>
                            <Button primary onClick={addFeaturedtoCart}>
                                <CartIcon/>
                                Add to Cart
                            </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src={product.images} alt=""/>
                    </Column>
                </Wrapper>
            </Center>
        </Bg>
    )
}