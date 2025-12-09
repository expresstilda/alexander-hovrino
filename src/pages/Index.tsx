import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandLogos from "@/components/BrandLogos";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import ShowroomGalleryParallax from "@/components/ShowroomGalleryParallax";
import ShowroomGalleryPinned from "@/components/ShowroomGalleryPinned";
import TournamentSection from "@/components/TournamentSection";
import ConsultationSection from "@/components/ConsultationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BrandLogos />
        <ProductCategories />
        <AboutSection />
        <ShowroomGalleryParallax />
        <ShowroomGalleryPinned />
        <TournamentSection />
        <ConsultationSection />
        <TestimonialsSection />
        <NewsSection />
        <ContactsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
