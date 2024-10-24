import { CircularProgress } from "@nextui-org/react";
import React from "react";

const LoadingComponent = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-background">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress color="warning" aria-label="Loading..." />
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingComponent;
