"use client";

import React, { useState } from "react";
import LogoSvg from "@/assets/svg/LogoSvg";
import { Section } from "../common/section/Section";
import { CoursesBtn } from "../common/button/CoursesBtn";
import { useComponentsTr } from "../../../locales/utils/useComponentsTr";
import { Link, usePathname } from "@/i18n/routing";
import { b2cUri } from "@/components/Authentication/api/useApiOneTapGoogleLogin";
import { useSearchContext } from "@/context/SearchContext";
import SearchSvg from "@/assets/svg/SearchSvg";
import { Input } from "../common/input/Input";
import { Menu, X } from "lucide-react"; // Ícones para o menu responsivo

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { componentsTr } = useComponentsTr();
  const { setSearchQuery } = useSearchContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Section className="relative z-50 mt-6 w-full flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[85px] px-4">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link
          href={"/"}
          className="text-lg hover:opacity-50 cursor-pointer transition-all mr-10"
        >
          <LogoSvg />
        </Link>

        {!isHome && (
          <Input
            className="hidden lg:flex w-[384px]"
            rightElement={<SearchSvg />}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            placeholder={componentsTr("components.Placeholder.search-input")}
          />
        )}

        {/* Botão de Menu para telas menores que lg */}
        <button
          className="lg:hidden p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu principal */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-x-[32px] w-full lg:w-auto mt-4 lg:mt-0`}
      >
        {!isHome && (
          <Input
            className="w-full lg:hidden" // Exibe o campo de busca apenas no menu em telas menores
            rightElement={<SearchSvg />}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            placeholder={componentsTr("components.Placeholder.search-input")}
          />
        )}

        <div className="mt-6 flex gap-x-4 items-center justify-center mb-6">
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
      </div>
    </Section>
  );
}
