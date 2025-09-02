import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const cur = i18n.language || "en";

  const Button = ({ code, label }: { code: "en" | "de"; label: string }) => (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(code)}
      className={`px-2 py-1 rounded-md text-xs font-semibold transition-colors ${
        cur.startsWith(code)
          ? "bg-white/10 text-white"
          : "text-slate-300 hover:text-white hover:bg-white/5"
      }`}
      aria-pressed={cur.startsWith(code)}
      aria-label={`Switch language to ${label}`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-1">
      <Button code="en" label="EN" />
      <Button code="de" label="DE" />
    </div>
  );
}
