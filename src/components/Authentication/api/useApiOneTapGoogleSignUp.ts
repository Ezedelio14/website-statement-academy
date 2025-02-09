import { useMutation } from "@tanstack/react-query";
import { authedApiMs } from "@/api/mirantes/authedApi";
import { handleRegisterEvent } from "@/services/useAnalytics";
import { cacheUserSession } from "@/utils/sessions/cacheUserSession";

type TMutationFn = {
  credential: string;
  redirect?: string;
};

const mutationFn = async ({ credential }: TMutationFn) => {
  const response = await authedApiMs.post(`/public/google/one-top/register`, {
    credential,
  });

  return response.data;
};

export function useApiOneTapGoogleSignUp() {
  const { mutate: oneTapGoogleSignUp, isPending: isOneTapGoogleSigning } =
    useMutation({
      mutationFn,
      onSuccess(data) {
        handleRegisterEvent({
          type: "event",
          event: {
            action: "sign_up",
            category: "Register",
            label: "Sign up with google tap",
            nonInteraction: false,
          },
        });
        cacheUserSession(data);
      },
    });

  return {
    oneTapGoogleSignUp,
    isOneTapGoogleSigning,
  };
}
