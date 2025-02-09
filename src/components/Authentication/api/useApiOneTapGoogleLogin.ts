import { authedApiMs } from "@/api/mirantes/authedApi";
import {
  cacheUserSession,
  TPostSignIn,
} from "@/utils/sessions/cacheUserSession";
import { useMutation } from "@tanstack/react-query";

type TMutationFn = {
  credential: string;
  redirect?: string;
  clientId?: string;
};

export const b2cUri = process.env.NEXT_PUBLIC_B2C_URL;

const mutationFn = async ({
  clientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
  credential,
}: TMutationFn) => {
  const response = await authedApiMs.post<TPostSignIn>(
    `/public/google/one-top/login`,
    {
      clientId,
      credential,
    }
  );

  return response.data;
};

export function useApiOneTapGoogleLogin() {
  const { mutate: oneTapGoogleLogin, isPending: isOneTapGoogleLogging } =
    useMutation({
      mutationFn,
      onSuccess({ tokens, user }) {
        cacheUserSession({ tokens, user });

        window.location.href = b2cUri as string;
      },
      onError() {},
    });

  return {
    oneTapGoogleLogin,
    isOneTapGoogleLogging,
  };
}
