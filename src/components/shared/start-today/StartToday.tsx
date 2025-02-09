import React from "react";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";
import { SocialAuthCard } from "../card/SocialAuthCard";

export function StartToday() {
  const { componentsTr } = useComponentsTr();
  return (
    <div className="mt-16 lg:mt-[86px] min-h-[538px] flex flex-col gap-y-10 gap-x-4 pb-8 md:gap-y-0 lg:flex-row items-center justify-between max-h-[1440px] px-4 md:px-8  h-[698px]lg:px-0">
      <div className="lg:w-[592px] flex flex-col justify-center items-center">
        <span className="text-[1.75rem] font-bold text-center md:text-left">
          {componentsTr("components.StartToDay.title")}
          {"\n"}
          <span className="text-blue  text-center md:text-left">Mirantes Academy</span>
        </span>
        <p className="mt-4 text-base text-center md:text-left">
          {componentsTr("components.StartToDay.description")}
        </p>
      </div>
        <SocialAuthCard className="w-full lg:w-auto" />
    </div>
  );
}
