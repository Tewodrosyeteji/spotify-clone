import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import SupabaseProvider from "@/providers/SupabaseProvider";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "spotify",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SupabaseProvider>
          <Sidebar>{children}</Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
