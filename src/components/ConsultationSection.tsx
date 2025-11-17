import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Quote } from "lucide-react";
import { toast } from "sonner";
import expertImage from "@/assets/expert-portrait.jpg";

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Необходимо согласие на обработку персональных данных");
      return;
    }
    
    // Here would be form submission logic
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      description: "",
      consent: false,
    });
  };

  return (
    <section id="consultation" className="py-20 bg-secondary scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Expert Info */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <img
                src={expertImage}
                alt="Антон Ховрино"
                className="w-64 h-64 border-4 border-accent object-cover mx-auto"
              />
            </div>
            <h3 className="text-3xl font-oswald mb-2">Антон Ховрино</h3>
            <p className="text-lg font-inter text-muted-foreground mb-6">
              Основатель компании, судовой техник с 10-летним стажем
            </p>
            <div className="bg-card border-l-4 border-accent p-6">
              <Quote className="w-8 h-8 text-accent mb-3" />
              <p className="text-lg font-inter italic leading-relaxed">
                "За 10 лет работы я помог более 2000 рыбаков собрать идеальный
                комплект оборудования для их лодок. Расскажу всё, что знаю о
                современных технологиях в рыбной ловле"
              </p>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="bg-card border border-border p-8">
            <h2 className="text-3xl font-oswald mb-4">
              Консультация от эксперта
            </h2>
            <p className="text-base font-inter mb-6 leading-relaxed">
              Получите бесплатную персональную консультацию от эксперта с
              многолетним опытом практической рыбалки. Мы поможем подобрать
              оборудование под ваши задачи, бюджет и тип водоемов. Ответим на
              все технические вопросы и составим полный план оснащения вашей
              лодки.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  required
                  type="text"
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border-border focus:border-accent"
                />
              </div>
              <div>
                <Input
                  required
                  type="tel"
                  placeholder="Телефон *"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="border-border focus:border-accent"
                />
              </div>
              <div>
                <Input
                  required
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-border focus:border-accent"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Опишите вашу лодку и задачи (необязательно)"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="border-border focus:border-accent min-h-[100px]"
                />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <label
                  htmlFor="consent"
                  className="text-sm font-inter leading-tight cursor-pointer"
                >
                  Я согласен на обработку персональных данных и принимаю{" "}
                  <span className="text-accent underline">
                    политику конфиденциальности
                  </span>
                </label>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90"
              >
                Получить консультацию
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
