import { Card } from "@/components/ui/card";
import { Sparkles, Users, Camera, TrendingUp } from "lucide-react";
import whyVisitImage from "@assets/stock_images/young_people_enjoyin_954822ce.jpg";

const reasons = [
  {
    icon: Sparkles,
    title: "독특한 경험",
    description: "일상에서 벗어나 특별한 브랜드 경험을 만들어보세요",
  },
  {
    icon: Users,
    title: "트렌디한 만남",
    description: "같은 취향을 가진 사람들과의 새로운 연결",
  },
  {
    icon: Camera,
    title: "인스타 감성",
    description: "감각적인 공간에서 인생샷을 남겨보세요",
  },
  {
    icon: TrendingUp,
    title: "선구매 기회",
    description: "한정판 상품과 특별 할인 혜택을 먼저 만나보세요",
  },
];

export default function WhyVisitSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src={whyVisitImage}
              alt="팝업 방문 경험"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              왜 성수 팝업을<br />방문해야 할까요?
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              성수동은 단순한 쇼핑을 넘어선 특별한 경험의 공간입니다.
              트렌디한 브랜드들이 모여 만드는 새로운 문화를 직접 느껴보세요.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 space-y-4" data-testid={`card-reason-${index}`}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg" data-testid={`text-reason-title-${index}`}>{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-reason-desc-${index}`}>
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
