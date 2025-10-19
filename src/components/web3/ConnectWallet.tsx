"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the heavy client-only module
const ConnectWalletInner = dynamic(
  () =>
    import("./connect-wallet-inner").then(
      (mod) => mod.ConnectWalletInner 
    ),
  {
    ssr: false, // Don't render on server
    loading: () => null, // Placeholder while loading
  }
);

export default function ConnectWallet({ onConnect }: { onConnect?: () => void }) {
  return (
    <Suspense fallback={null}>
      <ConnectWalletInner onConnect={onConnect} />
    </Suspense>
  );
}