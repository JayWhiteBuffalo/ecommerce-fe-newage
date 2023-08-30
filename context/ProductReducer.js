import {
    FILTER_PRODUCTS,
    CLEAR_FILTER,
  } from './types';

  const ProductReducer = (state, action) => {
    console.log(state)
      switch(action.type) {
          case FILTER_PRODUCTS:
              return {
                  ...state,
                  filtered: state.products.filter(product => {
                      const regex = new RegExp(`${action.payload}`, 'ig');
                      return(
                          product.title.match(regex) || product.description.match(regex)
                      );
                  })
              }

          case CLEAR_FILTER:
              return {
                  ...state,
                  filtered: null
              }

          default:
              return state;
      }
  }

  export default ProductReducer;