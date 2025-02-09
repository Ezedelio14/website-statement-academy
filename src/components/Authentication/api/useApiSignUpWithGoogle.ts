import { authedApiMs } from "@/api/mirantes/authedApi";
import { useMutation } from "@tanstack/react-query";
import { b2cUri } from "./useApiOneTapGoogleLogin";
import {
  cacheUserSession,
  TPostSignIn,
} from "@/utils/sessions/cacheUserSession";
import { googleOAuthClientId } from "@/providers/LayoutProvider";

type TMutationFn = {
  accessToken: string;
  redirect?: string;
  clientId?: string;
};

const mutationFn = async ({
  clientId = googleOAuthClientId,
  accessToken,
}: TMutationFn) => {
  const response = await authedApiMs.post<TPostSignIn>(
    `/public/google/register`,
    { clientId, accessToken }
  );

  return response.data;
};

export function useApiSignUpWithGoogle() {
  const { mutate: signUpWithGoogle, isPending: isSingingUpWithGoogle } =
    useMutation({
      mutationFn,
      onSuccess(data) {
        cacheUserSession(data);

        const queryString = new URLSearchParams(data.user).toString();
        window.location.href =
          `${b2cUri}/phone-number?${queryString}` as string;
      },
    });

  return {
    signUpWithGoogle,
    isSingingUpWithGoogle,
  };
}
