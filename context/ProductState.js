import { useReducer, useState, } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from './ProductReducer';
import {
        SEARCH_PRODUCTS,
        CLEAR_FILTER,
        SORT_PRODUCTS,
        FILTER_PRODUCTS
} from './types';
import { mongooseConnect } from "@/lib/mongoose"


const ProductState = ({products, categories, children}) => {

    const initialState = {
        products: children.props.products,
        categories: children.props.categories,
        filtered: children.props.products,    
    }



const [state, dispatch] = useReducer(ProductReducer, initialState)
const [loadedProducts, setLoadedProducts] = useState(initialState.products);

//Filter Products
const searchProducts = (text) => {
    dispatch({ type: SEARCH_PRODUCTS, payload: text});
};

const filterProducts = (params) => {
    dispatch({ type: FILTER_PRODUCTS, payload: params});
}

const sortProducts = (sort) => {
    dispatch({type: SORT_PRODUCTS, payload: sort})
}

//Clear filter
const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
};


return(
    <ProductContext.Provider
        value={{
            products:state.products,
            categories: state.categories,
            filtered: state.filtered,
            clearFilter,
            setLoadedProducts,
            filterProducts,
            sortProducts,
        }}
        >
            {children}
        </ProductContext.Provider>
);
};

export default ProductState;


// export async function getServerSideProps() {
//     await mongooseConnect();
//     const products= await Product.find({}, null, {sort:{'_id':-1}});
//     const categories = await Category.find({}, null, {sort: {'_id':-1}});
//     return {
//         props:{
//             products:{
//                 products:JSON.parse(JSON.stringify(products)),
//             },
//             categories: JSON.parse(JSON.stringify(categories))
//         }
//     };
// }