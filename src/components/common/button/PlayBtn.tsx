import { PlayOpacitySvg } from "@/assets/svg/PlayOpacitySvg";
import PlayVideoSvg from "@/assets/svg/PlayVideoSvg";
import React from "react";

interface Props {
  onClick?: () => void;
}
export function PlayBtn({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative size-[48px] flex justify-center items-center"
    >
      <div className="absolute top-0 left-0">
        <PlayOpacitySvg />
      </div>
      <PlayVideoSvg />
    </button>
  );
}
