// src/components/Chart.tsx

import { forwardRef } from "react";

// Chart component using forwardRef
export const Chart = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="rounded-lg border border-white/10 bg-gunmetal h-64 flex items-center justify-center text-white"
    >
      {/* Placeholder content */}
      <span className="text-white text-sm">Chart will render here</span>
    </div>
  );
});
