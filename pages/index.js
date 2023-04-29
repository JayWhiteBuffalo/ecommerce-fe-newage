import Featured from "@/components/Featured"
import Header from "@/components/Header"
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modals/Product";
import Center from "@/components/Center";

export default function HomePage({featuredProduct, newProducts}) {
  return(
    <>
    <Header/>
    <Center>
    <Featured product={featuredProduct}/>
    <NewProducts products={newProducts} />
    </Center>
    </>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '644d44726d59c3d89bdba103';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}});
  return {
    props: {
      featuredProduct: JSON.parse (JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  }
}