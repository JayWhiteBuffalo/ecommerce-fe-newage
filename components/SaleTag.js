import styled from "styled-components";

const TagWrap = styled.div`
    
`

const TagCont = styled.div`
position: absolute;
top: 0%;
right: 0%;
width: 0;
height: 0;
border-style: solid;
border-width: 0 5rem 4rem 0;
border-color: transparent red   transparent transparent;
display: flex;
span{
    color: white;
    font-weight: 600;
    font-size: .75rem;
    position: relative;
    margin-left: 45px;
    margin-top: 5px;

}
`

export default function SaleTag () {


    return(
        <TagWrap>
        <TagCont> 
            <span>ON SALE</span>
        </TagCont>
        </TagWrap>
    )
}