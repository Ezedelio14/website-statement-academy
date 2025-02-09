import React, { ReactNode } from "react";

interface Props {
  title?: string;
  icon: ReactNode;
  description?: string;
}
export function HomeForProfessionalsCard({ icon, title, description }: Props) {
  return (
    <div className="w-full md:max-w-[280px] mx-auto flex flex-col gap-y-6">
      {icon}
      <div>
        <div className="pr-6">
          <span className="text-lg font-bold">{title}</span>
        </div>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}
