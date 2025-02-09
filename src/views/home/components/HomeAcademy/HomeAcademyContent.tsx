import { Section } from "@/components/common/section/Section";
import React from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { HomeAcademyCard } from "./HomeAcademyCard";
import ClockSvg from "@/assets/svg/Clock";
import useWindowSize from "@/hooks/useWindowSize";

export function HomeAcademyContent() {
  const { homeTr } = useHomeTr();
  const { width } = useWindowSize()

  const getAmount = () => {
    if (width < 768) return 4; // Mobile
    if (width < 1024) return 4; // Tablet
    return 12; // Desktop
  };
  return (
    <Section className="flex flex-col lg:flex-row justify-between gap-y-14 gap-x-4 py-[80px] px-4 md:px-8">
      <div className="lg:max-w-[488px]">
        <h2 className="text-2xl md:text-[2rem] font-bold">
          {homeTr("home.MiraAcademy.title")}
        </h2>
        <div className="mt-[40px] w-full">
          {Array(3)
            .fill(undefined)
            .map((_, index) => {
              return (
                
                <div key={index}>
                  <HomeAcademyCard
                    label={homeTr(
                      `home.MiraAcademy.contents.${index + 1}.title1` as any
                    )}
                    description={homeTr(
                      `home.MiraAcademy.contents.${
                        index + 1
                      }.description` as any
                    )}
                  />
                  {index < 2 && <div className="gradient-border my-[32px] w-full" />}
                </div>
              );
            })}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[100px]  md:mt-2">
        {Array(getAmount())
          .fill(undefined)
          .map((_, index) => (
            <div
              key={index + 23}
              className="flex flex-col gap-y-4 items-center bg-blue-1 p-[33px] rounded-[8px]"
            >
              <ClockSvg />
              <span className="text-center">{homeTr("home.MiraAcademy.items.1")}</span>
            </div>
          ))}
      </div>
    </Section>
  );
}
