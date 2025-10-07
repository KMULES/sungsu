import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/stock_images/modern_trendy_retail_5e7cb36b.jpg";

export default function HeroSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          성수동, 지금 가장 핫한<br />팝업을 만나보세요
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto">
          트렌디한 브랜드들이 모여드는 성수동의 특별한 경험,<br />
          놓치지 말고 지금 바로 신청하세요
        </p>
        <Button
          size="lg"
          onClick={scrollToBooking}
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
          data-testid="button-hero-cta"
        >
          방문 신청하기
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
}
