import Hero from "@/components/marketing/Hero";
import Steps from "@/components/marketing/Steps";
import Trades from "@/components/marketing/Trades";
import Trust from "@/components/marketing/Trust";
import Offer from "@/components/marketing/Offer";
import About from "@/components/marketing/About";
import FinalCta from "@/components/marketing/FinalCta";
import Videos from "@/components/marketing/Videos";
import ChatwootWidget from "@/components/integrations/ChatwootWidget";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-[#0A0F1F]/60 border-b border-white/10">
        <div className="container px-6 mx-auto flex h-14 items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">
            {t("common.brand")}
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="/" className="hover:text-white">
              {t("nav.home")}
            </a>
            <a href="/bewertungen" className="hover:text-white">
              {t("nav.reviews")}
            </a>
            <a href="/kontakt" className="hover:text-white">
              {t("nav.connect")}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="/kontakt"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
            >
              {t("nav.freeAccess")}
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Steps />
        <Trades />
        <Trust />
        <Offer />
        <About />
        <Videos />
        <FinalCta />
      </main>

      <footer className="border-t border-white/10 bg-[#0A0F1F] py-8 text-center text-slate-400">
        <div className="container px-6 mx-auto space-y-2">
          <p>
            © {new Date().getFullYear()} {t("common.brand")}.
            {" "}
            {t("common.allRights")}
          </p>
        </div>
      </footer>

      <ChatwootWidget />

      <a
        aria-label="View reviews"
        href="/bewertungen"
        className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-white shadow-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span className="text-xl">⭐</span>
        <span className="hidden sm:inline">{t("nav.reviews")}</span>
      </a>
    </div>
  );
}
