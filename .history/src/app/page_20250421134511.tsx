import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div className="Body-content">
      <Banner />
      <div className="my-4 border-t-4 border-amber-500"></div>
      <Introduce/>
    </div>
  );
}
