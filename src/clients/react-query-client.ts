import { QueryClient } from "@tanstack/react-query";

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});
