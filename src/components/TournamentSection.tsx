import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const TournamentSection = () => {
  const videos = [
    {
      title: "Турнир по спиннинговой ловле на Волге",
      description:
        "Наше оборудование помогло команде занять призовые места",
      duration: "12:34",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    },
    {
      title: "Подводная съемка с помощью Sionyx",
      description:
        "Демонстрация возможностей ночных камер в реальных условиях",
      duration: "08:15",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    },
    {
      title: "Мастер-класс по настройке эхолота",
      description:
        "Александр Ховрино делится секретами эффективного использования оборудования",
      duration: "15:42",
      thumbnail: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?w=800",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-center mb-4">
          Рыбаки доверяют опыту профессионалов
        </h2>
        <p className="text-lg font-inter text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
          Наша команда неоднократно принимала участие в рыболовных
          соревнованиях по всей России. Собственный опыт помогает нам лучше
          понимать потребности рыбаков.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all hover-scale group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                  <div className="bg-accent p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-sm font-inter">
                  {video.duration}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-oswald mb-2">{video.title}</h3>
                <p className="text-sm font-inter text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white"
            onClick={() => window.open("https://vk.com/alexsandrhovrino", "_blank")}
          >
            Смотреть все видео
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;
