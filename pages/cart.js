import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header"
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";

const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 40px;

    `;
const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    `;

const ProductInfoCell = styled.td`
    padding: 10px 0;
`;

const ProductImageBox = styled.div`
    width: 100px;
    hieght: 100px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-height: 80px;
        max-width:80px;
    }
`;

const QuantityLabel = styled.span`
    padding: 0 10px;
`;


export default function CartPage() {
    const {cartProducts, addProduct, removeProduct} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (cartProducts.length > 0){
            axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
                setProducts(response.data);
            })
        }
    }, [cartProducts]);
    function addQuantity(id){
        addProduct(id);
    }
    function minusQuantity(id){
        removeProduct(id)
    }
    return(
        <>
        <Header/>
        <Center>
            <ColumnWrapper>
            <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && (
                <div>Your cart is empty</div>
            )}
            {products?.length > 0 && (
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
            {products.map(product => (
                <tr>
                    <ProductInfoCell>
                        {product.title}:
                        <ProductImageBox>
                            <img src={product.images[0]}/>
                        </ProductImageBox>
                    </ProductInfoCell>
                    <td>
                        <Button onClick={() => minusQuantity(product._id)}>-</Button>
                        <QuantityLabel>
                        {cartProducts.filter(id => id === product._id).length}
                        </QuantityLabel>
                        <Button onClick={() => addQuantity(product._id)}>+</Button>
                    </td>
                    <td>
                        ${cartProducts.filter(id => id === product._id).length * product.price}
                    </td>
                </tr>
            ))}
                </tbody>
            </Table>
            )}
            </Box>
            {!!cartProducts?.length && (
            <Box>
                <h2>Order Information</h2>
                <input type="text" placeholder="Address"/>
                <input type ="text" placeholder="Address 20"/>
                <Button block primary> Continue to payment</Button>
            </Box>
            )}
            </ColumnWrapper>
        </Center>
        </>
    )
}