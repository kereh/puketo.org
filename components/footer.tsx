import { SewingPinFilledIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const tahun = new Date();

  return (
    <footer className="bg-primary text-background py-5 w-full">
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/assets/logo_2.png"
              alt="logo puketo"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              fill
            />
          </div>
          <div>
            <h1>PUKETO</h1>
            <p>Pusat Kerajinan Tombulu</p>
          </div>
        </div>
        <div className="w-full md:max-w-md flex flex-col gap-3">
          <p className="text-base flex items-center gap-3">
            <SewingPinFilledIcon className="w-10 h-10" />
            Jln.Raya Woloan, Ling. VI, Kelurahan Woloan 1 Utara, Kec. Tomohon
            Barat, Kota Tomohon, Sulawesi Utara, Indonesia. Kode Pos 95423
          </p>
          <div className="text-base flex items-center gap-3">
            <EnvelopeClosedIcon className="w-4 h-4" />
            pusakanetombulu@gmail.com
          </div>
        </div>
      </div>
      <div className="w-full md:text-center mt-6 px-6 lg:px-8">
        © {tahun.getFullYear()} Puketo. All rights reserved. | Created by{" "}
        <Link href="https://www.github.com/kereh">
          <span className="text-blue-500 underline underline-offset-4">
            Ronaldo Kereh
          </span>
        </Link>
      </div>
    </footer>
  );
}
