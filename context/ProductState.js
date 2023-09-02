import { useReducer, useState, } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from './ProductReducer';
import {
        SEARCH_PRODUCTS,
        CLEAR_FILTER,
        FILTER_CATEGORIES,
        FILTER_BY_PRICE,
        FILTER_BY_TRAIT,
        SORT_PRODUCTS
} from './types';
import { mongooseConnect } from "@/lib/mongoose"


const ProductState = ({products, categories, children}) => {

    // console.log(children.props.products[0].properties.primary)
    const initialState = {
        products: children.props.products,
        categories: children.props.categories,
        filtered: children.props.products,    
    }



const [state, dispatch] = useReducer(ProductReducer, initialState)
const [loadedProducts, setLoadedProducts] = useState(initialState.products);

//Filter Products
const filterProducts = (text) => {
    dispatch({ type: SEARCH_PRODUCTS, payload: text});
};

const filterCategories = (id) => {
    dispatch({type: FILTER_CATEGORIES, payload: id})
};

const filterByPrice = (price) => {
    dispatch({type: FILTER_BY_PRICE, payload: price})
}

const filterByTrait = (trait) => {
    dispatch({type: FILTER_BY_TRAIT, payload: trait})
}

const sortProducts = (sort) => {
    dispatch({type: SORT_PRODUCTS, payload: sort})
}

//Clear filter
const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
};

//Updates State of current Filtered Products
// const updateCache = (products) => {
//     if(products === []){
//         setLoadedProducts(initialState.products)
//         console.log(loadedProducts)
//     } else {
//     setLoadedProducts(products)
//     console.log(loadedProducts)
//     }
// };

return(
    <ProductContext.Provider
        value={{
            products:state.products,
            categories: state.categories,
            filtered: state.filtered,
            filterProducts,
            filterCategories,
            clearFilter,
            setLoadedProducts,
            filterByPrice,
            filterByTrait,
            sortProducts,
            loadedProducts,
        }}
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