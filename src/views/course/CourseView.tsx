"use client";
import React, { useState } from "react";
import { CourseThumb } from "./components/CourseThumb";
import { CoursePresentation } from "./components/CoursePresentation";
import { ExploreCoursesSection } from "./components/OtherCourses";
import { useParams } from "next/navigation";
import { useApiLoadCoursesById } from "@/services/api/useApiLoadCoursesById";
import { Spinner } from "@/components/shared/spinner/Spinner";

export function CourseView() {
  const params = useParams()
  const courseId = params?.courseId?.toString() || ""
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)
  const { course, isLoadingCourse } = useApiLoadCoursesById({ id: courseId })

  return (
    <div className="relative text-white w-full flex flex-col justify-center px-4 md:px-8 mt-5">
      <div className="absolute top-0 left-0 h-[722px] overflow-hidden">
        {isLoadingCourse ? (
          <div className="w-[100vw] h-full flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <img
            alt="video"
            src={course?.data?.banner}
            className="object-cover w-[100vw] h-full"
          />
        )}
        <div className="opacity-gradient absolute top-0 h-[722px] w-full z-10" />
      </div>

      {isLoadingCourse ? (
        <div className="relative h-[722px]" />
      ) : (
        <div className="w-full relative z-50">
          <CourseThumb
            open={isTrailerOpen}
            title={course?.data?.title}
            mentor={course?.data?.mentor}
            trailer={course?.data?.trailer}
            duration={course?.data?.duration}
            lessons={course?.data?.numberLessons}
            description={course?.data?.description}
            onOpenTrailer={() => setIsTrailerOpen(true)}
          />
        </div>
      )}

      {!isLoadingCourse && (
        <CoursePresentation
          courseId={course?.data?.id}
          isLoading={isLoadingCourse}
          banner={course?.data?.banner}
          trailer={course?.data?.trailer}
          duration={course?.data?.duration}
          lessons={course?.data?.numberLessons}
          category={course?.data?.category?.name}
          description={course?.data?.description}
          mentor={course?.data?.authorId?.[0]?.name}
        />
      )}

      <ExploreCoursesSection courseId={course?.data?.category?.id} />
    </div>
  );
}
