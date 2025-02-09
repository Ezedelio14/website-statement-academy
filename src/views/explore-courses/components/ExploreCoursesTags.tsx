import { Section } from "@/components/common/section/Section";
import React, { useState } from "react";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import { TagBtn } from "@/components/common/button/TagBtn";

export default function ExploreCoursesTags() {
  const [state, setState] = useState(1);
  const { exploreCourses } = useExploreCoursesTr();
  return (
    <Section className="flex flex-col items-center w-full mt-[80px]">
      <h1 className="text-[3rem] font-bold">
        {exploreCourses("explore-courses.Tags.title")}
      </h1>
      <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-8">
        {Array(11)
          .fill(undefined)
          .map((_, index) => (
            <TagBtn
              key={index}
              isSelected={state === index + 1}
              onClick={() => setState(index + 1)}
              label={exploreCourses(
                `explore-courses.Tags.tags.${index + 1}` as any
              )}
            />
          ))}
      </div>
    </Section>
  );
}
