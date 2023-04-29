import Featured from "@/components/Featured"
import Header from "@/components/Header"
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modals/Product";

export default function HomePage({featuredProduct}) {
  console.log(featuredProduct);
  return(
    <>
    <Header/>
    <Featured featuredProduct={featuredProduct}/>
    </>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '644d44726d59c3d89bdba103';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  return {
    props: {featuredProduct: JSON.parse (JSON.stringify(featuredProduct))},
  }
}