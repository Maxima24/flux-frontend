// ...existing code...
"use client";

import React, { useEffect, useState } from "react";

export default function ConnectWallet() {
  const [Inner, setInner] = useState<null | React.ComponentType>(null);

  useEffect(() => {
    let mounted = true;

    // Import the heavy client-only module at runtime (only in the browser)
    import("./connect-wallet-inner")
      .then((mod) => {
        if (!mounted) return;
        // export could be default or named; prefer default then named
        const Comp = (mod && (mod.ConnectWalletInner)) as React.ComponentType;
        setInner(() => Comp);
      })
      .catch(() => {
        // optional: swallow import errors so build doesn't fail
        setInner(() => null);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (!Inner) return null; // or return a lightweight placeholder / skeleton
  const InnerComp = Inner;
  return <InnerComp />;
}
// ...existing code...