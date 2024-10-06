import { css } from "@emotion/react";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";

function ProductCards() {
  return (
    <div css={homeStyles.cardContainer}>
      <Card
        imgUrl="images/shared/desktop/image-category-thumbnail-headphones.png"
        productName="HEADPHONES"
      />
      <Card
        imgUrl="images/shared/desktop/image-category-thumbnail-speakers.png"
        productName="SPEAKERS"
      />
      <Card
        imgUrl="images/shared/desktop/image-category-thumbnail-earphones.png"
        productName="EARPHONES"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Layout heroSection={HeroSection} content={ProductCards} />
    </>
  );
}

const homeStyles = {
  cardContainer: css({
    margin: "12rem 0rem",
    display: "flex",
    justifyContent: "space-between",
  }),
};
