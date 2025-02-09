import React, { useState } from "react";
import { Section } from "@/components/common/section/Section";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";
import { useParams } from "next/navigation";
import CoursesCard from "./CoursesCard";
import { useRouter } from "@/i18n/routing";
import { decodeText } from "@/utils/text";

export default function CoursesContainer() {
  const router = useRouter();
  const { courseType } = useParams();
  const [state, setState] = useState("all");
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
    <Section className="w-full flex flex-col  mt-[159px]">
      <span className="text-xl">
        {decodeText(courseType?.toString() ?? "")}
      </span>
      <div className="flex gap-x-[239px] mt-6">
        <div className="relative flex flex-col gap-y-4">
          {["all", "coming-soon"]?.map((item, index) => (
            <div
              key={index}
              onClick={() => setState(item)}
              className="relative cursor-pointer text-gray-2 text-base"
            >
              {state === item && (
                <div className="absolute h-full -left-[calc(100%+32px)] flex items-center">
                  <div className="bg-blue h-[2px] w-[48px]" />
                </div>
              )}
              {exploreCourses(`explore-courses.Courses.filters.${item}` as any)}
            </div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-3 gap-[32px]">
          {courses?.map((course, index) => (
            <CoursesCard
              key={index}
              {...course}
              onClick={() => router.push(`/course/${index}`)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
