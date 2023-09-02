import { CartContextProvider } from "@/context/CartContext";
import ProductState from "@/context/ProductState";
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
import url('https://fonts.googleapis.com/css2?family=Roboto&family=Tangerine&display=swap');

body{
  padding:0;
  margin:0;
  font-family: 'Roboto', sans-serif;
  background-color: #eee;
}
`;

export default function App({ Component, pageProps }) {

  return (
  <>
  <GlobalStyles />
  <CartContextProvider>
    <ProductState>
    <Component {...pageProps} />
    </ProductState>
  </CartContextProvider>
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