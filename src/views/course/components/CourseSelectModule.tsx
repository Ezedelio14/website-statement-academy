import React, { useState } from "react";
import ChevronDown from "@/assets/svg/ChevronDown";
import { Lesson } from "@/services/api/useApiLoadModuleCoursesById";
import PlayVideoSvg from "@/assets/svg/PlayVideoSvg";

interface Props {
  label: string;
  lessons: Lesson[];
}

export default function CourseSelectModule({ label, lessons }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-blue-1 rounded-[8px] px-[16px]">
      <div
        className="w-full py-[12px] gap-x-4 flex items-center justify-between cursor-pointer hover:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="line-clamp-1 font-[500]">{label}</span>
        <div
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col mt-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex [&_svg]:size-[10px] items-center gap-x-2 py-4 border-t-[0.5px] border-gray-1 cursor-pointer"
            >
              {<PlayVideoSvg />}
              <span className="flex-1 line-clamp-1 text-gray text-sm">
                {lesson.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
