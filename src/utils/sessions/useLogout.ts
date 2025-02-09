import { queryCache, queryClient } from "@/api/cache/reactQuery";
import { authedApiMs } from "@/api/mirantes/authedApi";
import { useMutation } from "@tanstack/react-query";
import { clearAllCookies } from "./clearAllCookies";

const mutationFn = async () => {
  const response = await authedApiMs.delete("/auth/logout");
  return response.data;
};

export function useLogout() {
  const { mutate: logout, isLoading } = useMutation({
    mutationFn,
    onSuccess: () => {
      sessionStorage.clear();
      localStorage.clear();
      clearAllCookies();
      queryCache.clear();
      queryClient.clear();
      window.location.reload();
    },
  });

  return { logout, isLoggingOut: isLoading };
}
