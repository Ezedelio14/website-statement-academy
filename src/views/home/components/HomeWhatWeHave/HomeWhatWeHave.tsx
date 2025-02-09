import React from "react";
import { Section } from "@/components/common/section/Section";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import HomeWhatWeHaveBg from "@/assets/img/home_what_we_have_bg.jpg";
import Image from "next/image";

export function HomeWhatWeHave() {
  const { homeTr } = useHomeTr();
  return (
    <div className="relative mt-[400px] h-[379px] overflow-hidden flex items-center">
      <div className="absolute -z-10 top-0 right-0">
        <Image src={HomeWhatWeHaveBg} alt="what we have bg" />
      </div>
      <Section className="flex flex-col items-center">
        <h2 className="text-[2rem] font-bold">
          {homeTr("home.WhatWeHave.title")}
        </h2>
        <div className="grid grid-cols-3 divide-x divide-gray-3 mt-[80px]">
          {["courses", "teachers", "lessons"].map((item, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center px-[112px] gap-y-2 py-1"
            >
              <span className="text-center text-blue text-[3rem] font-bold">
                + {90 + index}
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
