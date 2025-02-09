import React from "react";
import { Button } from "./Button";
import { useRouter } from "@/i18n/routing";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";
import { cn } from "@/utils/tw";

interface Props {
  className?: string;
}
export function SigninBtn({ className }: Props) {
  const router = useRouter();
  const { componentsTr } = useComponentsTr();

  return (
    <Button
      onClick={() => router.push("/")}
      className={cn("px-[40px]", className)}
      label={componentsTr("components.Labels.sign-in")}
    />
  );
}
