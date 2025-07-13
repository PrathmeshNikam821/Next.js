"use client";

import { useEffect } from "react";

// erro boundaries must be client components

export default function ErrorExample({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // sent report to error logging  service
  }, [error]);

  return (
    <div>
      {" "}
      <p className="text-red-600">{error?.message || " An error occured "}</p>
    </div>
  );
}
