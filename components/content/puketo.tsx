import Image from "next/image";

export default function Puketo() {
  return (
    <div className="container py-10 flex flex-col md:flex-row md:items-center gap-5 bg-gradient-to-r from-background to-gray-100">
      <div className="relative w-full h-[55vw] md:h-[30vw]">
        <Image
          src="/images/apa-itu-pnt.jpg"
          alt="Apa itu PUKETO"
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          fill
        />
      </div>
      <div className="w-full md:max-w-xl lg:max-w-2xl space-y-2">
        <h1 className="text-xl font-semibold">Apa itu PUKETO?</h1>
        <div className="space-y-2">
          <p className="text-sm leading-relaxed">
            Pusat Kerajinan Tombulu <span className="font-bold">(PUKETO)</span>{" "}
            adalah Organisasi Kebudayaan berbentuk Perkumpulan hasil dari
            pokok-pokok pikiran pada kegiatan Seminar dan Lokakarya Sejarah
            Woloan dan Toponomi Dalam Rangka Festival Seni dan Budaya Woloan,
            yang dilaksanakan pada Senin, 27 Mei 2019 di{" "}
            <span className="italic">Amphitheatre</span> Woloan.
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">PUKETO</span> bertujuan untuk menjadi
            wadah bagi para pegiat, pelaku, pelestari dan masyarakat untuk
            memperjuangkan nilai-nilai sejarah, seni, tradisi, budaya, dan
            kearifan Lokal Suku Minahasa terlebih khusus Sub Etnis Tombulu.
          </p>
        </div>
      </div>
    </div>
  );
}
