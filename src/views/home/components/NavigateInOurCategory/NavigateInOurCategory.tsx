import { cn } from "@/utils/tw";
import { Link } from "@/i18n/routing";
import { SwiperSlide } from "swiper/react";
import LightSvg from "@/assets/svg/LightSvg";
import React, { useEffect, useState } from "react";
import { Spinner } from "@/components/shared/spinner/Spinner";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { useApiLoadCourses } from "@/services/api/useApiLoadCourses";
import { NavigateInOurCategoryCard } from "./NavigateInOurCategoryCard";
import { useApiLoadCategories } from "@/services/api/useApiLoadCategory";

export function NavigateInOurCategory() {
  const { homeTr } = useHomeTr();
  const [state, setState] = useState<string>();
  const { categories, isLoadingCategories } = useApiLoadCategories();

  const { courses, isLoadingCourses } = useApiLoadCourses({
    page: 1,
    limit: 15,
    categoryId: state,
  });

  useEffect(() => {
    if (categories?.data?.length > 0) {
      setState(categories?.data[0]?.id);
    }
  }, [isLoadingCategories]);

  return (
    <div className="flex flex-col items-center gap-y-[80px] py-[80px] w-full">
      <h2 className="text-[2rem] font-bold">
        {homeTr("home.NavigateInOurCategory.title")}
      </h2>
      <div className="flex gap-x-[32px] mt-2 pl-[112px] w-full">
        <div className="w-[384px] max-h-[656px] overflow-auto flex flex-col gap-y-6">
          {isLoadingCategories ? (
            <div className="w-full h-[656px] flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            categories?.data?.map((item: any, index: number) => {
              const tagIndex = index + 1;
              return (
                <div
                  key={index}
                  onClick={() => setState(item?.id)}
                  className={cn(
                    "bg-blue-1 py-[42px] flex items-center px-6 rounded-[8px] gap-x-4 cursor-pointer hover:opacity-50",
                    {
                      "bg-gradient-1": item?.id === state,
                    }
                  )}
                >
                  <LightSvg />
                  <span>{item?.name}</span>
                </div>
              );
            })
          )}
        </div>
        <div className="flex-1 bg-blue-2 h-[656px] rounded-l-[16px] overflow-hidden flex flex-col gap-y-6">
          <div className="w-full h-[60px] bg-blue-3 flex items-center justify-between px-[24px]">
            <span>
              {(courses as any)?.data?.total}{" "}
              {homeTr("home.NavigateInOurCategory.courses-about")}{" "}
              {"Marketing Digital"}
            </span>
            <Link
              href={"/explore-courses"}
              className="text-blue hover:opacity-50 transition-all cursor-pointer"
            >
              {homeTr("home.NavigateInOurCategory.see-all-courses")}
            </Link>
          </div>
          <div>
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
        </div>
      </div>
    </div>
  );
}
