import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header"
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";

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

const CityHolder = styled.div`
    display:flex;
    gap: 5px;
`;


export default function CartPage() {
    const {cartProducts, addProduct, removeProduct} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    useEffect(() => {
        if (cartProducts.length > 0){
            axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
                setProducts(response.data);
            })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);
    function addQuantity(id){
        addProduct(id);
    }
    function minusQuantity(id){
        removeProduct(id)
    }
    let total = 0;
    for( const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }
   async function goToPayment(id){
        const response = await axios.post("/api/checkout" , {
            name,email,city,country,streetAddress,postalCode, cartProducts,
        });
        if (response.data.url){
            window.location = response.data.url
        }
    }

    if (window.location.href.includes('success')) {
        return (
            <>
            <Header />
            <Center>
                <ColumnWrapper>
                    <Box>
                        <h1>Thank you for your Purchase!</h1>
                        <p>We will email you with your order details.</p>
                    </Box>
                </ColumnWrapper>
            </Center>
            </>
        )
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
                <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                </tr>
                </tbody>
            </Table>
            )}
            </Box>
            {!!cartProducts?.length && (
            <Box>
                <h2>Order Information</h2>
                    <Input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                    <Input type ="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <CityHolder>
                    <Input type ="text" name="city" placeholder="City" value={city} onChange={e => setCity(e.target.value)}/>
                    <Input type ="text" name="postalCode" placeholder="Postal Code" value={postalCode} onChange={e => setpostalCode(e.target.value)}/>
                    </CityHolder>
                    <Input type ="text" name="streetAddress" placeholder="Street Address" value={streetAddress} onChange={e => setStreetAddress(e.target.value)}/>
                    <Input type ="text" name="country" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)}/>
                    <input type="hidden" name="products" value={cartProducts.join(',')} />
                    <Button block primary onClick={goToPayment}> Continue to payment</Button>
            </Box>
            )}
            </ColumnWrapper>
        </Center>
        </>
    )
}