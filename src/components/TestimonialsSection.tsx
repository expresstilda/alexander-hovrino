import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Иван Петров",
      role: "Владелец катера",
      text: "После установки комплекта от Alexander Ховрино уловы увеличились в 3 раза! Эхолот Garmin с LiveScope показывает каждую рыбу. Александр помог настроить всё идеально под мои водоемы. Теперь рекомендую всем знакомым рыбакам.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Михаил Соколов",
      role: "Любитель рыбалки",
      text: "Пришел в шоурум с туманным представлением о том, что нужно. Александр терпеливо всё объяснил, показал разницу между моделями, подобрал оборудование под мой бюджет. Через месяц использования — только восторг!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
      name: "Дмитрий Орлов",
      role: "Профессиональный гид",
      text: "Работаю гидом 5 лет, оборудование для работы беру только у Alexander Ховрино. Качество, сервис и поддержка на высшем уровне. Когда была проблема с датчиком, заменили по гарантии за один день. Профессионалы своего дела!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-center mb-12">
          Что говорят о нас клиенты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 object-cover border-2 border-accent"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-oswald">{testimonial.name}</h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-base font-inter leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
