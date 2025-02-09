import React from "react";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { SwiperSlide } from "swiper/react";
import { NavigateInOurCategoryCard } from "@/views/home/components/NavigateInOurCategory/NavigateInOurCategoryCard";

interface Props {
  label: string;
  items?: any[];
  hideShowAll?: boolean;
  onSeeAll?: () => void;
}
export function ExploreCoursesSection({
  label,
  items,
  hideShowAll,
  onSeeAll,
}: Props) {
  const { exploreCourses } = useExploreCoursesTr();
  return (
    <div className="flex flex-col gap-y-9 w-full">
      <div className="flex gap-x-4">
        <span>{label}</span>
        <div className="h-full w-[1px] bg-gray-1" />
        {!hideShowAll && (
          <div
            onClick={onSeeAll}
            className="text-blue text-base hover:opacity-50 transition-all cursor-pointer"
          >
            {exploreCourses("explore-courses.Courses.see-all")}
          </div>
        )}
      </div>
      <div>
        <CarouselGrid amount={3}>
          {items?.map((item, index) => (
            <SwiperSlide key={index}>
              <NavigateInOurCategoryCard {...item} />
            </SwiperSlide>
          ))}
        </CarouselGrid>
      </div>
    </div>
  );
}
