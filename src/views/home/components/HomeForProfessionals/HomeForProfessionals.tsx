import { Section } from "@/components/common/section/Section";
import React from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { HomeForProfessionalsCard } from "./HomeForProfessionalsCard";
import ClockSvg from "@/assets/svg/Clock";

export function HomeForProfessionals() {
  const { homeTr } = useHomeTr();

  return (
    <Section className="flex flex-row justify-between py-[80px]">
      <div className="max-w-[488px]">
        <h2 className="text-[2rem] font-bold">
          {homeTr("home.ForProfessionals.title")}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-[32px] mt-2">
        {Array(6)
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
