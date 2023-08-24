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
import ProductFilter from "@/components/ProductFilter/ProductFilter"


const SortCont = styled.div`
display: flex;
justify-content: end;
gap: 2rem;
`
const SectionWrap = styled.div`
display: flex;
gap:2rem;
padding: 2rem 0rem;
`

export default function ProductsPage({products, categories}) {

    // const [filteredProducts, setFilteredProducts] = useState(products.products);
    const [activeSort, setActiveSort] = useState('dn2o');
    const [searchParams, setSearchParams] = useState('');


    

    return(
        <>
        <Header categories={categories} />
            <Center>
                <SectionWrap>
                <ProductFilter products={products.products} categories={categories}/>
                <div>
                <Title> All Products</Title>
                <SortCont>
                    <SortBox  setActiveSort={setActiveSort}/>
                    {/* <SeachBox setSearchParams={setSearchParams} searchParams={searchParams}/> */}
                </SortCont>
                <ProductsGrid products={products.products} activeSort={activeSort}/>
                </div>
                </SectionWrap>
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
