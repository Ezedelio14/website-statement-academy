import React from "react";
import { Section } from "@/components/common/section/Section";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { CoursesBtn } from "@/components/common/button/CoursesBtn";
import { SocialAuthCard } from "@/components/shared/card/SocialAuthCard";

export function HomeHero() {
  const { homeTr } = useHomeTr();

  return (
    <Section className="mt-[86px] lg:min-h-[538px] flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between max-h-[1440px] px-4 md:px-8">
      <div className="max-w-[336px] px-1 md:max-w-[592px] text-center md:text-left">
        <h1 className="text-[1.5rem] md:text-[3rem] font-bold text-center lg:text-left">
          {homeTr("home.Hero.title")}
        </h1>
        <p className="mt-4 lg:mt-6 px-3 text-[1rem] lg:text-[1.125rem] text-center lg:text-left">
          {homeTr("home.Hero.description")}
        </p>
        <div className="w-full flex justify-center lg:justify-start">

        <CoursesBtn className="mt-6 lg:mt-8" />
        </div>
      </div>
      <SocialAuthCard className="w-full lg:w-auto hidden lg:flex" />
    </Section>
  );
}
