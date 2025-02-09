"use client";

import React from "react";
import Link from "next/link";
import LogoSvg from "@/assets/svg/LogoSvg";
import { Input } from "../common/input/Input";
import { Section } from "../common/section/Section";
import { CoursesBtn } from "../common/button/CoursesBtn";
import { useComponentsTr } from "../../../locales/utils/useComponentsTr";

export function Header() {
  const { componentsTr } = useComponentsTr();
  return (
    <Section className="relative z-50 mt-6 w-full flex justify-between items-center h-[85px]">
      <div className="flex items-center gap-x-[38px]">
        <Link
          href={"/"}
          className="text-lg hover:opacity-50 cursor-pointer transition-all"
        >
          <LogoSvg />
        </Link>
        <Input
          className="w-[384px]"
          placeholder={componentsTr("components.Placeholder.search-input")}
        />
      </div>

      <div className="flex gap-x-[32px] items-center">
        <Link
          href={"/"}
          className="text-lg hover:opacity-50 cursor-pointer transition-all"
        >
          {componentsTr("components.Labels.sign-in")}
        </Link>
        <CoursesBtn />
      </div>
    </Section>
  );
}
