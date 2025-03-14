import React from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { Section } from "@/components/common/section/Section";

export function HomeOverview() {
  const { homeTr } = useHomeTr();
  return (
    <Section className="flex flex-col items-center py-[79px] px-4 md:px-8">
      <h2 className="text-[2rem] font-bold mb-[80px] max-w-[594px] text-center">
        {homeTr("home.Overview.title")}
      </h2>

      <div className="bg-blue w-full h-[511px] rounded-md" />
    </Section>
  );
}
