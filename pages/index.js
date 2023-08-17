import Featured from "@/components/Featured"
import styled from "styled-components";
import Header from "@/components/Header"
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modals/Product";
import { Category } from "@/modals/Category";
import Center from "@/components/Center";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/Newsletter";
import CategoryMenu from "@/components/CategoryMenu";
import CategorySection from "@/components/CategorySection";
import AboveBanner from "@/components/AboveBanner";

export default function HomePage({featuredProduct, newProducts, categories}) {

  const LandingGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4 1 ;
  `

  const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  `

  return(
    <>
    <Header categories={categories}/>
        <Banner/>
        <CategorySection/>
        <Featured product={featuredProduct}/>
    <Center>
    <NewProducts products={newProducts} />
    </Center>
    </>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '644dae97295015b745c614ba';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}});
  const categories = await Category.find({}, null, {sort: {'_id':-1}});
  console.log(featuredProduct)
  return {
    props: {
      featuredProduct: JSON.parse (JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      categories: JSON.parse(JSON.stringify(categories))
    },
  }
}