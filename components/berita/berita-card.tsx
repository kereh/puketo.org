import Image from "next/image";
import Link from "next/link";

export default function BeritaCard({
  id,
  judul,
  deskripsi,
  tanggal,
  thumbnail,
}: {
  id: string;
  judul: string;
  deskripsi: string;
  tanggal: string;
  thumbnail: string;
}) {
  return (
    <div className="w-full overflow-hidden">
      <Link href={`/berita/${id}`}>
        <div className="flex flex-col gap-1">
          <div className="relative h-64 w-full">
            <Image
              src={thumbnail}
              alt={judul}
              className="absolute object-cover w-full aspect-video rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              fill
            />
          </div>
          <div className="py-3">
            <h1 className="font-semibold text-base">{judul}</h1>
            <p className="text-sm text-muted-foreground mb-3">{tanggal}</p>
            <p className="text-sm">{deskripsi}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
