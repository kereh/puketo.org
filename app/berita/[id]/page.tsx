import { getAllPosts, getPostById } from "@/lib/berita";
import Image from "next/image";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const berita = await getPostById(id);

  return (
    <article className="container w-full md:max-w-lg lg:max-w-2xl pt-5 space-y-6 py-10">
      <div className="md:text-center space-y-2">
        <h1 className="text-xl font-semibold">{berita.judul}</h1>
        <p className="text-sm md:text-base">{berita.deskripsi}</p>
        <p className="text-base text-muted-foreground">{berita.tanggal}</p>
      </div>

      <div className="relative h-[50vw] lg:h-[30vw]">
        <Image
          src={berita.thumbnail}
          alt={berita.judul}
          className="object-fit aspect-video rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          fill
        />
      </div>
      <div
        className="relative prose"
        dangerouslySetInnerHTML={{ __html: berita.html }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const berita = await getAllPosts();
  return berita.map((b) => {
    id: b.id;
  });
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { judul } = await getPostById(id);
  return {
    judul,
  };
}
