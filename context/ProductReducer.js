import {
    SEARCH_PRODUCTS,
    CLEAR_FILTER,
    SORT_PRODUCTS,
    FILTER_PRODUCTS,
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

            case FILTER_PRODUCTS:
                const { categories, priceRange, traits } = action.payload;
                console.log(state)
                //Validate price range input
                const [minPrice, maxPrice] = priceRange;
                const validPriceRange = priceRange && priceRange.length === 2 &&
                    !isNaN(priceRange[0]) && !isNaN(priceRange[1]);

                if (!validPriceRange) {
                    // Handle invalid price range input
                    return state;
                }

                // Apply filters
                let filteredProducts = state.products;

                // Filter by categories
                console.log(categories)
                if (categories && categories.length > 0) {
                    filteredProducts = filteredProducts.filter(product => categories.includes(product.category));
                    console.log(filteredProducts)
                }

                // Filter by price range
                
                filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

                // Filter by traits
                if (traits && traits.length > 0) {
                    filteredProducts = filteredProducts.filter(product => {
                        return traits.every(trait => {
                            return (
                                product.properties && 
                                ((product.properties.primary !== undefined && product.properties.primary.includes(trait)) ||
                                (product.properties.secondary !== undefined &&  product.properties.secondary.includes(trait)) ||
                                (product.properties.third !== undefined &&  product.properties.third.includes(trait)))
                            );
                        });
                    });
                }

                return {
                    ...state,
                    filtered: filteredProducts.length > 0 ? filteredProducts : state.products // Handle empty filtered products
                };
            
          
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