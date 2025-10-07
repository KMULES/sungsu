import PopupGrid from "../PopupGrid";
import popup1 from "@assets/stock_images/creative_modern_stor_818d8fc6.jpg";
import popup2 from "@assets/stock_images/creative_modern_stor_34a9f261.jpg";
import popup3 from "@assets/stock_images/creative_modern_stor_f5595151.jpg";

export default function PopupGridExample() {
  const mockPopups = [
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
  ];

  return (
    <div className="p-8">
      <PopupGrid popups={mockPopups} />
    </div>
  );
}
