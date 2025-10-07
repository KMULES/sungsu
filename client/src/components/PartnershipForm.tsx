import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Mail } from "lucide-react";

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    company: "",
    manager: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership inquiry submitted:", formData);
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 space-y-4">
            <Building2 className="w-12 h-12 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              브랜드 제휴 및<br />광고 문의
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              성수팝업과 함께 특별한 브랜드 경험을 만들어보세요.
              제휴 및 광고 문의를 남겨주시면 빠르게 연락드리겠습니다.
            </p>
          </div>

          <Card className="md:col-span-2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">기업명</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="(주)성수컴퍼니"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    required
                    data-testid="input-company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="manager">담당자명</Label>
                  <Input
                    id="manager"
                    type="text"
                    placeholder="홍길동"
                    value={formData.manager}
                    onChange={(e) =>
                      setFormData({ ...formData, manager: e.target.value })
                    }
                    required
                    data-testid="input-manager"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="partnerPhone">전화번호</Label>
                  <Input
                    id="partnerPhone"
                    type="tel"
                    placeholder="02-1234-5678"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    data-testid="input-partner-phone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="pl-10"
                      required
                      data-testid="input-email"
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-submit-partnership">
                문의하기
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
