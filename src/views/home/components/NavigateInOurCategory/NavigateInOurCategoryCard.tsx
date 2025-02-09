import React, { useState } from "react";
import { PlayBtn } from "@/components/common/button/PlayBtn";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import dynamic from "next/dynamic";
import { useRouter } from "@/i18n/routing";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => (
    <div className="w-full flex rounded-2xl h-64 lg:h-full skeleton bg-gray-100" />
  ),
});
interface Props {
  id?: string;
  img?: string;
  title?: string;
  hours?: number;
  lessons: number;
  mentor: string;
  course: string;
  trailer?: string;
  description?: string;
}

export function NavigateInOurCategoryCard({
  id,
  img,
  hours,
  title,
  course,
  mentor,
  lessons,
  trailer,
  description,
}: Props) {
  const router = useRouter();
  const { homeTr } = useHomeTr();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="rounded-[8px] overflow-hidden bg-blue-3 h-[550px] flex flex-col">
      <div className="relative h-[298px] bg-gray-1 overflow-hidden">
        <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center">
          {!isPlaying && (
            <div className="relative z-10">
              <PlayBtn onClick={() => setIsPlaying(true)} />
            </div>
          )}
          <div className="flex items-center justify-center absolute left-0 top-0 h-full w-full">
            {isPlaying && trailer ? (
              <ReactPlayer
                url={trailer}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
              />
            ) : (
              <img
                src={img}
                alt="banner"
                className="object-cover h-full w-full"
              />
            )}
          </div>
          <span className="mt-4 text-sm">
            {homeTr("home.NavigateInOurCategory.see-trailer")}
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col px-6 py-4 gap-y-4 justify-between">
        <div className="flex flex-col gap-y-4">
          <span className="text-lg font-bold line-clamp-2">{title}</span>
          <div className="flex flex-col gap-y-2 items-start">
            <div className="flex items-center text-sm line-clamp-1">
              <span className="text-gray-2">
                {homeTr("home.ComingSoon.mentor")}:
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
            onClick={() => router.push(`/course/${id}`)}
            className="bg-gray-1 px-4 py-2 text-sm rounded-[8px] hover:opacity-50 transition-all"
          >
            {homeTr("home.NavigateInOurCategory.see-course")}
          </button>
          <span>
            {lessons} {homeTr("home.WhatWeHave.items.lessons")}
          </span>
          <span>{hours}h</span>
        </div>
      </div>
    </div>
  );
}
