import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail, MessageCircle, Send } from "lucide-react";
import entranceImage from "@/assets/entrance.webp";
import showroomImage from "@/assets/showroom.jpg";
import { useToast } from "@/hooks/use-toast";
import ScrollToTop from "@/components/ScrollToTop";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    visitDate: "",
    consent: false,
  });

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
      title: "Сообщение отправлено",
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      visitDate: "",
      consent: false,
    });
  };

  const showroomPhotos = [
    {
      src: showroomImage,
      caption: "Основное пространство шоурума с демонстрационными стендами и зоной консультаций",
    },
    {
      src: showroomImage,
      caption: "Демонстрационный бассейн для тестирования эхолотов и систем живого обзора в реальных условиях",
    },
    {
      src: showroomImage,
      caption: "Рабочая зона для монтажа и настройки оборудования на лодках клиентов",
    },
    {
      src: showroomImage,
      caption: "Стенд для тестирования троллинговых моторов с имитацией различных условий эксплуатации",
    },
    {
      src: showroomImage,
      caption: "Пространство для проведения мастер-классов и индивидуальных консультаций по работе с оборудованием",
    },
    {
      src: showroomImage,
      caption: "Уютное место для обсуждения деталей, планирования оснащения лодки и неформального общения с экспертами",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${entranceImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald text-primary-foreground mb-6">
            Наш шоурум в Москве — место, где рождаются идеальные решения для вашей рыбалки
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Мы всегда рады личной встрече и готовы показать работу оборудования в реальных условиях. 
            Запишитесь на консультацию или просто приезжайте в удобное время — наши эксперты ответят на все ваши вопросы.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+79624629315" className="font-semibold hover:text-accent transition-colors">
                +7 (962) 462-93-15
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Москва, Флотская ул., 7, корп. 3</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Пн-Пт: 10:00 - 20:00, Сб-Вс: 10:00 - 18:00</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black font-oswald uppercase"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-black bg-primary-foreground hover:bg-primary-foreground/90 font-oswald uppercase"
              onClick={() => window.open("https://yandex.ru/maps/?text=Москва, Флотская ул., 7, корп. 3", "_blank")}
            >
              Проложить маршрут
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald text-center mb-6">Как нас найти</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Наш шоурум расположен в удобном месте Москвы с хорошей транспортной доступностью. 
            Рядом есть бесплатная парковка для автомобилей и место для временного размещения лодок при необходимости тестирования оборудования.
          </p>
          
          <div className="bg-background overflow-hidden mb-8" style={{ height: '500px' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта шоурума Alexander Ховрино"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background p-6 text-center">
              <h3 className="text-xl font-oswald mb-2">На метро</h3>
              <p className="text-muted-foreground">Ближайшая станция метро: "Водный стадион" (15 минут пешком)</p>
            </div>
            <div className="bg-background p-6 text-center">
              <h3 className="text-xl font-oswald mb-2">Общественным транспортом</h3>
              <p className="text-muted-foreground">Автобусы: №270, 167, 773 до остановки "Флотская улица"</p>
            </div>
            <div className="bg-background p-6 text-center">
              <h3 className="text-xl font-oswald mb-2">Парковка</h3>
              <p className="text-muted-foreground">Бесплатная для клиентов на территории рядом со шоурумом</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black font-oswald uppercase"
              onClick={() => window.open("https://yandex.ru/maps/?text=Москва, Флотская ул., 7, корп. 3", "_blank")}
            >
              Открыть в Яндекс.Картах
            </Button>
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald text-center mb-6">
            Наш шоурум — место, где технологии встречаются с практикой
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Мы создали пространство, где можно не просто посмотреть на оборудование, но и протестировать его в условиях, 
            максимально приближенных к реальной рыбалке. Каждый уголок нашего шоурума продуман для того, чтобы помочь вам сделать правильный выбор.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showroomPhotos.map((photo, index) => (
              <div key={index} className="group relative overflow-hidden bg-muted aspect-video">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-primary-foreground p-4 text-sm">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald text-center mb-12">
            Свяжитесь с нами любым удобным способом
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Main Contacts */}
            <div className="bg-background p-8">
              <h3 className="text-2xl font-oswald mb-6">Основные контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">Москва, Флотская ул., 7, корп. 3</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <a href="tel:+79624629315" className="text-muted-foreground hover:text-accent transition-colors">
                      +7 (962) 462-93-15
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@hovrino.ru" className="text-muted-foreground hover:text-accent transition-colors">
                      info@hovrino.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Часы работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    <p className="text-muted-foreground text-sm mt-1">Последний понедельник месяца — технический день</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Clients */}
            <div className="bg-background p-8">
              <h3 className="text-2xl font-oswald mb-6">Для корпоративных клиентов</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Контактное лицо</p>
                  <p className="text-muted-foreground">Александр Ховрино</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Телефон</p>
                  <a href="tel:+79624629316" className="text-muted-foreground hover:text-accent transition-colors">
                    +7 (962) 462-93-16
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:business@hovrino.ru" className="text-muted-foreground hover:text-accent transition-colors">
                    business@hovrino.ru
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">Особые условия</p>
                  <p className="text-muted-foreground">Индивидуальные решения для профессиональных рыболовных команд и гидов</p>
                </div>
              </div>
            </div>

            {/* Warranty Service */}
            <div className="bg-background p-8">
              <h3 className="text-2xl font-oswald mb-6">Гарантийное обслуживание</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Гарантийный отдел</p>
                  <a href="tel:+79624629317" className="text-muted-foreground hover:text-accent transition-colors">
                    +7 (962) 462-93-17
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:warranty@hovrino.ru" className="text-muted-foreground hover:text-accent transition-colors">
                    warranty@hovrino.ru
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">График приема</p>
                  <p className="text-muted-foreground">Пн-Пт: 14:00 - 18:00</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Необходимые документы</p>
                  <p className="text-muted-foreground text-sm">Гарантийный талон, чек покупки, паспорт владельца</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messengers & Social */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-oswald text-center mb-6">
            Мы на связи в ваших любимых мессенджерах
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Для оперативного решения вопросов вы можете написать нам в мессенджеры. 
            Наши менеджеры отвечают в течение 15 минут в рабочее время.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <a
              href="https://wa.me/79624629315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-muted hover:bg-accent/10 transition-colors group"
            >
              <MessageCircle className="w-12 h-12 text-accent" />
              <span className="font-oswald text-lg">WhatsApp</span>
              <span className="text-sm text-muted-foreground text-center">Основной канал поддержки</span>
            </a>
            <a
              href="https://t.me/hovrino_support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-muted hover:bg-accent/10 transition-colors group"
            >
              <Send className="w-12 h-12 text-accent" />
              <span className="font-oswald text-lg">Telegram</span>
              <span className="text-sm text-muted-foreground text-center">Оперативные консультации</span>
            </a>
            <a
              href="viber://chat?number=79624629315"
              className="flex flex-col items-center gap-3 p-6 bg-muted hover:bg-accent/10 transition-colors group"
            >
              <MessageCircle className="w-12 h-12 text-accent" />
              <span className="font-oswald text-lg">Viber</span>
              <span className="text-sm text-muted-foreground text-center">Альтернативный канал</span>
            </a>
            <a
              href="https://vk.com/im?sel=-alexsandrhovrino"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-muted hover:bg-accent/10 transition-colors group"
            >
              <MessageCircle className="w-12 h-12 text-accent" />
              <span className="font-oswald text-lg">VK Messenger</span>
              <span className="text-sm text-muted-foreground text-center">Живое общение</span>
            </a>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-oswald mb-6">Социальные сети</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://vk.com/alexsandrhovrino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                ВКонтакте
              </a>
              <a
                href="https://youtube.com/@hovrino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://t.me/hovrino_news"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Telegram-канал
              </a>
              <a
                href="https://www.avito.ru/brands/alexandrhovrino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Авито
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-muted scroll-mt-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-oswald text-center mb-6">
            Задайте ваш вопрос или запишитесь на консультацию
          </h2>
          <p className="text-center text-lg mb-12">
            Оставьте ваши контактные данные, и наш эксперт свяжется с вами в ближайшее время. 
            Если вы хотите записаться на личную консультацию в шоуруме, укажите предпочтительные дату и время.
          </p>

          <form onSubmit={handleSubmit} className="bg-background p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Тема обращения</Label>
              <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тему" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Запись на консультацию в шоурум</SelectItem>
                  <SelectItem value="equipment">Вопрос по оборудованию</SelectItem>
                  <SelectItem value="warranty">Гарантийное обслуживание</SelectItem>
                  <SelectItem value="partnership">Сотрудничество</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.subject === "consultation" && (
              <div className="space-y-2">
                <Label htmlFor="visitDate">Предпочитаемая дата и время для визита</Label>
                <Input
                  id="visitDate"
                  type="datetime-local"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              />
              <Label htmlFor="consent" className="text-sm cursor-pointer">
                Я согласен на обработку персональных данных *
              </Label>
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-black font-oswald uppercase">
              Отправить сообщение
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              После отправки формы наш менеджер свяжется с вами в течение 15 минут в рабочее время. 
              Для срочных вопросов рекомендуем звонить по телефону{" "}
              <a href="tel:+79624629315" className="text-accent hover:underline">
                +7 (962) 462-93-15
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-oswald text-center mb-12">
            Ответы на популярные вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-muted px-6">
              <AccordionTrigger className="text-lg font-oswald">
                Нужна ли предварительная запись для посещения шоурума?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Предварительная запись не обязательна, но рекомендуется для получения персонального внимания эксперта. 
                Если вы хотите протестировать специфическое оборудование или обсудить комплексное оснащение лодки, 
                лучше записаться заранее, чтобы мы могли подготовиться к вашему визиту.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-muted px-6">
              <AccordionTrigger className="text-lg font-oswald">
                Можно ли привезти свою лодку для подбора оборудования?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы очень рекомендуем приезжать со своей лодкой! У нас есть специально оборудованная площадка для размещения лодок, 
                и мы можем продемонстрировать работу оборудования непосредственно на вашем судне, учитывая все его особенности.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-muted px-6">
              <AccordionTrigger className="text-lg font-oswald">
                Работаете ли вы с регионами России?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы работаем со всей Россией через наш официальный магазин на Авито с доставкой от 2 дней. 
                Для удаленных консультаций проводим онлайн-встречи с демонстрацией оборудования и подробными рекомендациями по выбору и установке.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-muted px-6">
              <AccordionTrigger className="text-lg font-oswald">
                Предоставляете ли вы гарантию на оборудование?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, на всё оборудование предоставляется официальная гарантия производителя от 1 до 3 лет в зависимости от бренда и категории товара. 
                Кроме того, мы даем свою гарантию на правильность установки и настройки при проведении этих работ в нашем шоуруме.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-muted px-6">
              <AccordionTrigger className="text-lg font-oswald">
                Есть ли возможность установить оборудование в вашем шоуруме?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, у нас есть специализированная мастерская с оборудованными постами для установки любого типа оборудования. 
                Наши специалисты имеют сертификаты производителей и многолетний опыт монтажа на различные типы лодок и катеров.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-oswald mb-6 text-black">
            Почему лучше приехать в шоурум, чем покупать онлайн?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-black/90">
            Хотя наш магазин на Авито предлагает удобный способ покупки, личное посещение шоурума дает уникальные преимущества:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-black/10 p-6 text-left">
              <h3 className="text-xl font-oswald mb-2 text-black">Тестирование в реальных условиях</h3>
              <p className="text-black/80">Проверьте работу оборудования на наших демонстрационных стендах</p>
            </div>
            <div className="bg-black/10 p-6 text-left">
              <h3 className="text-xl font-oswald mb-2 text-black">Индивидуальный подход</h3>
              <p className="text-black/80">Наши эксперты учтут все нюансы вашей лодки и условий рыбалки</p>
            </div>
            <div className="bg-black/10 p-6 text-left">
              <h3 className="text-xl font-oswald mb-2 text-black">Экономия времени и денег</h3>
              <p className="text-black/80">Правильный выбор с первого раза избавит вас от ошибок и возвратов</p>
            </div>
            <div className="bg-black/10 p-6 text-left">
              <h3 className="text-xl font-oswald mb-2 text-black">Бесплатная консультация</h3>
              <p className="text-black/80">Получите профессиональный совет даже без обязательства покупки</p>
            </div>
            <div className="bg-black/10 p-6 text-left">
              <h3 className="text-xl font-oswald mb-2 text-black">Комплексное решение</h3>
              <p className="text-black/80">Мы можем оснастить вашу лодку под ключ за один визит</p>
            </div>
            <div className="bg-black/10 p-6 text-left">
              <h3 className="text-xl font-oswald mb-2 text-black">Установка на месте</h3>
              <p className="text-black/80">Профессиональный монтаж с гарантией качества работ</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-oswald uppercase text-lg px-12"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться на бесплатную консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
