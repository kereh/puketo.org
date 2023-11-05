import { getAllPosts } from "@/lib/berita";
import Link from "next/link";
import BeritaCard from "@/components/berita/berita-card";

export default async function Berita() {
  const berita = await getAllPosts();

  return (
    <div className="w-full px-6 lg:px-8 py-10 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h1 className="text-xl font-semibold">Berita Terbaru</h1>
        <Link href="/berita">
          <h2 className="text-base text-muted-foreground">
            Lihat Selengkapnya
          </h2>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {berita.slice(0, 3).map((b, index) => (
          <BeritaCard
            key={index}
            id={b.id}
            judul={b.judul}
            deskripsi={b.deskripsi}
            thumbnail={b.thumbnail}
            tanggal={b.tanggal}
          />
        ))}
      </div>
    </div>
  );
}
