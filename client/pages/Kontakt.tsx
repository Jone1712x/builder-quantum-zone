import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function Kontakt() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#0A0F1F] text-white">
      <section className="py-16 md:py-24">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Kontaktieren Sie uns</h1>
          <p className="mt-4 text-slate-300 text-lg md:text-xl">
            Wir antworten schnell und unkompliziert — wählen Sie den Kanal, der Ihnen am besten passt.
          </p>
        </div>
      </section>

      {/* Quick contact tiles */}
      <section id="quick" className="pb-12">
        <div className="container px-6 mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
          <a
            href="https://t.me/<username>"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Send className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xl font-semibold">Mit Telegram schreiben</div>
                <div className="text-sm text-slate-400">Antwort in ~5 Min.</div>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/<nummer>?text=Hallo!%20Ich%20möchte%20CryptoArb%20Bot%20anschließen"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xl font-semibold">Mit WhatsApp schreiben</div>
                <div className="text-sm text-slate-400">Antwort in ~5 Min.</div>
              </div>
            </div>
          </a>

          <a
            href="mailto:team@domain.de?subject=CryptoArb%20Bot"
            className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-indigo-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xl font-semibold">E-Mail senden</div>
                <div className="text-sm text-slate-400">Antwort am selben Tag.</div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-12">
        <div className="container px-6 mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold">Kontaktformular</h2>
          <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-blue-500"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-300 mb-1">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-blue-500"
                  placeholder="name@mail.de"
                />
              </div>
            </div>
            <div>
              <label htmlFor="msg" className="block text-sm text-slate-300 mb-1">
                Nachricht
              </label>
              <textarea
                id="msg"
                name="msg"
                required
                rows={5}
                className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-blue-500"
                placeholder="Wie können wir helfen?"
              />
            </div>
            <div className="flex items-start gap-3">
              <input id="consent" name="consent" type="checkbox" required className="mt-1" />
              <label htmlFor="consent" className="text-sm text-slate-300">
                Ich stimme der Verarbeitung meiner Daten gemäß {" "}
                <a href="/datenschutz" className="underline hover:text-white">
                  Datenschutzerklärung
                </a>{" "}
                zu.
              </label>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:bg-blue-500 disabled:opacity-60"
            >
              {status === "loading" ? "Senden…" : "Senden"}
            </button>
            {status === "success" && (
              <p className="text-emerald-400 text-sm">Danke! Wir melden uns innerhalb von 24h.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">Fehler. Bitte erneut versuchen oder per E-Mail schreiben.</p>
            )}
          </form>
        </div>
      </section>

      {/* Info block */}
      <section className="py-12">
        <div className="container px-6 mx-auto max-w-3xl text-slate-300 text-sm">
          <div>Öffnungszeiten: Mo–Fr 10:00���19:00 CET</div>
          <div className="mt-1">Sprachen: Deutsch · English · Русский</div>
          <div className="mt-3 flex gap-4">
            <a href="/impressum" className="underline">Impressum</a>
            <a href="/datenschutz" className="underline">Datenschutzerklärung</a>
          </div>
        </div>
      </section>

      {/* Sticky bar for mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden p-3 bg-gradient-to-t from-[#0A0F1F] via-[#0A0F1F]/95 to-transparent">
        <div className="container px-3 mx-auto max-w-3xl grid grid-cols-2 gap-3">
          <a href="#quick" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow hover:bg-blue-500">
            <Send className="h-5 w-5" /> Telegram
          </a>
          <a href="#quick" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-white shadow hover:bg-emerald-400">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
