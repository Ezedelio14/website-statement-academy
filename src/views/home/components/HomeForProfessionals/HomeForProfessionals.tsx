import { Section } from "@/components/common/section/Section";
import React from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { HomeForProfessionalsCard } from "./HomeForProfessionalsCard";
import ClockSvg from "@/assets/svg/Clock";
import useWindowSize from "@/hooks/useWindowSize";

export function HomeForProfessionals() {
  const { homeTr } = useHomeTr();
  const { width } = useWindowSize()

  const getAmount = () => {
    if (width < 768) return 4; // Mobile
    if (width < 1024) return 4; // Tablet
    return 6; // Desktop
  };

  return (
    <Section className="flex flex-col lg:flex-row gap-y-8 justify-between py-[80px] px-4 md:px-8">
      <div className="max-w-[488px] mx-auto flex justify-center items-start">
        <h2 className="text-[2rem] font-bold text-center md:text-left">
          {homeTr("home.ForProfessionals.title")}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px] mt-2 px-6 md:px-0">
        {Array(getAmount())
          .fill(undefined)
          .map((_, index) => (
            <HomeForProfessionalsCard
              key={index}
              icon={<ClockSvg />}
              title={homeTr("home.ForProfessionals.items.1.title")}
              description={homeTr("home.ForProfessionals.items.1.description")}
            />
          ))}
      </div>
    </Section>
  );
}
