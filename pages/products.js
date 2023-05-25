import Center from "@/components/Center"
import Header from "@/components/Header"
import ProductsGrid from "@/components/ProductGrid"
import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/modals/Product"
import mongoose from "mongoose"
import styled from "styled-components"
import Title from "@/components/Title"

export default function ProductsPage({products}) {
    console.log({products});
    return(
        <>
        <Header />
            <Center>
                <Title> All Products</Title>
                <ProductsGrid products={products.products}/>
            </Center>
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products= await Product.find({}, null, {sort:{'_id':-1}});
    return {
        props:{
            products:{
                products:JSON.parse(JSON.stringify(products))
            }
        }
    };
}
