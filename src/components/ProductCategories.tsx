import { Button } from "@/components/ui/button";
import { Waves, Zap, Volume2, Snowflake, Ship, Wrench, Compass, ShirtIcon } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: Waves,
      title: "Эхолоты и картплоттеры",
      description:
        "Современные системы сканирования водоемов с высоким разрешением и GPS-навигацией для точного позиционирования",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Zap,
      title: "Электромоторы",
      description:
        "Мощные и надежные электромоторы для лодок с точным управлением и длительной автономностью работы",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Volume2,
      title: "Морская акустика",
      description:
        "Профессиональные аудиосистемы для катеров и лодок с защитой от влаги и отличным качеством звука",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Snowflake,
      title: "Товары для зимней рыбалки",
      description:
        "Специализированное оборудование для подледной рыбалки: эхолоты, ледобуры, палатки и аксессуары",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Ship,
      title: "Оборудование для катеров и лодок",
      description:
        "Комплексные решения для оснащения катеров: навигация, освещение, системы безопасности и управления",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Wrench,
      title: "Аксессуары и крепления",
      description:
        "Полный спектр креплений, кабелей, защитных чехлов и других аксессуаров для профессиональной установки",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Compass,
      title: "Картография и навигация",
      description:
        "Цифровые карты водоемов, GPS-навигаторы и программное обеспечение для точного ориентирования",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: ShirtIcon,
      title: "Одежда",
      description:
        "Специализированная одежда для рыбалки: водонепроницаемые костюмы, термобелье и защитная экипировка",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
  ];

  return (
    <section id="products" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-center mb-12">
          Профессиональное оборудование для вашей лодки
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border p-8 hover:shadow-lg transition-all hover-scale"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-2xl font-oswald mb-3">{category.title}</h3>
                <p className="text-foreground font-inter mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Button
                  variant="default"
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={() => window.open(category.link, "_blank")}
                >
                  Посмотреть предложения
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
