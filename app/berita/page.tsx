import { getAllPosts } from "@/lib/berita";
import BeritaCard from "@/components/berita/berita-card";

export default async function page() {
  const berita = await getAllPosts();
  return (
    <div className="px-6 lg:px-8 w-full py-8 space-y-3">
      <h1 className="text-lg lg:text-xl font-semibold">Daftar Berita</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {berita.map((b, index) => (
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
