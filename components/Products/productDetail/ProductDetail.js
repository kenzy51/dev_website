import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import {styled} from 'styled-components';
const SwiperImage = styled.img`
max-height:300px;
`
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperComponent = styled.div`
cursor:grab;
max-width:500px;
`
const InnerSlides = styled.div`
max-width:300px;
`
const ProductDetail = () => {
  return (
    <div className='container'>
      <h1>Product Detail</h1>
    <SwiperComponent>
    <Swiper
        spaceBetween={10}
        slidesPerView={1}
      >
        <InnerSlides>
        <SwiperSlide>
          <SwiperImage src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperImage src="https://images.pexels.com/photos/339567/pexels-photo-339567.jpeg?cs=srgb&dl=pexels-zukiman-mohamad-339567.jpg&fm=jpg" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperImage src="https://images.pexels.com/photos/339567/pexels-photo-339567.jpeg?cs=srgb&dl=pexels-zukiman-mohamad-339567.jpg&fm=jpg" alt="Image 3" />
        </SwiperSlide>
            </InnerSlides>
      </Swiper>
        </SwiperComponent>
    </div>
  );
};

export default ProductDetail;
