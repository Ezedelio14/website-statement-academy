import React from "react";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { SwiperSlide } from "swiper/react";
import CoursesCard from "@/views/courses/components/CoursesCard";
import { useRouter } from "@/i18n/routing";
import { Section } from "@/components/common/section/Section";
import { useApiLoadCourses } from "@/services/api/useApiLoadCourses";
import { Spinner } from "@/components/shared/spinner/Spinner";

interface Props {
  courseId: string;
}
export function ExploreCoursesSection({ courseId }: Props) {
  const router = useRouter();
  const { exploreCourses } = useExploreCoursesTr();

  const { courses, isLoadingCourses } = useApiLoadCourses({
    page: 1,
    limit: 15,
    categoryId: courseId,
  });
  return (
    <Section className="flex flex-col gap-y-[80px] w-full mt-[160px]">
      <h2 className="text-[2rem] font-bold">
        {exploreCourses("explore-courses.Course.others")}
      </h2>

      {isLoadingCourses ? (
        <div className="w-full h-[438px] flex justify-center items-center ">
          <Spinner />
        </div>
      ) : (
        <CarouselGrid amount={4}>
          {courses?.data?.items?.map((course, index) => (
            <SwiperSlide key={index}>
              <CoursesCard
                key={index}
                title={course?.title}
                thumbnail={course?.banner}
                duration={course?.duration}
                lessons={course?.numberLessons}
                description={course?.description}
                onClick={() => router.push(`/course/${course?.id}`)}
              />
            </SwiperSlide>
          ))}
        </CarouselGrid>
      )}
    </Section>
  );
}
