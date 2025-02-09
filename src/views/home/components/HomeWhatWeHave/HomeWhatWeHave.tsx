import { Section } from "@/components/common/section/Section";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import HomeWhatWeHaveBg from "@/assets/img/home_what_we_have_bg.jpg";
import Image from "next/image";

export function HomeWhatWeHave() {
  const { homeTr } = useHomeTr();
  return (
    <div className="relative mt10 lg:mt-[400px] lg:h-[379px] mt-[109px] overflow-hidden flex items-center">
      <div className="absolute -z-10 top-0 right-0 h-[379px] w-full bg-cover bg-center" style={{ backgroundImage: `linear-gradient(#030b12, rgba(0, 0, 0, 0.4)), url(${HomeWhatWeHaveBg.src})`}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
      </div>
      <Section className="flex flex-col items-center h-[300px] justify-center">
        <h2 className="text-[1.5rem] font-bold text-center">
          {homeTr("home.WhatWeHave.title")}
        </h2>
        <div className="grid grid-cols-3 gap-y-8 divide-x divide-gray-3 mt-8 lg:mt-[80px]">
          {["courses", "teachers", "lessons"].map((item, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center px-8 md:px-[112px] gap-y-2 py-1"
            >
              <span className="text-center text-blue text-[28px] md:text-[3rem] font-bold flex">
                <span>+</span>
                 {90 + index}
              </span>
              <span className="text-center text-lg">
                {homeTr(`home.WhatWeHave.items.${item}` as any)}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
