import {
  CredentialResponse,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import { useApiLoginWithGoogle } from "../../api/useApiLoginWithGoogle";
import {
  b2cUri,
  useApiOneTapGoogleLogin,
} from "../../api/useApiOneTapGoogleLogin";
import { useApiSignUpWithGoogle } from "../../api/useApiSignUpWithGoogle";
import { useApiOneTapGoogleSignUp } from "../../api/useApiOneTapGoogleSignUp";

export function useSignInWithGoogle(company?: boolean) {
  const { loginWithGoogle, isLoggingWithGoogle } = useApiLoginWithGoogle();
  const { signUpWithGoogle, isSingingUpWithGoogle } = useApiSignUpWithGoogle();
  const { oneTapGoogleLogin, isOneTapGoogleLogging } =
    useApiOneTapGoogleLogin();
  const { isOneTapGoogleSigning, oneTapGoogleSignUp } =
    useApiOneTapGoogleSignUp();

  const googleLogin = useGoogleLogin({
    onSuccess({ access_token: accessToken }: { access_token: string }) {
      loginWithGoogle(
        { accessToken, redirect: "/" },
        {
          onError(e: any) {
            const message = e.response.data.message;
            if (message === "User not found - not found") {
              signUpWithGoogle({
                accessToken,
                redirect: company
                  ? `${b2cUri}/private/create-company`
                  : `${b2cUri}/onboarding/personal-info`,
              });
              return;
            }
          },
        }
      );
    },
  });

  useGoogleOneTapLogin({
    onSuccess({ credential, clientId }: CredentialResponse) {
      if (credential) {
        oneTapGoogleLogin(
          { credential, clientId, redirect: "/" },
          {
            onError(e: any) {
              const message = e.response.data.message;
              if (message === "User not found - not found") {
                oneTapGoogleSignUp(
                  { credential },
                  {
                    onSuccess: () => {
                      window.location.href = company
                        ? `${b2cUri}/private/create-company`
                        : `${b2cUri}/onboarding/personal-info`;
                    },
                  }
                );
                return;
              }
            },
          }
        );
      }
    },
  });

  return {
    loginWithGoogle: googleLogin,
    isLoggingWithGoogle:
      isOneTapGoogleLogging ||
      isLoggingWithGoogle ||
      isSingingUpWithGoogle ||
      isOneTapGoogleSigning,
  };
}
