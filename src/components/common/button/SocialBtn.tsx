import React from "react";
import { Button } from "./Button";
import GoogleSvg from "@/assets/svg/GoogleSvg";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";

interface Props {
  variant: "google";
}
export function SocialBtn({ variant }: Props) {
  const { componentsTr } = useComponentsTr();
  return (
    <Button
      variant="outline"
      onClick={() => {}}
      leftElement={<GoogleSvg />}
      className="[&>div]:text-base w-full"
      label={componentsTr(`components.Labels.${variant}`)}
    />
  );
}
