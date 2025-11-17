import { Button } from "@/components/ui/button";
import { Store, Package, Headphones, Award } from "lucide-react";
import showroomImage from "@/assets/showroom.jpg";

const AboutSection = () => {
  const advantages = [
    {
      icon: Store,
      title: "Шоурум полного цикла",
      description:
        "Можете увидеть, потрогать и протестировать любое оборудование перед покупкой",
    },
    {
      icon: Package,
      title: "Всё в наличии",
      description:
        "Более 500 единиц техники на складе — забираете в день обращения",
    },
    {
      icon: Headphones,
      title: "Поддержка экспертов",
      description:
        "Консультации от практикующих рыбаков с многолетним опытом",
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description:
        "Официальная гарантия на всё оборудование и сервисное обслуживание",
    },
  ];

  const scrollToContacts = () => {
    const element = document.getElementById("contacts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-oswald mb-6">
              Почему рыбаки выбирают именно нас?
            </h2>
            <p className="text-lg font-inter leading-relaxed mb-8">
              Мы не просто продаем оборудование — мы сами активные рыбаки с
              многолетним опытом. Каждый сотрудник нашей команды регулярно
              выходит на воду и лично тестирует предлагаемые решения. Это
              позволяет нам дать точные рекомендации под ваши конкретные задачи
              и условия ловли.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border p-6 hover:shadow-md transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-oswald mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm font-inter text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <Button
              size="lg"
              className="mt-8 bg-accent hover:bg-accent/90"
              onClick={scrollToContacts}
            >
              Посетить наш шоурум
            </Button>
          </div>
          <div className="relative">
            <img
              src={showroomImage}
              alt="Наш шоурум"
              className="shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
