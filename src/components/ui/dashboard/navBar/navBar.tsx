"use client";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import styles from "./navBar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="font-bold sm:inline-block capitalize">
          {pathname.split("/").pop()}
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center p-10 gap-2">
            <MdSearch size={20} />
            <Input type="text" placeholder="Search" className="bg-white/10" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
