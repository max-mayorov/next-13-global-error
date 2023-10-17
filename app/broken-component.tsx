import { ReactNode } from "react";

export default function BrokenComponent({ children }: { children: ReactNode }) {
  if (process.env.NEXT_BUILDTIME !== "true") throw new Error("Error!");
  return (
    <div>
      <pre>{JSON.stringify(process.env.NEXT_BUILDTIME)}</pre>
      Broken Component
      {children}
    </div>
  );
}
