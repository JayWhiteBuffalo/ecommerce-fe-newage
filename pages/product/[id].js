import Header from "@/components/Header";
import Title from "@/components/Title";
import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import Box from "@/components/Box";
import { CartContext } from "@/context/CartContext";
import { useContext, useState } from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modals/Product";
import { Category } from "@/modals/Category";
import ProductImages from "@/components/ProductImages";
import CartIcon from "@/components/icons/CartIcon";

const ColWrapper = styled.div`
    display:grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 40px;
    margin-top: 40px;
`;

const PriceRow = styled.div`
    display:flex;
    gap:20px;
    align-items:start;
    flex-direction: column;
`;

const DescriptionCont = styled.div`
    margin-top: 2rem;
    border-top: 1px solid black;
`

const Price = styled.span`
    font-size: 1.75rem;
    `;

const QuantityLabel = styled.span`
    padding: 0 10px;
`;

const Row = styled.div`
    display: flex;
    gap: 1.5rem;
`;

const Counter = styled.div`
    display: flex;
    align-items: center;
`;

const DetailsCont = styled.div`
    border: 1px solid black;
    min-height: 300px;
    max-height: auto;
    padding: 0rem 2rem;
    margin-top: 30px;
`;

export default function ProductPage({product, categories}) {

    const {addProduct} = useContext(CartContext);

    const truncate = (input) =>
        input.length > 700 ? `${input.substring(0, 700)}...` : input;

        const [showTruncate, setShowTruncate] = useState(true);
        const [count, setCount] = useState(1);

        const addCount = () => {
            setCount(prevState => (prevState + 1));
        };

        const minusCount = () => {
            if(count === 0){
                return
            } else {
            setCount(prevState => (prevState-1));
            }
        };

    return(
        <>
        <Header categories={categories}/>
        
        <Center>
            <ColWrapper>
                <Box>
                    <ProductImages images={product.images}/>
                </Box>
            <DetailsCont>
            <Title>{product.title}</Title>
            <PriceRow>
                <div>
                    <Price>${product.price}</Price>
                </div>
                <Row>
                    <Counter>
                        <Button checkout onClick={() => minusCount()}>-</Button>
                            <QuantityLabel>{count}</QuantityLabel>
                        <Button checkout onClick={() => addCount()}>+</Button>
                    </Counter>
                    <div>
                    <Button full onClick={()=> {addProduct(product._id, count)}}><CartIcon/>Add to Cart</Button>
                    </div>
                </Row>
            </PriceRow>
            <DescriptionCont>
            {product.description.length > 700 ? (<>
            <p>{showTruncate ? truncate(product.description) : product.description}</p>
            <button onClick={() => setShowTruncate(!showTruncate)}> {showTruncate ? `Show more` : `Show Less`}</button>
            </>
            ) : <p>{product.description}</p>
            }
            </DescriptionCont>

            </DetailsCont>
            </ColWrapper>
        </Center>
        </>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    const categories = await Category.find({}, null, {sort: {'_id':-1}});
    return {
        props: {
            product:JSON.parse(JSON.stringify(product)),
            categories: JSON.parse(JSON.stringify(categories))
        }
    }
}