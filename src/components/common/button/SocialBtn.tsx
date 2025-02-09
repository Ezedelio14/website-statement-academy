import React from "react";
import { Button } from "./Button";
import GoogleSvg from "@/assets/svg/GoogleSvg";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";

interface Props {
  variant: "google";
  onClick: () => void;
}
export function SocialBtn({ variant, onClick }: Props) {
  const { componentsTr } = useComponentsTr();
  return (
    <Button
      variant="outline"
      onClick={onClick}
      leftElement={<GoogleSvg />}
      className="[&>div]:text-base w-full"
      label={componentsTr(`components.Labels.${variant}`)}
    />
  );
}
