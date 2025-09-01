import TickerSlider from "@/components/visuals/TickerSlider";

export default function Trades() {
  return (
    <section className="py-20 bg-[#0B1222] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Примеры сделок</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto text-left">
          <div className="rounded-2xl bg-slate-800/40 border border-white/10 p-6">
            <p className="text-xl md:text-2xl">
              <span className="text-blue-400 font-bold">BTC</span>: Покупка на
              Bybit за $62 010 {"->"} продажа на Binance за $62 085. Прибыль:{" "}
              <span className="text-emerald-400 font-bold">+$75</span> за
              минуту.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-800/40 border border-white/10 p-6">
            <p className="text-xl md:text-2xl">
              <span className="text-purple-400 font-bold">ETH</span>: Покупка на
              OKX за $3 412 {"->"} продажа на KuCoin за $3 428. Прибыль:{" "}
              <span className="text-emerald-400 font-bold">+$16</span>.
            </p>
          </div>
        </div>
        <p className="mt-8 text-2xl font-semibold">
          Ночь: Автоматическая серия из 27 сделок {"->"}{" "}
          <span className="text-emerald-400">+$527</span> чистой прибыли.
        </p>
        <p className="mt-2 text-slate-300">
          ⏱️ Все сделки проходят за секунды.
        </p>

        <div className="mt-10">
          <TickerSlider randomize min={10} max={250} count={90} refreshMs={16000} />
        </div>
      </div>
    </section>
  );
}
