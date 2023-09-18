import styled, {css} from "styled-components"
import { primary } from "@/lib/colors";

export const ButtonStyle = css`
background-color: #5542F6;
border: 0;
color: #fff;
padding: 5px 15px;
cursor: pointer;
display: inline-flex;
align-items: center;
text-decoration: none;
font-weight: 400;
svg{
    height: 16px;
    margin-right: 5px;
}
${props => props.block && css`
    display:block;
    width: 100%;
    `}
${props => props.white && !props.outline && css`
    background-color: #fff;
    color: #008;
    `}
${props => props.white && props.outline && css`
    background-color: transparent;
    color: #000;
    border: 1px solid black;
    `}
${props => props.primary && !props.outline && css`
    background-color: ${primary};
    border: 1px solid ${primary};
    color:#fff;
    `}
${props => props.primary && props.outline && css`
    background-color: transparent;
    border: 1px solid ${primary};
    color:${primary};
    `}
${props => props.card &&  css`
    width: 100%;
    position: relative;
    background-color: transparent;
    border: 1px solid black;
    color:black;
    border-radius: 0;
    padding: .5rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    letter-spacing: .1rem;
    &:hover{
        background-color: black;
        color: white;
    }
    `}
${props => props.itemCard && css`
    width: 50%;
    height: 35px;
    position: relative;
    background-color: white;
    opacity: 100%;
    border: 1px solid black;
    color:black;
    border-radius: 0;
    padding: .5rem .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .65rem;
    letter-spacing: .1rem;
    &:hover{
        background-color: black;
        color: white;
    }
`}
${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 18px 20px;
    svg{
        height: 24px;
    }
    `}
`;
const StyledButton = styled.button`
   ${ButtonStyle}
`;

export default function Button ({children, ...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    )
}