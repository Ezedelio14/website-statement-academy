"use client";
import React from "react";
import { CourseThumb } from "./components/CourseThumb";
import { CoursePresentation } from "./components/CoursePresentation";
import { ExploreCoursesSection } from "./components/OtherCourses";

export function CourseView() {
  return (
    <div className="relative text-white w-full flex flex-col justify-center">
      <div className="absolute top-0 left-0  h-[722px] overflow-hidden">
        <img
          src="https://latinamericanleadershipacademy.org/wp-content/uploads/2023/05/Why-is-mentorship-important-and-how-to-find-a-mentor-for-you-2048x1475.png"
          alt="video"
          className="object-cover"
        />
        <div className="opacity-gradient absolute top-0  h-[722px] w-full z-10" />
      </div>

      <div className="w-full relative z-50">
        <CourseThumb />
      </div>

      <CoursePresentation />

      <ExploreCoursesSection />
    </div>
  );
}
