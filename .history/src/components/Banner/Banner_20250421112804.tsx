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

export default function Banner() {
  return (
    <div className="bg-black text-white py-20 px-10 h-screen flex items-center justify-center overflow-hidden">
      <div className="flex flex-row w-full h-full items-center justify-between gap-10">
        {/* Slide Carousel bên trái */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <Carousel slides={slideData} />
        </div>

        {/* Content bên phải */}

      </div>
    </div>
  );
}
