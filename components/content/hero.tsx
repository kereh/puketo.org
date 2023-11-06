export default function Hero() {
  return (
    // h-[50vw] md:h-[45vw]
    <div className="relative w-full h-[50vw] md:h-[45vw]">
      <div className="absolute h-full w-full bg-black/80" />
      <video
        className="absolute -z-20 h-full w-full object-cover md:object-fill"
        src="/assets/video.webm"
        autoPlay={false}
        // autoPlay
        // loop
        playsInline
      ></video>
      <div className="flex items-center relative h-[80vw] md:h-[70vw] px-6 lg:px-8">
        <div className="text-background">
          <h1 className="text-sm md:text-lg lg:text-xl font-semibold">
            Wongken Wo Werun
          </h1>
          <p className="text-muted text-xs md:text-base">
            membangkitkan dan memperbaharui kembali akan kebudayaan di Tombulu.
          </p>
        </div>
      </div>
    </div>
  );
}
