"use client";
import React from "react";
import { HomeHero } from "./components/HomeHero/HomeHero";
import { HomeHeroBg } from "./components/HomeHero/HomeHeroBg";
import { HomeWhatWeHave } from "./components/HomeWhatWeHave/HomeWhatWeHave";
import { HomeComingSoon } from "./components/HomeComingSoon/HomeComingSoon";
import { HomeAcademyContent } from "./components/HomeAcademy/HomeAcademyContent";
import { MeetingWeTheBest } from "./components/MeetingWeTheBest/MeetingWeTheBest";
import { HomeForProfessionals } from "./components/HomeForProfessionals/HomeForProfessionals";
import { TheBestMentorAreInMirantes } from "./components/TheBestMentorAreInMirantes/TheBestMentorAreInMirantes";
import { NavigateInOurCategory } from "./components/NavigateInOurCategory/NavigateInOurCategory";
import { HomeStartFromBegin } from "./components/HomeStartFromBegin/HomeStartFromBegin";
import { HomeOverview } from "./components/HomeOverview/HomeOverview";
import { HomeAllWorkLevels } from "./components/HomeAllWorkLevels/HomeAllWorkLevels";
import { HomeTestimony } from "./components/HomeTestimony/HomeTestimony";

export function HomeView() {
  return (
    <div className="text-white w-full flex flex-col justify-center">
      <div className="-top-[50%] absolute w-full  overflow-hidden h-[1440px]">
        <HomeHeroBg />
        <div className="opacity-gradient absolute top-0 h-[1440px] w-full -z-10" />
      </div>
      <div className="flex flex-col relative z-50">
        <HomeHero />
        <HomeWhatWeHave />
        <HomeForProfessionals />
        <MeetingWeTheBest />
        <HomeAcademyContent />
        <HomeComingSoon />
        <TheBestMentorAreInMirantes />
        <NavigateInOurCategory />
        <HomeStartFromBegin />
        <HomeOverview />
        <HomeAllWorkLevels />
        <HomeTestimony />
      </div>

      <div className="h-[2rem]" />
    </div>
  );
}
