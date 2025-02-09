import { cn } from "@/utils/tw";
import React from "react";

type InputProps = {
  type?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  type = "text",
  placeholder,
  className = "",
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        "w-full px-6 py-2 border-gray-2 rounded-lg border-[1px] focus:outline-none focus:ring-2 focus:ring-blue bg-gray-1",
        className
      )}
    />
  );
}
