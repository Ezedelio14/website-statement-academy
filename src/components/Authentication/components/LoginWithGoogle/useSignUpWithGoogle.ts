import { useGoogleLogin } from "@react-oauth/google";
import { useApiSignUpWithGoogle } from "../../api/useApiSignUpWithGoogle";
import { b2cUri } from "../../api/useApiOneTapGoogleLogin";

export function useSignUpWithGoogle(company?: boolean) {
  const { signUpWithGoogle, isSingingUpWithGoogle } = useApiSignUpWithGoogle();

  const registerWithGoogle = useGoogleLogin({
    onSuccess({ access_token: accessToken }: { access_token: string }) {
      signUpWithGoogle({
        accessToken,
        redirect: company
          ? `${b2cUri}/private/create-company`
          : `${b2cUri}/onboarding/personal-info`,
      });
    },
  });

  return {
    registerWithGoogle,
    isRegisteringWithGoogle: isSingingUpWithGoogle,
  };
}
