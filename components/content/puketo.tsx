import Image from "next/image";

export default function Puketo() {
  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 md:items-center gap-x-10 gap-y-5 px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="relative w-full h-[55vw] md:h-[30vw]">
            <Image
              src="/assets/apa-itu-puketo.jpg"
              alt="Apa itu PUKETO"
              className="object-cover rounded-lg aspect-video"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              fill
            />
          </div>
          <div className="w-full md:max-w-xl lg:max-w-2xl space-y-2">
            <h1 className="text-xl font-semibold">Apa itu PUKETO?</h1>
            <div className="space-y-5 md:space-y-10">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">
                  Pusat Kebudayaan Tombulu (PUKETO)
                </span>{" "}
                adalah Organisasi Kebudayaan berbentuk Perkumpulan hasil dari
                pokok-pokok pikiran pada kegiatan Seminar dan Lokakarya Sejarah
                Woloan dan Toponomi Dalam Rangka Festival Seni dan Budaya
                Woloan, yang dilaksanakan pada Senin, 27 Mei 2019 di{" "}
                <span className="italic">Amphitheatre</span> Woloan.
              </p>
              <p className="text-sm leading-relaxed">
                Slogan dari PUKETO dalam Bahasa Tombulu yaitu{" "}
                <span className="italic font-semibold">Wongken Wo Werun</span>{" "}
                yang berarti membangkitkan dan memperbaharui kembali akan
                kebudayaan di Tombulu.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-8">
          <div className="relative w-full h-[90vw] md:h-[45vw] overflow-hidden">
            <Image
              src="/assets/apa-itu-puketo-2.jpg"
              alt="Apa itu PUKETO"
              className="object-cover rounded-lg aspect-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              fill
            />
          </div>
          <div className="w-full md:max-w-xl lg:max-w-2xl">
            <div className="space-y-2 md:text-left md:space-y-10">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">
                  Pusat Kebudayaan Tombulu (PUKETO)
                </span>{" "}
                bertujuan untuk menjadi wadah bagi para pegiat, pelaku,
                pelestari dan masyarakat untuk memperjuangkan nilai-nilai
                sejarah, seni, tradisi, budaya, dan kearifan Lokal Suku Minahasa
                terlebih khusus Sub Etnis Tombulu.
              </p>
              <p className="text-sm leading-relaxed">
                Sebagai Perkumpulan Independen,{" "}
                <span className="font-semibold">
                  Pusat Kebudayaan Tombulu (PUKETO)
                </span>{" "}
                melaksanakan berbagai kegiatan kebudayaan berbasis masyarakat
                yang sejalan dengan visi misi yakni membentuk Lembaga Formal dan
                non Formal di Bidang Seni Budaya, Interaksi Budaya,
                Pendayagunaan Ruang Publik, Kegiatan Ekspresi Budaya,
                Dokumentasi Karya/Pengetahuan Maestro, Penciptaan Karya Kreatif
                Inovatif, Kajian Objek Pemajuan Kebudayaan dan Wadah Apresiasi
                kepada Pelaku, Pegiat dan Pelestari Seni Budaya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
