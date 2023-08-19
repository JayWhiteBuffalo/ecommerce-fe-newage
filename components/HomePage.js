import styled from "styled-components";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import Featured from "./Featured";
import Center from "./Center";
import NewProducts from "./NewProducts";
import CategoryMenu from "./CategoryMenu";
import ad from "../public/images/plantbannerad.jpg"
import BelowBanner from "./BelowBanner";
import HotDeal from "./HotDeal";

const CatMenu = styled.aside`
display: flex;
`;

const HeroCont = styled.section`
    position: relative;
    display:flex;
    padding: 0rem 1rem;
    gap: 1rem;
    margin-top: 1rem;
`;

const BannerWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ProductSecWrap = styled.div`
    width: 100%;
    display: flex;
`
export default function HomePage ({featuredProduct, newProducts, categories}) {

    return(
        <>
        <HeroCont>
        <CatMenu>
            <CategoryMenu categories={categories}/>
        </CatMenu>
        <BannerWrap>
        <Banner/>
        </BannerWrap>
        </HeroCont>
        <BelowBanner/>
        {/* <Featured product={featuredProduct}/> */}
            <HeroCont>
            <HotDeal product={featuredProduct}/>
            <NewProducts products={newProducts} />
            </HeroCont>
        </>
    )
}