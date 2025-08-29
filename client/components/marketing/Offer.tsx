export default function Offer() {
  const items = [
    { icon: "✅", text: "Бесплатное подключение бота." },
    { icon: "🎓", text: "Пошаговое обучение (видео + инструкция)." },
    { icon: "🛠️", text: "Поддержка 24/7 (через Chatwoot)." },
  ];
  return (
    <section className="py-20 bg-[#0A0F1F] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Что вы получаете</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-800/40 border border-white/10 p-6"
            >
              <div className="mb-3 text-3xl">{it.icon}</div>
              <p className="text-slate-300">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
