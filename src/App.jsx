import "./App.css";
import ContentWithImage from "./ContentWithImage";
import ContentWithLeftSide from "./ContentWithLeftSide";
import ContentWithRightSide from "./ContentWithRightSide";
import Header from "./Header";
import Hero from "./Hero";
import Home from "./Home";
import HeroSlider from "./HeroSlider";
import ContentWithRightHtml from "./ContentWithRightHtml";
import SliderImages from "./SliderImages";
import LastPart from "./LastPart";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Hero />
      <ContentWithImage />
      <ContentWithRightSide />
      <ContentWithLeftSide />
      <HeroSlider />
      <ContentWithRightHtml />
      <SliderImages />
      <LastPart />
      <Footer />
    </>
  );
}

export default App;
