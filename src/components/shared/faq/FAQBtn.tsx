import ChevronDown from "@/assets/svg/ChevronDown";
import { cn } from "@/utils/tw";
import React from "react";

interface Props {
  label: string;
  isSelected?: boolean;
  description: string;
  onClick: () => void;
}
export default function FAQBtn({
  label,
  onClick,
  description,
  isSelected,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="grid grid-cols-2 gap-x-[136px] items-center"
    >
      <div
        className={cn(
          "flex-1 flex items-center justify-between cursor-pointer transition-all pb-[100px] border-b-[1px] border-gray-1 opacity-50 hover:!opacity-1",
          {
            "opacity-1": isSelected,
          }
        )}
      >
        <span className="text-2xl">{label}</span>
        <div
          className={cn("relative", {
            "-rotate-[180deg]": isSelected,
          })}
        >
          <ChevronDown />
        </div>
      </div>
      {isSelected && (
        <div className="flex-1">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
