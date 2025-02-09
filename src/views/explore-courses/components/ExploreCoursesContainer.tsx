import React from "react";
import { useCourseContext } from "../context/CourseContext";
import { Section } from "@/components/common/section/Section";
import { ExploreCoursesSection } from "./ExploreCoursesSection";
import { useExploreCoursesTr } from "../../../../locales/utils/useExploreCoursesTr";

export function ExploreCoursesContainer() {
  const { filters } = useCourseContext();
  const { exploreCourses } = useExploreCoursesTr();

  const courses = [
    {
      img: "https://example.com/image1.jpg",
      title: "Introdução ao JavaScript",
      hours: 10,
      lessons: 25,
      mentor: "João Silva",
      course: "Desenvolvimento Web",
      description:
        "Aprenda os fundamentos do JavaScript, incluindo variáveis, funções e loops.",
    },
    {
      img: "https://example.com/image2.jpg",
      title: "React para Iniciantes",
      hours: 15,
      lessons: 30,
      mentor: "Ana Pereira",
      course: "Front-end Moderno",
      description:
        "Descubra como criar interfaces dinâmicas e eficientes com React.",
    },
    {
      img: "https://example.com/image3.jpg",
      title: "Node.js e Express",
      hours: 20,
      lessons: 40,
      mentor: "Carlos Mendes",
      course: "Desenvolvimento Backend",
      description:
        "Construa APIs robustas e escaláveis usando Node.js e o framework Express.",
    },
    {
      img: "https://example.com/image4.jpg",
      title: "Banco de Dados com MongoDB",
      hours: 12,
      lessons: 28,
      mentor: "Mariana Costa",
      course: "Gestão de Dados",
      description:
        "Aprenda a modelar, armazenar e consultar dados com MongoDB.",
    },
    {
      img: "https://example.com/image5.jpg",
      title: "TypeScript Avançado",
      hours: 18,
      lessons: 35,
      mentor: "Ricardo Almeida",
      course: "Programação Moderna",
      description:
        "Aprofunde-se no TypeScript e melhore a tipagem dos seus projetos.",
    },
  ];

  return (
    <Section className="flex flex-col gap-y-[80px] items-center w-full mt-[80px]">
      {filters?.map((filter, index) => (
        <ExploreCoursesSection key={index} items={courses} filter={filter} />
      ))}
    </Section>
  );
}
