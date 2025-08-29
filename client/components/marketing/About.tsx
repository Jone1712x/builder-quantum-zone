export default function About() {
  return (
    <section className="py-20 bg-[#0B1222] text-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold">О компании</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 items-start">
          <div className="text-center md:col-span-1">
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
              alt="Портрет руководителя"
              className="mx-auto h-44 w-44 rounded-full object-cover border border-white/20 shadow-[0_8px_30px_rgba(59,130,246,0.4)]"
              loading="lazy"
            />
            <p className="mt-4 text-xl font-bold">Али Рахманов</p>
            <p className="text-slate-300">CEO</p>
            <p className="mt-2 text-slate-300 text-sm max-w-sm mx-auto">
              Серийный крипто-предприниматель, более 8 лет в арбитраже и алгоритмической торговле.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-300 text-lg">
              Команда: разработчики из лучших крипто-фондов и компаний Дубая (Bybit Labs, Binance MENA, OKX Research). Мы собрали специалистов в трейдинге, блокчейне и кибербезопасности, чтобы сделать лучший сервис для арбитража.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
                alt="Снимок с крипто-мероприятия в Дубае"
                className="h-40 w-full rounded-xl object-cover border border-white/10"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg"
                alt="Ночной Дубай"
                className="h-40 w-full rounded-xl object-cover border border-white/10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
