import Link from "next/link";
import styled from "styled-components";
import icon from "../public/images/return-box.png"
import { secondary } from "@/lib/colors";

const SectionCont = styled.section`
    width: 350px;
    height:auto;
    background-color:whitesmoke;
    padding: 0px;
    display: flex;
    flex-direction: column;
    
`

const TitleCont = styled.header`
    background-color: ${secondary};
    width: 100%;
    display: flex;
`;
const Title = styled.h1`
    letter-spacing: 1.5px;
    padding: 0rem 1.5rem;
    font-size: 1rem;
    color: white;
`;
const CatCont = styled.ul`
    list-style:none;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
`;
const CatBox = styled(Link)`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    text-decoration:none;
    padding: .5rem 0rem;
    border: 1px solid #ccc9;
    border-left-style: none;
    border-right-style: none;
    border-top-style: none;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`
const IconCont = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
padding: .5rem;
img{
    width: 55%;
}
`;

const TextCont = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: start;
color: black;
position: relative;
padding: .75rem 0rem; 
h3{
    color:gray;
    margin:0px;

}
span{
    font-size: .9rem;
    opacity: 70%;

    color: #ccc
}
`
const ValueText = styled.text`
font-weight: 700;
font-size: .75rem;
`

const CategoryMenu = ({categories}) => {

    console.log(categories)

    return(
        <SectionCont>
            <TitleCont>
                <Title>CATEGORIES</Title>
            </TitleCont>
            <CatCont>
                
                {categories.map((cat, id) => 
                cat.parent != null ? ( null) : (
                    <CatBox key={id} href={"/" + cat.name}>
                        <IconCont>
                            <img src={icon.src}/>
                        </IconCont>
                        <TextCont>
                            <h3>{cat.name}</h3>
                            <span>This will lead you to the Home page. This is Sampel text to text the styles.</span>
                        </TextCont>
                    </CatBox>
                ))}
            </CatCont>
        </SectionCont>
    )
}

export default CategoryMenu;