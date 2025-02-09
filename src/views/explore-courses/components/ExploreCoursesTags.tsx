import React, { useEffect, useState } from "react";
import { TagBtn } from "@/components/common/button/TagBtn";
import { Section } from "@/components/common/section/Section";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import { useCourseContext } from "../context/CourseContext";
import { useApiLoadCategories } from "@/services/api/useApiLoadCategory";
import { Spinner } from "@/components/shared/spinner/Spinner";

export default function ExploreCoursesTags() {
  const { exploreCourses } = useExploreCoursesTr();
  const { filters, handleTagClick } = useCourseContext();
  const { categories, isLoadingCategories } = useApiLoadCategories();

  useEffect(() => {
    if (categories?.data?.length > 0) {
      handleTagClick(JSON.stringify(categories?.data[0]));
    }
  }, [isLoadingCategories]);

  return (
    <Section className="flex flex-col items-center w-full mt-[80px] px-4 md:px-8">
      <h1 className="text-2xl lg:text-[3rem] font-bold text-center">
        {exploreCourses("explore-courses.Tags.title")}
      </h1>
      <div className="w-full flex  flex-wrap items-center justify-center gap-4 mt-8 overflow-auto" style={{ scrollbarWidth: 'none' }}>
        {isLoadingCategories ? (
          <Spinner />
        ) : (
          categories?.data?.map((item: any, index: number) => {
            const tagIndex = index + 1;
            return (
              <TagBtn
                key={tagIndex}
                label={item?.name}
                isSelected={filters.includes(JSON.stringify(item))}
                onClick={() => handleTagClick(JSON.stringify(item))}
              />
            );
          })
        )}
      </div>
    </Section>
  );
}
