import { cn } from "@/utils/tw";
import React from "react";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";
import { SocialBtn } from "@/components/common/button/SocialBtn";
import { useSignInWithGoogle } from "@/components/Authentication/components/LoginWithGoogle/useSignInWithGoogle";
import { b2cUri } from "@/components/Authentication/api/useApiOneTapGoogleLogin";

interface Props {
  className?: string;
}
export function SocialAuthCard({ className }: Props) {
  const { componentsTr } = useComponentsTr();
  const { isLoggingWithGoogle, loginWithGoogle } = useSignInWithGoogle();
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
        <SocialBtn variant="google" onClick={loginWithGoogle} />
      </div>

      <div>
        <p className="text-center text-base lg:max-w-[250px]">
          {componentsTr("components.SocialAuthCard.agree")}
          {"\n"}
          <a
            href="https://mirantes.io/terms-professional"
            className="text-blue hover:opacity-50 transition-all underline"
          >
            {componentsTr("components.Links.terms")}
          </a>{" "}
          <span>{componentsTr("components.Labels.and-the")}</span>{" "}
          <a
            href="https://mirantes.io/privacy-policies"
            className="text-blue hover:opacity-50 transition-all underline"
          >
            {componentsTr("components.Links.policy_privacy")}
          </a>
          {componentsTr("components.SocialAuthCard.mirantes")}
        </p>
      </div>
      <p className="text-base">
        {componentsTr("components.Labels.signin-question")}{" "}
        <a
          href={`${b2cUri}/auth/sign-in`}
          className="text-blue hover:opacity-50 transition-all"
        >
          {componentsTr("components.Labels.sign-in-2")}
        </a>
      </p>
    </div>
  );
}
