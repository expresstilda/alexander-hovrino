import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  CheckCircle,
  Heart,
  Shield,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
} from "lucide-react";
import teamHeroImage from "@/assets/team-hero.jpg";
import alexanderImage from "@/assets/alexander-portrait.jpg";
import mikhailImage from "@/assets/mikhail-portrait.jpg";
import dmitryImage from "@/assets/dmitry-portrait.jpg";
import showroomImage from "@/assets/showroom.jpg";

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    comment: "",
    consent: false,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Спасибо за заявку!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: "",
      comment: "",
      consent: false,
    });
  };

  const values = [
    {
      icon: CheckCircle,
      title: "Экспертность, подтвержденная практикой",
      description:
        "Каждый член нашей команды — практикующий рыбак с многолетним стажем. Мы сами используем оборудование в самых разных условиях: от подмосковных озер до северных рек.",
    },
    {
      icon: Heart,
      title: "Индивидуальный подход к каждому клиенту",
      description:
        "Мы не навязываем стандартные решения. Вместо этого мы внимательно слушаем ваши задачи, бюджет и условия рыбалки, чтобы подобрать оптимальное оборудование именно для вас.",
    },
    {
      icon: Shield,
      title: "Честность и прозрачность",
      description:
        "Мы не продаем оборудование, в котором не уверены сами. Если продукт не прошел наше тестирование в реальных условиях, он не попадет в наш ассортимент.",
    },
    {
      icon: Users,
      title: "Поддержка на всех этапах",
      description:
        "Наша помощь не заканчивается после покупки. Мы предоставляем бесплатную техническую поддержку, консультации по установке и настройке, а также обучение работе с оборудованием.",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "Начало пути",
      description:
        "Открытие первого магазина в Москве, специализирующегося на эхолотах для любительской рыбалки.",
    },
    {
      year: "2014",
      title: "Расширение ассортимента",
      description:
        "Введение в продажу картплоттеров и троллинговых моторов, начало сотрудничества с Garmin и Lowrance.",
    },
    {
      year: "2017",
      title: "Открытие шоурума",
      description:
        "Создание современного шоурума с демонстрационными стендами и возможностью протестировать оборудование в условиях, приближенных к реальным.",
    },
    {
      year: "2019",
      title: "Выход в онлайн",
      description:
        "Запуск официального магазина на Авито с быстрой доставкой по всей России, что позволило помочь тысячам рыбаков из регионов.",
    },
    {
      year: "2023",
      title: "Статус официального дилера",
      description:
        "Получение официального дилерского статуса у ведущих мировых брендов, что гарантирует нашим клиентам оригинальное оборудование и полную гарантийную поддержку.",
    },
    {
      year: "2025",
      title: "Новые горизонты",
      description:
        "Постоянное расширение ассортимента, внедрение новых технологий и обучение команды для работы с инновационными системами живого обзора.",
    },
  ];

  const team = [
    {
      image: alexanderImage,
      name: "Александр Шмелёв",
      position: "Основатель компании",
      description:
        'Александр основал компанию в 2010 году, будучи страстным рыбаком-спортсменом. За плечами — более 20 лет активной рыбалки и участие в более чем 50 соревнованиях по всей России. В 2019 году занял 2 место в турнире по ловле щуки на Волге, используя оборудование, которое сейчас продает в своем магазине.\n\nКандидат технических наук, Александр лично тестирует каждую новую модель эхолота и картплоттера перед тем, как включить в ассортимент. Любит говорить: "Если я сам не использую это оборудование на своей лодке, я не буду его продавать".',
      specialization:
        "Системы живого обзора, интеграция сложных навигационных комплексов",
      hobbies: "Альпинизм, мотопутешествия по России",
    },
    {
      image: mikhailImage,
      name: "Антон Ховрино",
      position: "Технический специалист",
      description:
        "Антон присоединился к команде в 2016 году, имея за плечами опыт работы инженером в судоремонтной компании. С раннего детства увлекается рыбалкой благодаря деду, с которым осваивал водоемы Подмосковья. Сегодня Антон — один из лучших специалистов по установке и настройке троллинговых моторов в России.\n\nВ 2023 году Антон занял 1 место в командных соревнованиях по зимней рыбалке на озере Селигер, где его команда использовала специальные системы подледного сканирования, установленные им же лично. Регулярно проводит бесплатные мастер-классы для клиентов по правильной установке и настройке оборудования.",
      specialization:
        "Установка и настройка троллинговых моторов, морские электрические системы",
      hobbies:
        "Реставрация советских лодочных моторов, фотография дикой природы",
    },
    {
      image: dmitryImage,
      name: "Даниил Добролюбов",
      position: "Специалист по продажам",
      description:
        "Даниил работает в команде с 2018 года и за это время помог более 1500 клиентов собрать идеальный комплект оборудования для их лодок. Спокойный, внимательный и терпеливый, он умеет подобрать решение даже для самого требовательного клиента.\n\nДаниил — профессиональный гид по рыбалке с 10-летним стажем. Каждое лето проводит на северных реках, где водит туристов на рыбалку и тестирует новое оборудование в экстремальных условиях. В 2024 году его лодка стала первой, полностью оснащенной системами Sionyx для ночной рыбалки.",
      specialization:
        'Комплексное оснащение лодок "под ключ", бюджетные решения с максимальной эффективностью',
      hobbies:
        "Кулинария (особенно рыбные блюда), коллекционирование старинных рыболовных снастей",
    },
  ];

  const testimonials = [
    {
      name: "Андрей",
      location: "Москва",
      text: "Приехал в шоурум с планшетом и ручкой, на котором нарисовал свою лодку с пометками. Антон лично провел со мной 3 часа, показал все нюансы установки эхолота и помог подобрать комплект, который до сих пор работает идеально. Это не магазин, это команда энтузиастов своего дела!",
    },
    {
      name: "Сергей",
      location: "Санкт-Петербург",
      text: "Покупал оборудование через Авито, но даже дистанционно получил такой уровень поддержки, как будто находился в шоуруме. Антон звонил каждые полчаса во время установки, объясняя каждый шаг. Теперь рекомендую только их.",
    },
    {
      name: "Екатерина",
      location: "Новосибирск",
      text: "Как женщина-рыбак, я опасалась, что со мной будут разговаривать свысока. Но Даниил нашел подход, подобрал простое в использовании оборудование и даже научил меня некоторым трюкам. Теперь моя лодка оснащена лучше, чем у мужа!",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-oswald mb-6">
              С 2010 года — ваш надежный партнер в оснащении лодок современным
              оборудованием
            </h1>
            <p className="text-xl font-inter mb-8 text-muted-foreground">
              Мы не просто продаем рыбопоисковое оборудование — мы сами активные
              рыбаки с многолетним практическим опытом. Каждый сотрудник нашей
              команды проводит на воде сотни часов ежегодно, чтобы дать вам
              точные и проверенные рекомендации.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black"
                onClick={() => scrollToSection("team")}
              >
                Познакомиться с командой
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("showroom")}
              >
                Посетить наш шоурум
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald mb-6 text-center">
            Почему мы делаем то, что делаем?
          </h2>
          <p className="text-lg font-inter leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            В 2010 году Александр Шмелёв основал компанию с простой миссией —
            помочь рыбакам получать больше удовольствия от рыбалки благодаря
            современным технологиям. Сегодня, спустя 15 лет, мы остаемся верны
            этой цели, но наши возможности значительно расширились.
          </p>
          <p className="text-lg font-inter leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Мы убеждены, что качественное оборудование должно быть доступным, а
            выбор правильного решения — простым и понятным процессом. Поэтому мы
            отбираем только проверенные временем решения и даем честные
            рекомендации, основанные на реальном опыте использования.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border p-8 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-oswald mb-3">{value.title}</h3>
                  <p className="text-muted-foreground font-inter">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald mb-6 text-center">
            Наш путь с 2010 года
          </h2>
          <p className="text-lg font-inter leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Наша история началась с небольшого магазина в Москве, где Александр
            Ховрино помогал рыбакам выбирать эхолоты. За 15 лет мы прошли путь от
            локального дилера до одного из ведущих поставщиков рыбопоискового
            оборудования в России.
          </p>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 mb-8 relative pb-8 border-l-2 border-accent ml-8"
              >
                <div className="absolute -left-4 top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-full" />
                </div>
                <div className="pl-8">
                  <div className="text-2xl font-oswald text-accent mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-oswald mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-inter">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-secondary scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald mb-6 text-center">
            Наши эксперты — практикующие рыбаки
          </h2>
          <p className="text-lg font-inter leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            В нашей команде работают не просто продавцы-консультанты, а настоящие
            энтузиасты рыбной ловли с глубокими техническими знаниями. Каждый член
            команды регулярно участвует в рыбалках и турнирах, чтобы лично
            тестировать оборудование и лучше понимать потребности клиентов.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-oswald mb-2">{member.name}</h3>
                  <p className="text-accent font-inter mb-4">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground font-inter mb-4 whitespace-pre-line">
                    {member.description}
                  </p>
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-sm font-oswald mb-2">Специализация:</p>
                    <p className="text-sm text-muted-foreground font-inter mb-3">
                      {member.specialization}
                    </p>
                    <p className="text-sm font-oswald mb-2">
                      Хобби помимо рыбалки:
                    </p>
                    <p className="text-sm text-muted-foreground font-inter">
                      {member.hobbies}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section id="showroom" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald mb-6 text-center">
            Почему стоит приехать к нам в шоурум?
          </h2>
          <p className="text-lg font-inter leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Наш московский шоурум — это не просто магазин, а целый комплекс для
            тех, кто серьезно относится к рыбной ловле. Здесь вы можете не только
            увидеть оборудование в работе, но и получить практические рекомендации
            от экспертов, протестировать различные модели и даже принять участие в
            мастер-классах.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={showroomImage}
                alt="Наш шоурум"
                className="shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-oswald mb-6">
                Преимущества визита в шоурум:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-inter">
                    <strong>Демонстрационные стенды</strong> с возможностью
                    протестировать оборудование в условиях, близких к реальным
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-inter">
                    <strong>Специальный бассейн</strong> для демонстрации работы
                    эхолотов и систем живого обзора
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-inter">
                    <strong>Зона для тестирования</strong> троллинговых моторов с
                    имитацией различных условий эксплуатации
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-inter">
                    <strong>Учебный класс</strong> для проведения мастер-классов и
                    индивидуальных консультаций
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-inter">
                    <strong>Место для вашей лодки</strong> — приезжайте со своей
                    лодкой, и мы поможем подобрать и установить оборудование прямо
                    на месте
                  </span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-secondary border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="font-inter">
                    г. Москва, ул. Речная, д. 15, строение 3
                  </span>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="font-inter">
                    Пн-Пт: 10:00 - 20:00, Сб-Вс: 10:00 - 18:00
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="font-inter">+7 (962) 462-93-15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online & Offline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald mb-6 text-center">
            Удобно онлайн, надежно офлайн
          </h2>
          <p className="text-lg font-inter leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Мы понимаем, что не все клиенты могут приехать в наш московский
            шоурум. Поэтому мы создали два равноценных способа работать с нами:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-oswald mb-4">Онлайн через Авито</h3>
              <p className="text-muted-foreground font-inter mb-6">
                Наш официальный магазин на Авито (
                <a
                  href="https://www.avito.ru/brands/alexandrhovrino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  alexandrhovrino
                </a>
                ) насчитывает более 2000 положительных отзывов и является одним из
                самых авторитетных в категории рыбопоискового оборудования. Здесь
                вы найдете весь ассортимент товаров с подробными описаниями,
                реальными фотографиями и гарантированной подлинностью. Доставка по
                всей России от 2 дней.
              </p>
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-black"
                onClick={() =>
                  window.open(
                    "https://www.avito.ru/brands/alexandrhovrino",
                    "_blank"
                  )
                }
              >
                Перейти в магазин на Авито
              </Button>
            </div>
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-oswald mb-4">Офлайн в шоуруме</h3>
              <p className="text-muted-foreground font-inter mb-4">
                Личное общение в шоуруме открывает дополнительные возможности,
                недоступные онлайн:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2 text-sm font-inter">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  Возможность лично протестировать оборудование перед покупкой
                </li>
                <li className="flex gap-2 text-sm font-inter">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  Индивидуальная консультация с учетом всех нюансов вашей лодки и
                  стиля рыбалки
                </li>
                <li className="flex gap-2 text-sm font-inter">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  Бесплатная помощь в подборе комплекта оборудования
                </li>
                <li className="flex gap-2 text-sm font-inter">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  Возможность увидеть, как монтируется и настраивается оборудование
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => scrollToSection("consultation")}
              >
                Записаться в шоурум
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald mb-6 text-center">
            Что говорят те, кто с нами работал
          </h2>
          <p className="text-lg font-inter leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            За 15 лет работы мы помогли более 10 000 рыбаков оснастить свои лодки
            современным оборудованием. Вот что говорят некоторые из них:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground font-inter mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-oswald">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-inter">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-oswald text-accent mb-2">4.9/5</div>
              <p className="text-sm text-muted-foreground font-inter">
                звезд на Авито (2000+ отзывов)
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-oswald text-accent mb-2">98%</div>
              <p className="text-sm text-muted-foreground font-inter">
                клиентов возвращаются к нам за дополнительным оборудованием
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-oswald text-accent mb-2">3000+</div>
              <p className="text-sm text-muted-foreground font-inter">
                лодок полностью оснащены нашим оборудованием
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="consultation" className="py-20 bg-secondary scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald mb-6 text-center">
            Готовы улучшить свою рыбалку с помощью профессионалов?
          </h2>
          <p className="text-lg font-inter leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Независимо от того, впервые ли вы оснащаете лодку или хотите обновить
            существующее оборудование, мы поможем вам сделать правильный выбор.
            Наши эксперты расскажут обо всех нюансах, подберут оптимальное решение
            под ваш бюджет и даже помогут с установкой.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-oswald mb-4">
                Приезжайте в наш шоурум
              </h3>
              <p className="text-muted-foreground font-inter mb-6">
                Лучший способ выбрать оборудование — увидеть и протестировать его
                лично. Запишитесь на бесплатную консультацию, и мы зарезервируем
                для вас время с нашим экспертом. Привезите свою лодку или просто
                приходите с описанием — мы найдем идеальное решение.
              </p>
            </div>
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-oswald mb-4">Обсудим онлайн</h3>
              <p className="text-muted-foreground font-inter mb-6">
                Если вы не из Москвы, мы проведем детальную онлайн-консультацию,
                поможем выбрать оборудование и организуем быструю доставку по всей
                России. Наш магазин на Авито уже готов принять ваш заказ с
                гарантией качества и поддержкой наших экспертов.
              </p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-inter mb-2">Имя *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter mb-2">
                    Телефон *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-inter mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-inter mb-2">
                  Что вас интересует *
                </label>
                <select
                  className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md"
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  required
                >
                  <option value="">Выберите категорию</option>
                  <option value="echosounders">Эхолоты и картплоттеры</option>
                  <option value="livescope">Системы живого обзора</option>
                  <option value="trolling">Троллинговые моторы</option>
                  <option value="complete">Комплексное оснащение</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-inter mb-2">
                  Комментарий
                </label>
                <Textarea
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  rows={4}
                />
              </div>
              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-muted-foreground font-inter cursor-pointer"
                >
                  Я согласен на обработку персональных данных
                </label>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-accent hover:bg-accent/90 text-black"
                >
                  Записаться на консультацию
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  onClick={() =>
                    window.open(
                      "https://www.avito.ru/brands/alexandrhovrino",
                      "_blank"
                    )
                  }
                >
                  Перейти на Авито →
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-oswald mb-6">
            Почему в Alexander Ховрино выбирают оборудование для своей лодки?
          </h2>
          <p className="text-lg font-inter leading-relaxed mb-8 max-w-4xl mx-auto">
            Alexander Ховрино — не просто магазин рыбопоискового оборудования. Мы
            — сообщество практикующих рыбаков, которые делятся своим опытом и
            помогают другим получать максимум удовольствия от рыбалки. Наше
            оборудование тестируется в реальных условиях, а рекомендации
            основаны на многолетнем опыте.
          </p>
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              <span className="font-inter">+7 (962) 462-93-15</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              <span className="font-inter">info@hovrino.ru</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-inter">
                г. Москва, ул. Речная, д. 15, строение 3
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black"
              onClick={() => scrollToSection("consultation")}
            >
              Задать вопрос команде
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://www.avito.ru/brands/alexandrhovrino",
                  "_blank"
                )
              }
            >
              Посмотреть отзывы на Авито
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
