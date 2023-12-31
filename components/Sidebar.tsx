"use client";

import { useMemo } from "react";
import Box from "./Box";

import { HiHome, HiSearch } from "react-icons/hi";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";
import { twMerge } from "tailwind-merge";
import usePlayer from "@/hooks/usePlayer";

type SidebarProps = {
  children: React.ReactNode;
  songs: Song[];
};

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },

      {
        icon: HiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div
      className={twMerge(
        "flex h-full",
        player.activeId && "h-[clac(100%-80px)]"
      )}
    >
      <div className="hidden md:flex gap-y-2 flex-col bg-black w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full overflow-y-auto flex-1 py-2 ">{children}</main>
    </div>
  );
};

export default Sidebar;
