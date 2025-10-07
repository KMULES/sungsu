import VisitBookingForm from "../VisitBookingForm";

export default function VisitBookingFormExample() {
  const mockPopups = [
    "뮤직 브랜드 팝업",
    "패션 컬렉션 팝업",
    "아트 갤러리 팝업",
  ];

  return (
    <div className="p-8">
      <VisitBookingForm popups={mockPopups} />
    </div>
  );
}
