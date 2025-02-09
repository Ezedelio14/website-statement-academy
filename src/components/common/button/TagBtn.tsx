import OpenBook from "@/assets/svg/OpenBook";
import RaySvg from "@/assets/svg/RaySvg";
import { cn } from "@/utils/tw";
import React from "react";

interface Props {
  label?: string;
  isSelected: boolean;
  onClick: () => void;
}
export function TagBtn({ isSelected, onClick, label }: Props) {
  return (
    <button onClick={onClick} className="flex items-center gap overflow-hidden">
      <div
        className={cn(
          "flex gap-x-[10px] px-[16px] border-[1px] border-gray-1 py-[8px] rounded-[8px] bg-gray-1 hover:opacity-50 transition-all",
          {
            "border-blue border-[1px]": isSelected,
          }
        )}
      >
        {isSelected ? <RaySvg /> : <OpenBook />}
        <span
          className={cn("text-base text-gray-4", {
            "text-white": isSelected,
          })}
        >
          {label}
        </span>
      </div>
    </button>
  );
}
