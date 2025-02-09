"use client";
import React from "react";
import ExploreCoursesTags from "./components/ExploreCoursesTags";
import { ExploreCoursesContainer } from "./components/ExploreCoursesContainer";
import { CourseProvider } from "./context/CourseContext";

export function ExploreCoursesView() {
  return (
    <CourseProvider>
      <div className="w-full flex flex-col justify-center">
        <ExploreCoursesTags />
        <ExploreCoursesContainer />
      </div>
    </CourseProvider>
  );
}
