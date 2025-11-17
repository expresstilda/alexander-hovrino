import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "products") {
      navigate("/products");
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (id === "about-page") {
      navigate("/about");
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (id === "news") {
      navigate("/news");
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Главная", id: "hero" },
    { label: "Продукция", id: "products" },
    { label: "О нас", id: "about-page" },
    { label: "Новости", id: "news" },
    { label: "Контакты", id: "contacts" },
  ];

  return (
    <>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="Alexander Ховрино" className="h-10" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-accent transition-colors font-oswald text-base uppercase"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://t.me/alexandrhovrino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
              <a
                href="https://wa.me/79624629315"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="tel:+79624629315"
                className="text-primary-foreground hover:text-accent transition-colors font-inter text-sm font-semibold"
              >
                +7 (962) 462-93-15
              </a>
              <Button
                variant="default"
                size="sm"
                onClick={() => scrollToSection("consultation")}
                className="bg-accent hover:bg-accent/90 text-black uppercase font-oswald font-light"
              >
                Консультация
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-primary-foreground hover:text-accent transition-colors font-oswald text-base uppercase"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="default"
                className="w-full mt-4 bg-accent hover:bg-accent/90 text-black uppercase font-oswald font-light"
                onClick={() => scrollToSection("consultation")}
              >
                Консультация
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
