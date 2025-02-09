import React, { ReactNode } from "react";

interface Props {
  title?: string;
  icon: ReactNode;
  description?: string;
}
export function HomeForProfessionalsCard({ icon, title, description }: Props) {
  return (
    <div className="max-w-[280px] flex flex-col gap-y-6">
      {icon}
      <div>
        <div className="pr-6">
          <span className="text-lg">{title}</span>
        </div>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}
