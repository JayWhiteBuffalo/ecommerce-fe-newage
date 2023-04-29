import styled, {css} from "styled-components"
import { primary } from "@/lib/colors";

export const ButtonStyle = css`
background-color: #5542F6;
border: 0;
color: #fff;
padding: 5px 15px;
border-radius: 5px;
cursor: pointer;
display: inline-flex;
align-items: center;
text-decoration: none;
svg{
    height: 16px;
    margin-right: 5px;
}
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