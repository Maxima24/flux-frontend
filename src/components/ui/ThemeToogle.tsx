// src/components/web3/connect-wallet.tsx
import dynamic from "next/dynamic";

export const ThemeToggle = dynamic(
  () => import("./theme-toggle-inner").then((mod) => mod.ThemeToggle),
  {
    ssr: false, // Only render on client
    loading: () => null, // fallback while loading
  }
);
