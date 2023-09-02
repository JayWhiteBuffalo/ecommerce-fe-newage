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
import { useEffect, useState } from "react"
import ProductSearch from "@/components/ProductFilter/ProductSearch"
import ProductSort from "@/components/ProductFilter/ProductFilter"
import ProductFilter from "@/components/ProductFilter/ProductFilter"
import PriceFilter from "@/components/ProductFilter/PriceFilter"


const SortCont = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 2rem;
    width: 30%;
`;
const SectionWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap:2rem;
    padding: 2rem 0rem;
`;
const SectionHead = styled.div`
    display: flex;
    width: 100%;
    padding: 0rem 2rem;
    justify-content: space-between;
`;

const SectionMain = styled.section`
    display: flex;
    gap: 3rem;
`;

const HeadCont = styled.div`
    display:flex;
    align-items: center;
`

export default function ProductsPage() {

    // useEffect(()=>{
    //     //Your API Call
    //  },[]);


    return(
        <>
        <Header />
            <Center>
                <SectionWrap>
                    <Center>
                        <SectionHead>
                            <Title> All Products</Title>
                            <HeadCont>
                            <SortBox/>
                            <ProductSearch/>
                            </HeadCont>
                        </SectionHead>
                    </Center>
                <SectionMain>
                    <SortCont>
                        <ProductFilter/>
                    </SortCont>               
                    <ProductsGrid />
                </SectionMain>
                </SectionWrap>
            </Center>
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort: {'_id':-1}});
    const categories = await Category.find({}, null, {sort: {'_id':-1}});
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
        categories: JSON.parse(JSON.stringify(categories))
      },
    }
  }
