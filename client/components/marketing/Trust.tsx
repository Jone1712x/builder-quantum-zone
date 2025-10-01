import { useTranslation } from "react-i18next";

export default function Trust() {
  const { t } = useTranslation();
  const rawItems = t("trust.items", { returnObjects: true }) as any[];
  const items = rawItems.map((entry, i) => ({
    icon: ["🔒", "🤝", "✅"][i],
    paras: Array.isArray(entry) ? entry : [entry],
  }));
  return (
    <section className="py-20 bg-[#0B1222] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">{t("trust.title")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-800/40 border border-white/10 p-6 flex items-center justify-center gap-3"
            >
              <div className="text-2xl">{it.icon}</div>
              <div className="text-slate-300 space-y-2">
                {it.paras.map((p: string, idx: number) => (
                  <p key={idx}>{idx === 0 ? <strong>{p}</strong> : p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
