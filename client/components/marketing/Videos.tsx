export default function Videos() {
  const videos = [
    {
      src: "https://cdn.builder.io/o/assets%2F7462a4dfb7fc4ab1960ec7adb50372b4%2Fc56b523ea7ec4660b5cbe152225b11db?alt=media&token=d6102c6d-36fd-47ad-b648-a442f92471ae&apiKey=7462a4dfb7fc4ab1960ec7adb50372b4",
      title: "Multiversx 1080p",
    },
    {
      src: "https://cdn.builder.io/o/assets%2F7462a4dfb7fc4ab1960ec7adb50372b4%2Fefc9218ead084ddf97f8e5a28ae91654?alt=media&token=96d9591d-df24-406e-9f72-5bee2ebc25ae&apiKey=7462a4dfb7fc4ab1960ec7adb50372b4",
      title: "Case Grid 3",
    },
  ];

  return (
    <section className="py-20 bg-[#0A0F1F] text-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold">Видео‑кейсы</h2>
        <p className="mt-4 text-center text-slate-300 max-w-2xl mx-auto">Короткие ролики усилива��т доверие и визуально показывают результаты и атмосферу крипто‑сообщества.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((v) => (
            <div key={v.src} className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur">
              <div className="relative aspect-video">
                <video
                  src={v.src}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 text-sm text-slate-300">{v.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
