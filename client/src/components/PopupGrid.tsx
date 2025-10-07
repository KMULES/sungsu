import PopupCard from "./PopupCard";

interface Popup {
  id: number;
  brand: string;
  location: string;
  period: string;
  description: string;
  imageUrl: string;
}

interface PopupGridProps {
  popups: Popup[];
}

export default function PopupGrid({ popups }: PopupGridProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 진행 중인 팝업
          </h2>
          <p className="text-lg text-muted-foreground">
            성수동에서 만나볼 수 있는 최신 팝업스토어
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popups.map((popup) => (
            <PopupCard key={popup.id} {...popup} />
          ))}
        </div>
      </div>
    </section>
  );
}
