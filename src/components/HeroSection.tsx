import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-boat.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald text-white mb-6 fade-in">
          Экспертное оборудование для современной рыбалки: эхолокаторы,
          картплоттеры и троллинговые моторы
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto font-inter font-light fade-in">
          Профессиональное оснащение лодок и катеров. Более 500 единиц
          оборудования в наличии в нашем московском шоуруме. Комплектуем лодку
          под ключ за один визит.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              window.open("https://www.avito.ru/brands/alexandrhovrino", "_blank")
            }
          >
            Выбрать оборудование
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-black bg-white hover:bg-white/90 font-inter text-base px-8 py-6 transition-all"
            onClick={() => scrollToSection("consultation")}
          >
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
