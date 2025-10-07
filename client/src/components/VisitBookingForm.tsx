import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";

interface VisitBookingFormProps {
  popups: string[];
}

export default function VisitBookingForm({ popups }: VisitBookingFormProps) {
  const [formData, setFormData] = useState({
    visitDate: "",
    name: "",
    popup: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Visit booking submitted:", formData);
  };

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            팝업 방문 신청
          </h2>
          <p className="text-lg text-muted-foreground">
            원하는 날짜와 팝업을 선택하고 방문을 예약하세요
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="visitDate">방문 날짜</Label>
              <div className="relative">
                <Input
                  id="visitDate"
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) =>
                    setFormData({ ...formData, visitDate: e.target.value })
                  }
                  className="pl-10"
                  required
                  data-testid="input-visit-date"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                type="text"
                placeholder="홍길동"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                data-testid="input-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="popup">관심 팝업</Label>
              <Select
                value={formData.popup}
                onValueChange={(value) =>
                  setFormData({ ...formData, popup: value })
                }
                required
              >
                <SelectTrigger id="popup" data-testid="select-popup">
                  <SelectValue placeholder="팝업을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {popups.map((popup) => (
                    <SelectItem key={popup} value={popup}>
                      {popup}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">전화번호</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                data-testid="input-phone"
              />
            </div>

            <Button type="submit" className="w-full" size="lg" data-testid="button-submit-booking">
              방문 신청하기
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
