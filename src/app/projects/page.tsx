import ComingSoon from "@/components/ComingSoon"

export default function ProjectsPage() {
  return (
    /** 
     * pt-24: Tạo khoảng cách phía trên (khoảng 96px) để tránh va chạm với Header 
     * md:pt-32: Tăng thêm khoảng cách trên màn hình lớn để trông thoáng hơn
     * min-h-screen: Đảm bảo nền đen luôn phủ kín toàn bộ trang
     */
    <main className="min-h-screen pt-24 md:pt-32 bg-[#030303]">
      <ComingSoon 
        title="DỰ ÁN ĐANG CẬP NHẬT" 
        description="Danh sách các dự án cá nhân và sản phẩm thực tế của tôi đang được tổng hợp. Bạn vui lòng quay lại sau ít ngày nhé!"
        backUrl="/" 
      />
    </main>
  )
}