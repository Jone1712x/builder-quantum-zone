import LanguageSwitcher from "@/components/LanguageSwitcher";
import ChatwootWidget from "@/components/integrations/ChatwootWidget";
import { useTranslation } from "react-i18next";

export default function Bewertungen() {
  const { t } = useTranslation();

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
              <button className="px-2 py-1 text-xs rounded border bg-white text-[#0A0F1F] font-semibold border-white">EN</button>
              <button className="px-2 py-1 text-xs rounded border bg-white/10 border-white/20">DE</button>
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">User reviews</h1>
            <p className="mt-2 text-slate-100/80">From newcomers to crypto whales — used worldwide</p>
            <div className="mt-6">
              <a className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold hover:bg-blue-500 shadow-[0_8px_30px_rgba(59,130,246,0.4)]" href="/kontakt">
                Get started free
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { meta: "Deposit: $1,150  •  Today", text: "The bot doesn't hold positions long — buys lower, sells higher. Scales well.", name: "Lukas M." },
              { meta: "Deposit: $2,320  •  This week", text: "No guessing, just arbitrage. Setup in 15 min, support is fast.", name: "Katharina M." },
              { meta: "Deposit: $3,577  •  2 days ago", text: "See small profits daily. Windows v1.4 + guide — really simple.", name: "Jonas P." },
              { meta: "Deposit: $835  •  Yesterday", text: "Sometimes multiple trades per minute — visible even on a small account.", name: "Helena M." },
              { meta: "Deposit: $5,338  •  8 hours ago", text: "+1.1% in a month. Like that deposits remain separate.", name: "Sven K." },
              { meta: "Deposit: $973  •  Today", text: "+$500 overnight — laptop was closed. Clean execution.", name: "Leo F." },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5 text-left">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-300">{r.meta}</div>
                  <div className="flex items-center gap-1 text-yellow-300" aria-label="5 out of 5 stars">
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
            <a className="rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/5" href="/bewertungen">{t("nav.reviews")}</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0A0F1F] py-8 text-center text-slate-400">
        <div className="container mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} {t("common.brand")}. {t("common.allRights")}</p>
        </div>
      </footer>

      <ChatwootWidget />

      <a
        aria-label="Bewertungen anzeigen"
        className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-white shadow-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
        href="/bewertungen"
      >
        <span className="text-xl">⭐</span>
        <span className="hidden sm:inline">{t("nav.reviews")}</span>
      </a>
    </div>
  );
}
