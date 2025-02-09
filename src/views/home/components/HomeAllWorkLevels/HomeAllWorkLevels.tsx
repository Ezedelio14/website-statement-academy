import PersonBlueSvg from "@/assets/svg/PersonBlueSvg";
import { cn } from "@/utils/tw";
import React, { useState } from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import ArrowIncreasingSvg from "@/assets/svg/ArrowIncreasingSvg";
import CirclesSvg from "@/assets/svg/CirclesSvg";
import PlayIconBlue from "@/assets/svg/PlayIconBlue";

export function HomeAllWorkLevels() {
  const { homeTr } = useHomeTr();
  const [state, setState] = useState<"bigener" | "middle" | "professional">(
    "bigener"
  );

  return (
    <div className="w-full flex justify-center px-4 md:px-8">
      {/* MOBILE */}
      <div className="grid xl:hidden flex-col gap-y-12 w-full grid-cols-1 md:grid-cols-2">
        <div className="flex gap-x-[19px] w-full lg:max-w-[386px]">
          <div>
            <ArrowIncreasingSvg />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-xl font-bold">
              {homeTr(`home.AllWorkLevels.levels.${state}.items.1.title`)}
            </span>
            <p className="text-base">
              {homeTr(`home.AllWorkLevels.levels.${state}.items.1.description`)}
            </p>
          </div>
        </div>
        <div className="flex gap-x-[19px] w-full lg:max-w-[386px]">
          <div>
            <ArrowIncreasingSvg />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-xl font-bold">
              {homeTr(`home.AllWorkLevels.levels.${state}.items.2.title`)}
            </span>
            <p className="text-base">
              {homeTr(`home.AllWorkLevels.levels.${state}.items.2.description`)}
            </p>
          </div>
        </div>
        <div className="flex gap-x-[19px] w-full lg:max-w-[386px]">
          <div>
            <ArrowIncreasingSvg />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-xl font-bold">
              {homeTr(`home.AllWorkLevels.levels.${state}.items.3.title`)}
            </span>
            <p className="text-base">
              {homeTr(`home.AllWorkLevels.levels.${state}.items.3.description`)}
            </p>
          </div>
        </div>
        <div className="flex gap-x-[19px] w-full lg:max-w-[386px]">
          <div>
            <ArrowIncreasingSvg />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-xl font-bold">
              {homeTr(`home.AllWorkLevels.levels.${state}.items.4.title`)}
            </span>
            <p className="text-base">
              {homeTr(`home.AllWorkLevels.levels.${state}.items.4.description`)}
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden xl:flex justify-center flex-col w-full max-w-[1216px]">
        <div className="w-full flex flex-col items-center">
          <PersonBlueSvg />
          <div className="h-[112px] bg-blue w-[2px]" />
        </div>
        <div className="relative w-full">
          <div className="absolute z-10 top-0 -left-[6rem] h-full w-[calc(100%+12rem)] flex justify-between items-center transition-all">
            {["bigener", "middle", "professional"].map((level, index) => (
              <div
                key={index}
                onClick={() => setState(level as any)}
                className={cn(
                  "flex items-center px-[75px] py-[20px] gap-x-4 rounded-[8px] bg-blue-2 cursor-pointer hover:opacity-50",
                  {
                    "border-blue border-[2px]": state === level,
                  }
                )}
              >
                <PlayIconBlue />
                {homeTr(`home.AllWorkLevels.levels.${level}.title` as any)}
              </div>
            ))}
          </div>
          <div className="flex w-full h-[282px]">
            <div
              className={cn(
                "flex-1 h-full border-blue border-[2px] border-r-0 opacity-[30%]",
                {
                  "opacity-1": state === "bigener",
                }
              )}
            />
            <div
              className={cn("h-full bg-blue w-[2px]  opacity-[30%]", {
                "opacity-1": state === "middle",
              })}
            />
            <div
              className={cn(
                "flex-1 h-full border-blue border-[2px] border-l-0 opacity-[30%]",
                {
                  "opacity-1": state === "professional",
                }
              )}
            />
          </div>
        </div>

        <div className="h-[336px] w-full flex">
          <div className="flex-1 h-full flex items-center">
            <div className="flex gap-x-[19px] w-[386px]">
              <div>
                <ArrowIncreasingSvg />
              </div>
              <div className="flex flex-col gap-y-4">
                <span className="text-xl font-bold">
                  {homeTr(`home.AllWorkLevels.levels.${state}.items.1.title`)}
                </span>
                <p className="text-base">
                  {homeTr(
                    `home.AllWorkLevels.levels.${state}.items.1.description`
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="h-full relative flex justify-center items-center">
            <CirclesSvg />
            <div className="absolute h-full w-full top-0 left-0 flex justify-center">
              <div className="relative h-full">
                <div className="h-full w-[2px] bg-blue" />
                <div className="absolute top-0 right-0 flex items-center h-full -z-10">
                  <div className="w-[192px] gradient-border" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="h-[336px] w-full flex">
          <div className="flex-1"></div>
          <div className="h-full relative flex justify-center items-center">
            <CirclesSvg />
            <div className="absolute h-full w-full top-0 left-0 flex justify-center">
              <div className="relative h-full">
                <div className="h-full w-[2px] bg-blue" />
                <div className="absolute top-0 left-0 flex items-center h-full -z-10">
                  <div className="w-[192px] gradient-border" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full flex items-center justify-end">
            <div className="flex gap-x-[19px] w-[386px]">
              <div>
                <ArrowIncreasingSvg />
              </div>
              <div className="flex flex-col gap-y-4">
                <span className="text-xl font-bold">
                  {homeTr(`home.AllWorkLevels.levels.${state}.items.2.title`)}
                </span>
                <p className="text-base">
                  {homeTr(
                    `home.AllWorkLevels.levels.${state}.items.2.description`
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[336px] w-full flex">
          <div className="flex-1 h-full flex items-center">
            <div className="flex gap-x-[19px] w-[386px]">
              <div>
                <ArrowIncreasingSvg />
              </div>
              <div className="flex flex-col gap-y-4">
                <span className="text-xl font-bold">
                  {homeTr(`home.AllWorkLevels.levels.${state}.items.3.title`)}
                </span>
                <p className="text-base">
                  {homeTr(
                    `home.AllWorkLevels.levels.${state}.items.3.description`
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="h-full relative flex justify-center items-center">
            <CirclesSvg />
            <div className="absolute h-full w-full top-0 left-0 flex justify-center">
              <div className="relative h-full">
                <div className="h-full w-[2px] bg-blue" />
                <div className="absolute top-0 right-0 flex items-center h-full -z-10">
                  <div className="w-[192px] gradient-border" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="h-[168px] w-full flex">
          <div className="flex-1"></div>
          <div className="h-full relative flex justify-center items-end">
            <div className="relative -bottom-4">
              <CirclesSvg />
            </div>
            <div className="absolute h-full w-full top-0 left-0 flex justify-center">
              <div className="relative h-full">
                <div className="h-full w-[2px] bg-blue" />
                <div className="absolute top-0 left-0 flex items-end h-full -z-10">
                  <div className="w-[192px] gradient-border" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full flex items-end justify-end relative top-[50px]">
            <div className="flex gap-x-[19px] w-[386px]">
              <div>
                <ArrowIncreasingSvg />
              </div>
              <div className="flex flex-col gap-y-4">
                <span className="text-xl font-bold">
                  {homeTr(`home.AllWorkLevels.levels.${state}.items.4.title`)}
                </span>
                <p className="text-base">
                  {homeTr(
                    `home.AllWorkLevels.levels.${state}.items.4.description`
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
