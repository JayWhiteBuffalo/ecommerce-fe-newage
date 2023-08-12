import Center from "./Center";
import styled from "styled-components";
import crystals from "../public/images/crystals.png"
import divination from "../public/images/divination.jpg"
import healinghands from "../public/images/healinghands.webp"

const CategoryBtn = styled.button`
    display: flex;
    flex-direction: column;
    flex: 1 0 33%;
    border: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    img{
        width: 100%;
        height: 40vh;
        border-radius: 5%;
    }
`

const CatTag = styled.div`
    position: relative;
    background-color: white;
    padding: 15px 20px;
    border-radius: 20% / 50%;;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    height: auto;
`

const TagCont = styled.div`
    position: absolute;
    width: 25%;
    height: auto;
    bottom: 10%;
`

const CategorySection = styled.div`
    position:relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem;
`


export default function CategoryCards() {
    return (
        <>
        <Center>
            <CategorySection>
                <CategoryBtn>
                    <img src={"https://i.pinimg.com/originals/d2/b5/2c/d2b52c38b5dbc66df4220f570aece8a9.jpg"} alt=""/>
                    <TagCont>
                    <CatTag>Crystals</CatTag>
                    </TagCont>
                </CategoryBtn>
                <CategoryBtn>
                    <img src={"https://www.villagerockshop.com/media/images/green-bracelets.jpg"} alt=""/>
                    <TagCont>
                    <CatTag>Jewley</CatTag>
                    </TagCont>
                </CategoryBtn>
                <CategoryBtn>
                    <img src={"https://i.ytimg.com/vi/XokegB-P9wA/maxresdefault.jpg"} alt=""/>
                    <TagCont>
                    <CatTag>New Arrivals</CatTag>
                    </TagCont>
                </CategoryBtn>
                <CategoryBtn>
                    <img src={"https://i.pinimg.com/originals/1f/5b/cb/1f5bcbd5ed4714b401218c8601fbde52.jpg"} alt=""/>
                    <TagCont>
                    <CatTag>Best Sellers</CatTag>
                    </TagCont>
                </CategoryBtn>
            </CategorySection>
        </Center>
        </>
    )
}