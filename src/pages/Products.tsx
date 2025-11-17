import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import echosoundersImage from "@/assets/echosounders-banner.jpg";
import livescopeImage from "@/assets/livescope-banner.jpg";
import transducersImage from "@/assets/transducers-banner.jpg";
import trollingMotorsImage from "@/assets/trolling-motors-banner.jpg";
import accessoriesImage from "@/assets/accessories-banner.jpg";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("echosounders");
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const { toast } = useToast();

  const categories = [
    { id: "echosounders", label: "Эхолоты и Картплоттеры" },
    { id: "livescope", label: "Системы живого обзора" },
    { id: "transducers", label: "Датчики" },
    { id: "trolling-motors", label: "Лодочные моторы" },
    { id: "accessories", label: "Аксессуары и крепления" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const menuOffset = 120;
      setIsMenuFixed(window.scrollY > menuOffset);

      // Update active category based on scroll position
      categories.forEach((category) => {
        const element = document.getElementById(category.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveCategory(category.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />

      {/* Secondary Navigation */}
      <nav
        className={`${
          isMenuFixed ? "fixed top-16 left-0 right-0 shadow-lg" : "relative mt-16"
        } bg-primary z-40 transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 font-oswald uppercase transition-colors ${
                  activeCategory === category.id
                    ? "text-accent border-b-2 border-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className={isMenuFixed ? "mt-16" : ""}>
        {/* Echosounders Section */}
        <CategorySection
          id="echosounders"
          title="Эхолоты и Картплоттеры: Ваши цифровые помощники на воде"
          bannerImage={echosoundersImage}
          description="Эхолоты и картплоттеры — это основа современного судового оборудования, которые превращают обычную рыбалку в точную науку. Мы предлагаем профессиональные решения для рыбаков любого уровня: от начинающих любителей до опытных спортсменов."
          fullDescription="Эхолоты позволяют точно определять глубину, структуру дна, наличие подводных аномалий и, самое главное, обнаруживать рыбу в реальном времени. Картплоттеры дополняют эту картину детальной навигацией по водоемам, сохраняя маршруты, точки ловли и позволяя возвращаться в удачные места даже через несколько сезонов.\n\nВ нашем шоуруме в Москве вы сможете не только увидеть все устройства в работе, но и протестировать их на специальных стендах с имитацией реальных условий. Наши эксперты-рыбаки помогут подобрать оптимальное решение под ваши задачи, бюджет и тип лодки."
          brands={[
            {
              name: "Garmin",
              description:
                "мировой лидер в производстве морской электроники с безупречной надежностью и инновационными технологиями",
            },
            {
              name: "Lowrance",
              description:
                "профессиональное оборудование для серьезных рыбаков с продвинутыми функциями сканирования",
            },
            {
              name: "Raymarine",
              description:
                "премиальные решения для яхт и крупных катеров с интуитивно понятным управлением",
            },
            {
              name: "Simrad",
              description:
                "скандинавское качество и передовые технологии для экстремальных условий",
            },
            {
              name: "Humminbird",
              description:
                "американские технологии с фокусом на детализацию и точность изображения",
            },
          ]}
          whyThese="Мы лично тестируем каждую модель в реальных условиях рыбалки, прежде чем предложить ее клиентам. В нашем ассортименте только проверенные решения, которые показали себя в российских условиях — от мелководных озер Подмосковья до глубоких северных рек. Мы тщательно отбираем оборудование по нескольким критериям: надежность в условиях перепадов температур, простота использования в перчатках, качество дисплея при ярком солнце и в темноте, а также доступность сервисного обслуживания и обновлений программного обеспечения."
          consultationText="Наши эксперты помогут подобрать идеальное решение под ваши задачи. Мы учтем тип вашей лодки, характерные водоемы для рыбалки, бюджет и даже ваши планы на развитие оснащения лодки в будущем. Получите персональные рекомендации от практикующих рыбаков с 10-летним опытом работы с различными моделями."
          avitoButtonText="Посмотреть эхолоты и картплоттеры в нашем магазине на Авито →"
        />

        {/* LiveScope Section */}
        <CategorySection
          id="livescope"
          title="Системы живого обзора: Видите всё, как если бы вы находились под водой"
          bannerImage={livescopeImage}
          description="Системы живого обзора (LiveView) — это революционная технология, которая полностью меняет подход к рыбной ловле. В отличие от традиционных эхолотов, показывающих лишь условные символы рыбы, системы живого обзора транслируют реальное видео происходящего под вашей лодкой в реальном времени."
          fullDescription="Представьте: вы видите не просто отметки на экране, а настоящую картину подводного мира — каждую рыбу, каждое движение, каждую структуру дна. Вы можете наблюдать за реакцией рыбы на приманку, корректировать игру в реальном времени и буквально смотреть, как происходит поклевка. Это не просто оборудование — это совершенно новый уровень понимания подводного мира и повышения эффективности рыбалки.\n\nВ нашем шоуруме мы демонстрируем работу всех систем живого обзора в специальных аквариумах с различными условиями, чтобы вы могли лично оценить различия в качестве изображения, дальности действия и скорости отклика разных моделей."
          brands={[
            {
              name: "Garmin LiveScope",
              description:
                "эталонное качество изображения и самая продвинутая технология сканирования бокового и переднего обзора",
            },
            {
              name: "Lowrance ActiveTarget",
              description:
                "профессиональное решение с уникальными возможностями отслеживания рыб в движении",
            },
            {
              name: "Humminbird MEGA Live Imaging",
              description:
                "высочайшая детализация изображения и инновационные алгоритмы обработки сигнала",
            },
            {
              name: "Raymarine RealVision 3D",
              description:
                "трехмерное сканирование подводного пространства для максимально точной визуализации",
            },
          ]}
          whyThese="Системы живого обзора — это высокотехнологичное оборудование, требующее особого подхода к отбору. Мы сотрудничаем напрямую с производителями и являемся сертифицированными установщиками всех представленных систем. Каждую модель мы тестируем не только в идеальных условиях, но и в реальной рыбалке при различных погодных условиях, температуре воды и типах дна. Особое внимание уделяем стабильности работы в условиях российских реалий — от морозов до экстремальной жары.\n\nМы предлагаем только те системы, которые прошли нашу программу тестирования и показали стабильную работу в течение как минимум двух сезонов. Наши специалисты проходят регулярное обучение у производителей, чтобы быть в курсе всех нюансов настройки и эксплуатации этого сложного оборудования."
          consultationText="Системы живого обзора требуют особого подхода к выбору и установке. Наши сертифицированные специалисты расскажут о всех нюансах работы разных систем, помогут подобрать оптимальную конфигурацию под вашу лодку и покажут реальные примеры работы на видео с наших рыбалок. Получите исчерпывающую информацию о возможностях и ограничениях каждой технологии."
          avitoButtonText="Посмотреть системы живого обзора в нашем магазине на Авито →"
        />

        {/* Transducers Section */}
        <CategorySection
          id="transducers"
          title="Датчики и трансдюсеры: Сердце вашей рыбопоисковой системы"
          bannerImage={transducersImage}
          description="Датчики (трансдюсеры) — это ключевой элемент любой рыбопоисковой системы, от качества которого напрямую зависит эффективность всего оборудования. Именно датчик формирует и принимает звуковые волны, преобразуя их в информацию, которую вы видите на экране вашего эхолота."
          fullDescription="Выбор правильного датчика — это не просто совместимость с вашим эхолотом. Это учет множества факторов: типа корпуса вашей лодки (алюминий, ПВХ, пластик), скорости движения, глубины водоемов, где вы рыбачите, а также специфики поиска рыбы (глубоководные или мелководные виды).\n\nВ нашем шоуруме представлены все типы датчиков: от врезных моделей для установки в корпус лодки до траномных вариантов для крепления на транец, а также переносные решения для рыбаков-любителей. Наши специалисты не только проконсультируют по выбору, но и покажут на специальных стендах, как разные датчики работают при одинаковых условиях, что позволит вам сделать осознанный выбор."
          brands={[
            {
              name: "Garmin",
              description:
                "инновационные технологии сканирования и безупречная совместимость со всеми моделями эхолотов Garmin",
            },
            {
              name: "Airmar",
              description:
                "мировой лидер в производстве морских датчиков с самым широким ассортиментом для любых задач",
            },
            {
              name: "Lowrance",
              description:
                "специализированные датчики для профессиональных рыбаков с улучшенной чувствительностью",
            },
            {
              name: "Humminbird",
              description: "высокоточные решения с фокусом на детализацию структуры дна",
            },
            {
              name: "Raymarine",
              description:
                "премиальные датчики для яхтенного флота с повышенной надежностью и стабильностью работы",
            },
          ]}
          whyThese="Датчики — это оборудование, которое работает в самых сложных условиях: постоянный контакт с водой, воздействие ультрафиолета, перепады температур и механические нагрузки. Мы отбираем только те модели, которые прошли испытания в реальных российских условиях в течение нескольких сезонов. Особое внимание уделяем качеству материалов, надежности герметизации и устойчивости к биологическим отложениям.\n\nМы тестируем каждый датчик на специальных стендах с имитацией скорости движения лодки и различной глубины, чтобы оценить реальную производительность. Наши специалисты имеют многолетний опыт установки датчиков на различные типы лодок и знают все нюансы правильного монтажа для получения максимальной эффективности от оборудования."
          consultationText="Выбор правильного датчика — это половина успеха вашей рыбопоисковой системы. Наши эксперты помогут подобрать оптимальную модель с учетом конструкции вашей лодки, условий эксплуатации и совместимости с вашим эхолотом. Мы расскажем о всех тонкостях установки и покажем разницу в работе разных типов датчиков на наших демонстрационных стендах."
          avitoButtonText="Посмотреть датчики и трансдюсеры в нашем магазине на Авито →"
        />

        {/* Trolling Motors Section */}
        <CategorySection
          id="trolling-motors"
          title="Троллинговые лодочные моторы: Точное позиционирование для максимального улова"
          bannerImage={trollingMotorsImage}
          description="Троллинговые моторы — это незаменимый помощник для серьезного рыбака, ценящего точность и контроль над процессом ловли. В отличие от основного мотора, троллинговые электромоторы позволяют двигаться с минимальной скоростью, бесшумно и точно удерживать позицию даже при сильном течении или ветре."
          fullDescription="Современные троллинговые моторы — это уже не просто моторы с винтом. Это интеллектуальные системы с GPS-управлением, которые могут автоматически возвращаться в заданную точку, следовать по маршруту или удерживать лодку на одном месте, компенсируя воздействие внешних факторов. Многие модели оснащены интеграцией с эхолотами и картплоттерами, что позволяет создавать полностью автоматизированную систему для эффективной рыбалки.\n\nВ нашем московском шоуруме вы можете протестировать работу разных моделей троллинговых моторов на специальных стендах с имитацией нагрузки, а также посмотреть их в действии на наших демонстрационных лодках в бассейне. Наши специалисты помогут подобрать оптимальную модель с учетом размера вашей лодки, условий эксплуатации и бюджета."
          brands={[
            {
              name: "Minn Kota",
              description:
                "американский стандарт качества и надежности, мировой лидер в производстве троллинговых моторов",
            },
            {
              name: "Haibo",
              description:
                "китайский производитель с оптимальным соотношением цены и качества для начинающих рыбаков",
            },
            {
              name: "MotorGuide",
              description:
                "надежные и технологичные решения с инновационными системами крепления",
            },
            {
              name: "Garmin",
              description:
                "интегрированные решения с полной совместимостью с навигационными системами Garmin",
            },
          ]}
          whyThese="Троллинговые моторы — это оборудование, которое работает в экстремальных условиях: постоянный контакт с водой, воздействие коррозии, высокие нагрузки. Мы отбираем только те модели, которые продемонстрировали высокую надежность в наших тестах и реальных рыбалках наших сотрудников. Каждый мотор проходит комплексную проверку и тестируется на различных типах лодок для оценки реальной производительности.\n\nОсобое внимание уделяем качеству материалов, надежности креплений и системам защиты от перегрузок. Мы предлагаем только те модели, для которых есть полная сервисная поддержка в России и доступны запасные части. Наши специалисты проходят специальное обучение у производителей для правильной установки и настройки этого сложного оборудования."
          consultationText="Выбор троллингового мотора зависит от множества факторов: длины и веса вашей лодки, условий эксплуатации, необходимости интеграции с навигационными системами и вашего бюджета. Наши эксперты-рыбаки помогут подобрать оптимальную модель, расскажут о всех нюансах установки и покажут разницу в работе разных моделей на наших демонстрационных лодках."
          avitoButtonText="Посмотреть троллинговые моторы в нашем магазине на Авито →"
        />

        {/* Accessories Section */}
        <CategorySection
          id="accessories"
          title="Аксессуары и крепления: Безопасность и удобство вашей рыболовной системы"
          bannerImage={accessoriesImage}
          description="Аксессуары и крепления — это незаметные герои, которые обеспечивают надежную и безопасную работу всего вашего оборудования. От качества кабелей и разъемов зависит стабильность работы электроники, от правильного крепления датчиков — точность показаний эхолота, а от организации проводки — не только удобство, но и пожаробезопасность вашей лодки."
          fullDescription="Мы предлагаем полный спектр профессиональных аксессуаров для монтажа и эксплуатации морской электроники: от специализированных кронштейнов и держателей до защитных крышек, сепараторов батарей, распределительных блоков и гидроакустических герметиков. Все эти детали могут показаться незначительными, но именно они обеспечивают долговечность и надежность всей вашей системы.\n\nВ нашем шоуруме вы найдете решения для любого бюджета — от базовых вариантов для начинающих рыбаков до премиальных профессиональных систем для серьезных катеров и яхт. Наши специалисты не только помогут подобрать необходимые аксессуары, но и покажут правильные техники монтажа на наших учебных стендах."
          brands={[
            {
              name: "Blue Sea Systems",
              description:
                "американский стандарт надежности для морских электрических систем",
            },
            {
              name: "RAM Mounts",
              description:
                "универсальные крепления для любого оборудования с безупречной надежностью",
            },
            {
              name: "Garmin",
              description:
                "оригинальные крепления и аксессуары для полной совместимости с оборудованием Garmin",
            },
            {
              name: "Lowrance",
              description:
                "специализированные решения для профессиональной установки навигационных систем",
            },
            {
              name: "Sierra",
              description:
                "профессиональные материалы для монтажа и обслуживания лодочного оборудования",
            },
            {
              name: "Airmar",
              description:
                "специализированные герметики и материалы для установки датчиков",
            },
          ]}
          whyThese="Аксессуары и крепления — это та категория товаров, где экономия может привести к самым серьезным последствиям. Мы отбираем только профессиональные решения, проверенные в экстремальных условиях российской рыбалки. Каждый кабель, разъем или крепление проходит тестирование на устойчивость к влаге, ультрафиолету, перепадам температур и механическим нагрузкам.\n\nНаши специалисты имеют многолетний опыт установки морской электроники и знают, какие материалы и решения обеспечивают максимальную надежность и долговечность. Мы не предлагаем дешевые аналоги, которые могут выйти из строя в самый неподходящий момент, а фокусируемся на профессиональных решениях с подтвержденным сроком службы не менее 5 лет активной эксплуатации."
          consultationText="Правильные аксессуары и крепления — это основа надежной работы всего вашего оборудования. Наши специалисты помогут подобрать полный комплект решений для вашей лодки, расскажут о всех нюансах монтажа и покажут профессиональные техники установки на наших учебных стендах. Получите готовое решение для безопасной и долговечной эксплуатации вашей рыболовной электроники."
          avitoButtonText="Посмотреть аксессуары и крепления в нашем магазине на Авито →"
        />

        {/* Footer Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-oswald text-center mb-8">
              Почему в Alexander Ховрино выбирают оборудование для своей лодки?
            </h2>
            <p className="text-lg font-inter text-center mb-12 max-w-4xl mx-auto leading-relaxed">
              Мы не просто продаем оборудование — мы сами активные рыбаки с многолетним
              опытом. Каждый товар в нашем ассортименте лично протестирован нашей командой
              в реальных условиях рыбалки по всей России. В нашем московском шоуруме вы
              можете не только посмотреть товары, но и получить практическую консультацию
              от экспертов, которые каждый сезон проводят на воде сотни часов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button
                size="lg"
                className="flex-1 bg-accent hover:bg-accent/90 text-black"
                onClick={() => {
                  const element = document.getElementById("consultation");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#consultation";
                  }
                }}
              >
                Записаться на консультацию в шоурум
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={() =>
                  window.open("https://www.avito.ru/brands/alexandrhovrino", "_blank")
                }
              >
                Посмотреть все товары на Авито
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

interface CategorySectionProps {
  id: string;
  title: string;
  bannerImage: string;
  description: string;
  fullDescription: string;
  brands: { name: string; description: string }[];
  whyThese: string;
  consultationText: string;
  avitoButtonText: string;
}

const CategorySection = ({
  id,
  title,
  bannerImage,
  description,
  fullDescription,
  brands,
  whyThese,
  consultationText,
  avitoButtonText,
}: CategorySectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", email: "", message: "", consent: false });
  };

  return (
    <section id={id} className="scroll-mt-32">
      {/* Banner */}
      <div className="w-full h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Title and Description */}
        <h1 className="text-4xl lg:text-5xl font-oswald mb-6">{title}</h1>
        <p className="text-xl font-inter mb-6 leading-relaxed">{description}</p>
        <p className="text-lg font-inter mb-12 leading-relaxed whitespace-pre-line text-muted-foreground">
          {fullDescription}
        </p>

        {/* Brands Section */}
        <div className="bg-card border border-border p-8 mb-12">
          <h2 className="text-3xl font-oswald mb-6">Бренды в категории</h2>
          <div className="space-y-4">
            {brands.map((brand) => (
              <div key={brand.name} className="flex flex-col sm:flex-row gap-2">
                <span className="font-oswald text-xl min-w-[200px]">{brand.name}</span>
                <span className="text-muted-foreground font-inter">
                  — {brand.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why These Products */}
        <div className="bg-secondary p-8 mb-12">
          <h2 className="text-3xl font-oswald mb-6">Почему именно эти товары</h2>
          <p className="text-lg font-inter leading-relaxed whitespace-pre-line">
            {whyThese}
          </p>
        </div>

        {/* CTA Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Consultation Form */}
          <div className="bg-card border border-border p-8">
            <h3 className="text-2xl font-oswald mb-4">
              Получить консультацию специалиста
            </h3>
            <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
              {consultationText}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Textarea
                placeholder="Опишите ваши потребности"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
              <div className="flex items-start space-x-2">
                <Checkbox
                  id={`consent-${id}`}
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <label
                  htmlFor={`consent-${id}`}
                  className="text-sm text-muted-foreground"
                >
                  Я согласен на обработку персональных данных
                </label>
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-black">
                Отправить заявку
              </Button>
            </form>
          </div>

          {/* Avito Button */}
          <div className="bg-card border border-border p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-oswald mb-6">
              Посмотреть актуальные предложения
            </h3>
            <p className="text-muted-foreground font-inter mb-8 leading-relaxed">
              Вся наша продукция доступна для покупки в нашем магазине на Авито с
              актуальными ценами и наличием. Доставка по Москве и России.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black"
              onClick={() =>
                window.open("https://www.avito.ru/brands/alexandrhovrino", "_blank")
              }
            >
              {avitoButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
