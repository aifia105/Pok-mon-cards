import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress color="warning" aria-label="Loading..." />
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
