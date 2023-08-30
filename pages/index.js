import Featured from "@/components/Featured"
import styled from "styled-components";
import Header from "@/components/Header"
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modals/Product";
import { Category } from "@/modals/Category";
import HomePage from "@/components/HomePage";

export default function Home({featuredProduct, products, categories}) {


  return(
    <>
    <Header/>
    <HomePage featuredProduct={featuredProduct} products={products} categories={categories}/>
    </>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64dfac49918f50837ef604cc';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const products = await Product.find({}, null, {sort: {'_id':-1}});
  const categories = await Category.find({}, null, {sort: {'_id':-1}});
  return {
    props: {
      featuredProduct: JSON.parse (JSON.stringify(featuredProduct)),
      products: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories))
    },
  }
}