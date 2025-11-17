import { MessageCircle, Send, Youtube } from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top Section */}
      <div className="bg-secondary text-foreground py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logoFooter} alt="Alexander Ховрино" className="h-12 mb-4" />
              <p className="text-sm font-inter mb-4">
                Экспертное оснащение лодок и катеров под ключ
              </p>
              <div className="space-y-2 text-sm font-inter">
                <p>Телефон: +7 (962) 462-93-15</p>
                <p>Email: info@hovrino.ru</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-oswald mb-3">Навигация</h4>
              <ul className="space-y-2 text-sm font-inter">
                <li>
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="hover:text-accent transition-colors"
                  >
                    Главная
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-accent transition-colors"
                  >
                    О нас
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("news")}
                    className="hover:text-accent transition-colors"
                  >
                    Новости
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contacts")}
                    className="hover:text-accent transition-colors"
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-oswald mb-3">Полезные ссылки</h4>
              <ul className="space-y-2 text-sm font-inter mb-4">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Гарантии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Статьи
                  </a>
                </li>
              </ul>
              <div className="flex gap-4">
                <a
                  href="https://vk.com/alexsandrhovrino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="ВКонтакте"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/alexandrhovrino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@alexandrhovrino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/79624629315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-inter">
            <p>© 2025 Alexander Ховрино. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Публичная оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
