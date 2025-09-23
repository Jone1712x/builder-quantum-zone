import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      common: {
        brand: "CryptoArb Bot",
        allRights: "All rights reserved.",
        back: "Back",
      },
      nav: {
        home: "Home",
        connect: "Connect",
        freeAccess: "Free access",
      },
      chat: {
        supportAria: "Contact support",
        support24: "Support 24/7",
      },
      hero: {
        title: "Earn from crypto without guessing — our cross-exchange arbitrage bot works for you",
        subtitle:
          "The algorithm automatically captures price differences on the largest exchanges and brings profit every day. Everything is transparent and official.",
        button: "Connect the bot for free",
      },
      steps: {
        title: "How it works",
        items: [
          { title: "Price analysis", text: "The bot analyzes prices on dozens of exchanges in real time." },
          { title: "Finding spreads", text: "Buys cheaper, sells higher when a difference is found." },
          { title: "Profit capture", text: "Locks in profit and returns the result to your account." },
        ],
        api: "Everything goes through official APIs of the largest exchanges: Binance, Bybit, OKX, KuCoin, Huobi.",
      },
      trades: {
        title: "Trade examples",
        ex1:
          "BTC: Buy on Bybit for $4,500 -> sell on Binance for $4,860. Profit: +$360 per minute.",
        ex2:
          "ETH: Buy on OKX for $7,000 -> sell on KuCoin for $7,210. Profit: +$210.",
        summaryInfo:
          "This is an example of trades — on a regular market day, there are 15–20 such trades per day; during active market phases or news events, it can be 30–45",
        summary: "Night: Automatic series of 27 trades -> +$527 net profit.",
        speed: "All trades execute within seconds.",
      },
      benefits: {
        title: "Why it works",
        items: [
          "The bot doesn’t predict the market; it exploits price differences (spreads).",
          "Profits even in a sideways market.",
          "Works 24/7 without human involvement.",
          "High market liquidity.",
        ],
      },
      trust: {
        title: "Trust and security",
        items: [
          "Works only via official APIs of major exchanges.",
          "Partners: Binance, Bybit, OKX, KuCoin, Huobi.",
          "We don’t take access to your funds — only to trading.",
        ],
      },
      offer: {
        title: "What you get",
        items: [
          "Free bot connection.",
          "Step-by-step training (video + guide).",
          "24/7 support (via Chatwoot).",
        ],
      },
      about: {
        title: "About us",
        ceoAlt: "Portrait of the CEO",
        ceoName: "Beniamin Mincu",
        ceoRole: "CEO",
        ceoBio:
          "Beniamin Mincu is a visionary and co-founder of MultiversX, one of Europe’s most innovative blockchain companies.",
        company:
          "Team: MultiversX — a blockchain company formerly known as Elrond. We develop scalable Web3 infrastructure, support thousands of dApps, cross-chain solutions, and a DeFi/NFT ecosystem. CEO — Beniamin Mincu.",
        img1Alt: "Snapshot from a crypto event in Dubai",
        img2Alt: "Dubai at night",
      },
      finalCta: {
        title: "Start earning on arbitrage today",
        button: "Get free access",
        tagline: "Bot is free | Profit every day | Use the market to the fullest",
      },
      videos: {
        title: "Video cases",
        subtitle: "Other projects of ours",
      },
      kontakt: {
        title: "Contact us",
        subtitle:
          "We respond quickly and simply — choose the channel that suits you best.",
        telegram: "Write via Telegram",
        whatsapp: "Write via WhatsApp",
        email: "Send E-mail",
        reply5min: "Reply in ~5 min.",
        replyDay: "Reply the same day.",
        formTitle: "Contact form",
        name: "Name",
        yourName: "Your name",
        emailLabel: "E-mail",
        emailPlaceholder: "name@mail.com",
        message: "Message",
        messagePlaceholder: "How can we help?",
        telegramLabel: "Telegram",
        telegramPlaceholder: "@username",
        consent1: "I agree to the processing of my data according to the ",
        privacy: "Privacy Policy",
        consent2: ".",
        send: "Send",
        sending: "Sending…",
        success: "Thanks! We will get back within 24h.",
        error: "Error. Please try again or write via e-mail.",
        hours: "Opening hours: Mon–Fri 10:00–19:00 CET",
        languages: "Languages: English · German",
        imprint: "Imprint",
        privacyLink: "Privacy Policy",
        telegramShort: "Telegram",
        whatsappShort: "WhatsApp",
      },
    },
  },
  de: {
    translation: {
      common: {
        brand: "CryptoArb Bot",
        allRights: "Alle Rechte vorbehalten.",
        back: "Zurück",
      },
      nav: {
        home: "Startseite",
        connect: "Verbinden",
        freeAccess: "Kostenloser Zugang",
      },
      chat: {
        supportAria: "Support kontaktieren",
        support24: "Support 24/7",
      },
      hero: {
        title:
          "Verdiene mit Krypto ohne zu raten – unser Cross-Exchange-Arbitrage-Bot arbeitet für dich",
        subtitle:
          "Der Algorithmus erfasst automatisch Preisunterschiede auf den größten Börsen und bringt jeden Tag Gewinn. Alles transparent und offiziell.",
        button: "Bot kostenlos verbinden",
      },
      steps: {
        title: "So funktioniert es",
        items: [
          { title: "Preisanalyse", text: "Der Bot analysiert in Echtzeit Preise auf Dutzenden von Börsen." },
          { title: "Spreads finden", text: "Findet Unterschiede – kauft günstiger, verkauft teurer." },
          { title: "Gewinn sichern", text: "Sichert den Gewinn und überträgt das Ergebnis auf Ihr Konto." },
        ],
        api: "Alles läuft über offizielle APIs der größten Börsen: Binance, Bybit, OKX, KuCoin, Huobi.",
      },
      trades: {
        title: "Beispiele von Trades",
        ex1:
          "BTC: Kauf auf Bybit für $4.500 -> Verkauf auf Binance für $4.860. Gewinn: +$360 pro Minute.",
        ex2:
          "ETH: Kauf auf OKX für $7.000 -> Verkauf auf KuCoin für $7.210. Gewinn: +$210.",
        summaryInfo:
          "Dies ist ein Beispiel für Trades — an einem normalen Markttag gibt es 15–20 solcher Trades pro Tag; in aktiven Marktphasen oder bei Nachrichtenereignissen können es 30–45 sein.",
        summary: "Nacht: Automatische Serie von 27 Trades -> +$527 Nettogewinn.",
        speed: "Alle Trades werden in Sekunden ausgeführt.",
      },
      benefits: {
        title: "Warum es funktioniert",
        items: [
          "Der Bot prognostiziert den Markt nicht, sondern nutzt Preisunterschiede (Spreads).",
          "Gewinn auch bei Seitwärtsmarkt.",
          "Arbeitet 24/7 ohne menschliches Zutun.",
          "Hohe Marktliquidität.",
        ],
      },
      trust: {
        title: "Vertrauen und Sicherheit",
        items: [
          "Arbeitet nur über offizielle APIs der größten Börsen.",
          "Partner: Binance, Bybit, OKX, KuCoin, Huobi.",
          "Wir erhalten keinen Zugriff auf Ihr Geld – nur auf das Trading.",
        ],
      },
      offer: {
        title: "Was Sie erhalten",
        items: [
          "Kostenloses Verbinden des Bots.",
          "Schritt-für-Schritt-Schulung (Video + Anleitung).",
          "Support 24/7 (über Chatwoot).",
        ],
      },
      about: {
        title: "Über uns",
        ceoAlt: "Porträt des CEO",
        ceoName: "Beniamin Mincu",
        ceoRole: "CEO",
        ceoBio:
          "Beniamin Mincu ist Visionär und Mitgründer von MultiversX, einem der innovativsten Blockchain-Unternehmen Europas.",
        company:
          "Team: MultiversX — ein Blockchain-Unternehmen, früher bekannt als Elrond. Wir entwickeln skalierbare Web3-Infrastruktur, unterstützen Tausende dApps, Cross-Chain-Lösungen und ein DeFi/NFT-Ökosystem. CEO — Beniamin Mincu.",
        img1Alt: "Foto von einem Krypto-Event in Dubai",
        img2Alt: "Dubai bei Nacht",
      },
      finalCta: {
        title: "Beginne noch heute mit Arbitrage zu verdienen",
        button: "Kostenlosen Zugang erhalten",
        tagline: "Bot ist kostenlos | Gewinn jeden Tag | Nutze den Markt maximal",
      },
      videos: {
        title: "Video-Cases",
        subtitle: "Unsere weiteren Projekte",
      },
      kontakt: {
        title: "Kontaktieren Sie uns",
        subtitle:
          "Wir antworten schnell und unkompliziert — wählen Sie den Kanal, der Ihnen am besten passt.",
        telegram: "Mit Telegram schreiben",
        whatsapp: "Mit WhatsApp schreiben",
        email: "E-Mail senden",
        reply5min: "Antwort in ~5 Min.",
        replyDay: "Antwort am selben Tag.",
        formTitle: "Kontaktformular",
        name: "Name",
        yourName: "Ihr Name",
        emailLabel: "E-Mail",
        emailPlaceholder: "name@mail.de",
        message: "Nachricht",
        messagePlaceholder: "Wie können wir helfen?",
        telegramLabel: "Telegram",
        telegramPlaceholder: "@benutzername",
        consent1: "Ich stimme der Verarbeitung meiner Daten gemäß ",
        privacy: "Datenschutzerklärung",
        consent2: "zu.",
        send: "Senden",
        sending: "Senden…",
        success: "Danke! Wir melden uns innerhalb von 24h.",
        error: "Fehler. Bitte erneut versuchen oder per E-Mail schreiben.",
        hours: "Öffnungszeiten: Mo–Fr 10:00–19:00 CET",
        languages: "Sprachen: Deutsch · Englisch",
        imprint: "Impressum",
        privacyLink: "Datenschutzerklärung",
        telegramShort: "Telegram",
        whatsappShort: "WhatsApp",
      },
    },
  },
};

function detectInitialLng() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    const nav = navigator.language || (navigator as any).userLanguage || "en";
    return nav.toLowerCase().startsWith("de") ? "de" : "en";
  } catch {
    return "en";
  }
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: detectInitialLng(),
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      returnObjects: true,
    });

  try {
    const cur = i18n.language;
    document.documentElement.lang = cur;
    localStorage.setItem("lang", cur);
  } catch {}

  i18n.on("languageChanged", (lng) => {
    try {
      document.documentElement.lang = lng;
      localStorage.setItem("lang", lng);
    } catch {}
  });
}

export default i18n;
