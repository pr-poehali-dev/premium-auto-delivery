import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/bf8004b3-828c-477e-8c76-7b3dec40f973/files/bb087ee4-6cbd-44ba-9c31-b9afd0767cbb.jpg";
const SHOWROOM_IMAGE = "https://cdn.poehali.dev/projects/bf8004b3-828c-477e-8c76-7b3dec40f973/files/fcc626c8-efdc-4f8b-833f-ff32f3856693.jpg";
const PORT_IMAGE = "https://cdn.poehali.dev/projects/bf8004b3-828c-477e-8c76-7b3dec40f973/files/1eb53d49-9ca9-4208-a2bf-13ced9658b19.jpg";

// ── NAVIGATION ──────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Каталог", href: "#catalog" },
    { label: "Услуги", href: "#services" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "О нас", href: "#about" },
    { label: "Блог", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(139,0,0,0.2)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#8B0000] flex items-center justify-center">
            <Icon name="Car" size={16} className="text-white" />
          </div>
          <span className="font-cormorant text-xl font-semibold text-white tracking-wider">
            AUTO<span className="text-[#8B0000]">IMPORT</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contacts" className="hidden lg:block btn-crimson text-sm">
          Получить консультацию
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "rgba(8,8,8,0.98)", borderColor: "rgba(139,0,0,0.2)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-base"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contacts" className="btn-crimson text-sm text-center mt-2">
              Консультация
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.75) 50%, rgba(50,0,0,0.7) 100%)" }} />
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to top, #080808, transparent)" }}
      />

      <div className="absolute top-1/3 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#8B0000] to-transparent opacity-60" />
      <div className="absolute top-1/4 right-1/3 w-px h-20 bg-gradient-to-b from-transparent via-[#8B0000] to-transparent opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          <p
            className="section-subtitle mb-6 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            Премиальный импорт автомобилей
          </p>

          <h1
            className="font-cormorant text-6xl md:text-8xl font-light text-white leading-none mb-6 opacity-0 animate-fade-in animate-delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            Авто из
            <br />
            <span className="italic text-[#8B0000]">любой точки</span>
            <br />
            мира
          </h1>

          <p
            className="font-golos text-white/60 text-lg max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-in animate-delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            Привезём ваш автомобиль из Европы, США, Японии и Китая. Полное
            таможенное сопровождение, страховка и доставка до двери.
          </p>

          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-400"
            style={{ animationFillMode: "forwards" }}
          >
            <a href="#catalog" className="btn-crimson">
              Смотреть каталог
            </a>
            <a href="#calculator" className="btn-ghost">
              Рассчитать стоимость
            </a>
          </div>

          <div
            className="flex gap-12 mt-16 opacity-0 animate-fade-in animate-delay-500"
            style={{ animationFillMode: "forwards" }}
          >
            {[
              { num: "1200+", label: "Авто привезено" },
              { num: "8 лет", label: "На рынке" },
              { num: "99%", label: "Довольных клиентов" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-cormorant text-4xl font-light text-white">{s.num}</p>
                <p className="font-golos text-xs text-white/40 tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-golos text-xs text-white tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}

// ── CATALOG ─────────────────────────────────────────────────────────────────
const CATALOG_CARS = [
  {
    id: 1, brand: "BMW", model: "5 Series", year: 2023, price: 6800000,
    country: "Германия", fuel: "Бензин", engine: "2.0", mileage: 12000, body: "Седан",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
  },
  {
    id: 2, brand: "Mercedes", model: "GLE 450", year: 2023, price: 9200000,
    country: "Германия", fuel: "Дизель", engine: "3.0", mileage: 8000, body: "SUV",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
  },
  {
    id: 3, brand: "Porsche", model: "Cayenne", year: 2022, price: 11500000,
    country: "Германия", fuel: "Бензин", engine: "3.0", mileage: 20000, body: "SUV",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    id: 4, brand: "Toyota", model: "Land Cruiser 300", year: 2023, price: 8900000,
    country: "Япония", fuel: "Дизель", engine: "3.3", mileage: 5000, body: "SUV",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
  },
  {
    id: 5, brand: "Lexus", model: "LX 600", year: 2022, price: 10300000,
    country: "Япония", fuel: "Бензин", engine: "3.5", mileage: 15000, body: "SUV",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
  },
  {
    id: 6, brand: "Audi", model: "Q8", year: 2023, price: 8400000,
    country: "Германия", fuel: "Бензин", engine: "3.0", mileage: 9000, body: "SUV",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
  },
];

function Catalog() {
  const [filters, setFilters] = useState({ country: "Все", body: "Все", fuel: "Все", sort: "price_asc" });

  const countries = ["Все", "Германия", "Япония", "США"];
  const bodies = ["Все", "Седан", "SUV", "Купе"];
  const fuels = ["Все", "Бензин", "Дизель", "Гибрид", "Электро"];

  const filtered = CATALOG_CARS
    .filter((c) => filters.country === "Все" || c.country === filters.country)
    .filter((c) => filters.body === "Все" || c.body === filters.body)
    .filter((c) => filters.fuel === "Все" || c.fuel === filters.fuel)
    .sort((a, b) =>
      filters.sort === "price_asc" ? a.price - b.price : b.price - a.price
    );

  const FilterBtn = ({ val, field }: { val: string; field: keyof typeof filters }) => (
    <button
      onClick={() => setFilters((f) => ({ ...f, [field]: val }))}
      className={`font-golos text-xs px-4 py-2 tracking-wide transition-all duration-200 ${
        filters[field] === val
          ? "bg-[#8B0000] text-white border border-[#8B0000]"
          : "bg-transparent text-white/50 border border-white/10 hover:border-white/30 hover:text-white/80"
      }`}
    >
      {val}
    </button>
  );

  return (
    <section id="catalog" className="py-24" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-subtitle mb-3">Доступные автомобили</p>
          <h2 className="section-title">Каталог</h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-10 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex flex-wrap gap-2">
            <span className="font-golos text-xs text-white/30 py-2 mr-2 tracking-widest">СТРАНА:</span>
            {countries.map((c) => <FilterBtn key={c} val={c} field="country" />)}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-golos text-xs text-white/30 py-2 mr-2 tracking-widest">КУЗОВ:</span>
            {bodies.map((b) => <FilterBtn key={b} val={b} field="body" />)}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-golos text-xs text-white/30 py-2 mr-2 tracking-widest">ТОПЛИВО:</span>
            {fuels.map((f) => <FilterBtn key={f} val={f} field="fuel" />)}
          </div>
          <div className="flex gap-2 ml-auto">
            <span className="font-golos text-xs text-white/30 py-2 mr-2 tracking-widest">СОРТИРОВКА:</span>
            <FilterBtn val="price_asc" field="sort" />
            <FilterBtn val="price_desc" field="sort" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <div key={car.id} className="card-dark group cursor-pointer overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={car.img}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.8), transparent)" }} />
                <div className="absolute top-3 right-3 bg-[#8B0000] px-2 py-1">
                  <span className="font-golos text-xs text-white">{car.country}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="font-golos text-xs text-white/50">{car.year} • {car.mileage.toLocaleString()} км</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-cormorant text-2xl text-white font-light">{car.brand}</h3>
                    <p className="font-golos text-sm text-white/50">{car.model}</p>
                  </div>
                  <p className="font-cormorant text-xl text-[#8B0000]">
                    {(car.price / 1000000).toFixed(1)} млн ₽
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {[car.engine + "L", car.fuel, car.body].map((tag) => (
                    <span key={tag} className="font-golos text-xs text-white/40 border border-white/10 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn-crimson w-full mt-4 text-sm">
                  Узнать детали
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Icon name="Search" size={40} className="text-white/20 mx-auto mb-4" />
            <p className="font-golos text-white/40">Нет автомобилей по выбранным фильтрам</p>
          </div>
        )}
      </div>
    </section>
  );
}

// ── SERVICES ────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: "Ship",
      title: "Международная доставка",
      desc: "Организуем транспортировку автомобиля из любой точки мира морем, воздухом или по суше. Отслеживание груза в реальном времени.",
      features: ["Европа: 2–4 недели", "США/Япония: 6–8 недель", "Страхование груза"],
    },
    {
      icon: "FileText",
      title: "Таможенное оформление",
      desc: "Берём на себя весь процесс растаможки. Работаем по прозрачным ценам без скрытых платежей.",
      features: ["Расчёт пошлин заранее", "Все документы под ключ", "Постановка на учёт"],
    },
    {
      icon: "Shield",
      title: "Страховка и гарантии",
      desc: "Страхуем автомобиль на весь путь. Гарантируем сохранность и доставку в срок.",
      features: ["КАСКО на перевозку", "Гарантия сроков", "Компенсация при задержке"],
    },
    {
      icon: "Search",
      title: "Подбор автомобиля",
      desc: "Поможем найти идеальный вариант по вашим параметрам на зарубежных аукционах и площадках.",
      features: ["Аукционы Японии/США", "Европейские дилеры", "Проверка истории"],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 relative"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${PORT_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.85) 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-subtitle mb-3">Что мы делаем</p>
          <h2 className="section-title">Наши услуги</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-dark p-8">
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(139,0,0,0.15)", border: "1px solid rgba(139,0,0,0.3)" }}
                >
                  <Icon name={s.icon} fallback="Star" size={20} className="text-[#8B0000]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-cormorant text-2xl text-white mb-2 font-light">{s.title}</h3>
                  <p className="font-golos text-sm text-white/50 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#8B0000]" />
                        <span className="font-golos text-xs text-white/60">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CALCULATOR ──────────────────────────────────────────────────────────────
function Calculator() {
  const [form, setForm] = useState({
    country: "germany",
    carType: "sedan",
    engineVol: "2.0",
    age: "new",
    price: 3000000,
  });

  const set = (k: string, v: string | number) => setForm((f) => ({ ...f, [k]: v }));

  const CUSTOM_DUTY: Record<string, Record<string, number>> = {
    new: { "1.0": 0.15, "1.6": 0.17, "2.0": 0.18, "3.0": 0.20, "3.0+": 0.22 },
    "3_5": { "1.0": 0.20, "1.6": 0.22, "2.0": 0.24, "3.0": 0.26, "3.0+": 0.28 },
    "5_7": { "1.0": 0.25, "1.6": 0.27, "2.0": 0.29, "3.0": 0.31, "3.0+": 0.33 },
    "7+": { "1.0": 0.30, "1.6": 0.32, "2.0": 0.35, "3.0": 0.38, "3.0+": 0.40 },
  };

  const DELIVERY: Record<string, number> = {
    germany: 180000, usa: 350000, japan: 290000, china: 120000,
  };

  const EXCISE: Record<string, number> = {
    "1.0": 45, "1.6": 87, "2.0": 107, "3.0": 150, "3.0+": 214,
  };

  const engineKey = form.engineVol as keyof typeof EXCISE;
  const ageKey = form.age as keyof typeof CUSTOM_DUTY;

  const delivery = DELIVERY[form.country] || 200000;
  const duty = Math.round(form.price * (CUSTOM_DUTY[ageKey]?.[engineKey] ?? 0.18));
  const excise = EXCISE[engineKey] * 1.8 * 12 * 10;
  const vat = Math.round((form.price + duty + excise) * 0.2);
  const sbor = 7500;
  const customs = duty + excise + vat + sbor;
  const total = form.price + delivery + customs;

  const breakdown = [
    { label: "Стоимость авто", value: form.price },
    { label: "Доставка", value: delivery },
    { label: "Таможенная пошлина", value: duty },
    { label: "Акцизный сбор", value: excise },
    { label: "НДС (20%)", value: vat },
    { label: "Таможенный сбор", value: sbor },
  ];

  const fmtRub = (n: number) =>
    new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(n);

  return (
    <section id="calculator" className="py-24" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-subtitle mb-3">Интерактивный расчёт</p>
          <h2 className="section-title">Калькулятор стоимости</h2>
          <p className="font-golos text-white/40 mt-3 text-sm">
            Предварительный расчёт. Точная стоимость — после консультации.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-dark p-8 space-y-6">
            <div>
              <label className="font-golos text-xs text-white/40 tracking-widest block mb-3">СТРАНА ПОКУПКИ</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { val: "germany", label: "🇩🇪 Германия" },
                  { val: "usa", label: "🇺🇸 США" },
                  { val: "japan", label: "🇯🇵 Япония" },
                  { val: "china", label: "🇨🇳 Китай" },
                ].map((c) => (
                  <button
                    key={c.val}
                    onClick={() => set("country", c.val)}
                    className={`py-3 px-4 font-golos text-sm transition-all duration-200 text-left ${
                      form.country === c.val
                        ? "bg-[#8B0000] text-white border border-[#8B0000]"
                        : "bg-transparent text-white/50 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-golos text-xs text-white/40 tracking-widest block mb-3">ОБЪЁМ ДВИГАТЕЛЯ</label>
              <div className="grid grid-cols-5 gap-2">
                {["1.0", "1.6", "2.0", "3.0", "3.0+"].map((v) => (
                  <button
                    key={v}
                    onClick={() => set("engineVol", v)}
                    className={`py-2 px-1 font-golos text-xs transition-all duration-200 ${
                      form.engineVol === v
                        ? "bg-[#8B0000] text-white border border-[#8B0000]"
                        : "bg-transparent text-white/50 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {v}L
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-golos text-xs text-white/40 tracking-widest block mb-3">ВОЗРАСТ АВТОМОБИЛЯ</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { val: "new", label: "Новый (до 3 лет)" },
                  { val: "3_5", label: "3–5 лет" },
                  { val: "5_7", label: "5–7 лет" },
                  { val: "7+", label: "Старше 7 лет" },
                ].map((a) => (
                  <button
                    key={a.val}
                    onClick={() => set("age", a.val)}
                    className={`py-3 px-4 font-golos text-sm transition-all duration-200 text-left ${
                      form.age === a.val
                        ? "bg-[#8B0000] text-white border border-[#8B0000]"
                        : "bg-transparent text-white/50 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-golos text-xs text-white/40 tracking-widest">СТОИМОСТЬ АВТО</label>
                <span className="font-cormorant text-xl text-white">{fmtRub(form.price)}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={30000000}
                step={100000}
                value={form.price}
                onChange={(e) => set("price", parseInt(e.target.value))}
                className="w-full accent-[#8B0000]"
                style={{ accentColor: "#8B0000" }}
              />
              <div className="flex justify-between mt-1">
                <span className="font-golos text-xs text-white/20">500 000 ₽</span>
                <span className="font-golos text-xs text-white/20">30 000 000 ₽</span>
              </div>
            </div>
          </div>

          <div className="card-dark p-8 flex flex-col justify-between" style={{ background: "#0f0f0f" }}>
            <div>
              <p className="section-subtitle mb-6">Результат расчёта</p>
              <div className="space-y-4">
                {breakdown.map((b) => (
                  <div
                    key={b.label}
                    className="flex justify-between items-center pb-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span className="font-golos text-sm text-white/50">{b.label}</span>
                    <span className="font-golos text-sm text-white">{fmtRub(b.value)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div
                className="p-6 mb-6"
                style={{ background: "rgba(139,0,0,0.1)", border: "1px solid rgba(139,0,0,0.3)" }}
              >
                <p className="font-golos text-xs text-white/40 tracking-widest mb-2">ИТОГО ПОД КЛЮЧ</p>
                <p className="font-cormorant text-4xl text-white font-light">{fmtRub(total)}</p>
                <p className="font-golos text-xs text-[#8B0000] mt-2">
                  в т.ч. таможня {fmtRub(customs)} · доставка {fmtRub(delivery)}
                </p>
              </div>
              <a href="#contacts" className="btn-crimson block text-center text-sm">
                Получить точный расчёт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  const timeline = [
    { year: "2016", event: "Основание компании. Первые 12 автомобилей из Германии." },
    { year: "2018", event: "Открыли офисы в Берлине и Токио. 300+ авто в год." },
    { year: "2020", event: "Запустили онлайн-калькулятор и личный кабинет клиента." },
    { year: "2023", event: "Партнёрство с крупнейшими аукционами США. 1000+ авто." },
    { year: "2024", event: "Выход на рынок Китая. Электромобили и гибриды." },
  ];

  const advantages = [
    { icon: "Award", title: "Лицензированный таможенный брокер", desc: "Свидетельство ФТС России, работаем официально" },
    { icon: "Clock", title: "Точные сроки", desc: "Называем конкретную дату — не «примерно»" },
    { icon: "Eye", title: "Полная прозрачность", desc: "Все расходы известны до подписания договора" },
    { icon: "Headphones", title: "Менеджер 24/7", desc: "Персональный менеджер на весь период сделки" },
  ];

  return (
    <section id="about" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="section-subtitle mb-3">Кто мы</p>
            <h2 className="section-title mb-6">О компании</h2>
            <p className="font-golos text-white/60 leading-relaxed mb-6">
              AutoImport — команда профессионалов с 8-летним опытом в сфере международного
              автомобильного импорта. Мы прошли путь от небольшого стартапа до одной из
              ведущих компаний по привозу автомобилей в России.
            </p>
            <p className="font-golos text-white/60 leading-relaxed">
              Наша миссия — сделать процесс покупки автомобиля за рубежом простым,
              прозрачным и выгодным. Никаких скрытых платежей, никаких сюрпризов.
            </p>

            <div
              className="mt-8 p-6 relative overflow-hidden"
              style={{ background: "rgba(139,0,0,0.08)", border: "1px solid rgba(139,0,0,0.2)" }}
            >
              <p className="font-cormorant text-2xl italic text-white/80 leading-relaxed">
                «Мы привозим не просто автомобили — мы воплощаем мечты наших клиентов»
              </p>
              <p className="font-golos text-xs text-[#8B0000] mt-4 tracking-widest">— АЛЕКСАНДР МОРОЗОВ, ОСНОВАТЕЛЬ</p>
            </div>
          </div>

          <div className="relative">
            <img
              src={SHOWROOM_IMAGE}
              alt="Наш шоурум"
              className="w-full h-80 object-cover"
              style={{ border: "1px solid rgba(139,0,0,0.2)" }}
            />
            <div
              className="absolute -bottom-4 -left-4 p-4 crimson-glow"
              style={{ background: "#8B0000", border: "1px solid #a80000" }}
            >
              <p className="font-cormorant text-3xl text-white">1200+</p>
              <p className="font-golos text-xs text-white/70 tracking-wider">АВТО ПРИВЕЗЕНО</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <p className="section-subtitle mb-8">История компании</p>
          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-[#8B0000] via-[#8B0000]/50 to-transparent" />
            <div className="space-y-6">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-8 items-start">
                  <div className="w-16 text-right flex-shrink-0">
                    <span className="font-cormorant text-lg text-[#8B0000]">{t.year}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-[#8B0000]" />
                    <p className="font-golos text-sm text-white/60 leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="section-subtitle mb-8">Наши преимущества</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((a) => (
              <div key={a.title} className="card-dark p-6">
                <Icon name={a.icon} fallback="Star" size={24} className="text-[#8B0000] mb-4" />
                <h3 className="font-cormorant text-xl text-white mb-2 font-light">{a.title}</h3>
                <p className="font-golos text-xs text-white/40 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── BLOG ────────────────────────────────────────────────────────────────────
function Blog() {
  const posts = [
    {
      id: 1,
      date: "12 апреля 2026",
      tag: "Руководство",
      title: "Как правильно растаможить автомобиль в 2026 году",
      desc: "Полное руководство по таможенному оформлению: документы, сроки, стоимость пошлин и актуальные изменения в законодательстве.",
      readTime: "8 мин",
    },
    {
      id: 2,
      date: "3 апреля 2026",
      tag: "Рынки",
      title: "Топ-5 причин покупать авто в Японии",
      desc: "Японские автомобили — низкий пробег, идеальное состояние и доступные цены. Рассказываем, как работают японские аукционы.",
      readTime: "5 мин",
    },
    {
      id: 3,
      date: "28 марта 2026",
      tag: "Электромобили",
      title: "Электромобили из Китая: реальность vs. ожидания",
      desc: "Разбираем мифы и реальность китайских электромобилей BYD, NIO и Zeekr. Стоит ли везти в Россию в 2026?",
      readTime: "7 мин",
    },
  ];

  return (
    <section id="blog" className="py-24" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="section-subtitle mb-3">Статьи и советы</p>
            <h2 className="section-title">Блог</h2>
          </div>
          <button className="btn-ghost text-sm hidden md:block">Все статьи</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="card-dark group cursor-pointer">
              <div
                className="h-3 bg-gradient-to-r from-[#8B0000] to-transparent"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className="font-golos text-xs tracking-widest text-[#8B0000] px-2 py-1"
                    style={{ border: "1px solid rgba(139,0,0,0.3)" }}
                  >
                    {post.tag}
                  </span>
                  <span className="font-golos text-xs text-white/30">{post.readTime}</span>
                </div>
                <h3 className="font-cormorant text-2xl text-white mb-3 font-light group-hover:text-[#8B0000] transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="font-golos text-sm text-white/50 leading-relaxed mb-6">{post.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-golos text-xs text-white/30">{post.date}</span>
                  <button className="font-golos text-xs text-[#8B0000] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Читать <Icon name="ArrowRight" size={12} />
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

// ── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Сколько времени занимает весь процесс привоза?",
      a: "В среднем 4–10 недель в зависимости от страны: Германия — 3–5 недель, США — 7–10 недель, Япония — 6–8 недель, Китай — 2–4 недели. Точные сроки менеджер укажет после оформления заказа.",
    },
    {
      q: "Нужно ли мне куда-то ехать для оформления?",
      a: "Нет. Весь процесс можно пройти дистанционно. Мы работаем с клиентами по всей России онлайн. Для получения автомобиля достаточно нашего склада или доставки до вашего адреса.",
    },
    {
      q: "Как рассчитывается таможенная пошлина?",
      a: "Таможенная пошлина рассчитывается на основе объёма двигателя, возраста авто и его стоимости. Для автомобилей до 3 лет действует адвалорная ставка (% от стоимости), для более старых — специфическая (за см³). Используйте наш калькулятор для предварительного расчёта.",
    },
    {
      q: "Что если автомобиль окажется не в том состоянии?",
      a: "Мы проверяем каждый автомобиль перед покупкой — осмотр, история ДТП, проверка VIN. Все автомобили застрахованы на время транспортировки. Если авто не соответствует описанию — возвращаем деньги.",
    },
    {
      q: "Работаете ли вы с кредитом и рассрочкой?",
      a: "Да, мы сотрудничаем с несколькими банками. Оформить кредит на зарубежный автомобиль можно прямо у нас в офисе или онлайн. Первоначальный взнос от 20%.",
    },
    {
      q: "Можно ли привезти авто под заказ?",
      a: "Конечно. Это наша основная услуга. Вы описываете параметры желаемого авто — марка, модель, год, комплектация, бюджет. Мы находим лучшие варианты, согласовываем с вами и привозим.",
    },
  ];

  return (
    <section id="faq" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="section-subtitle mb-3">Частые вопросы</p>
          <h2 className="section-title">FAQ</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="card-dark overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-golos text-sm text-white pr-4">{faq.q}</span>
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: open === i ? "#8B0000" : "transparent",
                    border: `1px solid ${open === i ? "#8B0000" : "rgba(255,255,255,0.15)"}`,
                  }}
                >
                  <Icon name={open === i ? "Minus" : "Plus"} size={14} className="text-white" />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <p className="font-golos text-sm text-white/50 leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CONTACTS ────────────────────────────────────────────────────────────────
function Contacts() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-24" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-subtitle mb-3">Свяжитесь с нами</p>
          <h2 className="section-title">Контакты</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-golos text-white/60 leading-relaxed mb-10">
              Оставьте заявку — менеджер свяжется в течение 15 минут в рабочее время
              и расскажет о вариантах под ваш бюджет.
            </p>

            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", val: "+7 (800) 555-01-23" },
                { icon: "Mail", label: "Email", val: "info@autoimport.ru" },
                { icon: "MapPin", label: "Офис", val: "Москва, Пресненская наб., 12" },
                { icon: "Clock", label: "Режим работы", val: "Пн–Сб: 9:00–20:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(139,0,0,0.1)", border: "1px solid rgba(139,0,0,0.25)" }}
                  >
                    <Icon name={c.icon} fallback="Star" size={16} className="text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="font-golos text-xs text-white/30 tracking-wider">{c.label}</p>
                    <p className="font-golos text-sm text-white">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              {[
                { icon: "MessageCircle", label: "Telegram" },
                { icon: "Phone", label: "WhatsApp" },
              ].map((s) => (
                <button key={s.label} className="btn-ghost text-sm flex items-center gap-2">
                  <Icon name={s.icon} fallback="Star" size={16} />
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div
                className="p-10 text-center"
                style={{ background: "rgba(139,0,0,0.08)", border: "1px solid rgba(139,0,0,0.3)" }}
              >
                <Icon name="CheckCircle" size={48} className="text-[#8B0000] mx-auto mb-4" />
                <h3 className="font-cormorant text-3xl text-white mb-2">Заявка отправлена</h3>
                <p className="font-golos text-sm text-white/50">Свяжемся с вами в течение 15 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    className="input-dark"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <input
                    className="input-dark"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="input-dark resize-none"
                    rows={5}
                    placeholder="Расскажите, какой автомобиль вас интересует..."
                    value={formData.message}
                    onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <button type="submit" className="btn-crimson w-full text-sm">
                  Отправить заявку
                </button>
                <p className="font-golos text-xs text-white/20 text-center">
                  Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(139,0,0,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#8B0000] flex items-center justify-center">
              <Icon name="Car" size={14} className="text-white" />
            </div>
            <span className="font-cormorant text-lg font-semibold text-white tracking-wider">
              AUTO<span className="text-[#8B0000]">IMPORT</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {["Каталог", "Услуги", "Калькулятор", "О нас", "Блог", "FAQ", "Контакты"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-golos text-xs text-white/30 hover:text-white/70 transition-colors tracking-wider"
              >
                {l}
              </a>
            ))}
          </div>
          <p className="font-golos text-xs text-white/20">
            © 2026 AutoImport
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ────────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "#080808" }}>
      <Navbar />
      <Hero />
      <Catalog />
      <Services />
      <Calculator />
      <About />
      <Blog />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}