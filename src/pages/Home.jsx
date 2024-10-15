import HomeHeroSection from "../components/HomeHeroSection";
import Layout from "../components/Layout";
import ProductCards from "../components/ProductCards";
import Highlights from "../components/HighLights";
import Spacer from "../components/Spacer";

export default function Home() {
  const getContent = () => {
    return (
      <div>
        <Spacer value="12rem" />
        <ProductCards />
        <Spacer value="9rem" />
        <Highlights />
      </div>
    );
  };
  return (
    <>
      <Layout heroSection={<HomeHeroSection />} content={getContent()} />
    </>
  );
}
