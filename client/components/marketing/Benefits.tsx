export default function Benefits() {
  const items = [
    { icon: "🚀", text: "Бот не предсказывает рынок, а использует разницу цен (спреды)." },
    { icon: "📈", text: "Прибыль появляется даже при боковом рынке." },
    { icon: "🤖", text: "Работает 24/7 бе�� участия человека." },
    { icon: "🛋️", text: "Вы отдыхаете — бот зарабатывает." },
  ];
  return (
    <section className="py-20 bg-[#0A0F1F] text-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Почему это работает</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl bg-slate-800/40 border border-white/10 p-6">
              <div className="mb-3 text-3xl">{it.icon}</div>
              <p className="text-slate-300">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
