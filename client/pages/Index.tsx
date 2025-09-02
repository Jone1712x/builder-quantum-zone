import { useEffect } from "react";
import Hero from "@/components/marketing/Hero";
import Steps from "@/components/marketing/Steps";
import Trades from "@/components/marketing/Trades";
import Benefits from "@/components/marketing/Benefits";
import Trust from "@/components/marketing/Trust";
import Offer from "@/components/marketing/Offer";
import About from "@/components/marketing/About";
import FinalCta from "@/components/marketing/FinalCta";
import Videos from "@/components/marketing/Videos";
import ChatwootWidget from "@/components/integrations/ChatwootWidget";

export default function Index() {
  useEffect(() => {
    document.documentElement.lang = "ru";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-[#0A0F1F]/60 border-b border-white/10">
        <div className="container px-6 mx-auto flex h-14 items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">
            CryptoArb Bot
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="/" className="hover:text-white">
              Главная
            </a>
            <a href="/kontakt" className="hover:text-white">
              Подключить
            </a>
          </nav>
          <a
            href="/kontakt"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
          >
            Бесплатный доступ
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Steps />
        <Trades />
        <Benefits />
        <Trust />
        <Offer />
        <About />
        <Videos />
        <FinalCta />
      </main>

      <footer className="border-t border-white/10 bg-[#0A0F1F] py-8 text-center text-slate-400">
        <div className="container px-6 mx-auto space-y-2">
          <p>© {new Date().getFullYear()} CryptoArb Bot. Все права защищены.</p>
        </div>
      </footer>

      <ChatwootWidget />
    </div>
  );
}
