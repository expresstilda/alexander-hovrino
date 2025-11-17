import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const categories = [
    { id: "all", label: "Все новости" },
    { id: "reviews", label: "Обзоры оборудования" },
    { id: "comparisons", label: "Сравнения моделей" },
    { id: "tournaments", label: "Отчеты с турниров" },
    { id: "company", label: "Новости компании" },
    { id: "tips", label: "Полезные советы" },
    { id: "updates", label: "Технические обновления" },
  ];

  const news = [
    {
      category: "Обзор оборудования",
      date: "18 ноября 2025",
      title: "Garmin LiveScope Pro: Революция в подводном сканировании. Наш тест в российских условиях",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      description: "Новая система живого обзора от Garmin обещает беспрецедентную детализацию и дальность действия. Мы протестировали её на озёрах Карелии в течение двух недель и готовы рассказать обо всех плюсах и ограничениях этой технологии в реальных условиях российской рыбалки.",
    },
    {
      category: "Отчет с турнира",
      date: "12 ноября 2025",
      title: "Отчет с чемпионата России по спиннинговой ловле: как технологии помогли занять призовые места",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      description: "Наша команда приняла участие в Чемпионате России по спиннинговой ловле на реке Волга. Использование систем LiveView и точных GPS-маркеров позволило найти перспективные точки даже в условиях сильного течения. Делимся секретами, которые помогли занять второе место.",
    },
    {
      category: "Сравнение моделей",
      date: "5 ноября 2025",
      title: "Lowrance HDS Live против Simrad NSS evo3: детальное сравнение для серьезных рыбаков",
      image: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?w=800",
      description: "Два флагманских картплоттера от концерна Navico в реальных условиях эксплуатации. Мы протестировали оба устройства в одинаковых условиях на озере Селигер и выявили ключевые различия в интерфейсе, скорости работы, качестве датчиков и совместимости с дополнительным оборудованием.",
    },
    {
      category: "Новости компании",
      date: "28 октября 2025",
      title: "Расширение шоурума: открываем новую зону для тестирования систем подледного сканирования",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800",
      description: "В преддверии зимнего сезона мы расширяем возможности нашего шоурума. Теперь у нас есть специальная зона с искусственным льдом и подсветкой для тестирования эхолотов и камер подледного сканирования. Приглашаем всех желающих протестировать оборудование перед покупкой.",
    },
    {
      category: "Полезные советы",
      date: "22 октября 2025",
      title: "Как правильно выбрать датчик для вашего эхолота: практическое руководство от наших экспертов",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800",
      description: "Выбор правильного датчика — половина успеха эффективной работы эхолота. В этой статье наши специалисты подробно рассказывают, как подобрать оптимальную модель с учетом материала корпуса вашей лодки, скорости движения, глубины водоемов и специфики поиска рыбы в ваших регионах.",
    },
    {
      category: "Технические обновления",
      date: "15 октября 2025",
      title: "Обновление программного обеспечения для Garmin: что нового и как обновить ваше устройство",
      image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800",
      description: "Компания Garmin выпустила крупное обновление ПО для линейки картплоттеров серии GPSMAP. В статье мы подробно разбираем все новые функции, объясняем, как провести обновление самостоятельно и показываем, какие возможности теперь доступны владельцам оборудования.",
    },
    {
      category: "Обзор оборудования",
      date: "8 октября 2025",
      title: "Minn Kota Ulterra с функцией Spot-Lock: как GPS-удержание позиции меняет подход к рыбалке",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
      description: "Троллинговый мотор с функцией автоматического удержания позиции — это не просто удобство, а реальный инструмент для повышения улова. Мы протестировали Minn Kota Ulterra на водохранилище с сильным ветром и течением и расскажем, как эта технология работает в экстремальных условиях российских реалий.",
    },
    {
      category: "Новости компании",
      date: "1 октября 2025",
      title: "Alexander Ховрино стал официальным партнером Sionyx для России: ночные камеры теперь в нашем ассортименте",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      description: "Мы рады объявить о новом партнерстве с американской компанией Sionyx — производителем революционных цифровых ночных камер. Теперь в нашем шоуруме доступны для тестирования и покупки камеры Aurora и Pro, которые открывают совершенно новые возможности для вечерней и ночной рыбалки.",
    },
  ];

  const popularNews = [
    { title: "Как правильно настроить CHIRP-эхолот для поиска хищной рыбы", views: 2450 },
    { title: "Сравнение: Garmin LiveScope vs Lowrance ActiveTarget", views: 2180 },
    { title: "Отчет с экспедиции на северные реки с новым оборудованием Sionyx", views: 1950 },
    { title: "Инструкция: как установить датчик на алюминиевую лодку без нарушения герметичности", views: 1840 },
    { title: "Обзор зимнего комплекта для подледной рыбалки 2025/2026", views: 1720 },
  ];

  const archive = [
    { year: 2025, count: 42 },
    { year: 2024, count: 87 },
    { year: 2023, count: 105 },
    { year: 2022, count: 93 },
    { year: 2021, count: 76 },
    { year: 2020, count: 64 },
    { year: 2019, count: 48 },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email, interests);
    // TODO: Implement subscription logic
  };

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-primary/20 to-background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200)",
          }}
        />
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-oswald mb-6">
            Новости рыболовного оборудования и отчеты с турниров
          </h1>
          <p className="text-xl font-inter mb-8 max-w-3xl mx-auto text-muted-foreground">
            Экспертные обзоры, сравнения, практические тесты и новости из мира высокотехнологичной рыбалки. 
            Только проверенная информация от практикующих рыбаков.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Подписаться на обновления
            </Button>
            <Button size="lg" variant="outline">
              Перейти в магазин на Авито
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-oswald mb-4">Выберите интересующие вас темы</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-inter text-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-accent text-primary-foreground"
                    : "bg-background border border-border hover:border-accent"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {news.map((item, index) => (
                  <article
                    key={index}
                    className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all hover-scale"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-accent mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-inter">{item.date}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm font-inter">{item.category}</span>
                      </div>
                      <h3 className="text-xl font-oswald mb-3">{item.title}</h3>
                      <p className="text-base font-inter text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <button className="text-accent font-inter text-sm font-semibold hover:underline inline-flex items-center">
                        Читать полностью <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-muted-foreground font-inter">Показано 8 из 42 новостей</p>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
                <Button variant="outline" size="lg">
                  Показать ещё
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Popular News */}
              <div className="bg-card border border-border p-6">
                <h3 className="text-2xl font-oswald mb-4">Самые читаемые материалы</h3>
                <div className="space-y-4">
                  {popularNews.map((item, index) => (
                    <div key={index} className="border-b border-border pb-3 last:border-0">
                      <h4 className="font-inter text-sm mb-1 hover:text-accent cursor-pointer transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">{item.views} просмотров</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Archive */}
              <div className="bg-card border border-border p-6">
                <h3 className="text-2xl font-oswald mb-4">Архив новостей</h3>
                <div className="space-y-2">
                  {archive.map((item) => (
                    <button
                      key={item.year}
                      className="w-full text-left font-inter text-sm py-2 hover:text-accent transition-colors flex justify-between"
                    >
                      <span>{item.year}</span>
                      <span className="text-muted-foreground">({item.count} новостей)</span>
                    </button>
                  ))}
                </div>
                <button className="mt-4 text-accent font-inter text-sm font-semibold hover:underline inline-flex items-center">
                  Полный архив новостей <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-oswald text-center mb-4">
            Не пропустите новые обзоры и тесты!
          </h2>
          <p className="text-center font-inter text-muted-foreground mb-8">
            Подпишитесь на нашу рассылку и первыми узнавайте о новых обзорах оборудования, отчетах с турниров 
            и специальных предложениях. Мы не отправляем спам — только полезную информацию для любителей рыбной ловли.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-6">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
            <div className="space-y-3">
              <p className="font-inter font-semibold">Категории интересов:</p>
              {["Обзоры оборудования", "Турнирные отчеты", "Технические советы", "Специальные предложения"].map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={interests.includes(interest)}
                    onCheckedChange={() => toggleInterest(interest)}
                  />
                  <label htmlFor={interest} className="font-inter text-sm cursor-pointer">
                    {interest}
                  </label>
                </div>
              ))}
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
              Подписаться
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Мы ценим вашу конфиденциальность и никогда не передадим ваш email третьим лицам.
            </p>
          </form>
        </div>
      </section>

      {/* Expert Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-oswald mb-6">
            Есть вопросы по материалам или хотите предложить тему для обзора?
          </h2>
          <p className="text-lg font-inter text-muted-foreground mb-8">
            Наши эксперты всегда готовы ответить на ваши вопросы по опубликованным материалам или помочь с подбором 
            оборудования. Если у вас есть идея для обзора или теста — напишите нам, и мы обязательно рассмотрим ваше предложение.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card border border-border p-6">
              <p className="font-inter text-sm text-muted-foreground mb-2">Email для вопросов</p>
              <p className="font-oswald text-lg">news@hovrino.ru</p>
            </div>
            <div className="bg-card border border-border p-6">
              <p className="font-inter text-sm text-muted-foreground mb-2">Telegram-канал</p>
              <p className="font-oswald text-lg">@hovrino_news</p>
            </div>
            <div className="bg-card border border-border p-6">
              <p className="font-inter text-sm text-muted-foreground mb-2">WhatsApp</p>
              <p className="font-oswald text-lg">+7 (962) 462-93-15</p>
            </div>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Задать вопрос эксперту
          </Button>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-oswald mb-6">
            Хотите протестировать оборудование, о котором мы пишем?
          </h2>
          <p className="text-lg font-inter mb-8">
            Все устройства, которые мы тестируем в наших обзорах, доступны для личного тестирования в нашем московском 
            шоуруме. Приходите с вашей лодкой или без — наши эксперты покажут работу оборудования в реальных условиях 
            и дадут персональные рекомендации.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Записаться на тестирование
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Посмотреть товары в магазине на Авито
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
