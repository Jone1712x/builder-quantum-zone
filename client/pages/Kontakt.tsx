import { useState } from "react";
import { ArrowLeft, Mail, MessageCircle, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Kontakt() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useTranslation();
  const navigate = useNavigate();

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
      <section className="pt-4">
        <div className="container px-6 mx-auto max-w-4xl flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white hover:underline"
            aria-label={t("common.back") as string}
          >
            <ArrowLeft className="h-4 w-4" /> {t("common.back")}
          </button>
          <LanguageSwitcher />
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{t("kontakt.title")}</h1>
          <p className="mt-4 text-slate-300 text-lg md:text-xl">{t("kontakt.subtitle")}</p>
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
                <div className="text-xl font-semibold">{t("kontakt.telegram")}</div>
                <div className="text-sm text-slate-400">{t("kontakt.reply5min")}</div>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/<nummer>?text=Hallo!%20Ich%20m%C3%B6chte%20CryptoArb%20Bot%20anschlie%C3%9Fen"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xl font-semibold">{t("kontakt.whatsapp")}</div>
                <div className="text-sm text-slate-400">{t("kontakt.reply5min")}</div>
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
                <div className="text-xl font-semibold">{t("kontakt.email")}</div>
                <div className="text-sm text-slate-400">{t("kontakt.replyDay")}</div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-12">
        <div className="container px-6 mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold">{t("kontakt.formTitle")}</h2>
          <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-300 mb-1">
                  {t("kontakt.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-blue-500"
                  placeholder={t("kontakt.yourName") as string}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-300 mb-1">
                  {t("kontakt.emailLabel")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-blue-500"
                  placeholder={t("kontakt.emailPlaceholder") as string}
                />
              </div>
            </div>
            <div>
              <label htmlFor="telegram" className="block text-sm text-slate-300 mb-1">
                {t("kontakt.telegramLabel")}
              </label>
              <input
                id="telegram"
                name="telegram"
                className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-blue-500"
                placeholder={t("kontakt.telegramPlaceholder") as string}
              />
            </div>
            <div>
              <label htmlFor="msg" className="block text-sm text-slate-300 mb-1">
                {t("kontakt.message")}
              </label>
              <textarea
                id="msg"
                name="msg"
                required
                rows={5}
                className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-blue-500"
                placeholder={t("kontakt.messagePlaceholder") as string}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:bg-blue-500 disabled:opacity-60"
            >
              {status === "loading" ? t("kontakt.sending") : t("kontakt.send")}
            </button>
            {status === "success" && (
              <p className="text-emerald-400 text-sm">{t("kontakt.success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">{t("kontakt.error")}</p>
            )}
          </form>
        </div>
      </section>

      {/* Info block */}
      <section className="py-12">
        <div className="container px-6 mx-auto max-w-3xl text-slate-300 text-sm">
          <div>{t("kontakt.hours")}</div>
          <div className="mt-1">{t("kontakt.languages")}</div>
          <div className="mt-3 flex gap-4">
            <span className="underline cursor-default select-text">{t("kontakt.imprint")}</span>
            <span className="underline cursor-default select-text">{t("kontakt.privacyLink")}</span>
          </div>
        </div>
      </section>

      {/* Sticky bar for mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden p-3 bg-gradient-to-t from-[#0A0F1F] via-[#0A0F1F]/95 to-transparent">
        <div className="container px-3 mx-auto max-w-3xl grid grid-cols-2 gap-3">
          <a href="#quick" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow hover:bg-blue-500">
            <Send className="h-5 w-5" /> {t("kontakt.telegramShort")}
          </a>
          <a href="#quick" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-white shadow hover:bg-emerald-400">
            <MessageCircle className="h-5 w-5" /> {t("kontakt.whatsappShort")}
          </a>
        </div>
      </div>
    </div>
  );
}
