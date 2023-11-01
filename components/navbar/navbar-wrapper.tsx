import Image from "next/image";
import NavbarDesktop from "@/components/navbar/navbar-desktop";

export default function NavbarWrapper() {
  return (
    <div className="w-full sticky top-0 left-0 py-3 border bg-transparent backdrop-blur">
      <div className="container flex items-center justify-between">
        <div className="flex items-center relative w-14 h-14">
          <Image
            src="/logo.png"
            alt="logo puketo"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
        <NavbarDesktop />
      </div>
    </div>
  );
}
