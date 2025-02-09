"use client";

import React from "react";
import LogoSvg from "@/assets/svg/LogoSvg";
import { Input } from "../common/input/Input";
import { Section } from "../common/section/Section";
import { CoursesBtn } from "../common/button/CoursesBtn";
import { useComponentsTr } from "../../../locales/utils/useComponentsTr";
import { Link, usePathname } from "@/i18n/routing";
import { b2cUri } from "@/components/Authentication/api/useApiOneTapGoogleLogin";
import { useSearchContext } from "@/context/SearchContext";
import SearchSvg from "@/assets/svg/SearchSvg";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { componentsTr } = useComponentsTr();
  const { setSearchQuery } = useSearchContext();

  return (
    <Section className="relative z-50 mt-6 w-full flex justify-between items-center h-[85px]">
      <div className="flex items-center gap-x-[38px]">
        <Link
          href={"/"}
          className="text-lg hover:opacity-50 cursor-pointer transition-all"
        >
          <LogoSvg />
        </Link>
        {!isHome && (
          <Input
            className="w-[384px]"
            rightElement={<SearchSvg />}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            placeholder={componentsTr("components.Placeholder.search-input")}
          />
        )}
      </div>

      <div className="flex gap-x-[32px] items-center">
        <Link
          href={`${b2cUri}/auth/sign-in`}
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
            href={`${b2cUri}/auth/sign-up`}
            className="px-[24px] transition-all py-[13.5px] text-lg rounded-[12px] bg-blue hover:opacity-50 !cursor-pointer flex items-center gap-x-4"
          >
            {componentsTr("components.Labels.create-account")}
          </Link>
        )}
      </div>
    </Section>
  );
}
