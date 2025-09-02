import { useTranslation } from "react-i18next";

export default function Benefits() {
  const { t } = useTranslation();
  const items = [
    { icon: "🚀", text: (t("benefits.items") as string[])[0] },
    { icon: "📈", text: (t("benefits.items") as string[])[1] },
    { icon: "🤖", text: (t("benefits.items") as string[])[2] },
    { icon: "🛋️", text: (t("benefits.items") as string[])[3] },
  ];
  return (
    <section className="py-20 bg-[#0A0F1F] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">{t("benefits.title")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
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
