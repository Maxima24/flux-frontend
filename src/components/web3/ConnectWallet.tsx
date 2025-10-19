// src/components/web3/connect-wallet.tsx
import dynamic from "next/dynamic";

export const ConnectWallet = dynamic(
  () => import("./connect-wallet-inner").then((mod) => mod.ConnectWallet),
  {
    ssr: false, // Only render on client
    loading: () => null, // fallback while loading
  }
);
