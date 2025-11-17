import { Button } from "@/components/ui/button";
import { Waves, Camera, Radio, Ship, Wrench } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: Waves,
      title: "Эхолоты и Картплоттеры",
      description:
        "Современные системы сканирования водоемов с высоким разрешением и GPS-навигацией для точного позиционирования",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Camera,
      title: "Системы живого обзора (LiveScaning)",
      description:
        "Передовые технологии подводного наблюдения в реальном времени для максимально эффективной ловли",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Radio,
      title: "Датчики (Трандьюсеры)",
      description:
        "Высокоточные датчики для различных условий: боковое сканирование, DownVü, SideVü, CHIRP технологии",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Ship,
      title: "Лодочные моторы (Троллинговые)",
      description:
        "Электрические троллинговые моторы с точным управлением и длительной автономностью для бесшумного передвижения",
      link: "https://www.avito.ru/brands/alexandrhovrino",
    },
    {
      icon: Wrench,
      title: "Аксессуары и Крепления",
      description:
        "Полный спектр креплений, кабелей, защитных чехлов и других аксессуаров для профессиональной установки",
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
