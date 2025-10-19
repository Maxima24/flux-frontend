"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/appsidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { PageLoader } from "@/components/ui/page-loader";
import PlatformHeader from "@/components/ui/platform-header";
function PlatformContent({ children }: { children: React.ReactNode }) {
  const { state } = useSidebar();
  const isCollapsed = state  === "collapsed";

  return (
    <div className="min-h-screen w-full bg-background">
      <PageLoader />
      <div className="flex">
        <AppSidebar />

        <div
          className={`
            flex-1 flex flex-col overflow-hidden
            transition-all duration-300 ease-in-out
            ${isCollapsed ? "ml-[4.3rem]" : "ml-64"}
          `}
        >
          {/* Header */}
          <PlatformHeader />

          {/* Main content */}
          <main className="flex-1 overflow-auto bg-background text-foreground transition-colors duration-300 border-t border-orange-500/20">
            <div
              className={`
                min-h-screen w-full px-4 py-6 
                transition-all duration-300 ease-in-out 
                sm:px-6 lg:px-8
                ${
                  isCollapsed
                    ? "max-w-[calc(100vw-4.3rem)]"
                    : "max-w-[calc(100vw-16rem)]"
                }
              `}
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <PlatformContent>{children}</PlatformContent>
    </SidebarProvider>
  );
}