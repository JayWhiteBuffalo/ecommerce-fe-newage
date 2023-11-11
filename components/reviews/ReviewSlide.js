import styled from "styled-components";
import { gold } from "@/lib/colors";

const ReviewSlideCont = styled.div`
height: fit-content;
width: 100%;
border-width: 2px;
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
padding-left: 2rem;
padding-right: 1rem;
`;

const SlideInnerCont = styled.div`
grid-column-start: 2;
grid-column: span 11 / span 11;
`;

const ReviewTextCont = styled.div`
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.025rem;
line-height: 1.75;
padding-left: 1.5rem;
padding-right: 4rem;

`;

const RatingWrap = styled.div`
width: 80%;
display: flex;
flex-direction: column;
gap: 0rem;
align-items: end;
margin: 0rem;
p {
    font-weight: 600;
    font-size: 1.225rem;
    line-height: 1.75rem;
    color: ${gold};
}
`;

const RatingCont = styled.div`
display: flex;
gap: 0.25rem;
font-size: 1.25rem;
line-height: 1.75rem;
color: ${gold};
`

const ReviewSlide = () => {
    return(
        <>
        <ReviewSlideCont>
        <SlideInnerCont>
          <ReviewTextCont>
            <p>Incredible store! I trust everything they sell to be extremely high quality, 100% authentic, and reasonably priced! The customer service staff are extremely knowledgeable and kind. Wonderful gem in MO. I make sure to visit everytime I need a new item. They're selection is massive and I always find something special that fits my needs perfectly.</p>
          </ReviewTextCont>
        </SlideInnerCont>
      </ReviewSlideCont>
      <RatingWrap>
        {/* <RatingCont>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </RatingCont> */}
        <p>- Real Customer</p>
      </RatingWrap>
        </>

    )
}

export default ReviewSlide;