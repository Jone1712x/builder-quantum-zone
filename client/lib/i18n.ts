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
        reviews: "Reviews",
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
      reviews: {
        title: "Real user reviews",
        subtitle: "From beginners to crypto whales — used worldwide",
        ctaStart: "Get started free",
        items: [
          { meta: "Deposit: $1,150  •  Today", text: "The bot doesn't hold positions long — buys lower, sells higher. Scales without issues.", name: "Lukas M." },
          { meta: "Deposit: $2,320  •  This week", text: "No guessing, just arbitrage. Setup in 15 min, support is very fast.", name: "Katharina M." },
          { meta: "Deposit: $3,577  •  2 days ago", text: "Now I see small profits daily. Windows v1.4 + guide — really simple.", name: "Jonas P." },
          { meta: "Deposit: $835  •  Yesterday", text: "Sometimes there are multiple trades per minute — visible even on a small account.", name: "Helena M." },
          { meta: "Deposit: $5,338  •  8 hours ago", text: "+1.1% in a month. I like that deposits remain separate.", name: "Sven K." },
          { meta: "Deposit: $973  •  Today", text: "+$500 overnight — laptop was closed. Clean execution.", name: "Leo F." }
        ],
        showAll: "Show all 70 reviews",
        statsSatisfied: "93% of users are satisfied",
        countriesLabel: "countries",
        volumeLabel: "volume processed by users",
        quotes: [
          "Sometimes trades are too fast — I can't keep up manually",
          "Scales well with volume",
          "+$500 overnight — didn't even open the laptop"
        ],
        formTitle: "Leave a review",
        formTagline: "Reviews automatically adapt to your language.",
        formNickname: "Nickname",
        formAge: "Age",
        formDeposit: "Deposit (e.g., $250)",
        formText: "Review text",
        formSubmit: "Submit",
        bottomCtaTitle: "Join the community and leave a review",
        bottomCtaButton: "Leave a review",
        bottomCtaSmall: "Your feedback makes the bot better and more transparent.",
        langEN: "EN",
        langDE: "DE"
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
        reviews: "Bewertungen",
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
          "Beniamin Mincu ist Visionär und Mitgr��nder von MultiversX, einem der innovativsten Blockchain-Unternehmen Europas.",
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
      reviews: {
        title: "Echte Nutzerbewertungen",
        subtitle: "Von Einsteigern bis Krypto‑Walen — weltweit im Einsatz",
        ctaStart: "Kostenlos starten",
        items: [
          { meta: "Einzahlung: $1.150  •  Heute", text: "Der Bot hält Positionen nicht lange – kauft günstiger, verkauft teurer. Skalierung ohne Probleme.", name: "Lukas M." },
          { meta: "Einzahlung: $2.320  •  Diese Woche", text: "Keine Ratespiele, nur Arbitrage. Einrichtung in 15 Min., Support sehr schnell.", name: "Katharina M." },
          { meta: "Einzahlung: $3.577  •  Vor 2 Tagen", text: "Sehe jetzt täglich kleine Gewinne. Windows v1.4 + Anleitung – wirklich einfach.", name: "Jonas P." },
          { meta: "Einzahlung: $835  •  Gestern", text: "Manchmal gibt es mehrere Trades pro Minute – auf kleinem Konto sichtbar.", name: "Helena M." },
          { meta: "Einzahlung: $5.338  •  Vor 8 Stunden", text: "War +1,1 % in einem Monat. Gefällt, dass die Einzahlungen getrennt bleiben.", name: "Sven K." },
          { meta: "Einzahlung: $973  •  Heute", text: "+$500 über Nacht – Laptop war sogar zu. Sauber ausgeführt.", name: "Leo F." }
        ],
        showAll: "Alle 70 Bewertungen anzeigen",
        statsSatisfied: "93% der Nutzer sind zufrieden",
        countriesLabel: "Länder",
        volumeLabel: "von Nutzern abgewickeltes Volumen",
        quotes: [
          "Manchmal sind Trades zu schnell – manuell komme ich nicht hinterher",
          "Skaliert gut mit dem Volumen",
          "+$500 über Nacht – Laptop nicht einmal geöffnet"
        ],
        formTitle: "Bewertung hinterlassen",
        formTagline: "Bewertungen passen sich automatisch Ihrer Sprache an.",
        formNickname: "Nickname",
        formAge: "Alter",
        formDeposit: "Einzahlung (z. B. $250)",
        formText: "Bewertungstext",
        formSubmit: "Senden",
        bottomCtaTitle: "Tritt der Community bei und hinterlasse eine Bewertung",
        bottomCtaButton: "Bewertung hinterlassen",
        bottomCtaSmall: "Dein Feedback macht den Bot besser und transparenter.",
        langEN: "EN",
        langDE: "DE"
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
