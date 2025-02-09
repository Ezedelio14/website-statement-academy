import React from "react";
import { PlayBtn } from "@/components/common/button/PlayBtn";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";

interface Props {
  img?: string;
  title?: string;
  hours?: number;
  lessons: number;
  mentor: string;
  course: string;

  onPlay?: () => void;
  description?: string;
  onClick?: () => void;
}
export function NavigateInOurCategoryCard({
  img,
  hours,
  title,
  onPlay,
  course,
  mentor,
  lessons,
  description,
  onClick,
}: Props) {
  const { homeTr } = useHomeTr();
  return (
    <div className="rounded-[8px] bg-blue-3 h-[550px] flex flex-col">
      <div className="relative rounded-t-[8px] h-[298px] bg-gray-1">
        <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center">
          <PlayBtn onClick={onPlay} />
          <span className="mt-4 text-sm">
            {homeTr("home.NavigateInOurCategory.see-trailer")}
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col px-6 py-4 gap-y-4 justify-between">
        <div className="flex flex-col gap-y-4">
          <span className="text-lg font-bold">{title}</span>
          <div className="flex flex-col gap-y-2 items-start">
            <div className="flex items-center text-sm line-clamp-1">
              <span className="text-gray-2">
                {homeTr("home.ComingSoon.mentor")}:{" "}
              </span>
              <span className="ml-2 text-white font-semibold line-clamp-1">
                {mentor}
              </span>
              <div className="rounded-full size-[8px] bg-white mx-2" />
              <span className="text-gray-2 line-clamp-1">{course}</span>
            </div>
          </div>
          <p className="line-clamp-2">{description}</p>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={onClick}
            className="bg-gray-1 px-4 py-2 text-sm rounded-[8px]"
          >
            {homeTr("home.NavigateInOurCategory.see-course")}
          </button>
          <span>
            {lessons} {homeTr("home.WhatWeHave.items.lessons")}
          </span>
          <span>
            {hours}
            hr
          </span>
        </div>
      </div>
    </div>
  );
}
