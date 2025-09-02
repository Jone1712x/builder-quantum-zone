import { useTranslation } from "react-i18next";

export default function Steps() {
  const { t } = useTranslation();
  const items = [
    { icon: "🔍", ...(t("steps.items") as any)[0] },
    { icon: "⚡", ...(t("steps.items") as any)[1] },
    { icon: "💰", ...(t("steps.items") as any)[2] },
  ];

  return (
    <section className="py-20 bg-[#0A0F1F] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">{t("steps.title")}</h2>
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
        <p className="mt-10 text-slate-300">{t("steps.api")}</p>
      </div>
    </section>
  );
}
