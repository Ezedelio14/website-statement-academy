import { authedApiMs } from "@/api/mirantes/authedApi";
import { useQuery } from "@tanstack/react-query";
import { cacheUserSession } from "../sessions/cacheUserSession";
import { getSavedCookie } from "../sessions/cookieUtils";
import { AppKeys } from "../constants";
import { UserType } from "@/styles/types";

export const getUser = async () => {
  const meResponse = await authedApiMs.get<{
    account: UserType;
  }>("/users/me");
  const account = meResponse.data.account;

  cacheUserSession({ user: account });

  return account;
};

export const useApiGetCurrentUser = () => {
  const {
    data: currentUser,
    isLoading: isGettingUser
  } = useQuery({
    queryKey: ["user/account"],
    queryFn: getUser,
    retry: 3,
  });

  const cachedUser = getCurrentUser();

  return {
    currentUser: isGettingUser ? cachedUser : currentUser,
    isGettingUser,
  };
};

export const getCurrentUser = () => {
  try {
    const user = JSON.parse(getSavedCookie(AppKeys.userData) ?? "{}");
    return user as UserType;
  } catch {
    return {} as UserType;
  }
};
