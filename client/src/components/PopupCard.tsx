import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

interface PopupCardProps {
  brand: string;
  location: string;
  period: string;
  description: string;
  imageUrl: string;
}

export default function PopupCard({
  brand,
  location,
  period,
  description,
  imageUrl,
}: PopupCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1" data-testid={`card-popup-${brand}`}>
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={brand}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold" data-testid={`text-brand-${brand}`}>{brand}</h3>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span data-testid={`text-location-${brand}`}>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Calendar className="w-4 h-4" />
          <span data-testid={`text-period-${brand}`}>{period}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground" data-testid={`text-description-${brand}`}>
          {description}
        </p>
      </div>
    </Card>
  );
}
