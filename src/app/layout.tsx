"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./styles/globals.css";
import { AppSidebar } from "@/components/screens/sidebar";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideSidebar = ["/auth/login", "/auth/register", "/auth/error"].includes(
    pathname
  );

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <SidebarProvider>
            {!hideSidebar && <AppSidebar />}
            <main>
              {!hideSidebar && <SidebarTrigger />}
              <div className="text-wrap">{children}</div>
            </main>
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
