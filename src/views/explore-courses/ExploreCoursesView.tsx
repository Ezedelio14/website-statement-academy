"use client";
import React from "react";
import ExploreCoursesTags from "./components/ExploreCoursesTags";
import { ExploreCoursesContainer } from "./components/ExploreCoursesContainer";

export function ExploreCoursesView() {
  return (
    <div className="w-full flex flex-col justify-center">
      <ExploreCoursesTags />
      <ExploreCoursesContainer />
    </div>
  );
}
