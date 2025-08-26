
import { useEffect, useRef } from "react";

export const Chart = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.getContext("2d");
      if (ctx) {
        // Optional chart logic here
      }
    }
  }, []);

  return <div ref={ref} className="rounded-lg border border-white/10 bg-gunmetal h-48" />;
};
