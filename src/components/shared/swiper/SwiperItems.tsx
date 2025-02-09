import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Swiper } from "swiper/react";
import ArrowSvg from "@/assets/svg/ArrowSvg";
import { Grid, Navigation } from "swiper/modules";
import React, { ReactNode, useRef, useState } from "react";

interface Props {
  amount?: number;
  children: ReactNode;
}

export default function CarouselGrid({ children, amount }: Props) {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  return (
    <div className="w-full mx-auto relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={amount ?? 4}
        navigation={false}
        modules={[Grid, Navigation]}
        onSwiper={handleSlideChange}
        grid={{ rows: 1, fill: "row" }}
        className="rounded-xl shadow-lg"
        onSlideChange={handleSlideChange}
      >
        {children}
      </Swiper>
      {!isBeginning && (
        <button
          className="z-50 size-[56px] absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-1 text-white p-2 rounded-full flex items-center justify-center"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <div className="relative rotate-[180deg]">
            <ArrowSvg />
          </div>
        </button>
      )}
      {!isEnd && (
        <button
          className="z-50 size-[56px] absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-1 text-white p-2 rounded-full flex items-center justify-center"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <div className="relative">
            <ArrowSvg />
          </div>
        </button>
      )}
    </div>
  );
}
