import PopupCard from "../PopupCard";
import popupImage from "@assets/stock_images/creative_modern_stor_818d8fc6.jpg";

export default function PopupCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PopupCard
        brand="뮤직 브랜드 팝업"
        location="성수동 카페거리"
        period="2025.10.01 - 2025.10.31"
        description="최신 음악 장비와 아티스트 굿즈를 만나볼 수 있는 특별한 공간"
        imageUrl={popupImage}
      />
    </div>
  );
}
