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
import banner from "../public/images/banner2.jpg"


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
    padding: 2rem 0rem;
`;
const SectionHead = styled.div`
    display: flex;
    width: 100%;
    padding: 0rem 3rem;
    justify-content: space-between;
`;

const SectionMain = styled.section`
    display: flex;
    gap: 3rem;
`;

const HeadCont = styled.div`
    display:flex;
    align-items: center;
`;

const Banner = styled.div`
width: 100%;
height: 300px;
background-image: url(${banner.src});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

const TextBox = styled.div`
position: absolute;
width: 100%;
height: 300px;
`

const BannerText = styled.h2`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 75%;
color: white;
font-size: 3rem;
letter-spacing: 2px;
`

export default function ProductsPage() {

    // useEffect(()=>{
    //     //Your API Call
    //  },[]);


    return(
        <>
        <Header />
        <Banner>
            <TextBox>
            <BannerText>Shop Products</BannerText>
            </TextBox>
        </Banner>
            <Center>
                <SectionWrap>
                    <Center>
                        <SectionHead>
                            <Title> All Products</Title>
                            <HeadCont>
                            <SortBox/>
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
