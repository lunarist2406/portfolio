import Carousel from "../ui/carousel";
import img1 from "../../../public/z6526093298009_8df489b219a4c3c98283a5284eee27b3.jpg";
const slideData = [
  {
    title: "HCM",
    button: "Xem thêm",
    src: img1,
  },
  {
    title: "Sa Đéc",
    button: "Xem thêm",
    src: img1,
  },
  {
    title: "Vũng Tàu",
    button: "Xem thêm",
    src: img1,
  },
];
const content =
  "Một lập trình viên đam mê công nghệ, yêu thích việc tạo ra những sản phẩm sáng tạo, tinh tế và hiệu quả. Tôi không chỉ viết code,tôi kiến tạo trải nghiệm!";
export default function Banner() {
  return (
    <div className="bg-black text-white py-20 px-10 h-screen flex items-center justify-center overflow-hidden">
      <div className="flex flex-row w-full h-full items-center justify-between gap-10">
        {/* Slide Carousel bên trái */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <section className="text-left">
            <h1 className="text-5xl font-bold text-yellow-400 mb-6">
              Chào bạn, tôi là Mỹ
            </h1>
            <p className="text-xl mb-6 max-w-md">content</p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition">
              Khám phá Dự Án Của Tôi
            </button>
          </section>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center flex-shrink-0">
          <div className="flex-shrink-0">
            <Carousel slides={slideData} />
          </div>
        </div>

        {/* Content bên phải */}
      </div>
    </div>
  );
}
