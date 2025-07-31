import AboutSection from "./AboutSection";
import HomeView from "./HomeSection";

export default function Portfolio (){
  return  <div className="Body-content">
      <div className="my-2 border-t-1 border-amber-500"></div>
      <HomeView />
      <AboutSection/>
    </div>
}