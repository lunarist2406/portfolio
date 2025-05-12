import Banner from "@/components/Banner/Banner";
import Introduce from "@/components/Introduce/introduce";

export default function Home() {
  return (
    <div className="Body-content">
      <Banner />
      <div className="my-2 border-t-1 border-amber-500"></div>
      <Introduce />
    </div>
  );
}
