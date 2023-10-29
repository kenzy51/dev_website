import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const styleSwiper = {
  maxWidth: "450px",
  cursor: "pointer",
};
export const ManufacturerSwiper = ({ photos }) => {
  return (
    <div style={styleSwiper}>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {photos &&
          photos?.map((photo) => (
            <SwiperSlide>
              <img src={photo} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
