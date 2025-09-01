import DynamicLineChart from "@/components/visuals/DynamicLineChart";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(99,102,241,0.15),transparent)] bg-gradient-to-b from-[#0B1222] via-[#0E1530] to-[#0A0F1F]" />
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.18] mix-blend-screen"
        src="https://cdn.builder.io/o/assets%2F7462a4dfb7fc4ab1960ec7adb50372b4%2F0fafb4e347a94b54b2b685a6b8929f0c?alt=media&token=a95b45a1-569f-4716-bc2e-0bbf5ef1852b&apiKey=7462a4dfb7fc4ab1960ec7adb50372b4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <DynamicLineChart className="absolute inset-0 -z-10" opacity={0.65} />

      <div className="container px-6 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(37,99,235,0.35)]">
          Зарабатывай на крипте без угадываний — наш бот для межбиржевого
          арбитража работает за тебя
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto">
          «Алгоритм автоматически фиксирует разницу цен на крупнейших биржах и
          приносит прибыль каждый день. Вс�� прозрачно и официально.»
        </p>
        <div className="mt-10">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg md:text-xl font-semibold text-white shadow-[0_8px_30px_rgba(59,130,246,0.6)] hover:bg-blue-500 transition-transform hover:scale-[1.02]"
          >
            🔵 Подключить бота бесплатно
          </a>
        </div>
      </div>
    </section>
  );
}
