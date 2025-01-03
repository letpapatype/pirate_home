"use client";

import { usePathname } from "next/navigation";
import NavigationSquares from "./NavigationSquares";

export default function ClientWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return isHomePage ? <NavigationSquares /> : null;
}
