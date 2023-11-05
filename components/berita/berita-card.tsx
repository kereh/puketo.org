import Image from "next/image";

export default function BeritaCard({
  judul,
  deskripsi,
  tanggal,
  thumbnail,
}: {
  judul: string;
  deskripsi: string;
  tanggal: string;
  thumbnail: string;
}) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col gap-1">
        <div className="relative h-64 w-full">
          <Image
            src={thumbnail}
            alt={judul}
            className="absolute object-cover w-full aspect-video rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>
        <div className="py-3">
          <h1 className="font-semibold text-base">{judul}</h1>
          <p className="text-sm text-muted-foreground">{tanggal}</p>
          <p className="text-sm">{deskripsi}</p>
        </div>
      </div>
    </div>
  );
}
