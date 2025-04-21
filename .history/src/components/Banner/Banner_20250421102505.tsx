import Carousel from "../ui/carousel";
    const slideData= [
        {
            title : "HCM",
            button : "Xem thêm",
            src : "https://images.unsplash.com/photo-1606787368230-4f3b2c8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        {
            title:"Sa Đéc",
            button : "Xem thêm",
            src : "https://images.unsplash.com/photo-1593642532973-d31b4c9e1b5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        {
            title : " Vung Tau "
        }
    ]
export default function Banner() {
  return (
    <div className="bg-black text-white py-20 flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <div className="2/4 w-full h-full flex items-center justify-center relative ">
      <Carousel slides={slideData} />
      </div>
      <div className="content">
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">Chào bạn, tôi là Mỹ </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
            Một lập trình viên đam mê công nghệ, yêu thích việc tạo ra những sản phẩm sáng tạo, tinh tế và hiệu quả. 
            Tôi không chỉ viết code, tôi kiến tạo trải nghiệm!

        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition">
            Khám phá Dự Án Của Tôi
        </button>
        </section>
      </div>
    </div>
  );
}
