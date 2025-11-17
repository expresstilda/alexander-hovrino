const BrandLogos = () => {
  const brands = [
    "Garmin",
    "Lowrance",
    "Minn Kota",
    "Simrad",
    "Sionyx",
    "Blue Sea Systems",
    "Raymarine",
    "Hummingbird",
    "Haibo",
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-center mb-4">
          Доверяют профессионалы своего дела
        </h2>
        <p className="text-lg font-inter text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
          Мы являемся официальными дилерами ведущих мировых производителей
          навигационного и рыбопоискового оборудования
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-card border border-border p-8 flex items-center justify-center hover:shadow-lg transition-shadow hover-scale"
            >
              <span className="text-2xl font-oswald text-foreground">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
