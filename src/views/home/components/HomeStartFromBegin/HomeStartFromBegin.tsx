import { SimpleLogo } from "@/assets/svg/SimpleLogo";
import React from "react";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { SigninBtn } from "@/components/common/button/SigninBtn";
import CheckSvg from "@/assets/svg/CheckSvg";

export function HomeStartFromBegin() {
  const { homeTr } = useHomeTr();
  return (
    <div className="flex items-center gap-y-[80px] h-[574px] w-full bg-white">
      <div className="pl-[112px] flex flex-col h-full py-[47px] pr-[40px]">
        <div className="w-[416px] h-full flex flex-col justify-between">
          <SimpleLogo />
          <h2 className="text-[2rem] text-blue-1 font-bold">
            {homeTr("home.HomeStartFromBegin.title")}
            {"\n"}
            <span className="text-blue">Mirantes</span> Academy
          </h2>
          <div className="flex flex-col gap-y-[32px]">
            {Array(3)
              .fill(undefined)
              .map((_, index) => (
                <div key={index} className="flex items-center gap-x-[8px]">
                  <div className="flex items-center justify-center size-[40px] rounded-full bg-blue bg-opacity-20">
                    <CheckSvg />
                  </div>
                  <span className="text-gray-4 text-base">
                    {homeTr(
                      `home.HomeStartFromBegin.items.${index + 1}` as any
                    )}
                  </span>
                </div>
              ))}
          </div>
          <div>
            <SigninBtn className="px-[59.5px]" />
          </div>
        </div>
      </div>
      <div className="flex-1 h-full flex gap-x-1">
        {Array(3)
          .fill(undefined)
          ?.map((item, index) => (
            <div key={index} className="flex-1 h-full bg-blue" />
          ))}
      </div>
    </div>
  );
}
