import React, { useState } from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { cn } from "@/utils/tw";
import LightSvg from "@/assets/svg/LightSvg";
import { Link } from "@/i18n/routing";
import CarouselGrid from "@/components/shared/swiper/SwiperItems";
import { SwiperSlide } from "swiper/react";
import { NavigateInOurCategoryCard } from "./NavigateInOurCategoryCard";
import useWindowSize from "@/hooks/useWindowSize";

export function NavigateInOurCategory() {
  const { homeTr } = useHomeTr();
  const [state, setState] = useState(0);
  const { width } = useWindowSize()

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

  const getAmount = () => {
    if (width < 768) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  return (
    <div className="flex-col items-center gap-y-[80px] py-[80px] w-full hidden xl:flex">
      <h2 className="text-[2rem] font-bold">
        {homeTr("home.NavigateInOurCategory.title")}
      </h2>
      <div className="flex gap-x-[32px] mt-2 pl-[112px] w-full">
        <div className="w-[384px] max-h-[656px] overflow-auto flex flex-col gap-y-6">
          {Array(7)
            ?.fill(undefined)
            ?.map((item, index) => (
              <div
                key={index}
                onClick={() => setState(index)}
                className={cn(
                  "bg-blue-1 py-[42px] flex items-center px-6 rounded-[8px] gap-x-4 cursor-pointer hover:opacity-50",
                  {
                    "bg-gradient-1": index === state,
                  }
                )}
              >
                <LightSvg />
                <span>{"Marketing Digital"}</span>
              </div>
            ))}
        </div>
        <div className="flex-1 bg-blue-2 h-[656px] rounded-l-[16px] overflow-hidden flex flex-col gap-y-6">
          <div className="w-full h-[60px] bg-blue-3 flex items-center justify-between px-[24px]">
            <span>
              20 {homeTr("home.NavigateInOurCategory.courses-about")}{" "}
              {"Marketing Digital"}
            </span>
            <Link
              href={"/"}
              className="text-blue hover:opacity-50 transition-all cursor-pointer"
            >
              {homeTr("home.NavigateInOurCategory.see-all-courses")}
            </Link>
          </div>
          <div>
            <CarouselGrid amount={getAmount()}>
              {courses.map((item, index) => (
                <SwiperSlide key={index}>
                  <NavigateInOurCategoryCard {...item} />
                </SwiperSlide>
              ))}
            </CarouselGrid>
          </div>
        </div>
      </div>
    </div>
  );
}
