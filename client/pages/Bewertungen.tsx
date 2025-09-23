import LanguageSwitcher from "@/components/LanguageSwitcher";
import ChatwootWidget from "@/components/integrations/ChatwootWidget";
import { useTranslation } from "react-i18next";

export default function Bewertungen() {
  const { t, i18n } = useTranslation();
  const isDE = i18n.language?.toLowerCase().startsWith("de");
  const items = (t("reviews.items") as any[]) as { meta: string; text: string; name: string }[];
  const quotes = (t("reviews.quotes") as any[]) as string[];

  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-[#0A0F1F]/60 border-b border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-[1fr_auto_1fr] h-14 items-center">
          <a className="font-extrabold tracking-tight text-xl justify-self-start" href="/">
            {t("common.brand")}
          </a>
          <nav className="hidden md:flex items-center justify-center gap-6 text-sm text-slate-300 justify-self-center">
            <a className="hover:text-white" href="/">{t("nav.home")}</a>
            <a className="text-white" href="/bewertungen" aria-current="page">{t("nav.reviews")}</a>
            <a className="hover:text-white" href="/kontakt">{t("nav.connect")}</a>
          </nav>
          <div className="flex items-center gap-3 justify-self-end">
            <LanguageSwitcher />
            <a className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500" href="/kontakt">
              {t("nav.freeAccess")}
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 opacity-90" />
          <div className="container mx-auto px-6 py-16 text-center">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`px-2 py-1 text-xs rounded border ${!isDE ? "bg-white text-[#0A0F1F] font-semibold border-white" : "bg-white/10 border-white/20"}`}
              >
                {t("reviews.langEN")}
              </button>
              <button
                onClick={() => i18n.changeLanguage("de")}
                className={`px-2 py-1 text-xs rounded border ${isDE ? "bg-white text-[#0A0F1F] font-semibold border-white" : "bg-white/10 border-white/20"}`}
              >
                {t("reviews.langDE")}
              </button>
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">{t("reviews.title")}</h1>
            <p className="mt-2 text-slate-100/80">{t("reviews.subtitle")}</p>
            <div className="mt-6">
              <a className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold hover:bg-blue-500 shadow-[0_8px_30px_rgba(59,130,246,0.4)]" href="/kontakt">
                {t("reviews.ctaStart")}
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {items.map((r, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5 text-left">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-300">{r.meta}</div>
                  <div className="flex items-center gap-1 text-yellow-300" aria-label={isDE ? "5 von 5 Sternen" : "5 out of 5 stars"}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 fill-current" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-slate-200">{r.text}</p>
                <div className="mt-4 font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 pb-10">
          <div className="flex flex-col items-center">
            <button className="rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/5">{t("reviews.showAll")}</button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-slate-300">{t("reviews.statsSatisfied")}</div>
              <div className="mt-3 h-2 rounded bg-white/10"><div className="h-2 rounded bg-emerald-500" style={{ width: "93%" }} /></div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-3xl font-bold">70+</div><div className="text-slate-300">{t("reviews.countriesLabel")}</div></div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-3xl font-bold">$100M+</div><div className="text-slate-300">{t("reviews.volumeLabel")}</div></div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] items-center">
            <div className="rounded-xl border border-white/10 bg-white/5 p-0 overflow-hidden">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet" role="img" aria-label={isDE ? "Weltaktivitätskarte" : "World activity map"}>
                  <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <image href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" x="0" y="0" width="100" height="50" opacity="0.16" preserveAspectRatio="xMidYMid meet" />
                  <g opacity="0.25" stroke="currentColor" strokeWidth="0.2">
                    <line x1="10" y1="0" x2="10" y2="50" /><line x1="20" y1="0" x2="20" y2="50" /><line x1="30" y1="0" x2="30" y2="50" /><line x1="40" y1="0" x2="40" y2="50" /><line x1="50" y1="0" x2="50" y2="50" /><line x1="60" y1="0" x2="60" y2="50" /><line x1="70" y1="0" x2="70" y2="50" /><line x1="80" y1="0" x2="80" y2="50" /><line x1="90" y1="0" x2="90" y2="50" />
                    <line x1="0" y1="10" x2="100" y2="10" /><line x1="0" y1="20" x2="100" y2="20" /><line x1="0" y1="30" x2="100" y2="30" /><line x1="0" y1="40" x2="100" y2="40" />
                  </g>
                  <g filter="url(#glow)">
                    <path d="M 22 30 Q 37 17.5 52 22" fill="none" stroke="#3B82F6" strokeOpacity="0.7" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M 52 22 Q 66 17.8 80 24" fill="none" stroke="#3B82F6" strokeOpacity="0.7" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M 49 24 Q 55.5 22.05 62 30" fill="none" stroke="#3B82F6" strokeOpacity="0.7" strokeWidth="0.8" strokeLinecap="round" />
                  </g>
                  <g>
                    {[{ x: 22, y: 30 }, { x: 52, y: 22 }, { x: 49, y: 24 }, { x: 62, y: 30 }, { x: 80, y: 24 }, { x: 70, y: 18 }].map((p, idx) => (
                      <g key={idx} transform={`translate(${p.x} ${p.y})`}>
                        <circle r="1.8" className="animate-ping" fill="#34d399" opacity="0.6" />
                        <circle r="1.2" fill="#34d399" />
                      </g>
                    ))}
                  </g>
                </svg>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['USA','Germany','UAE','Japan','France','Russia'].map((c) => (
                <button key={c} className="px-4 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-sm">{c}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-12 grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">“{q}”</div>
          ))}
        </section>

        <section className="container mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold">{t("reviews.formTitle")}</h2>
          <p className="text-slate-300 text-sm">{t("reviews.formTagline")}</p>
          <form className="mt-4 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-md bg-black/60 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-blue-400" placeholder={t("reviews.formNickname")} required />
              <input className="w-full rounded-md bg-black/60 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-blue-400" placeholder={t("reviews.formAge")} />
            </div>
            <input className="w-full rounded-md bg-black/60 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-blue-400" placeholder={t("reviews.formDeposit")} />
            <textarea rows={4} className="w-full rounded-md bg-black/60 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-blue-400" placeholder={t("reviews.formText")} required />
            <div>
              <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500">{t("reviews.formSubmit")}</button>
            </div>
          </form>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 opacity-90" />
          <div className="container mx-auto px-6 py-14 text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold">{t("reviews.bottomCtaTitle")}</h3>
            <div className="mt-4"><a className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0F1F] hover:opacity-90" href="/kontakt">{t("reviews.bottomCtaButton")}</a></div>
            <p className="mt-2 text-slate-100/80 text-sm">{t("reviews.bottomCtaSmall")}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0A0F1F] py-8 text-center text-slate-400">
        <div className="container mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} {t("common.brand")}. {t("common.allRights")}</p>
        </div>
      </footer>

      <a aria-label={t("chat.supportAria")} className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400" href="/kontakt"><span className="text-xl">💬</span><span className="hidden sm:inline">{t("chat.support24")}</span></a>
      <a aria-label={t("nav.reviews")} className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-white shadow-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400" href="/bewertungen"><span className="text-xl">⭐</span><span className="hidden sm:inline">{t("nav.reviews")}</span></a>
    </div>
  );
}
