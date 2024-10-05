import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout heroSection={HeroSection} content={HeroSection}/>
    </>
  );
}
