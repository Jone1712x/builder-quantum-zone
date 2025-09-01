export default function About() {
  return (
    <section className="py-20 bg-[#0B1222] text-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold">
          О компании
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 items-start">
          <div className="text-center md:col-span-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7462a4dfb7fc4ab1960ec7adb50372b4%2Fe05a39931a8049af82e12664eae2ebfb"
              alt="Портрет руководителя"
              className="mx-auto h-44 w-44 rounded-full object-cover border border-white/20 shadow-[0_8px_30px_rgba(59,130,246,0.4)]"
              loading="lazy"
            />
            <p className="mt-4 text-xl font-bold">Beniamin Mincu</p>
            <p className="text-slate-300">CEO</p>
            <p className="mt-2 text-slate-300 text-sm max-w-sm mx-auto">
              Beniamin Mincu — визионер и сооснователь MultiversX, одной из самых инновационных блокчейн-компаний Европы.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-300 text-lg">
              Команда: <strong>MultiversX</strong> — блокчейн-компания, ранее известная как Elrond. Мы разрабатываем масштабируемую ��нфраструктуру Web3, поддерживаем тысячи dApps, кроссчейн-решения и экосистему DeFi/NFT. CEO — <strong>Beniamin Mincu</strong>.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7462a4dfb7fc4ab1960ec7adb50372b4%2F817ca8e68a8148cea5ed7d04c2bb1ae3"
                alt="Снимок с крипто-мероприятия в Дубае"
                className="h-40 w-full rounded-xl object-cover border border-white/10"
                loading="lazy"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7462a4dfb7fc4ab1960ec7adb50372b4%2F5261800d50d34b9c92d853e5b1bd6e1e"
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
