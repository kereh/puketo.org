"use client";

import { useState, useEffect } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavbarDesktop from "@/components/navbar/navbar-desktop";
import NavbarMobile from "@/components/navbar/navbar-mobile";
import Image from "next/image";

export default function NavbarWrapper() {
  const [openMobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <div className="w-full sticky border-b top-0 left-0 py-1 z-[100] bg-gradient-to-r from-background to-gray-100">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14">
            <Image
              src="/logo.png"
              alt="logo puketo"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              fill
            />
          </div>
          <h1 className="text-xl relative">PUKETO</h1>
        </div>
        <HamburgerMenuIcon
          onClick={() => setMobileMenu(!openMobileMenu)}
          className="md:hidden w-6 h-6"
        />
        <NavbarDesktop />
      </div>
      <NavbarMobile isOpen={openMobileMenu} setIsOpen={setMobileMenu} />
    </div>
  );
}
