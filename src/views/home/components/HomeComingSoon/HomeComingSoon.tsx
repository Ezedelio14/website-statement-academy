import React from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { SwiperSlide } from "swiper/react";
import useWindowSize from "@/hooks/useWindowSize"; // Import custom hook

export function HomeComingSoon() {
  const { homeTr } = useHomeTr();
  const { width = 0 } = useWindowSize();

  const items = [
    {
      id: 1,
      year: 2024,
      mentor: "Júlia Maria",
      course: "Marketing Digital",
      title: "Como planejar o ano fiscal",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      year: 2024,
      mentor: "Júlia Maria",
      course: "Marketing Digital",
      title: "Como planejar o ano fiscal",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      year: 2024,
      mentor: "Júlia Maria",
      course: "Marketing Digital",
      title: "Como planejar o ano fiscal",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      year: 2024,
      mentor: "Júlia Maria",
      course: "Marketing Digital",
      title: "Como planejar o ano fiscal",
      image: "https://via.placeholder.com/150",
    },
  ];

  const getAmount = () => {
    if (width < 768) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  return (
    <div className="flex flex-col items-center gap-y-[80px] py-[80px] w-full px-4 md:px-8">
      <h2 className="text-[2rem] font-bold text-center">
        {homeTr("home.ComingSoon.title")}
      </h2>
      <CarouselGrid amount={getAmount()}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white shadow-md text-center h-[250px] rounded-[8px] overflow-hidden">
              <img
                src={
                  "https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
                }
                alt={item.title}
                className="w-full h-full rounded-md object-cover"
              />

              <div className="z-10 absolute left-0 top-0 w-full h-full p-[24px] flex flex-col items-start justify-between">
                <div>
                  <span className="text-blue-1 bg-white rounded-[16px] py-[6px] px-[16px]">
                    {item.year}
                  </span>
                </div>

                <div className="flex flex-col gap-y-2 items-start">
                  <div>
                    <span className="text-2xl fon-bold">{item.title}</span>
                  </div>
                  <div className="flex items-center text-sm line-clamp-1">
                    <span className="text-gray-2">
                      {homeTr("home.ComingSoon.mentor")}:{" "}
                    </span>
                    <span className="ml-2 text-white font-semibold">
                      {" "}
                      {item.mentor}
                    </span>
                    <div className="rounded-full size-[8px] bg-white mx-2" />
                    <span className="text-gray-2">{item.course}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CarouselGrid>
    </div>
  );
}
