import React from "react";
import { Section } from "@/components/common/section/Section";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { CoursesBtn } from "@/components/common/button/CoursesBtn";
import { SocialAuthCard } from "@/components/shared/card/SocialAuthCard";

export function HomeHero() {
  const { homeTr } = useHomeTr();

  return (
    <Section className="mt-[86px] min-h-[538px] flex items-center justify-between max-h-[1440px]">
      <div className=" max-w-[592px]">
        <h1 className="text-[3rem] font-bold">{homeTr("home.Hero.title")}</h1>
        <p className="mt-6 text-[1.125rem]">
          {homeTr("home.Hero.description")}
        </p>
        <CoursesBtn className="mt-8" />
      </div>
      <SocialAuthCard />
    </Section>
  );
}
