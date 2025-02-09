import { cn } from "@/utils/tw";
import ArrowSvg from "@/assets/svg/ArrowSvg";
import React, { useRef, useState } from "react";
import { Section } from "@/components/common/section/Section";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import StartBlue from "@/assets/svg/StartBlue";
import UpCommonSvg from "@/assets/svg/UpCommonSvg";

export function HomeTestimony() {
  const { homeTr } = useHomeTr();
  const [state, setState] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonies = Array(7).fill(undefined); // Simulando 7 testemunhos

  // Função para mover o scroll junto com a seleção
  const handleScroll = (index: number) => {
    setState(index);
    if (scrollRef.current) {
      const selectedElement = scrollRef.current.children[index] as HTMLElement;
      selectedElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Section className="flex flex-col items-center py-[79px] mt-[179px] px-4 md:px-8">
      <h2 className="text-[2rem] font-bold mb-[80px] text-center">
        {homeTr("home.Testimony.title")}
      </h2>

      <div className="w-full h-[511px] justify-between flex items-center">
        <div
          ref={scrollRef}
          className="w-[384px] max-h-[400px] overflow-y-scroll hidden xl:flex flex-col gap-y-6"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonies.map((_, index) => (
            <div
              key={index}
              onClick={() => handleScroll(index)}
              className={cn(
                "bg-blue-1 py-6 flex items-center px-8 rounded-[8px] gap-x-4 cursor-pointer hover:opacity-1 opacity-50 transition-opacity",
                { "opacity-100": index === state }
              )}
            >
              <div className="size-[64px] rounded-full bg-white" />
              <div className="flex flex-col">
                <span className="text-blue">Wokany Lopes</span>
                <span>Director de Marketing - Mirantes</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-col gap-y-8 hidden xl:flex">
          <button
            disabled={state === 0}
            onClick={() => state > 0 && handleScroll(state - 1)}
            className={cn(
              "z-50 size-[56px] bg-blue-1 text-white p-2 rounded-full flex items-center justify-center",
              {
                "opacity-40": state === 0,
              }
            )}
          >
            <div className="relative -rotate-[90deg]">
              <ArrowSvg />
            </div>
          </button>
          <button
            disabled={state === testimonies.length - 1}
            onClick={() =>
              state < testimonies.length - 1 && handleScroll(state + 1)
            }
            className={cn(
              "z-50 size-[56px] bg-blue-1 text-white p-2 rounded-full flex items-center justify-center",
              {
                "opacity-40": state === testimonies.length - 1,
              }
            )}
          >
            <div className="relative rotate-[90deg]">
              <ArrowSvg />
            </div>
          </button>
        </div>

        <div className="flex-1 bg-blue-1 xl:max-w-[520px] h-[400px] p-[32px] rounded-[8px] overflow-auto">
          <div>
            <span>Ensinamentos práticos e eficazes</span>
            <div className="flex items-center gap-x-2 mt-2">
              {Array(5)
                ?.fill(undefined)
                .map((_, index) => (
                  <StartBlue key={index} />
                ))}
            </div>
          </div>
          <div className="mt-[32px] mb-[40px]">
            <UpCommonSvg />
          </div>
          <span>
            Mirantes veio para revolucionar tudo o que já vimos no mercado de
            cursos e capacitação de material Humano. A oportunidade de ter
            tantas pessoas incríveis e de tão alto nível na palma da minha mão
            me traz liberdade, muita bagagem enquanto eu estou aprendendo. Na
            Mirantes está tudo organizado. Recomendo de olhos fechados.
          </span>
        </div>
      </div>
    </Section>
  );
}
