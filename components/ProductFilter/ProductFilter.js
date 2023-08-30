import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import { format_price } from "@/utils/helpers";
import Input from "../Input";
import ProductContext from "@/context/ProductContext";


const Aside = styled.aside`
width: 500px;
height: fit-content;
border: 1px solid black;
`

const DropdownSection = styled.div`
position: relative;
width: 100%;
border: 1px solid gray;
border-left: none;
border-right: none;
`;

const SectionHead = styled.button`
position: relative;
width: 100%;
border: none;
padding: .25rem;
h3{
text-align: left;
font-size: 1rem;
font-weight: 600;
letter-spacing: 3px;
}
`

const Item = styled.div`
display: flex;
width:auto;
gap: .5rem;
justify-items: center;
align-items: center;
padding: .5rem 0rem;
margin: .5rem;
`


export default function ProductFilter() {

    const productContext = useContext(ProductContext);
    const {filterProducts, clearFilter } = productContext;

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        if(searchValue !== ''){
            filterProducts(searchValue);
        } else {
            clearFilter();
        }
    }

//     function findParams(){
//         let x = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//         let y = [x[0].price, x[x.length-1].price]
//         return y
//      }
 
//      let params = findParams();
//      let min = format_price(params[0])
//      let max = format_price(params[1])

//     const[filters, setFilters] = useState([])
//     const[stage, setStage] = useState([])
//     const [price, setPrice] = useState([min, max]);

//     let list = filters;

//     function updateFilter(e){
//         //price filter function
//         filterCategories(e);
//         setFilters(list)
//         console.log(list)
//         getFilteredProducts();
//     }


//     function filterCategories(e){
//         let filteredArray = list.includes(e.currentTarget.value);
//         if(list.length <= 0){
//             list.push(e.currentTarget.value)
//             return
//         }  
//         if(filteredArray === false){
//             list.push(e.currentTarget.value)
//             return
//         } else {
//             let index = list.indexOf(e.currentTarget.value)
//             list.splice(index,1)
//         }
//     }



//     function filterPrice(){
//         result = [];
//         for (let i = 0; i < stage.length; i++) {
//             if(stage[i].price >= price[0] && stage[i].price <= price[1]){
//                 result.push(stage[i])
//             }   
//         }
//         console.log(result)

//     }

//     function getFilteredProducts(){
//         if(list.length <= 0){
//             setStage(products)
//         } else {
//         const result = products.filter(p => list.includes(p.category));
//         setStage(result)
//     }
// }
    
    return(
            // <Aside>
            //     <div>
            //         <div>
            //             <h2> FILTER</h2>
            //         </div>
            //     </div>
            //     <div>
            //         <DropdownSection >
            //             <CategoryFilter categories={categories} updateFilter={updateFilter} />
            //         </DropdownSection>
            //         <DropdownSection >           
            //             <PriceFilter filterPrice={filterPrice} min={min} max={max} products = {products} price={price} setPrice={setPrice}/>
            //         </DropdownSection>
            //     </div>
            // </Aside>
            <Aside>
                  <div>
                    <div>
                         <h2> FILTER</h2>
                     </div>
                 </div>
                 <form>
                    <input
                        value={searchValue}
                        type='text'
                        placeholder='Search'
                        onChange={handleChange}
                    />
                 </form>

            </Aside>
    )
}