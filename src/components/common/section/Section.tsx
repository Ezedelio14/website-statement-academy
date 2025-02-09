import { cn } from "@/utils/tw";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  classNameContainer?: string;
}
export function Section({ children, className, classNameContainer }: Props) {
  return (
    <div className={cn("w-full flex justify-center", classNameContainer)}>
      <section className={cn("max-w-[1232px] w-full", className)}>
        {children}
      </section>
    </div>
  );
}
