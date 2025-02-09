import React from "react";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { SwiperSlide } from "swiper/react";
import CoursesCard from "@/views/courses/components/CoursesCard";
import { useRouter } from "@/i18n/routing";
import { Section } from "@/components/common/section/Section";

export function ExploreCoursesSection() {
  const router = useRouter();
  const { exploreCourses } = useExploreCoursesTr();

  const courses = [
    {
      title: "React para Iniciantes",
      isNew: true,
      lessons: 12,
      duration: 5,
      thumbnail: "/images/react-course.jpg",
      description:
        "Aprenda os fundamentos do React e construa seus primeiros componentes.",
    },
    {
      title: "TypeScript Avançado",
      isNew: false,
      lessons: 20,
      duration: 8,
      thumbnail: "/images/typescript-course.jpg",
      description: "Domine o TypeScript e melhore a tipagem dos seus projetos.",
    },
    {
      title: "Next.js do Zero ao Avançado",
      isNew: true,
      lessons: 15,
      duration: 6,
      thumbnail: "/images/nextjs-course.jpg",
      description: "Aprenda a criar aplicações performáticas com Next.js.",
    },
    {
      title: "CSS Moderno com Tailwind",
      isNew: false,
      lessons: 10,
      duration: 4,
      thumbnail: "/images/tailwind-course.jpg",
      description:
        "Utilize Tailwind CSS para estilizar suas aplicações de forma eficiente.",
    },
    {
      title: "Next.js do Zero ao Avançado",
      isNew: true,
      lessons: 15,
      duration: 6,
      thumbnail: "/images/nextjs-course.jpg",
      description: "Aprenda a criar aplicações performáticas com Next.js.",
    },
    {
      title: "CSS Moderno com Tailwind",
      isNew: false,
      lessons: 10,
      duration: 4,
      thumbnail: "/images/tailwind-course.jpg",
      description:
        "Utilize Tailwind CSS para estilizar suas aplicações de forma eficiente.",
    },
    {
      title: "Next.js do Zero ao Avançado",
      isNew: true,
      lessons: 15,
      duration: 6,
      thumbnail: "/images/nextjs-course.jpg",
      description: "Aprenda a criar aplicações performáticas com Next.js.",
    },
    {
      title: "CSS Moderno com Tailwind",
      isNew: false,
      lessons: 10,
      duration: 4,
      thumbnail: "/images/tailwind-course.jpg",
      description:
        "Utilize Tailwind CSS para estilizar suas aplicações de forma eficiente.",
    },
    {
      title: "Next.js do Zero ao Avançado",
      isNew: true,
      lessons: 15,
      duration: 6,
      thumbnail: "/images/nextjs-course.jpg",
      description: "Aprenda a criar aplicações performáticas com Next.js.",
    },
    {
      title: "CSS Moderno com Tailwind",
      isNew: false,
      lessons: 10,
      duration: 4,
      thumbnail: "/images/tailwind-course.jpg",
      description:
        "Utilize Tailwind CSS para estilizar suas aplicações de forma eficiente.",
    },
    {
      title: "Next.js do Zero ao Avançado",
      isNew: true,
      lessons: 15,
      duration: 6,
      thumbnail: "/images/nextjs-course.jpg",
      description: "Aprenda a criar aplicações performáticas com Next.js.",
    },
    {
      title: "CSS Moderno com Tailwind",
      isNew: false,
      lessons: 10,
      duration: 4,
      thumbnail: "/images/tailwind-course.jpg",
      description:
        "Utilize Tailwind CSS para estilizar suas aplicações de forma eficiente.",
    },
    {
      title: "Next.js do Zero ao Avançado",
      isNew: true,
      lessons: 15,
      duration: 6,
      thumbnail: "/images/nextjs-course.jpg",
      description: "Aprenda a criar aplicações performáticas com Next.js.",
    },
    {
      title: "CSS Moderno com Tailwind",
      isNew: false,
      lessons: 10,
      duration: 4,
      thumbnail: "/images/tailwind-course.jpg",
      description:
        "Utilize Tailwind CSS para estilizar suas aplicações de forma eficiente.",
    },
    {
      title: "Next.js do Zero ao Avançado",
      isNew: true,
      lessons: 15,
      duration: 6,
      thumbnail: "/images/nextjs-course.jpg",
      description: "Aprenda a criar aplicações performáticas com Next.js.",
    },
  ];
  return (
    <Section className="flex flex-col gap-y-[80px] w-full mt-[160px]">
      <h2 className="text-[2rem] font-bold">
        {exploreCourses("explore-courses.Course.others")}
      </h2>
      <CarouselGrid amount={4}>
        {courses?.map((item, index) => (
          <SwiperSlide key={index}>
            <CoursesCard
              key={index}
              {...item}
              isNew={false}
              onClick={() => router.push(`/course/${index}`)}
            />
          </SwiperSlide>
        ))}
      </CarouselGrid>
    </Section>
  );
}
