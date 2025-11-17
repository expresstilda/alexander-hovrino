import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import entranceImage from "@/assets/entrance.webp";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-center mb-12">
          Наш шоурум в Москве
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-oswald mb-1">Адрес</h3>
                  <p className="text-base font-inter">
                    г. Москва, ул. Речная, д. 15, строение 3
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-oswald mb-1">Режим работы</h3>
                  <p className="text-base font-inter">
                    Пн-Пт: 10:00 - 20:00
                    <br />
                    Сб-Вс: 10:00 - 18:00
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-oswald mb-1">Телефон</h3>
                  <a
                    href="tel:+79624629315"
                    className="text-base font-inter font-semibold hover:text-accent transition-colors"
                  >
                    +7 (962) 462-93-15
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-oswald mb-1">Email</h3>
                  <a
                    href="mailto:info@hovrino.ru"
                    className="text-base font-inter hover:text-accent transition-colors"
                  >
                    info@hovrino.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MessageCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-oswald mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/79624629315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-inter hover:text-accent transition-colors"
                  >
                    +7 (962) 462-93-15
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary border border-border p-6 mb-6">
              <h3 className="text-xl font-oswald mb-4">Где купить оборудование</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => window.open("https://vk.com/alexsandrhovrino", "_blank")}
                >
                  ВКонтакте
                </Button>
                <Button
                  size="lg"
                  className="flex-1 bg-accent hover:bg-accent/90 text-black"
                  onClick={() =>
                    window.open("https://www.avito.ru/brands/alexandrhovrino", "_blank")
                  }
                >
                  Авито
                </Button>
              </div>
            </div>

            <p className="text-2xl font-oswald mb-4">
              Приезжайте к нам в шоурум — помогем собрать идеальную лодку для
              вашей рыбалки!
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black"
              onClick={() =>
                window.open(
                  "https://yandex.ru/maps/?text=Москва, ул. Речная, д. 15, строение 3",
                  "_blank"
                )
              }
            >
              Проложить маршрут
            </Button>
          </div>

          {/* Photo and Map */}
          <div className="flex flex-col gap-4 h-96 lg:h-auto">
            {/* Entrance Photo */}
            <div className="h-1/2 lg:h-64 overflow-hidden">
              <img 
                src={entranceImage} 
                alt="Вход в шоурум Alexander Ховрино" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Map */}
            <div className="bg-muted overflow-hidden h-1/2 lg:flex-1">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта шоурума Alexander Ховрино"
                className="min-h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
