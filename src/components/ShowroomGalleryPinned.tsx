import { useEffect, useRef, useState } from "react";
import { Store, Package, Headphones, Award } from "lucide-react";
import showroomImage from "@/assets/showroom.jpg";
import entranceImage from "@/assets/entrance.webp";

const ShowroomGalleryPinned = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    showroomImage,
    entranceImage,
    showroomImage,
    entranceImage,
  ];

  const advantages = [
    {
      icon: Store,
      title: "Шоурум полного цикла",
      description: "Можете увидеть, потрогать и протестировать любое оборудование",
    },
    {
      icon: Package,
      title: "Всё в наличии",
      description: "Более 500 единиц техники на складе",
    },
    {
      icon: Headphones,
      title: "Поддержка экспертов",
      description: "Консультации от практикующих рыбаков",
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description: "Официальная гарантия и сервис",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const scrolled = -rect.top;
      const sectionHeight = containerHeight - window.innerHeight;
      
      if (scrolled >= 0 && scrolled <= sectionHeight) {
        const progress = scrolled / sectionHeight;
        const imageIndex = Math.min(
          images.length - 1,
          Math.floor(progress * images.length)
        );
        setCurrentImage(imageIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  return (
    <div 
      ref={containerRef} 
      className="relative bg-background"
      style={{ height: `${images.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background images */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: currentImage === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Шоурум ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-accent font-oswald text-lg mb-2">
                Вариант 2: Закреплённая галерея
              </p>
              <h2 className="text-4xl md:text-5xl font-oswald text-white mb-6">
                Почему рыбаки выбирают именно нас?
              </h2>
              <p className="text-white/80 font-inter text-lg mb-8">
                Секция "прилипает" к экрану пока не пролистаешь все фото
              </p>

              {/* Advantages grid */}
              <div className="grid grid-cols-2 gap-4">
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 transition-all hover:bg-white/20"
                    >
                      <Icon className="w-6 h-6 text-accent mb-2" />
                      <h3 className="text-lg font-oswald text-white mb-1">
                        {advantage.title}
                      </h3>
                      <p className="text-sm font-inter text-white/70">
                        {advantage.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === index 
                      ? "bg-accent w-8" 
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowroomGalleryPinned;
