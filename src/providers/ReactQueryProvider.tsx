"use client";
import dynamic from "next/dynamic";
import { QueryClientProvider } from "@tanstack/react-query";
import { reactQueryClient } from "@/clients/react-query-client";

const ReactQueryDevtoolsProduction = dynamic(() =>
  import("@tanstack/react-query-devtools").then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);
export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={reactQueryClient}>
      {process.env.NEXT_PUBLIC_ENV === "dev" && (
        <ReactQueryDevtoolsProduction initialIsOpen={false} />
      )}
      {children}
    </QueryClientProvider>
  );
}
