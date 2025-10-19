"use client"
import { useRouter } from "next/navigation";
import ConnectWallet from "../web3/ConnectWallet";
import { ThemeToggle } from "./ThemeToogle";
import Link from "next/link";
 export default function PlatformHeader() {
  const router = useRouter();
  const marketingLinks = [
    // { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 ml-10 z-30 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex h-16 items-center justify-between px-4">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {marketingLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-orange-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <ConnectWallet onConnect={() => router.push("/dashboard")} />
        </div>
      </div>
    </header>
  );
}