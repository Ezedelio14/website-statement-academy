import { Button } from "@/components/common/button/Button";
import { Section } from "@/components/common/section/Section";
import React from "react";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";
import PlayVideoSvg from "@/assets/svg/PlayVideoSvg";
import ShareSvg from "@/assets/svg/ShareSvg";

export function CourseThumb() {
  const { componentsTr } = useComponentsTr();
  return (
    <Section className="relative h-[722px] flex justify-center items-center">
      <div className="flex flex-col items-center text-center w-[592px]">
        <span className="text-[56px]">MARKETING</span>
        <span className="font-[400]">
          Mentor: <span className="font-bold">Dumilda José</span>
        </span>
        <span className="mt-[24px] w-[500px] text-center">
          Marketing digital são ações de comunicação que as empresas podem
          utilizar por meio da in...
        </span>
        <div className="flex item-center justify-center mt-4">
          19 Aulas <div className="h-[24px] w-[1px] bg-white mx-3" />
          8h
        </div>

        <div className="flex justify-center mt-[32px] mb-[48px]">
          <Button
            label={componentsTr("components.Labels.create-account")}
            onClick={() => {}}
          />
        </div>

        <div className=" flex items-center justify-center w-full gap-x-[64px]">
          <button className="flex flex-col gap-y-4 items-center">
            <PlayVideoSvg />
            <span>{componentsTr("components.Labels.see-trailer")}</span>
          </button>

          <button className="flex flex-col items-center gap-y-4">
            <ShareSvg />
            <span>{componentsTr("components.Labels.share")}</span>
          </button>
        </div>
      </div>
    </Section>
  );
}
