import React from "react";
import { Spinner } from "@/components/shared/spinner/Spinner";

export default function LoadingPage() {
  return (
    <div className="w-full h-[30rem] flex justify-center items-center">
      <Spinner />
    </div>
  );
}
