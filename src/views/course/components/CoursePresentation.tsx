import React, { useEffect, useState } from "react";
import PlayBlueSvg from "@/assets/svg/PlayBlueSvg";
import ChevronDown from "@/assets/svg/ChevronDown";
import { PlayBtn } from "@/components/common/button/PlayBtn";
import { Section } from "@/components/common/section/Section";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import { useApiLoadModuleCoursesById } from "@/services/api/useApiLoadModuleCoursesById";
import { Spinner } from "@/components/shared/spinner/Spinner";
import CourseSelectModule from "./CourseSelectModule";
import ReactPlayer from "react-player";

interface Props {
  mentor: string;
  lessons: string;
  banner?: string;
  duration: number;
  trailer?: string;
  category?: string;
  courseId?: string;
  isLoading?: boolean;
  description?: string;
}

export function CoursePresentation({
  courseId,
  isLoading,
  trailer,
  banner,
  lessons,
  mentor,
  description,
  duration,
  category,
}: Props) {
  const [state, setState] = useState(false);
  const { exploreCourses } = useExploreCoursesTr();

  const { modules, isLoadingModules } = useApiLoadModuleCoursesById({
    id: courseId,
  });

  useEffect(() => {
    console.log("ZEdino ", modules);
  }, [isLoadingModules]);

  return (
    <Section>
      <h2 className="text-[2rem] font-bold">
        {exploreCourses("explore-courses.Course.presentation")}
      </h2>

      {isLoading || isLoadingModules ? (
        <div className="w-full h-[580px] flex justify-center items-center ">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex w-full mt-[40px] h-[800px] gap-x-[32px]">
            <div className="flex-1 bg-blue-3 relative h-full rounded-[16px] overflow-hidden">
              {state ? (
                <ReactPlayer
                  width="100%"
                  height="100%"
                  playing={true}
                  controls={true}
                  url={trailer}
                />
              ) : (
                <>
                  <div className="absolute top-0 left-0 z-20 h-full w-full flex justify-center items-center">
                    <PlayBtn onClick={() => setState(true)} />
                  </div>
                  <img
                    src={banner}
                    alt="banner"
                    className="h-full w-full object-cover"
                  />
                </>
              )}
            </div>

            <div className="w-[384px] flex flex-col">
              <div
                onClick={() => setState(true)}
                className="bg-blue-1 w-full py-[12px] px-[16px] gap-x-4 rounded-[8px] flex items-center cursor-pointer hover:opacity-50"
              >
                <PlayBlueSvg />
                <span>
                  {exploreCourses("explore-courses.Course.see-trailer")}
                </span>
              </div>

              <div className="mt-[32px] mb-4">
                {exploreCourses("explore-courses.Course.journey")}
              </div>

              <div className="flex-1 overflow-auto flex flex-col gap-y-2">
                {modules?.data?.items?.map((module, index) => (
                  <CourseSelectModule
                    key={index}
                    label={module?.title}
                    lessons={module?.lessons}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[40px] flex flex-col gap-y-6">
            <p className="w-[800px] text-base">{description}</p>

            <span className="text-gray text-base">
              {exploreCourses("explore-courses.Course.mentor")}{" "}
              <span className="text-white">{mentor}</span>
            </span>

            <span className="text-gray text-base">
              {exploreCourses("explore-courses.Course.duration")}{" "}
              <span className="text-white">
                {lessons} vídeos-aulas ({duration}h)
              </span>
            </span>

            <span className="text-gray text-base">
              {exploreCourses("explore-courses.Course.category")}:{" "}
              <span className="text-white">{category}</span>
            </span>
          </div>
        </>
      )}
    </Section>
  );
}
