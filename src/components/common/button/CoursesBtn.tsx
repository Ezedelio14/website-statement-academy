import React from "react";
import { Button } from "./Button";
import { useRouter } from "@/i18n/routing";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";
import { cn } from "@/utils/tw";

interface Props {
  className?: string;
}
export function CoursesBtn({ className }: Props) {
  const router = useRouter();
  const { componentsTr } = useComponentsTr();

  return (
    <Button
      className={cn("px-[40px]", className)}
      onClick={() => router.push("/explore-courses")}
      label={componentsTr("components.Labels.explore-course")}
    />
  );
}
