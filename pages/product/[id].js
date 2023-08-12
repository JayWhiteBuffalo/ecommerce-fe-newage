import Header from "@/components/Header";
import Title from "@/components/Title";
import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import Box from "@/components/Box";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modals/Product";
import { Category } from "@/modals/Category";
import ProductImages from "@/components/ProductImages";
import CartIcon from "@/components/icons/CartIcon";

const ColWrapper = styled.div`
    display:grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    margin-top: 40px;
`;

const PriceRow = styled.div`
    display:flex;
    gap:20px;
    align-items:center;
`;

const Price = styled.span`
    font-size: 1.75rem;
    `;

export default function ProductPage({product, categories}) {
    const {addProduct} = useContext(CartContext);
    return(
        <>
        <Header categories={categories}/>
        <Center>
            <ColWrapper>
                <Box>
                    <ProductImages images={product.images}/>
                </Box>
            <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
                <div>
                    <Price>{product.price}</Price>
                </div>
                <div>
            <Button primary onClick={()=> {addProduct(product._id)}}><CartIcon/>Add to Cart</Button>
            </div>
            </PriceRow>
            </div>
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