import { useReducer, useState } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from './ProductReducer';
import {
        FILTER_PRODUCTS,
        CLEAR_FILTER,
} from './types';
import { mongooseConnect } from "@/lib/mongoose"


const ProductState = ({products, categories, children}) => {

   

    const initialState = {
        products: children.props.products,
        categories: categories,
        filtered: null,    
    }


console.log(children)
const [state, dispatch] = useReducer(ProductReducer, initialState)
const [loadedProducts, setLoadedProducts] = useState(initialState.products);
//Filter Products
const filterProducts = (text) => {
    dispatch({ type: FILTER_PRODUCTS, payload: text});
};

//Clear filter
const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
};

return(
    <ProductContext.Provider
        value={{
            products:state.products,
            filtered: state.filtered,
            filterProducts,
            clearFilter,
        }}
        loadedProducts={loadedProducts}
        >
            {children}
        </ProductContext.Provider>
);
};

export default ProductState;


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