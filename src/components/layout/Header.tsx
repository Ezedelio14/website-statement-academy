"use client";

import React, { useState } from "react";
import LogoSvg from "@/assets/svg/LogoSvg";
import { Section } from "../common/section/Section";
import { CoursesBtn } from "../common/button/CoursesBtn";
import { useComponentsTr } from "../../../locales/utils/useComponentsTr";
import { Link, usePathname } from "@/i18n/routing";

export function Header() {
  const { componentsTr } = useComponentsTr();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Section className="relative z-50 mt-6 w-full flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[85px] px-4">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link
          href={"/"}
          className="text-lg hover:opacity-50 cursor-pointer transition-all"
        >
          <LogoSvg />
        </Link>
        {/* {!isHome && (
          <Input
            className="w-[384px]"
            placeholder={componentsTr("components.Placeholder.search-input")}
          />
        )} */}
      </div>

      <div className="flex gap-x-[32px] items-center">
        <Link
          href={"/"}
          className="text-lg hover:opacity-50 cursor-pointer transition-all"
        >
          {componentsTr(
            isHome ? "components.Labels.sign-in" : "components.Labels.sign-in-2"
          )}
        </Link>
        {isHome ? (
          <CoursesBtn />
        ) : (
          <Link
            href={"/"}
            className="px-[24px] transition-all py-[13.5px] text-lg rounded-[12px] bg-blue hover:opacity-50 !cursor-pointer flex items-center gap-x-4"
          >
            {componentsTr("components.Labels.create-account")}
          </Link>
        )}
      </div>
    </Section>
  );
}
