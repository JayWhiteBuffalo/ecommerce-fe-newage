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

