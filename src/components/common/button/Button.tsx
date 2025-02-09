import React from "react";
import { cn } from "@/utils/tw";

interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  variant?: "outline" | "default";
}
export function Button({
  label,
  onClick,
  variant,
  leftElement,
  rightElement,
  className,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-[24px] transition-all py-[13.5px] text-lg rounded-[12px] bg-blue hover:opacity-50 !cursor-pointer flex items-center gap-x-4",
        {
          "border-[1px] bg-transparent border-gray-2": variant === "outline",
        },
        className
      )}
    >
      {leftElement}
      <div
        className={cn("flex-1 !text-start", {
          "text-gray-1": variant === "outline",
        })}
      >
        {label}
      </div>
      {rightElement}
    </button>
  );
}
