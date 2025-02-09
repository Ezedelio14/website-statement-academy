import React from "react";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";

interface Props {
  title?: string;
  isNew?: boolean;
  lessons?: number;
  duration?: number;
  thumbnail?: string;
  description?: string;
  onClick?: () => void;
}
export default function CoursesCard({
  title,
  description,
  duration,
  lessons,
  thumbnail,
  isNew,
  onClick,
}: Props) {
  const { exploreCourses } = useExploreCoursesTr();
  return (
    <div
      onClick={onClick}
      className="relative h-[438px] bg-blue-3 rounded-[8px] hover:opacity-50 cursor-pointer w-full bg-gradient-2 overflow-hidden"
    >
      <div className="flex items-center justify-center absolute left-0 top-0 h-full w-full">
        <img
          alt="banner"
          src={thumbnail}
          className="object-cover h-full w-full"
        />
      </div>
      {isNew && (
        <div className="flex absolute top-0 left-0 p-6">
          <div className="bg-white rounded-[16px] px-[16px] py-[6px] text-blue-1">
            {exploreCourses("explore-courses.Courses.new-course")}
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 h-full w-full p-[24px] text-center flex items-end justify-center">
        <div className="flex flex-col gap-y-4">
          <span className="text-[2rem] line-clamp-1">{title}</span>
          <span className="text-lg line-clamp-2">{description}</span>

          <div className="flex items-center gap-x-2 justify-center">
            <span>
              {lessons} {exploreCourses("explore-courses.Courses.lessons")}
            </span>
            <div className="h-[24px] w-[1px] bg-white" />
            <span>{duration}h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
