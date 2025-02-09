import { Section } from "@/components/common/section/Section";
import React from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { HomeAcademyCard } from "./HomeAcademyCard";
import ClockSvg from "@/assets/svg/Clock";

export function HomeAcademyContent() {
  const { homeTr } = useHomeTr();

  return (
    <Section className="flex flex-row justify-between py-[80px]">
      <div className="max-w-[488px]">
        <h2 className="text-[2rem] font-bold">
          {homeTr("home.MiraAcademy.title")}
        </h2>
        <div className="mt-[40px]">
          {Array(3)
            .fill(undefined)
            .map((_, index) => {
              return (
                <>
                  <HomeAcademyCard
                    key={index}
                    label={homeTr(
                      `home.MiraAcademy.contents.${index + 1}.title1` as any
                    )}
                    description={homeTr(
                      `home.MiraAcademy.contents.${
                        index + 1
                      }.description` as any
                    )}
                  />
                  {index < 2 && <div className="gradient-border my-[32px]" />}
                </>
              );
            })}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px] mt-2">
        {Array(12)
          .fill(undefined)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-4 items-center bg-blue-1 p-[33px] rounded-[8px]"
            >
              <ClockSvg />
              <span>{homeTr("home.MiraAcademy.items.1")}</span>
            </div>
          ))}
      </div>
    </Section>
  );
}
