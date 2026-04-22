import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/bf8004b3-828c-477e-8c76-7b3dec40f973/files/90a11541-21ea-492b-938f-9a05fd90709d.jpg";
const IMG_PORT = "https://cdn.poehali.dev/projects/bf8004b3-828c-477e-8c76-7b3dec40f973/files/1eb53d49-9ca9-4208-a2bf-13ced9658b19.jpg";
const IMG_LC300 = "https://cdn.poehali.dev/projects/bf8004b3-828c-477e-8c76-7b3dec40f973/files/d267ba81-6c15-4c1e-942f-ee87805b87d9.jpg";
const IMG_BYD = "https://cdn.poehali.dev/projects/bf8004b3-828c-477e-8c76-7b3dec40f973/files/ca535c54-57ac-4752-bfeb-4789b2a88c28.jpg";
const IMG_SHOWROOM = "https://cdn.poehali.dev/projects/bf8004b3-828c-477e-8c76-7b3dec40f973/files/fcc626c8-efdc-4f8b-833f-ff32f3856693.jpg";

// ── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "О нас", href: "#about" },
    { label: "Каталог", href: "#catalog" },
    { label: "Процесс", href: "#process" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "Блог", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,5,5,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(139,0,0,0.25)" : "none",
        backdropFilter: scrolled ? "blur(24px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:bg-[#a80000]"
            style={{ background: "#8B0000" }}
          >
            <Icon name="Car" size={17} className="text-white" />
          </div>
          <div className="leading-none">
            <span className="font-cormorant text-xl font-bold text-white tracking-widest">VOZIM</span>
            <span className="font-cormorant text-xl font-light text-[#8B0000] tracking-widest"> AUTO</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://t.me/VvozimAuto"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost text-sm py-2 px-5 flex items-center gap-2"
          >
            <Icon name="Send" size={14} />
            Telegram
          </a>
          <a href="tel:+79958699767" className="btn-crimson text-sm py-2 px-5">
            +7 995-869-97-67
          </a>
        </div>

        <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t px-6 py-5 flex flex-col gap-4"
          style={{ background: "rgba(5,5,5,0.99)", borderColor: "rgba(139,0,0,0.2)" }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-base" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="tel:+79958699767" className="btn-crimson text-center text-sm mt-1">
            +7 995-869-97-67
          </a>
          <a href="tel:+79332828974" className="btn-ghost text-center text-sm">
            +7 933-282-89-74
          </a>
        </div>
      )}
    </header>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${IMG_HERO})`, transform: "scale(1.05)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(120deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.8) 55%, rgba(80,0,0,0.6) 100%)" }}
      />
      <div className="absolute bottom-0 inset-x-0 h-48" style={{ background: "linear-gradient(to top, #080808, transparent)" }} />

      {/* Декоративные линии */}
      <div className="absolute right-[15%] top-[25%] w-px h-52 bg-gradient-to-b from-transparent via-[#8B0000]/60 to-transparent" />
      <div className="absolute right-[22%] top-[35%] w-px h-28 bg-gradient-to-b from-transparent via-[#8B0000]/30 to-transparent" />
      <div className="absolute left-0 top-1/2 w-24 h-px bg-gradient-to-r from-transparent to-[#8B0000]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-3 mb-8 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="w-8 h-px bg-[#8B0000]" />
            <span className="section-subtitle">Привоз авто из Японии, Кореи и Китая</span>
          </div>

          <h1
            className="font-cormorant text-[80px] md:text-[110px] font-light text-white leading-[0.88] mb-8 opacity-0 animate-fade-in animate-delay-200"
            style={{ animationFillMode: "forwards", letterSpacing: '-0.01em' }}
          >
            Везём авто
            <br />
            <em className="not-italic text-[#8B0000]">под ключ</em>
            <br />
            <span className="font-light">во Владивосток</span>
          </h1>

          <p
            className="text-white/50 text-sm leading-loose max-w-lg mb-10 opacity-0 animate-fade-in animate-delay-300"
            style={{ animationFillMode: "forwards", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, letterSpacing: '0.04em' }}
          >
            Покупка, доставка, таможня, постановка на учёт — берём на себя весь
            процесс. Работаем с Японией, Кореей и Китаем.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-in animate-delay-400"
            style={{ animationFillMode: "forwards" }}
          >
            <a href="#catalog" className="btn-crimson text-sm">Смотреть каталог</a>
            <a href="#calculator" className="btn-ghost text-sm">Рассчитать стоимость</a>
          </div>

          <div
            className="grid grid-cols-3 gap-8 max-w-sm opacity-0 animate-fade-in animate-delay-500"
            style={{ animationFillMode: "forwards" }}
          >
            {[
              { n: "500+", l: "Авто привезено" },
              { n: "5 лет", l: "На рынке" },
              { n: "24/7", l: "Поддержка" },
            ].map((s) => (
              <div key={s.l} className="border-l border-[#8B0000]/40 pl-4">
                <p className="font-cormorant text-3xl text-white font-light">{s.n}</p>
                <p className="font-montserrat text-[10px] text-white/35 tracking-widest mt-0.5 uppercase">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Города */}
      <div className="absolute bottom-12 right-8 hidden lg:flex flex-col items-end gap-1.5">
        {["Владивосток", "Новосибирск", "Москва", "По всей России"].map((c, i) => (
          <span
            key={c}
            className="font-montserrat text-xs text-white/20 tracking-widest"
            style={{ opacity: 1 - i * 0.2 }}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <div className="w-px h-14 bg-gradient-to-b from-white to-transparent" />
        <span className="font-montserrat text-[9px] tracking-[0.4em] text-white">SCROLL</span>
      </div>
    </section>
  );
}

// ── ROUTES STRIP ─────────────────────────────────────────────────────────────
function RoutesStrip() {
  const routes = [
    { from: "🇯🇵 Япония", arrow: "→", to: "Владивосток", time: "2–3 нед." },
    { from: "🇰🇷 Корея", arrow: "→", to: "Владивосток", time: "1–2 нед." },
    { from: "🇨🇳 Китай", arrow: "→", to: "Владивосток", time: "1–2 нед." },
    { from: "🇯🇵 Япония", arrow: "→", to: "Любой город РФ", time: "4–6 нед." },
  ];

  return (
    <div style={{ background: "#8B0000" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {routes.map((r) => (
          <div key={r.from + r.to} className="flex items-center gap-3">
            <div>
              <p className="font-montserrat text-white text-sm font-medium">
                {r.from} {r.arrow} {r.to}
              </p>
              <p className="font-montserrat text-white/60 text-xs">{r.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  const stats = [
    { icon: "Car", n: "500+", l: "Привезённых авто" },
    { icon: "Users", n: "480+", l: "Довольных клиентов" },
    { icon: "Globe", n: "3", l: "Страны-поставщики" },
    { icon: "Award", n: "5 лет", l: "На рынке" },
  ];

  return (
    <section id="about" className="py-28" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#8B0000]" />
              <span className="section-subtitle">Кто мы</span>
            </div>
            <h2 className="section-title mb-6">
              VOZIM AUTO —<br />
              <em className="not-italic text-[#8B0000]">ваш надёжный</em>
              <br />партнёр
            </h2>
            <p className="font-montserrat text-white/55 leading-relaxed mb-5">
              Мы специализируемся на привозе автомобилей из Японии, Кореи и Китая
              во Владивосток и другие регионы России. Работаем полностью под ключ —
              от поиска авто до передачи ключей клиенту.
            </p>
            <p className="font-montserrat text-white/55 leading-relaxed mb-8">
              Наши офисы расположены во Владивостоке и Новосибирске. Онлайн
              консультации доступны для всей России — вам не нужно никуда ехать.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://t.me/VvozimAuto"
                target="_blank"
                rel="noreferrer"
                className="btn-crimson text-sm flex items-center gap-2"
              >
                <Icon name="Send" size={14} />
                Написать менеджеру
              </a>
              <a href="#process" className="btn-ghost text-sm">Как мы работаем</a>
            </div>
          </div>

          <div className="relative">
            <img
              src={IMG_PORT}
              alt="Доставка авто"
              className="w-full h-80 object-cover"
              style={{ border: "1px solid rgba(139,0,0,0.25)" }}
            />
            <div
              className="absolute -bottom-5 -right-5 p-5 hidden md:block"
              style={{ background: "#8B0000" }}
            >
              <p className="font-cormorant text-4xl text-white font-light">500+</p>
              <p className="font-montserrat text-xs text-white/70 tracking-widest uppercase">авто привезено</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((s) => (
            <div
              key={s.l}
              className="card-dark p-6 flex flex-col items-center text-center"
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-4"
                style={{ background: "rgba(139,0,0,0.12)", border: "1px solid rgba(139,0,0,0.3)" }}
              >
                <Icon name={s.icon} fallback="Star" size={18} className="text-[#8B0000]" />
              </div>
              <p className="font-cormorant text-3xl text-white font-light">{s.n}</p>
              <p className="font-montserrat text-xs text-white/35 tracking-wider mt-1 uppercase">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CATALOG ───────────────────────────────────────────────────────────────────
const CARS = [
  {
    id: 1, brand: "BYD", model: "Han EV", year: 2024, price: 3200000,
    country: "Китай", fuel: "Электро", engine: "0", mileage: 2000, body: "Седан",
    img: IMG_BYD,
  },
  {
    id: 2, brand: "Li Auto", model: "L9", year: 2024, price: 4100000,
    country: "Китай", fuel: "Гибрид", engine: "1.5", mileage: 5000, body: "SUV",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
  },
  {
    id: 3, brand: "BYD", model: "Tang DM", year: 2024, price: 3800000,
    country: "Китай", fuel: "Гибрид", engine: "2.0", mileage: 3000, body: "SUV",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
  },
  {
    id: 4, brand: "Zeekr", model: "001", year: 2024, price: 3500000,
    country: "Китай", fuel: "Электро", engine: "0", mileage: 1500, body: "Хэтчбек",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
  },
  {
    id: 5, brand: "Chery", model: "Tiggo 8 Pro", year: 2024, price: 2600000,
    country: "Китай", fuel: "Бензин", engine: "2.0", mileage: 8000, body: "SUV",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    id: 6, brand: "Geely", model: "Monjaro", year: 2024, price: 2900000,
    country: "Китай", fuel: "Гибрид", engine: "2.0", mileage: 6000, body: "SUV",
    img: IMG_LC300,
  },
];

function Catalog() {
  const [filters, setFilters] = useState({ body: "Все", fuel: "Все" });

  const bodies = ["Все", "SUV", "Седан", "Хэтчбек"];
  const fuels = ["Все", "Бензин", "Гибрид", "Электро"];

  const filtered = CARS
    .filter((c) => filters.body === "Все" || c.body === filters.body)
    .filter((c) => filters.fuel === "Все" || c.fuel === filters.fuel);

  const FilterBtn = ({ val, field }: { val: string; field: keyof typeof filters; }) => (
    <button
      onClick={() => setFilters((f) => ({ ...f, [field]: val }))}
      className={`font-montserrat text-xs px-4 py-2 tracking-wide transition-all duration-200 whitespace-nowrap ${
        filters[field] === val
          ? "bg-[#8B0000] text-white border border-[#8B0000]"
          : "text-white/40 border border-white/10 hover:border-white/25 hover:text-white/70"
      }`}
    >
      {val}
    </button>
  );

  return (
    <section id="catalog" className="py-28" style={{ background: "#060606" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#8B0000]" />
              <span className="section-subtitle">В наличии и под заказ</span>
            </div>
            <h2 className="section-title">Каталог</h2>
          </div>
          <a href="#contacts" className="btn-ghost text-sm hidden md:block">Под заказ →</a>
        </div>

        {/* Фильтры */}
        <div
          className="flex flex-wrap gap-x-8 gap-y-3 mb-10 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-montserrat text-[10px] text-white/25 tracking-widest uppercase">Кузов:</span>
            {bodies.map((b) => <FilterBtn key={b} val={b} field="body" />)}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-montserrat text-[10px] text-white/25 tracking-widest uppercase">Топливо:</span>
            {fuels.map((f) => <FilterBtn key={f} val={f} field="fuel" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((car) => (
            <div key={car.id} className="card-dark group cursor-pointer overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.img}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.85), transparent 60%)" }} />
                <div
                  className="absolute top-2.5 right-2.5 px-2 py-0.5"
                  style={{ background: "#8B0000" }}
                >
                  <span className="font-montserrat text-[10px] text-white tracking-wider">{car.country}</span>
                </div>
                {car.fuel === "Электро" && (
                  <div
                    className="absolute top-2.5 left-2.5 px-2 py-0.5"
                    style={{ background: "rgba(0,180,100,0.85)" }}
                  >
                    <span className="font-montserrat text-[10px] text-white tracking-wider">EV</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-montserrat text-[10px] text-white/30 tracking-widest uppercase">{car.year} • {car.mileage.toLocaleString()} км</p>
                    <h3 className="font-cormorant text-xl text-white font-light mt-0.5">
                      {car.brand} <span className="text-white/70">{car.model}</span>
                    </h3>
                  </div>
                </div>
                <div className="flex gap-1.5 flex-wrap mb-3 mt-2">
                  {[car.engine !== "0" ? car.engine + "L" : "Электро", car.fuel, car.body].map((t) => (
                    <span key={t} className="font-montserrat text-[10px] text-white/35 border border-white/8 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-cormorant text-xl text-[#8B0000]">
                    {(car.price / 1000000).toFixed(1)} млн ₽
                  </p>
                  <a
                    href="https://t.me/VvozimAuto"
                    target="_blank"
                    rel="noreferrer"
                    className="font-montserrat text-xs text-white/50 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Спросить <Icon name="ArrowRight" size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-4 py-16 text-center">
              <Icon name="Search" size={36} className="text-white/15 mx-auto mb-3" />
              <p className="font-montserrat text-white/30 text-sm">Нет автомобилей по выбранным фильтрам</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── PROCESS ───────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    {
      n: "01",
      icon: "MessageCircle",
      title: "Заявка",
      desc: "Пишете нам в Telegram или звоните. Рассказываете, какое авто хотите — марка, бюджет, пожелания.",
    },
    {
      n: "02",
      icon: "Search",
      title: "Подбор",
      desc: "Находим варианты на японских, корейских и китайских аукционах. Присылаем фото, историю, отчёт о состоянии.",
    },
    {
      n: "03",
      icon: "CreditCard",
      title: "Оплата",
      desc: "Вносите предоплату. Покупаем авто на аукционе — работаем без накрутки аукционной цены.",
    },
    {
      n: "04",
      icon: "Ship",
      title: "Доставка",
      desc: "Грузим на судно и отправляем во Владивосток. Вы отслеживаете статус онлайн.",
    },
    {
      n: "05",
      icon: "FileText",
      title: "Таможня",
      desc: "Берём таможню на себя. Все пошлины рассчитаны заранее — никаких сюрпризов.",
    },
    {
      n: "06",
      icon: "Key",
      title: "Передача",
      desc: "Ставим на учёт и передаём вам ключи. Или отправляем в ваш город.",
    },
  ];

  return (
    <section id="process" className="py-28 relative overflow-hidden" style={{ background: "#080808" }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${IMG_SHOWROOM})`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.96)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-[#8B0000]" />
          <span className="section-subtitle">Просто и прозрачно</span>
        </div>
        <h2 className="section-title mb-14">Процесс работы</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="card-dark p-7 relative group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div>
                  <span
                    className="font-cormorant text-5xl font-light leading-none"
                    style={{ color: "rgba(139,0,0,0.2)" }}
                  >
                    {s.n}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <div
                    className="w-9 h-9 flex items-center justify-center mb-3"
                    style={{ background: "rgba(139,0,0,0.12)", border: "1px solid rgba(139,0,0,0.3)" }}
                  >
                    <Icon name={s.icon} fallback="Star" size={16} className="text-[#8B0000]" />
                  </div>
                  <h3 className="font-cormorant text-2xl text-white font-light mb-2">{s.title}</h3>
                  <p className="font-montserrat text-sm text-white/45 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://t.me/VozimAutoChat" target="_blank" rel="noreferrer" className="btn-crimson inline-flex items-center gap-2 text-sm">
            <Icon name="Send" size={15} />
            Начать — написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

// ── CALCULATOR ────────────────────────────────────────────────────────────────
function Calculator() {
  const [country, setCountry] = useState("japan");
  const [engine, setEngine] = useState("2.0");
  const [age, setAge] = useState("new");
  const [price, setPrice] = useState(2500000);

  const DELIVERY: Record<string, number> = {
    japan: 180000, korea: 120000, china: 90000,
  };

  const DELIVERY_EXTRA = 80000;

  const DUTY: Record<string, Record<string, number>> = {
    new: { "1.0": 0.54, "1.6": 0.48, "2.0": 0.48, "3.0": 0.50, "3.0+": 0.57 },
    "3_5": { "1.0": 0.32, "1.6": 0.32, "2.0": 0.32, "3.0": 0.32, "3.0+": 0.32 },
    "5_7": { "1.0": 0.32, "1.6": 0.32, "2.0": 0.32, "3.0": 0.32, "3.0+": 0.32 },
    "7+": { "1.0": 0.25, "1.6": 0.25, "2.0": 0.25, "3.0": 0.25, "3.0+": 0.25 },
  };

  const delivery = DELIVERY[country] ?? 150000;
  const dutyRate = DUTY[age]?.[engine] ?? 0.48;
  const duty = Math.round(price * dutyRate);
  const recycling = age === "new" ? 3400 : 5200;
  const sbor = 7500;
  const customs = duty + recycling + sbor;
  const commission = Math.round(price * 0.05);
  const total = price + delivery + DELIVERY_EXTRA + customs + commission;

  const fmt = (n: number) =>
    new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(n);

  const breakdown = [
    { label: "Стоимость авто на аукционе", val: price },
    { label: "Доставка до Владивостока", val: delivery },
    { label: "Доставка по России", val: DELIVERY_EXTRA },
    { label: "Таможенная пошлина", val: duty },
    { label: "Утилизационный сбор", val: recycling },
    { label: "Таможенный сбор", val: sbor },
    { label: "Наша комиссия (5%)", val: commission },
  ];

  const Chip = ({
    val, cur, label, onClick,
  }: { val: string; cur: string; label: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`py-2.5 px-4 font-montserrat text-sm text-left transition-all duration-200 ${
        cur === val
          ? "bg-[#8B0000] text-white border border-[#8B0000]"
          : "text-white/45 border border-white/8 hover:border-white/25 hover:text-white/70"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="calculator" className="py-28" style={{ background: "#060606" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-[#8B0000]" />
          <span className="section-subtitle">Расчёт в реальном времени</span>
        </div>
        <h2 className="section-title mb-2">Калькулятор</h2>
        <p className="font-montserrat text-white/30 text-sm mb-12">Предварительный расчёт. Точная сумма — после консультации.</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Параметры */}
          <div className="lg:col-span-3 card-dark p-8 space-y-7">
            <div>
              <label className="font-montserrat text-[10px] text-white/30 tracking-[0.3em] uppercase block mb-3">Страна покупки</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { val: "japan", label: "🇯🇵 Япония" },
                  { val: "korea", label: "🇰🇷 Корея" },
                  { val: "china", label: "🇨🇳 Китай" },
                ].map((c) => (
                  <Chip key={c.val} val={c.val} cur={country} label={c.label} onClick={() => setCountry(c.val)} />
                ))}
              </div>
            </div>

            <div>
              <label className="font-montserrat text-[10px] text-white/30 tracking-[0.3em] uppercase block mb-3">Объём двигателя</label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { val: "1.0", label: "до 1.0" },
                  { val: "1.6", label: "1.0–1.6" },
                  { val: "2.0", label: "1.6–2.0" },
                  { val: "3.0", label: "2.0–3.0" },
                  { val: "3.0+", label: "3.0+" },
                ].map((e) => (
                  <Chip key={e.val} val={e.val} cur={engine} label={e.label} onClick={() => setEngine(e.val)} />
                ))}
              </div>
            </div>

            <div>
              <label className="font-montserrat text-[10px] text-white/30 tracking-[0.3em] uppercase block mb-3">Возраст автомобиля</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { val: "new", label: "До 3 лет" },
                  { val: "3_5", label: "3–5 лет" },
                  { val: "5_7", label: "5–7 лет" },
                  { val: "7+", label: "Старше 7 лет" },
                ].map((a) => (
                  <Chip key={a.val} val={a.val} cur={age} label={a.label} onClick={() => setAge(a.val)} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-montserrat text-[10px] text-white/30 tracking-[0.3em] uppercase">Цена на аукционе</label>
                <span className="font-cormorant text-2xl text-white">{fmt(price)}</span>
              </div>
              <input
                type="range"
                min={300000}
                max={15000000}
                step={50000}
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                className="w-full"
                style={{ accentColor: "#8B0000" }}
              />
              <div className="flex justify-between mt-1">
                <span className="font-montserrat text-[10px] text-white/20">300 000 ₽</span>
                <span className="font-montserrat text-[10px] text-white/20">15 000 000 ₽</span>
              </div>
            </div>
          </div>

          {/* Результат */}
          <div
            className="lg:col-span-2 card-dark p-7 flex flex-col justify-between"
            style={{ background: "#0d0d0d" }}
          >
            <div>
              <p className="section-subtitle mb-6">Итоговый расчёт</p>
              <div className="space-y-3">
                {breakdown.map((b) => (
                  <div
                    key={b.label}
                    className="flex justify-between items-center pb-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <span className="font-montserrat text-xs text-white/40">{b.label}</span>
                    <span className="font-montserrat text-sm text-white font-medium">{fmt(b.val)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div
                className="p-5 mb-5"
                style={{ background: "rgba(139,0,0,0.1)", border: "1px solid rgba(139,0,0,0.35)" }}
              >
                <p className="font-montserrat text-[10px] text-white/35 tracking-[0.3em] uppercase mb-1.5">Под ключ во Владивостоке</p>
                <p className="font-cormorant text-4xl text-white font-light">{fmt(total)}</p>
                <p className="font-montserrat text-[10px] text-[#8B0000] mt-2">
                  таможня {fmt(customs)} · доставка {fmt(delivery + DELIVERY_EXTRA)}
                </p>
              </div>
              <a
                href="https://t.me/VvozimAuto"
                target="_blank"
                rel="noreferrer"
                className="btn-crimson block text-center text-sm"
              >
                Уточнить у менеджера
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── BLOG ─────────────────────────────────────────────────────────────────────
function Blog() {
  const posts = [
    {
      tag: "Гид",
      date: "18 апреля 2026",
      title: "Как пригнать авто из Японии в 2026 году: пошаговое руководство",
      desc: "Разбираем весь процесс: от поиска на аукционе до получения ПТС. Актуальные ставки пошлин и сроки.",
      read: "9 мин",
    },
    {
      tag: "Рынок",
      date: "10 апреля 2026",
      title: "Корейские авто vs японские: что выгоднее везти в Россию",
      desc: "Сравниваем стоимость владения, надёжность и ликвидность Hyundai/Kia против Toyota/Nissan.",
      read: "6 мин",
    },
    {
      tag: "Электромобили",
      date: "2 апреля 2026",
      title: "BYD, Zeekr, NIO: стоит ли везти китайский электромобиль в 2026",
      desc: "Честный разбор: гарантия, зарядная инфраструктура, таможня и реальный опыт владельцев.",
      read: "8 мин",
    },
  ];

  return (
    <section id="blog" className="py-28" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#8B0000]" />
              <span className="section-subtitle">Полезные материалы</span>
            </div>
            <h2 className="section-title">Блог</h2>
          </div>
          <button className="btn-ghost text-sm hidden md:block">Все статьи →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <article
              key={i}
              className="card-dark group cursor-pointer overflow-hidden"
            >
              <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #8B0000, #5c0000)" }} />
              <div className="p-6">
                <div className="flex justify-between items-center mb-5">
                  <span
                    className="font-montserrat text-[10px] tracking-widest text-[#8B0000] px-2 py-1 uppercase"
                    style={{ border: "1px solid rgba(139,0,0,0.35)" }}
                  >
                    {p.tag}
                  </span>
                  <span className="font-montserrat text-[10px] text-white/25">{p.read}</span>
                </div>
                <h3 className="font-cormorant text-[22px] text-white font-light leading-snug mb-3 group-hover:text-[#8B0000] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="font-montserrat text-xs text-white/40 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat text-[10px] text-white/20">{p.date}</span>
                  <button className="font-montserrat text-xs text-[#8B0000] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Читать <Icon name="ArrowRight" size={11} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "В каких городах вы работаете?",
      a: "Наш основной офис во Владивостоке, второй офис в Новосибирске. Но мы работаем дистанционно по всей России — консультации, документы, оплата — всё онлайн. Авто получаете во Владивостоке или организуем доставку в ваш город.",
    },
    {
      q: "Сколько стоит ваша комиссия?",
      a: "Наша комиссия составляет 5% от стоимости автомобиля на аукционе. Никаких скрытых платежей — все расходы (доставка, таможня, сборы, наша комиссия) прописываются в договоре до начала работы.",
    },
    {
      q: "Сколько времени займёт привоз из Японии?",
      a: "Из Японии до Владивостока в среднем 3–4 недели: 1–2 недели поиск и покупка на аукционе, 2 недели доставка морем. С таможней и постановкой на учёт — итого 4–6 недель.",
    },
    {
      q: "Можно ли заказать конкретный автомобиль под мои параметры?",
      a: "Да, это основная услуга. Вы описываете: марка, модель, год, пробег, комплектация, бюджет. Мы ищем на японских/корейских/китайских аукционах, согласовываем с вами лоты и покупаем.",
    },
    {
      q: "Как происходит оплата? Можно ли в рассрочку?",
      a: "Оплата поэтапная: предоплата (цена авто + наша комиссия) перед покупкой на аукционе, таможенные платежи — при прибытии во Владивосток. Сотрудничаем с банками по автокредиту, первоначальный взнос от 20%.",
    },
    {
      q: "Что если авто окажется не в заявленном состоянии?",
      a: "Перед покупкой предоставляем аукционный лист с описанием состояния, фото со всех ракурсов, историю авто (CARFAX/японские базы). Авто застраховано на время транспортировки. При несоответствии описанию — решаем ситуацию за счёт компании.",
    },
  ];

  return (
    <section id="faq" className="py-28" style={{ background: "#060606" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-[#8B0000]" />
          <span className="section-subtitle">Часто спрашивают</span>
        </div>
        <h2 className="section-title mb-12">FAQ</h2>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="card-dark overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-montserrat text-sm text-white/80 leading-snug">{f.q}</span>
                <div
                  className="w-7 h-7 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: open === i ? "#8B0000" : "transparent",
                    border: `1px solid ${open === i ? "#8B0000" : "rgba(255,255,255,0.12)"}`,
                  }}
                >
                  <Icon name={open === i ? "Minus" : "Plus"} size={13} className="text-white" />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <p className="font-montserrat text-sm text-white/45 leading-relaxed pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CONTACTS ──────────────────────────────────────────────────────────────────
function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", comment: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contacts" className="py-28" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-[#8B0000]" />
          <span className="section-subtitle">Связаться с нами</span>
        </div>
        <h2 className="section-title mb-14">Контакты</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {/* Офисы */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  city: "Владивосток",
                  phone: "+7 995-869-97-67",
                  tg: "@VvozimAuto",
                  link: "https://t.me/VvozimAuto",
                },
                {
                  city: "Новосибирск",
                  phone: "+7 933-282-89-74",
                  tg: "@Vvozimauto1",
                  link: "https://t.me/Vvozimauto1",
                },
              ].map((o) => (
                <div
                  key={o.city}
                  className="card-dark p-5"
                >
                  <p className="font-montserrat text-[10px] text-[#8B0000] tracking-[0.3em] uppercase mb-3">{o.city}</p>
                  <a href={`tel:${o.phone.replace(/\D/g, "")}`} className="font-cormorant text-2xl text-white block mb-1 hover:text-[#8B0000] transition-colors">
                    {o.phone}
                  </a>
                  <a href={o.link} target="_blank" rel="noreferrer" className="font-montserrat text-xs text-white/40 hover:text-white/70 transition-colors">
                    Telegram: {o.tg}
                  </a>
                </div>
              ))}
            </div>

            {/* Мессенджеры */}
            <p className="font-montserrat text-[10px] text-white/25 tracking-widest uppercase mb-4">Написать нам</p>
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { label: "Telegram чат", href: "https://t.me/VozimAutoChat", icon: "Send" },
                { label: "Telegram канал", href: "https://t.me/Vozim_auto", icon: "Send" },
                { label: "Авто.ру", href: "https://auto.ru/diler/cars/vozimauto_vladivostok", icon: "ExternalLink" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost text-xs py-2 px-4 flex items-center gap-2"
                >
                  <Icon name={s.icon} fallback="Star" size={13} />
                  {s.label}
                </a>
              ))}
            </div>

            <div
              className="p-5"
              style={{ background: "rgba(139,0,0,0.08)", border: "1px solid rgba(139,0,0,0.25)" }}
            >
              <p className="font-montserrat text-xs text-white/50 leading-relaxed">
                Работаем <span className="text-white">пн–вс, 9:00–21:00</span> по Владивостоку (UTC+10).
                Отвечаем в Telegram в течение 15 минут в рабочие часы.
              </p>
            </div>
          </div>

          <div>
            {sent ? (
              <div
                className="p-10 text-center h-full flex flex-col items-center justify-center"
                style={{ background: "rgba(139,0,0,0.07)", border: "1px solid rgba(139,0,0,0.3)" }}
              >
                <Icon name="CheckCircle" size={44} className="text-[#8B0000] mb-4" />
                <h3 className="font-cormorant text-3xl text-white mb-2">Заявка отправлена!</h3>
                <p className="font-montserrat text-sm text-white/45">Менеджер свяжется в течение 15 минут</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-3"
              >
                <input
                  className="input-dark"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
                <input
                  className="input-dark"
                  placeholder="Телефон или Telegram"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  required
                />
                <input
                  className="input-dark"
                  placeholder="Ваш город"
                  value={form.city}
                  onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                />
                <textarea
                  className="input-dark resize-none"
                  rows={4}
                  placeholder="Какое авто ищете? Марка, бюджет, пожелания..."
                  value={form.comment}
                  onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                />
                <button type="submit" className="btn-crimson w-full text-sm">
                  Отправить заявку
                </button>
                <p className="font-montserrat text-[10px] text-white/20 text-center pt-1">
                  Отправляя форму, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#030303", borderTop: "1px solid rgba(139,0,0,0.18)" }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 flex items-center justify-center" style={{ background: "#8B0000" }}>
              <Icon name="Car" size={14} className="text-white" />
            </div>
            <span className="font-cormorant text-lg text-white tracking-widest">
              VOZIM <span className="text-[#8B0000]">AUTO</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            {["О нас", "Каталог", "Процесс", "Калькулятор", "Блог", "FAQ", "Контакты"].map((l) => (
              <a
                key={l}
                href={`#${l === "О нас" ? "about" : l === "Процесс" ? "process" : l === "Контакты" ? "contacts" : l.toLowerCase()}`}
                className="font-montserrat text-[10px] text-white/25 hover:text-white/60 transition-colors tracking-widest uppercase"
              >
                {l}
              </a>
            ))}
          </div>

          <p className="font-montserrat text-[10px] text-white/20 tracking-wider">© 2026 VOZIM AUTO</p>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div style={{ background: "#080808" }}>
      <Navbar />
      <Hero />
      <RoutesStrip />
      <About />
      <Catalog />
      <Process />
      <Calculator />
      <Blog />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}