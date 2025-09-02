import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-30 md:hidden bg-[#0b0c22]" />
      <video
        className="hidden md:block absolute inset-0 -z-30 h-full w-full object-cover"
        src="https://cdn.builder.io/o/assets%2F7462a4dfb7fc4ab1960ec7adb50372b4%2F56c5bf01fa2f443d97171c4909f7c718?alt=media&token=850c2400-9934-436e-ab5c-4e148b1294c5&apiKey=7462a4dfb7fc4ab1960ec7adb50372b4"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className="absolute inset-0 -z-20 bg-black/60" aria-hidden />

      <div className="container px-6 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(37,99,235,0.35)]">
          {t("hero.title")}
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <div className="mt-10">
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg md:text-xl font-semibold text-white shadow-[0_8px_30px_rgba(59,130,246,0.6)] hover:bg-blue-500 transition-transform hover:scale-[1.02]"
          >
            🔵 {t("hero.button")}
          </a>
        </div>
      </div>
    </section>
  );
}
