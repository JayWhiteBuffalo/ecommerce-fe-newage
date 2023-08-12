import Center from "@/components/Center"
import Header from "@/components/Header"
import ProductsGrid from "@/components/ProductGrid"
import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/modals/Product"
import { Category } from "@/modals/Category"
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

export default function ProductsPage({products, categories}) {

    // const [filteredProducts, setFilteredProducts] = useState(products.products);
    const [activeSort, setActiveSort] = useState('highest');
    const [activeType, setActiveType] = useState('price');
    const [searchParams, setSearchParams] = useState('');
    


    return(
        <>
        <Header categories={categories} />
            <Center>
                <Title> All Products</Title>
                <SortCont>
                    <SortBox setActiveType={setActiveType} setActiveSort={setActiveSort}/>
                    <SeachBox setSearchParams={setSearchParams} searchParams={searchParams}/>
                </SortCont>
                <ProductsGrid products={products.products} activeSort={activeSort} activeType={activeType} searchParams={searchParams}/>
            </Center>
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products= await Product.find({}, null, {sort:{'_id':-1}});
    const categories = await Category.find({}, null, {sort: {'_id':-1}});
    return {
        props:{
            products:{
                products:JSON.parse(JSON.stringify(products)),
            },
            categories: JSON.parse(JSON.stringify(categories))
        }
    };
}
