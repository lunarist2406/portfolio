import ComingSoon from "@/components/ComingSoon"

export default function CommunityUsPage() {
  return (
    /** 
     * pt-24: Tạo khoảng cách phía trên (khoảng 96px) để tránh va chạm với Header 
     * md:pt-32: Tăng thêm khoảng cách trên màn hình lớn để trông thoáng hơn
     * min-h-screen: Đảm bảo nền đen luôn phủ kín toàn bộ trang
     */
    <main className="min-h-screen pt-24 md:pt-32 bg-[#030303]">
      <ComingSoon 
        title="CỘNG ĐỒNG US" 
        description="Thông tin về cộng đồng của chúng tôi sẽ được cập nhật sớm nhất có thể. Vui lòng quay lại sau nhé!"
        backUrl="/" 
      />
    </main>
  )
}