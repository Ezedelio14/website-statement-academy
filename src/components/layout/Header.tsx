"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones para abrir e fechar o menu
import LogoSvg from "@/assets/svg/LogoSvg";
import { Input } from "../common/input/Input";
import { Section } from "../common/section/Section";
import { CoursesBtn } from "../common/button/CoursesBtn";
import { useComponentsTr } from "../../../locales/utils/useComponentsTr";

export function Header() {
  const { componentsTr } = useComponentsTr();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Section className="relative z-50 mt-6 w-full flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[85px] px-4">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link
          href={"/"}
          className="text-lg hover:opacity-50 cursor-pointer transition-all"
        >
          <LogoSvg />
        </Link>
        {/* Botão de Menu para telas menores que lg */}
        <button
          className="lg:hidden p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen && <X size={24} />}
        </button>
      </div>

      {/* Menu principal */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-x-4 lg:gap-x-[32px] w-full lg:w-auto mt-10 lg:mt-0`}
      >
        <Input
          className="w-full lg:w-[384px] lg:block"
          placeholder={componentsTr("components.Placeholder.search-input")}
        />
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 items-center mt-10 lg:mt-0">
          <Link
            href={"/"}
            className="text-lg hover:opacity-50 cursor-pointer transition-all"
          >
            {componentsTr("components.Labels.sign-in")}
          </Link>
          <CoursesBtn />
        </div>
      </div>
    </Section>
  );
}
