import React from "react";

interface Props {
  children: React.ReactNode;
}
export function Container({ children }: Props) {
  return <main className="w-full flex items-center flex-col">{children}</main>;
}
