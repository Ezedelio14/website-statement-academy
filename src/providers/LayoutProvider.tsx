import { ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactQueryProvider } from "./ReactQueryProvider";

interface IProviders {
  children: ReactNode;
}
export const googleOAuthClientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;

export function LayoutProviders({ children }: IProviders) {
  return (
    <GoogleOAuthProvider clientId={googleOAuthClientId ?? ""}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </GoogleOAuthProvider>
  );
}
