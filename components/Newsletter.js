import styled from "styled-components";

const Bar = styled.div`
    width : 100vw;
    height: 6px;
    display: flex;
    justify-content: end;
    div {
        width : 50vw;
        height: 3px;
        background-color: purple;
        display: flex;
        margin-right: 7.5vw;
    }
`;

export default function NewsLetter() {

    return(
        <>
        <Bar>
            <div>
            </div>
        </Bar>
        </>
    )
}