import React from "react";

interface Props {
  label?: string;
  description?: string;
}
export function HomeAcademyCard({ label, description }: Props) {
  return (
    <div className="flex flex-col gap-y-4 w-full lg:max-w-[488px]">
      <span className="text-2xl ">
        Mira<span className="text-blue font-bold">{label}</span>
      </span>
      <p>{description}</p>
    </div>
  );
}
