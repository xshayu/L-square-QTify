import React from "react";
import styles from "./carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CarouselNavigation from "./Navigation";

const Carousel = ({ data, component }) => {
    return (
        <div className={styles.carouselWrapper}>
          <Swiper
            initialSlide={0}
            modules={{ Navigation }}
            slidesPerView={"auto"}
            spaceBetween={"40"}
            allowTouchMove
          >
            <CarouselNavigation direction={'left'} />
            <CarouselNavigation direction={'right'} />
            {data?.map((item) => (
              <SwiperSlide key={item?.id}>{component(item)}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
};

export default Carousel;
