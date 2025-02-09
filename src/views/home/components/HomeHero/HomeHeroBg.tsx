import React from "react";
import Image from "next/image";
import HomeHeroBgImg from "@/assets/img/home_hero_bg.png";

export function HomeHeroBg() {
  return (
    <div className="absolute  -left-[30%] -z-10 w-[200vw]">
      <div className="w-full">
        <Image src={HomeHeroBgImg} className="object-contain" alt="hero" />
      </div>
    </div>
  );
}
