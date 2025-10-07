import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut, Calendar, Building2 } from "lucide-react";
import { useLocation } from "wouter";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const mockVisitBookings = [
    {
      id: 1,
      visitDate: "2025-10-15",
      name: "김민수",
      popup: "뮤직 브랜드 팝업",
      phone: "010-1234-5678",
    },
    {
      id: 2,
      visitDate: "2025-10-20",
      name: "이지은",
      popup: "패션 컬렉션",
      phone: "010-2345-6789",
    },
    {
      id: 3,
      visitDate: "2025-10-18",
      name: "박준호",
      popup: "아트 갤러리",
      phone: "010-3456-7890",
    },
  ];

  const mockPartnershipInquiries = [
    {
      id: 1,
      company: "(주)트렌디컴퍼니",
      manager: "최영희",
      phone: "02-1234-5678",
      email: "contact@trendy.com",
    },
    {
      id: 2,
      company: "스타일브랜드",
      manager: "정우성",
      phone: "02-2345-6789",
      email: "info@stylebrand.com",
    },
  ];

  const handleLogout = () => {
    console.log("Logout");
    setLocation("/admin");
  };

  return (
    <div className="min-h-screen bg-card">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">성수팝업 관리자</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              로그아웃
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="visits" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="visits" data-testid="tab-visits">
              <Calendar className="w-4 h-4 mr-2" />
              방문 신청
            </TabsTrigger>
            <TabsTrigger value="partnerships" data-testid="tab-partnerships">
              <Building2 className="w-4 h-4 mr-2" />
              광고 문의
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visits" className="space-y-4">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">방문 일정 신청 목록</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>방문 날짜</TableHead>
                        <TableHead>이름</TableHead>
                        <TableHead>관심 팝업</TableHead>
                        <TableHead>전화번호</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockVisitBookings.map((booking) => (
                        <TableRow key={booking.id} data-testid={`row-visit-${booking.id}`}>
                          <TableCell>{booking.visitDate}</TableCell>
                          <TableCell>{booking.name}</TableCell>
                          <TableCell>{booking.popup}</TableCell>
                          <TableCell>{booking.phone}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="partnerships" className="space-y-4">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">브랜드 제휴 및 광고 문의 목록</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>기업명</TableHead>
                        <TableHead>담당자명</TableHead>
                        <TableHead>전화번호</TableHead>
                        <TableHead>이메일</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockPartnershipInquiries.map((inquiry) => (
                        <TableRow key={inquiry.id} data-testid={`row-partnership-${inquiry.id}`}>
                          <TableCell>{inquiry.company}</TableCell>
                          <TableCell>{inquiry.manager}</TableCell>
                          <TableCell>{inquiry.phone}</TableCell>
                          <TableCell>{inquiry.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
