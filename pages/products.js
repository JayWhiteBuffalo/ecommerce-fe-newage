import Center from "@/components/Center"
import Header from "@/components/Header"
import ProductsGrid from "@/components/ProductGrid"
import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/modals/Product"
import mongoose from "mongoose"
import styled from "styled-components"
import Title from "@/components/Title"
import SortBox from "@/components/SortBox"
import SeachBox from "@/components/SearchBox"
import { useState } from "react"


const SortCont = styled.div`
display: flex;
justify-content: end;
gap: 2rem;
`

export default function ProductsPage({products}) {

    // const [filteredProducts, setFilteredProducts] = useState(products.products);
    const [activeSort, setActiveSort] = useState('highest');
    const [activeType, setActiveType] = useState('price');
    


    return(
        <>
        <Header />
            <Center>
                <Title> All Products</Title>
                <SortCont>
                    <SortBox setActiveType={setActiveType} setActiveSort={setActiveSort}/>
                    <SeachBox/>
                </SortCont>
                <ProductsGrid products={products.products} activeSort={activeSort} activeType={activeType}/>
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
