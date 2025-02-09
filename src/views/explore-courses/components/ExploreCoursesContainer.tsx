import React from "react";
import { useCourseContext } from "../context/CourseContext";
import { Section } from "@/components/common/section/Section";
import { ExploreCoursesSection } from "./ExploreCoursesSection";
import { useSearchContext } from "@/context/SearchContext";

export function ExploreCoursesContainer() {
  const { filters } = useCourseContext();
  const { searchQuery } = useSearchContext();

  return (
    <Section className="flex flex-col gap-y-[80px] items-center w-full mt-[80px]">
      {searchQuery && <ExploreCoursesSection name={searchQuery} />}

      {filters?.map((filter, index) => (
        <ExploreCoursesSection key={index} filter={filter} />
      ))}
    </Section>
  );
}
