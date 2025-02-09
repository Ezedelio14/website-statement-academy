import React from "react";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";
import { SocialAuthCard } from "../card/SocialAuthCard";

export function StartToday() {
  const { componentsTr } = useComponentsTr();
  return (
    <div className="w-full flex  items-center justify-between h-[698px]">
      <div className="w-[592px]">
        <span className="text-[1.75rem] font-bold">
          {componentsTr("components.StartToDay.title")}
          {"\n"}
          <span className="text-blue">Mirantes Academy</span>
        </span>
        <p className="mt-4 text-base">
          {componentsTr("components.StartToDay.description")}
        </p>
      </div>
      <div>
        <SocialAuthCard />
      </div>
    </div>
  );
}
