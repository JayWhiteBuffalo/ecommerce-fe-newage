import styled from "styled-components";
import Center from "./Center";
import { gold, secondary } from "@/lib/colors";
import ProductFilter from "./ProductFilter/ProductSearch";
import ProductContext from "@/context/ProductContext";
import { useContext, useEffect } from "react";
import ProductBox from "./ProductBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";

const TitleCont = styled.div`
    width: 100%;
    height: 50px;
    margin: 0px 0px 50px 0px;
    text-align: left;
    font-size: 26px;
    font-weight: 600;
    position: relative;
    &:after{
        content:'';
        width: 95%;
        border-bottom: solid 1.5px #fff;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        border-color: ${gold};
    }
    &:before{
        content:'';
        width: 95%;
        border-bottom: solid 1.5px #fff;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        border-color: ${gold};
    }
`;

const Title = styled.h2`
    background-color: #eee;
    width: auto;
    display: inline-block;
    z-index: 3;
    padding: 0 20px 0 100px;
    color: ${gold};
    position: relative;
    font-family: calibri;
    font-weight: lighter;
    margin: 0;
`
const NPWrap = styled.section`
margin-bottom: 2rem;
`

const SlideCont = styled.div`

margin-bottom:3rem;
`


export default function NewProducts () {

    const productContext = useContext(ProductContext);
    const {products, filtered, setLoadedProducts,loadedProducts } = productContext;

    useEffect(() => {

        setLoadedProducts(filtered)
        }
    ,[filtered])


    return (
        <Center>
            <NPWrap>
            <TitleCont>
                <Title>New Arrivals</Title>
            </TitleCont>
        <Swiper
            pagination={{ dynamicBullets: true, clickable: true }}
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={5}
            loop = {true}
            >   
            {filtered !==null ? (
                filtered.map(product =>  
                <SwiperSlide>
                    <SlideCont>
                    <ProductBox key={product.id} {...product}/>
                    </SlideCont>
                </SwiperSlide>
            )) : (filtered.map(product => 
                <SwiperSlide>
                    <ProductBox key={product.id} {...product}/>
                </SwiperSlide>))}    
        </Swiper>
        </NPWrap>
        </Center>
    );
}