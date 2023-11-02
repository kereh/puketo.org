import { links } from "@/components/navbar/items";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavbarDesktop() {
  return (
    <div className="hidden md:flex items-center gap-4">
      {links.map((link, index) => (
        <Link key={index} href={link.url}>
          <Button variant="ghost">{link.text}</Button>
        </Link>
      ))}
    </div>
  );
}
