import { Category } from "@/modals/Category";
import Link from "next/link";
import styled from "styled-components";

const CategoryLinks = styled(Link)`
    color: #000;
    text-decoration: none;
`;

const LinksCont = styled.div`
    width: 100%;
    display: flex;
    gap: 1 rem;
    
`
export default function CategoryNav(props) {


    return(
        <LinksCont>
        {props.categories.map((cat) => (
            <>
            {cat.parent ? (null) : (<CategoryLinks href={cat.name}>{cat.name}</CategoryLinks>)}
            </>
        ))}
            <CategoryLinks href="./about">About</CategoryLinks>
        </LinksCont>
    )
}