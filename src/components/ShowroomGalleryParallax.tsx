import { useEffect, useRef, useState } from "react";
import showroomImage from "@/assets/showroom.jpg";
import entranceImage from "@/assets/entrance.webp";

const ShowroomGalleryParallax = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Placeholder images - replace with actual showroom photos
  const images = [
    showroomImage,
    entranceImage,
    showroomImage,
    entranceImage,
    showroomImage,
    entranceImage,
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !galleryRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when section enters, 1 when section leaves
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate horizontal translation based on scroll
  const galleryWidth = images.length * 400; // approximate width
  const translateX = -scrollProgress * (galleryWidth - window.innerWidth + 200);

  return (
    <section ref={sectionRef} className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-oswald text-center text-accent">
          Вариант 1: Параллакс-лента
        </h2>
        <p className="text-center text-muted-foreground mt-2 font-inter">
          При скролле страницы вниз лента плавно движется влево
        </p>
      </div>
      
      <div 
        ref={galleryRef}
        className="flex gap-4 transition-transform duration-100 ease-out px-4"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 overflow-hidden shadow-lg"
            style={{ 
              width: index % 2 === 0 ? '350px' : '280px',
              height: index % 2 === 0 ? '250px' : '200px'
            }}
          >
            <img
              src={image}
              alt={`Шоурум ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowroomGalleryParallax;
