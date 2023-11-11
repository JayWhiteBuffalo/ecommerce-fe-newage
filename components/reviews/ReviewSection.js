
import { Navigation, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef } from 'react';
import ReviewSlide from './ReviewSlide.js';
import styled from 'styled-components';
import { gold, secondary } from '@/lib/colors.js';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const SectionWrap = styled.section`
width: 100%;
height: 100%;
background-color: white;
padding: 0rem 2.75rem;
border-top: 2px solid  ${secondary};
`;

const SectionCont = styled.div`
display:flex;
flex-direction: column;
gap: 0rem;
`;

const SectionHead = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
div h2{
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2.75rem;
    padding-left: 3.25rem;
    color: ${gold};
}
`;

const ButtonCont = styled.div`
display: flex;
gap: 1rem;
`;

const ReviewButton = styled.button`
padding-left: 2rem;
padding-right: 2rem;
border-width: 4px;
`;

const SwiperCont = styled.div`
width: 100%;
height: 100%;
border-top-width: 4px;
`


const ReviewSection = () => {
  const [swiper, setSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  
  return (
    <SectionWrap>
      <SectionCont>
        <SectionHead>
          <div>
            <h2>From our Customers</h2>
          </div>
          {/* <ButtonCont> 
            <ReviewButton ref={prevRef}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </ReviewButton>
            <ReviewButton  ref={nextRef}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </ReviewButton>
          </ButtonCont> */}
        </SectionHead>
        <SwiperCont>
          <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop = {true}
            autoplay= {{
              delay: 5000,
            }}
            // navigation={{
            //   prevEl: prevRef,
            //   nextEl: nextRef,
            // }}
            // onInit={() => setSwiper(new Swiper('.swiper'))}
            //   onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
              <ReviewSlide/>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide/>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide/>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide/>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide/>
            </SwiperSlide>
          </Swiper>
          </div>
        </SwiperCont>
      </SectionCont>
    </SectionWrap>
  )
}

export default ReviewSection;