import { cn } from "@/utils/tw";
import React from "react";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";
import { SocialBtn } from "@/components/common/button/SocialBtn";

interface Props {
  className?: string;
}
export function SocialAuthCard({ className }: Props) {
  const { componentsTr } = useComponentsTr();
  return (
    <div
      className={cn(
        "card w-[384px] flex flex-col items-center gap-y-4",
        className
      )}
    >
      <span className="text-2xl font-bold text-center text-gray-1">
        {componentsTr("components.SocialAuthCard.title")}
      </span>

      <div className="mt-6 w-full">
        <SocialBtn variant="google" />
      </div>

      <div>
        <p className="text-center text-base w-[250px]">
          {componentsTr("components.SocialAuthCard.agree")}
          {"\n"}
          <a
            href="#"
            className="text-blue hover:opacity-50 transition-all underline"
          >
            {componentsTr("components.Links.terms")}
          </a>{" "}
          <span>{componentsTr("components.Labels.and-the")}</span>{" "}
          <a
            href="#"
            className="text-blue hover:opacity-50 transition-all underline"
          >
            {componentsTr("components.Links.policy_privacy")}
          </a>
          {componentsTr("components.SocialAuthCard.mirantes")}
        </p>
      </div>
      <p className="text-base">
        {componentsTr("components.Labels.signin-question")}{" "}
        <a className="text-blue hover:opacity-50 transition-all">
          {componentsTr("components.Labels.sign-in-2")}
        </a>
      </p>
    </div>
  );
}
