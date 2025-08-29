import { useEffect, useState } from "react";
import { initChatwoot } from "@/lib/chatwoot";

const SUPPORT_EMAIL = "cryptolend123@outlook.com";

export default function ChatwootWidget() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const base = (window as any).CHATWOOT_BASE_URL as string | undefined;
    const token = (window as any).CHATWOOT_TOKEN as string | undefined;
    if (base && token) {
      initChatwoot(base, token);
      setActive(true);
    }
  }, []);

  if (active) return null; // Chatwoot will render its own bubble

  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}?subject=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0`}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Связаться с поддержкой"
    >
      <span className="text-xl">💬</span>
      <span className="hidden sm:inline">Поддержка 24/7</span>
    </a>
  );
}
