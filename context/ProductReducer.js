import {
    SEARCH_PRODUCTS,
    CLEAR_FILTER,
    FILTER_CATEGORIES,
    FILTER_BY_PRICE,
    FILTER_BY_TRAIT,
    SORT_PRODUCTS,
  } from './types';

  const ProductReducer = (state, action) => {
    
      switch(action.type) {
          case SEARCH_PRODUCTS:
            console.log(state)
              return {
                  ...state,
                  filtered: state.products.filter(product => {
                      const regex = new RegExp(`${action.payload}`, 'ig');
                      return(
                          product.title.match(regex) || product.description.match(regex)
                      );
                  })
              }

          case FILTER_CATEGORIES:
            console.log(state)
            if((state.products.filter(product => (action.payload).includes(product.category)).length <= 0)){
                return{
                    ...state,
                    filtered: state.products
                }
            } else {
                return{
                    ...state,
                    filtered: state.products.filter(product => (action.payload).includes(product.category))               
                    }
            }

            case FILTER_BY_PRICE:
                let products = state.products
                let params = action.payload
               
                if(state.filtered === null || state.filtered.length === 0){
                    let result = [];
                    for (let i = 0; i < products.length; i++) {
                    if(products[i].price >= params[0] && products[i].price <= params[1]){
                    result.push(products[i])
                        }   
                    } 
                    return{
                        ...state,
                        filtered: result
                    }
                    
                }
                if(state.filtered != null && state.filtered.length > 0){
                    let result = [];
                    // let orderedProducts = filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    if(state.filtered[0].price !== params[0] || state.filtered[state.filtered.length-1].price !== params[1]){
                        for (let i = 0; i < products.length; i++) {
                            if(products[i].price >= params[0] && products[i].price <= params[1]){
                            result.push(products[i])
                                }   
                            } 
                    }
                    return{
                        ...state,
                        filtered: result
                    }
                 }
                  else if 
                    // let orderedProducts = filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    (state.filtered.length === 0 && state.products[0].price === params[0] && state.products[state.products.length-1].price === params[1]){
                    return{
                        ...state,
                        filtered: state.products
                    }
                 }


          case FILTER_BY_TRAIT:
            let result = [];
            console.log(action)
            state.products.map((p, i) =>{
                if(p.properties !== undefined && p.properties.primary !== undefined && p.properties.secondary !== undefined && p.properties.third !== undefined){
                    if((action.payload).includes(p.properties.primary.trim())){
                        result.push(p)
                    }
                    if((action.payload).includes(p.properties.secondary.trim())){
                        result.push(p)
                    }
                    if((action.payload).includes(p.properties.third.trim())){
                        result.push(p)
                    }
                }
        })
        if(action.payload.length === 0){
            return{
                ...state,
                filtered: state.products
            }
        } else {
                return{
                    ...state,
                    filtered: result
                }
            }
            
          
          case SORT_PRODUCTS:
            let filtered = state.filtered
            if(action.payload === 'ph2l'){
                let result = (filtered).sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                return {
                    ...state,
                    filtered:result
                }
            }
            if(action.payload === "dn2o"){
                    let result = ((filtered).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)));
                    return {
                        ...state,
                        filtered:result
                    }
                }
            if(action.payload === "z2a"){
                let result = (filtered.sort((a, b) => b.title.replaceAll(' ','').toUpperCase().localeCompare(a.title.replaceAll(' ','').toUpperCase())));
                return {
                    ...state,
                    filtered:result
                }
            }
            if(action.payload === 'pl2h'){
                    let result = (filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
                    return {
                        ...state,
                        filtered:result
                    }
                }
            if(action.payload === "do2n"){
                    let result = (filtered.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)));
                    return {
                        ...state,
                        filtered:result
                    }
                }
            if(action.payload === "a2z"){
                    let result = (filtered.sort((a, b) => a.title.replaceAll(' ','').toUpperCase().localeCompare(b.title.replaceAll(' ','').toUpperCase())));
                    return {
                        ...state,
                        filtered:result
                    }
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