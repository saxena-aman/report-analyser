import React from "react";
import NavBar from "@/components/ui/dashboard/navBar/navBar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="my-2 mx-5"> {children}</div>
    </div>
  );
}
