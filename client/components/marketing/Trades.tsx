import TickerSlider from "@/components/visuals/TickerSlider";
import { useTranslation } from "react-i18next";

export default function Trades() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#0B1222] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">{t("trades.title")}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto text-left">
          <div className="rounded-2xl bg-slate-800/40 border border-white/10 p-6">
            <p className="text-xl md:text-2xl">{t("trades.ex1")}</p>
          </div>
          <div className="rounded-2xl bg-slate-800/40 border border-white/10 p-6">
            <p className="text-xl md:text-2xl">{t("trades.ex2")}</p>
          </div>
        </div>
        <div className="mt-8 text-2xl font-semibold">
          <p>{t("trades.summaryInfo")}</p>
          <p>{t("trades.summary")}</p>
        </div>
        <p className="mt-2 text-slate-300">⏱️ {t("trades.speed")}</p>

        <div className="mt-10">
          <TickerSlider randomize min={10} max={250} count={90} refreshMs={16000} />
        </div>

        <div className="mt-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-yellow-400/30 bg-yellow-500/10 text-yellow-200 px-5 py-4 text-xl font-semibold shadow-[inset_0_0_0_1px_rgba(234,179,8,0.1)]">
            {t("trades.highlight")}
          </div>
        </div>
      </div>
    </section>
  );
}
