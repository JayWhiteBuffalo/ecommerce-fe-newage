import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import ProductContext from "@/context/ProductContext";
import loupe from "../../public/images/loupe.png";
import Image from "next/image";


const Aside = styled.aside`
width: auto;
height: fit-content;

display: flex;
gap: 2rem;
padding: .5rem;
justify-content: end;
align-items: center;
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
const InputBox = styled.input`
height: 30px;
width: 15vw;
padding: 0px 10px;
border: none;
background-color: transparent;
font-size: 1rem;
margin-top: .15rem;
:focus {
    outline:none;
}
`;

const IconCont = styled.button`
display: flex;
position: relative;
justify-content: center;
align-items: center;
padding: .5rem;
border: none;
width: 40px;
cursor: pointer;
background-color: transparent;
img{
position: relative;
width: 100%;
}
`;

const SearchCont = styled.div`
background-color: white;
border-radius: 5px;
height:20px;
display: flex;
padding: .75rem;
align-items: center;
`

export default function ProductSearch() {

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
            <Aside>
                <h2> Search Products</h2> 
                <SearchCont>
                    <InputBox
                        value={searchValue}
                        type='text'
                        placeholder='Search'
                        onChange={handleChange}
                    />
                    <IconCont>
                        <Image src={loupe} alt=""      style={{
                        width: '100%',
                        height: 'auto',
                        }}/>
                    </IconCont>
                </SearchCont>
            </Aside>
    )
}


{/* <SearchCont>
<InputBox onChange={(e)=>handleChange(e)} type="text" placeholder="Search"/>
<IconCont>
<Image src={loupe} alt=""      style={{
width: '100%',
height: 'auto',
}}/>
</IconCont>
</SearchCont> */}