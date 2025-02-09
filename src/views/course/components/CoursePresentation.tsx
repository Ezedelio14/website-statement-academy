import React, { useState } from "react";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import { Section } from "@/components/common/section/Section";
import { PlayBtn } from "@/components/common/button/PlayBtn";
import PlayBlueSvg from "@/assets/svg/PlayBlueSvg";
import ArrowSvg from "@/assets/svg/ArrowSvg";
import ChevronDown from "@/assets/svg/ChevronDown";

export function CoursePresentation() {
  const [state, setState] = useState(0);
  const { exploreCourses } = useExploreCoursesTr();
  return (
    <Section>
      <h2 className="text-[2rem] font-bold">
        {exploreCourses("explore-courses.Course.presentation")}
      </h2>

      <div className="flex w-full mt-[40px] h-[800px] gap-x-[32px]">
        <div className="flex-1 bg-blue-3 relative h-full rounded-[16px]">
          <div className="top-0 left-0 h-full w-full flex justify-center items-center">
            <PlayBtn />
          </div>
        </div>

        <div className="w-[384px] flex flex-col">
          <div className="bg-blue-1 w-full py-[12px] px-[16px] gap-x-4 rounded-[8px] flex items-center cursor-pointer">
            <PlayBlueSvg />
            <span>{exploreCourses("explore-courses.Course.see-trailer")}</span>
          </div>

          <div className="mt-[32px] mb-4">
            {exploreCourses("explore-courses.Course.journey")}
          </div>

          <div className="flex-1 overflow-auto flex flex-col gap-y-2">
            {Array(20)
              .fill(undefined)
              .map((_, index) => (
                <div
                  key={index}
                  onClick={() => setState(index)}
                  className="bg-blue-1 w-full py-[12px] px-[16px] gap-x-4 rounded-[8px] flex items-center justify-between cursor-pointer"
                >
                  <span className="line-clamp-1">
                    {index + 1}º Módulo: Introdução
                  </span>
                  <ChevronDown />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-[40px] flex flex-col gap-y-6">
        <p className="w-[800px] text-base">
          O marketing está presente nas nossas vidas muito mais do que
          imaginamos. Faça uma caminhada pelas ruas da cidade, uma busca no
          Google, ligue a televisão ou o rádio, abra um jornal e você será
          impactado por alguma ação de marketing
        </p>

        <span className="text-gray text-base">
          {exploreCourses("explore-courses.Course.mentor")}{" "}
          <span className="text-white">Dumilda José</span>
        </span>

        <span className="text-gray text-base">
          {exploreCourses("explore-courses.Course.duration")}{" "}
          <span className="text-white">
            10 vídeos-aulas (18 Horas e 19 minutos)
          </span>
        </span>

        <span className="text-gray text-base">
          {exploreCourses("explore-courses.Course.category")}{" "}
          <span className="text-white">Marketing</span>
        </span>
      </div>
    </Section>
  );
}
