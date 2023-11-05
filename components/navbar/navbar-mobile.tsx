"use client";

import { Dispatch } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { links } from "@/components/navbar/items";
import { Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NavbarMobile({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}) {
  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed top-0 left-0 h-screen w-full backdrop-blur flex justify-end"
    >
      <div className="h-screen w-2/3 border-l bg-background">
        <div className="flex flex-col py-1 px-6 lg:px-8 py-2 gap-6">
          <div className="flex items-center justify-between">
            <div className="relative h-14 w-14">
              <Image
                src="/assets/logo.png"
                alt="logo puketo"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                priority
              />
            </div>
            <CrossCircledIcon
              className="w-6 h-6"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <p className="text-muted-foreground">
            Website official Pusat Kerajinan Tombulu PUKETO
          </p>
          <Separator />
          <div className="flex flex-col items-center gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Button variant="link">{link.text}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Transition>
  );
}
