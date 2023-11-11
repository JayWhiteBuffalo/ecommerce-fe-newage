import styled from "styled-components";
import { FaStar } from "react-icons/fa";
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
            <p>Our Pangea contact person was Jeff. Jeff did a great job communicating to setup the process of getting a new roof, understanding insurance information, and the actual work that would be done to our home. For top quality work and great customer service, Pangea is recommended. This is the second time I have worked with Pangea to have a new roof put on a home.</p>
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