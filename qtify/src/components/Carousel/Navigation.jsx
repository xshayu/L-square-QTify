import React, { useEffect, useState } from 'react';
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./carousel.module.css";

const CarouselNavigation = ({ direction }) => {
  const swiper = useSwiper();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const handleSlideChange = () => {
      if (direction === "right") {
        setIsDisabled(swiper.isEnd);
      } else if (direction === "left") {
        setIsDisabled(swiper.isBeginning);
      }
    };

    swiper.on("slideChange", handleSlideChange);
    // Set initial state on mount
    handleSlideChange();

    return () => {
      swiper.off("slideChange", handleSlideChange); // Clean up event listener
    };
  }, [swiper, direction]);

  const handleClick = () => {
    if (direction === "right") {
      swiper.slideNext();
    } else if (direction === "left") {
      swiper.slidePrev();
    }
  };

  return (
    <div
      className={
        direction === "right"
          ? styles.rightNavigation
          : styles.leftNavigation
      }
    >
      {!isDisabled &&
        (direction === "right" ? (
          <RightArrow onClick={handleClick} />
        ) : (
          <LeftArrow onClick={handleClick} />
        ))}
    </div>
  );
};

export default CarouselNavigation;