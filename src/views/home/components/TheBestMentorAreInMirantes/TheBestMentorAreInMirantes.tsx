import React from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { SwiperSlide } from "swiper/react";

export function TheBestMentorAreInMirantes() {
  const { homeTr } = useHomeTr();

  const items = [
    {
      avatar:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
      mentor: "Júlio Sampaio",
    },
    {
      avatar:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
      mentor: "Artur Lourenço",
    },
    {
      avatar:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
      mentor: "Roberta Paulina",
    },
    {
      avatar:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
      mentor: "Maurícia Fernando",
    },
    {
      avatar:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
      mentor: "Júlio Sampaio",
    },
    {
      avatar:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
      mentor: "Artur Lourenço",
    },
    {
      avatar:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
      mentor: "Roberta Paulina",
    },
    {
      avatar:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
      mentor: "Maurícia Fernando",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center gap-y-[80px] py-[80px] w-full">
        <h2 className="text-[2rem] font-bold">
          {homeTr("home.ComingSoon.title")}
        </h2>
        <CarouselGrid amount={6}>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[500px] rounded-[8px] overflow-hidden">
                <img
                  src={item.avatar}
                  alt={item.mentor}
                  className="w-full h-full rounded-md object-cover"
                />

                <div className="absolute -bottom-[310px] -left-[100px] h-[500px] w-[500px] flex items-start justify-start">
                  <span className="rounded-[16px] py-[6px] px-[16px] text-border-white -rotate-90 text-[2rem]">
                    {item.mentor}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </CarouselGrid>
      </div>
    </div>
  );
}
