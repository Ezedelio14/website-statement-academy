import React, { useState } from "react";
import { Section } from "@/components/common/section/Section";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import { useParams } from "next/navigation";
import CoursesCard from "./CoursesCard";
import { useRouter } from "@/i18n/routing";
import { decodeText } from "@/utils/text";
import { useApiLoadCourses } from "@/services/api/useApiLoadCourses";
import { Spinner } from "@/components/shared/spinner/Spinner";
import { useSearchContext } from "@/context/SearchContext";

export default function CoursesContainer() {
  const router = useRouter();
  const { courseType } = useParams();
  const [state, setState] = useState("all");
  const { searchQuery } = useSearchContext();
  const { exploreCourses } = useExploreCoursesTr();

  const selectCourse = courseType
    ? JSON?.parse(decodeText(courseType as string))
    : "";

  const { courses, isLoadingCourses } = useApiLoadCourses({
    page: 1,
    limit: 15,
    name: searchQuery,
    categoryId: selectCourse?.id,
  });

  return (
    <Section className="w-full flex flex-col  mt-[159px]">
      <span className="text-xl">{selectCourse?.name}</span>
      <div className="flex gap-x-[239px] mt-6">
        <div className="relative flex flex-col gap-y-4">
          {["all", "coming-soon"]?.map((item, index) => (
            <div
              key={index}
              onClick={() => setState(item)}
              className="relative cursor-pointer text-gray-2 text-base"
            >
              {state === item && (
                <div className="absolute h-full -left-[calc(100%+32px)] flex items-center">
                  <div className="bg-blue h-[2px] w-[48px]" />
                </div>
              )}
              {exploreCourses(`explore-courses.Courses.filters.${item}` as any)}
            </div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-3 gap-[32px]">
          {isLoadingCourses ? (
            <div className="flex justify-center items-center h-[10rem]">
              <Spinner />
            </div>
          ) : (
            <>
              {courses?.data?.items?.map((course, index) => (
                <CoursesCard
                  key={index}
                  title={course?.title}
                  thumbnail={course?.banner}
                  duration={course?.duration}
                  lessons={course?.numberLessons}
                  description={course?.description}
                  onClick={() => router.push(`/course/${course?.id}`)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
