import HeroSection from "@/components/HeroSection";
import PopupGrid from "@/components/PopupGrid";
import WhyVisitSection from "@/components/WhyVisitSection";
import VisitBookingForm from "@/components/VisitBookingForm";
import PartnershipForm from "@/components/PartnershipForm";
import Header from "@/components/Header";
import popup1 from "@assets/stock_images/creative_modern_stor_818d8fc6.jpg";
import popup2 from "@assets/stock_images/creative_modern_stor_34a9f261.jpg";
import popup3 from "@assets/stock_images/creative_modern_stor_f5595151.jpg";
import popup4 from "@assets/stock_images/creative_modern_stor_867b596b.jpg";

export default function Home() {
  const popups = [
    {
      id: 1,
      brand: "뮤직 브랜드 팝업",
      location: "성수동 카페거리",
      period: "2025.10.01 - 2025.10.31",
      description: "최신 음악 장비와 아티스트 굿즈를 만나볼 수 있는 특별한 공간",
      imageUrl: popup1,
    },
    {
      id: 2,
      brand: "패션 컬렉션",
      location: "성수역 2번 출구",
      period: "2025.10.05 - 2025.11.05",
      description: "신진 디자이너들의 유니크한 컬렉션 전시 및 판매",
      imageUrl: popup2,
    },
    {
      id: 3,
      brand: "아트 갤러리",
      location: "성수동 공방거리",
      period: "2025.10.10 - 2025.10.25",
      description: "현대 미술 작가들의 작품을 감상하고 구매할 수 있는 공간",
      imageUrl: popup3,
    },
    {
      id: 4,
      brand: "푸드 익스피리언스",
      location: "성수 연무장길",
      period: "2025.10.15 - 2025.11.15",
      description: "유명 셰프들이 선보이는 특별한 요리 체험과 시식",
      imageUrl: popup4,
    },
  ];

  const popupNames = popups.map((p) => p.brand);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopupGrid popups={popups} />
      <WhyVisitSection />
      <VisitBookingForm popups={popupNames} />
      <PartnershipForm />
      <footer className="bg-card border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 성수팝업. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
