import {
  cacheUserSession,
  TPostSignIn,
} from "@/utilities/sessions/cacheUserSession";
import { useMutation } from "@tanstack/react-query";
import { authedApiMs } from "@/api/mirantes/authedApi";

type TMutationFn = {
  accessToken: string;
  redirect?: string;
  clientId?: string;
};

const mutationFn = async ({
  clientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,

  accessToken,
}: TMutationFn) => {
  const response = await authedApiMs.post<TPostSignIn>(`/public/google/login`, {
    clientId,
    accessToken,
  });

  return response.data;
};

export function useApiLoginWithGoogle() {
  const { mutate: loginWithGoogle, isPending: isLoggingWithGoogle } =
    useMutation({
      mutationFn,
      onSuccess({ tokens, user }) {
        cacheUserSession({ tokens, user });

        const b2cUri = process.env.NEXT_PUBLIC_B2C_URL;
        window.location.href = b2cUri as string;
      },
      onError() {},
    });

  return {
    loginWithGoogle,
    isLoggingWithGoogle,
  };
}
