import styled from "styled-components";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import Featured from "./Featured";
import Center from "./Center";
import NewProducts from "./NewProducts";
import CategoryMenu from "./CategoryMenu";
import ad from "../public/images/plantbannerad.jpg"
import BelowBanner from "./BelowBanner";

const CatMenu = styled.aside`
display: flex;
`;

const HeroCont = styled.section`
    position: relative;
    display:flex;
    padding: 0rem 1rem;
    gap: 1.5rem;
`;

const BannerWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
        <Center>
        <NewProducts products={newProducts} />
        </Center>
        </>
    )
}