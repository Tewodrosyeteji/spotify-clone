import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserid from "@/actions/getSongsByUserId";
import Player from "@/components/Player";
import getActiveProductsWithPrice from "@/actions/getActiveProductsWithPrice";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "spotify",
  description: "Listen to music",
};

const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserid();
  const products = await getActiveProductsWithPrice();
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
