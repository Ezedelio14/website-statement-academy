import React, { useEffect } from "react";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { SwiperSlide } from "swiper/react";
import { NavigateInOurCategoryCard } from "@/views/home/components/NavigateInOurCategory/NavigateInOurCategoryCard";
import { useApiListProducts } from "@/services/hooks/useApiListProducts";
import { Spinner } from "@/components/shared/spinner/Spinner";
import { useRouter } from "@/i18n/routing";
import { useApiLoadCourses } from "@/services/api/useApiLoadCourses";
import useWindowSize from "@/hooks/useWindowSize";

interface Props {
  items?: any[];
  filter?: string;
  hideShowAll?: boolean;
}
export function ExploreCoursesSection({ items, filter, hideShowAll }: Props) {
  const router = useRouter();
  const reFilter = filter ? JSON?.parse(filter) : undefined;
  const { exploreCourses } = useExploreCoursesTr();
  const { courses, isLoadingCourses } = useApiLoadCourses({
    page: 1,
    limit: 15,
    categoryId: reFilter?.id,
  });

  const { width } = useWindowSize();

  const getAmount = () => {
    if (width < 768) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  return (
    <div className="flex flex-col gap-y-9 w-full px-4 md:px-8">
      <div className="flex gap-x-4">
        <span>
          {`${courses?.data?.items?.length ?? 0} ${exploreCourses(
            "explore-courses.Courses.courses-in"
          )} ${reFilter?.name}`}
        </span>
        <div className="h-full w-[1px] bg-gray-1" />
        {hideShowAll && !courses?.data?.items?.length ? (
          <></>
        ) : (
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
        <div className="w-full">
          <CarouselGrid amount={getAmount()}>
            {courses?.data?.items?.map((item, index) => (
              <SwiperSlide key={index}>
                <NavigateInOurCategoryCard
                  id={item?.id}
                  img={item?.banner}
                  title={item?.title}
                  course={item?.title}
                  hours={item?.duration}
                  trailer={item?.trailer}
                  lessons={item?.numberLessons}
                  description={item?.description}
                  mentor={item?.author[0]?.name}
                />
              </SwiperSlide>
            ))}
          </CarouselGrid>
        </div>
      )}
    </div>
  );
}
