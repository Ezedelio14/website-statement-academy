import React, { useEffect } from "react";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { SwiperSlide } from "swiper/react";
import { NavigateInOurCategoryCard } from "@/views/home/components/NavigateInOurCategory/NavigateInOurCategoryCard";
import { useApiListProducts } from "@/services/hooks/useApiListProducts";
import { Spinner } from "@/components/shared/spinner/Spinner";
import { useRouter } from "@/i18n/routing";
import { useApiLoadCourses } from "@/services/api/useApiLoadCourses";

interface Props {
  items?: any[];
  filter?: string;
  hideShowAll?: boolean;
}
export function ExploreCoursesSection({ items, filter, hideShowAll }: Props) {
  const router = useRouter();
  const { exploreCourses } = useExploreCoursesTr();
  const { courses, isLoadingCourses } = useApiLoadCourses({
    page: 1,
    limit: 10,
    categoryId: filter ? JSON?.parse(filter)?.id : undefined,
  });

  useEffect(() => {
    console.log(courses);
  }, [isLoadingCourses]);

  return (
    <div className="flex flex-col gap-y-9 w-full">
      <div className="flex gap-x-4">
        <span>
          {courses?.totalElements +
            " " +
            exploreCourses("explore-courses.Courses.courses-in") +
            " " +
            filter}
        </span>
        <div className="h-full w-[1px] bg-gray-1" />
        {!hideShowAll && (
          <div
            onClick={() => router.push(`explore-courses/${filter}`)}
            className="text-blue text-base hover:opacity-50 transition-all cursor-pointer"
          >
            {exploreCourses("explore-courses.Courses.see-all")}
          </div>
        )}
      </div>
      {isLoadingCourses ? (
        <div className="w-full h-[550px] flex justify-center items-center ">
          <Spinner />
        </div>
      ) : (
        <div>
          <CarouselGrid amount={3}>
            {items?.map((item, index) => (
              <SwiperSlide key={index}>
                <NavigateInOurCategoryCard {...item} />
              </SwiperSlide>
            ))}
          </CarouselGrid>
        </div>
      )}
    </div>
  );
}
