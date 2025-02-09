import { cn } from "@/utils/tw";
import React, { ReactNode } from "react";

type InputProps = {
  type?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rightElement?: ReactNode; // Novo prop para o elemento à direita
};

export function Input({
  type = "text",
  placeholder,
  className = "",
  value,
  onChange,
  rightElement, // Novo prop
}: InputProps) {
  return (
    <div className={cn("relative flex items-center w-full", className)}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-6 py-2 border-gray-2 rounded-lg border-[1px] focus:outline-none focus:ring-2 focus:ring-blue bg-gray-1 pr-10"
      />
      {rightElement && (
        <div className="absolute right-3 flex items-center">{rightElement}</div>
      )}
    </div>
  );
}
