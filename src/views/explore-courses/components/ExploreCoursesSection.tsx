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
  name?: string;
  filter?: string;
  hideShowAll?: boolean;
}
export function ExploreCoursesSection({ name, filter, hideShowAll }: Props) {
  const router = useRouter();
  const reFilter = filter ? JSON?.parse(filter) : undefined;
  const { exploreCourses } = useExploreCoursesTr();

  const { courses, isLoadingCourses } = useApiLoadCourses({
    page: 1,
    limit: 15,
    name: name,
    categoryId: reFilter?.id,
  });

  return (
    <div className="flex flex-col gap-y-9 w-full">
      <div className="flex gap-x-4 items-center">
        <span>
          {`${courses?.data?.items?.length ?? 0} ${exploreCourses(
            "explore-courses.Courses.courses-in"
          )} ${name ?? reFilter?.name}`}
        </span>
        <div className="h-[24px] w-[1px] bg-gray-1" />
        {hideShowAll && !courses?.data?.items?.length ? (
          <></>
        ) : (
          !name && (
            <div
              onClick={() => router.push(`explore-courses/${filter}`)}
              className="text-blue text-base hover:opacity-50 transition-all cursor-pointer"
            >
              {exploreCourses("explore-courses.Courses.see-all")}
            </div>
          )
        )}
      </div>

      {isLoadingCourses ? (
        <div className="w-full h-[550px] flex justify-center items-center ">
          <Spinner />
        </div>
      ) : (
        <div>
          <CarouselGrid amount={3}>
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
