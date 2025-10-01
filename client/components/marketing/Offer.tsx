import { useTranslation } from "react-i18next";

export default function Offer() {
  const { t } = useTranslation();
  const texts = t("offer.items", { returnObjects: true }) as (string | string[])[];
  const items = [
    { icon: "✅", text: texts[0] },
    { icon: "🎓", text: texts[1] },
    { icon: "🛠️", text: texts[2] },
  ];
  return (
    <section className="py-20 bg-[#0A0F1F] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">{t("offer.title")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-800/40 border border-white/10 p-6"
            >
              <div className="mb-3 text-3xl">{it.icon}</div>
              <div className="text-slate-300 space-y-2">
                {Array.isArray(it.text)
                  ? it.text.map((p, idx) => <p key={idx}>{p}</p>)
                  : <p>{it.text}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
