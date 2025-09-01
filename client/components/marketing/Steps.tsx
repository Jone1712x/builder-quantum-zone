export default function Steps() {
  const items = [
    {
      icon: "🔍",
      title: "Анализ цен",
      text: "Бот анализирует цены на десятках бирж в реальном времени.",
    },
    {
      icon: "⚡",
      title: "Поиск разницы",
      text: "Находит разницу - покупает дешевле, продаёт дороже.",
    },
    {
      icon: "💰",
      title: "Фиксация прибыли",
      text: "Фиксирует прибыль и возвращает результат на ваш счёт.",
    },
  ];

  return (
    <section className="py-20 bg-[#0A0F1F] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Как это работает</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-800/10 border border-white/10 p-8 backdrop-blur"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-700/50 text-2xl">
                <span>{it.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-slate-300">{it.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-slate-300">
          Всё проходит через официальные API крупнейших бирж: Binance, Bybit,
          OKX, KuCoin, Huobi.
        </p>
      </div>
    </section>
  );
}
