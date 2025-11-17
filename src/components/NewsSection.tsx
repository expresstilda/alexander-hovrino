import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Новинка: Garmin LiveScope Plus с улучшенным разрешением",
      description:
        "Представлена новая версия популярного эхолота с увеличенной дальностью сканирования и улучшенной детализацией. Доступен к заказу в нашем шоуруме.",
      date: "5 ноября 2025",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    },
    {
      title: "Акция: Сезонное обслуживание эхолотов",
      description:
        "Специальное предложение на техническое обслуживание и калибровку эхолокационного оборудования перед началом сезона. Скидка 20% до конца месяца.",
      date: "28 октября 2025",
      image: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?w=800",
    },
    {
      title: "Отчет с рыбацкого турнира на Ладоге",
      description:
        "Наша команда заняла второе место в престижном турнире. Делимся опытом использования оборудования в сложных условиях большого водоема.",
      date: "15 октября 2025",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    },
  ];

  return (
    <section id="news" className="py-20 bg-secondary scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-center mb-12">
          Последние новости рыболовного оборудования
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
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
                </div>
                <h3 className="text-xl font-oswald mb-3">{item.title}</h3>
                <p className="text-base font-inter text-muted-foreground mb-4">
                  {item.description}
                </p>
                <button className="text-accent font-inter text-sm font-semibold hover:underline">
                  Читать далее →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90"
          >
            Все новости
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
