import CandlestickChart from "@/components/visuals/CandlestickChart";
import { useTranslation } from "react-i18next";

export default function FinalCta() {
  const { t } = useTranslation();
  return (
    <section id="cta" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0F1F] via-[#0B1222] to-[#0A0F1F]" />
      <CandlestickChart className="absolute inset-0 -z-10" opacity={0.45} />

      <div className="container px-6 mx-auto text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold">{t("finalCta.title")}</h2>
        <div className="mt-8">
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg md:text-xl font-semibold text-white shadow-[0_8px_30px_rgba(59,130,246,0.6)] hover:bg-blue-500 transition-transform hover:scale-[1.02]"
          >
            🔵 {t("finalCta.button")}
          </a>
        </div>
        <p className="mt-6 text-slate-300 text-lg">{t("finalCta.tagline")}</p>
      </div>
    </section>
  );
}
